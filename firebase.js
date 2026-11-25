import { firebaseConfig } from "./firebase-config.js";

const authDialog = document.querySelector("#auth-dialog");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authSubmit = document.querySelector("#auth-submit");
const authModeToggle = document.querySelector("#auth-mode-toggle");
const authLogout = document.querySelector("#auth-logout");
const authResend = document.querySelector("#auth-resend-verification");
const authCheckVerification = document.querySelector("#auth-check-verification");
const authForgotPassword = document.querySelector("#auth-forgot-password");
const googleSignIn = document.querySelector("#google-sign-in");
const authStatus = document.querySelector("#auth-status");
const accountButtons = document.querySelectorAll("#account-button, #settings-account-button");
const installDialog = document.querySelector("#install-dialog");
const installButton = document.querySelector("#install-button");
const installConfirm = document.querySelector("#install-confirm");
const installHelp = document.querySelector("#install-help");
const installDescription = document.querySelector("#install-description");

const languageCopy = {
  en: {
    signIn: "Sign in",
    signUp: "Create account",
    createAccount: "New here? Create an account",
    switchToSignIn: "Already have an account? Sign in",
    installManual: "Use your browser menu and choose Install app or Add to Home Screen."
  },
  so: {
    signIn: "Gal",
    signUp: "Samee akoon",
    createAccount: "Akoon ma lihid? Samee mid cusub",
    switchToSignIn: "Akoon ma leedahay? Gal",
    installManual: "Menu-ga browser-ka ka dooro Ku rakib app-ka ama Add to Home Screen."
  }
};

let firebaseAuth = null;
let firestoreDb = null;
let firebaseAuthApi = null;
let firestoreApi = null;
let currentUser = null;
let accountMode = "sign-in";
let stopWatchingAccountData = null;
let saveTimer = null;
let localData = { tasks: [], notes: "", language: "so", theme: "light" };
let pendingLocalChanges = false;
let deferredInstallPrompt = null;
let currentLanguage = document.documentElement.lang === "so" ? "so" : "en";
let firebaseUnavailableKey = "auth.loading";

function emit(name, detail) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function setAuthStatus(statusKey) {
  authStatus.dataset.statusKey = statusKey;
  authStatus.textContent = statusKey;
  emit("mydaily:auth-error", { statusKey });
}

function setCloudStatus(statusKey) {
  emit("mydaily:cloud-status", { statusKey });
}

function renderAuthMode() {
  const isSigningUp = accountMode === "sign-up";
  authSubmit.textContent = isSigningUp ? languageCopy[currentLanguage].signUp : languageCopy[currentLanguage].signIn;
  authSubmit.dataset.i18n = isSigningUp ? "auth.sign-up" : "auth.sign-in";
  authModeToggle.textContent = isSigningUp
    ? languageCopy[currentLanguage].switchToSignIn
    : languageCopy[currentLanguage].createAccount;
  authModeToggle.dataset.i18n = isSigningUp ? "auth.switch-to-sign-in" : "auth.create-account";
  authPassword.autocomplete = isSigningUp ? "new-password" : "current-password";
  authForm.hidden = Boolean(currentUser?.emailVerified);
  googleSignIn.hidden = Boolean(currentUser);
  authForgotPassword.hidden = Boolean(currentUser) || isSigningUp;
  authModeToggle.hidden = Boolean(currentUser);
  authLogout.hidden = !currentUser;
  authResend.hidden = !currentUser || currentUser.emailVerified;
  authCheckVerification.hidden = !currentUser || currentUser.emailVerified;
}

function showAuthDialog() {
  if (!authDialog.open) authDialog.showModal();
  renderAuthMode();
  if (!firebaseAuth) setAuthStatus(firebaseUnavailableKey);
}

function normalizeTasks(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((task) =>
    task &&
    (typeof task.id === "number" || typeof task.id === "string") &&
    typeof task.title === "string" &&
    typeof task.completed === "boolean" &&
    (task.date === undefined || (typeof task.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(task.date))) &&
    (task.time === undefined || (typeof task.time === "string" && /^\d{2}:\d{2}$/.test(task.time))) &&
    (task.priority === undefined || ["low", "medium", "high"].includes(task.priority)) &&
    (task.remindedAt === undefined || typeof task.remindedAt === "string")
  );
}

function queueCloudSave() {
  if (!currentUser?.emailVerified || !firestoreDb) return;
  pendingLocalChanges = true;
  clearTimeout(saveTimer);
  const user = currentUser;
  setCloudStatus("auth.syncing");
  saveTimer = setTimeout(() => {
    if (currentUser?.uid !== user.uid) return;
    const dataToSave = { ...localData };
    const dataRef = firestoreApi.doc(firestoreDb, "users", user.uid, "appData", "main");
    firestoreApi.setDoc(dataRef, {
      tasks: dataToSave.tasks,
      notes: dataToSave.notes,
      language: dataToSave.language,
      theme: dataToSave.theme,
      updatedAt: firestoreApi.serverTimestamp()
    }).then(() => {
      if (currentUser?.uid === user.uid) {
        pendingLocalChanges = false;
        setCloudStatus("auth.synced");
      }
    }).catch((error) => {
      console.error("Could not sync planner data to Firestore:", error);
      if (currentUser?.uid === user.uid) setCloudStatus("auth.sync-error");
    });
  }, 350);
}

function watchAccountData(user) {
  if (stopWatchingAccountData) stopWatchingAccountData();
  currentUser = user;
  localData = loadLocalData(user.uid);
  pendingLocalChanges = false;
  renderAuthMode();
  setCloudStatus("auth.syncing");
  emit("mydaily:remote-data", localData);

  const dataRef = firestoreApi.doc(firestoreDb, "users", user.uid, "appData", "main");
  let firstSnapshot = true;
  stopWatchingAccountData = firestoreApi.onSnapshot(dataRef, (snapshot) => {
    const remoteData = snapshot.exists() ? snapshot.data() : null;
    if (firstSnapshot) {
      firstSnapshot = false;
      if (remoteData) {
        localData = {
          tasks: normalizeTasks(remoteData.tasks),
          notes: typeof remoteData.notes === "string" ? remoteData.notes : "",
          language: remoteData.language === "en" || remoteData.language === "so"
            ? remoteData.language
            : localData.language,
          theme: remoteData.theme === "dark" || remoteData.theme === "light"
            ? remoteData.theme
            : localData.theme
        };
        emit("mydaily:remote-data", localData);
        setCloudStatus("auth.synced");
      } else {
        queueCloudSave();
      }
      return;
    }

    if (!remoteData) return;
    const remoteTasks = normalizeTasks(remoteData.tasks);
    if (pendingLocalChanges) return;

    localData = {
      tasks: remoteTasks,
      notes: typeof remoteData.notes === "string" ? remoteData.notes : "",
      language: remoteData.language === "en" || remoteData.language === "so"
        ? remoteData.language
        : localData.language,
      theme: remoteData.theme === "dark" || remoteData.theme === "light"
        ? remoteData.theme
        : localData.theme
    };
    emit("mydaily:remote-data", localData);
    setCloudStatus("auth.synced");
  }, (error) => {
    console.error("Could not read planner data from Firestore:", error);
    setCloudStatus("auth.sync-error");
  });
}

function loadLocalData(userId = "") {
  const defaultTasks = [
    { id: 1, title: "Take a few minutes to plan the day", completed: true },
    { id: 2, title: "Make time for a little movement", completed: false },
    { id: 3, title: "Focus on one important thing", completed: false }
  ];
  try {
    const suffix = userId ? `:${userId}` : "";
    const savedTasks = localStorage.getItem(`my-daily-tasks${suffix}`);
    return {
      tasks: savedTasks === null ? (userId ? [] : defaultTasks) : normalizeTasks(JSON.parse(savedTasks)),
      notes: localStorage.getItem(`my-daily-notes${suffix}`) || "",
      language: localStorage.getItem(`my-daily-language${suffix}`) === "en" ? "en" : "so",
      theme: localStorage.getItem(`my-daily-theme${suffix}`) === "dark" ? "dark" : "light"
    };
  } catch (error) {
    console.error("Could not read local planner data before syncing:", error);
    return { tasks: userId ? [] : defaultTasks, notes: "", language: "so", theme: "light" };
  }
}

function authErrorKey(error) {
  if (typeof error?.code === "string" && error.code.includes("api-key-not-valid")) {
    return "auth.invalid-api-key";
  }
  if (typeof error?.code === "string" && error.code.toLowerCase().includes("configuration-not-found")) {
    return "auth.firebase-auth-not-configured";
  }

  const errorKeys = {
    "auth/invalid-email": "auth.invalid-email",
    "auth/email-already-in-use": "auth.email-in-use",
    "auth/weak-password": "auth.weak-password",
    "auth/api-key-not-valid": "auth.invalid-api-key",
    "auth/operation-not-allowed": "auth.provider-disabled",
    "auth/configuration-not-found": "auth.firebase-auth-not-configured",
    "auth/unauthorized-domain": "auth.domain-not-authorized",
    "auth/invalid-credential": "auth.invalid-credentials",
    "auth/user-not-found": "auth.invalid-credentials",
    "auth/wrong-password": "auth.invalid-credentials",
    "auth/network-request-failed": "auth.network-error",
    "auth/too-many-requests": "auth.error-generic",
    "auth/popup-blocked": "auth.error-generic",
    "auth/popup-closed-by-user": "auth.error-generic"
  };
  return errorKeys[error.code] || "auth.error-generic";
}

async function configureFirebase() {
  if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId || !firebaseConfig.appId) {
    firebaseUnavailableKey = "auth.not-configured";
    emit("mydaily:cloud-status", { statusKey: "auth.not-configured", email: "" });
    return;
  }

  try {
    const [appApi, authApi, firestoreSdk] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js")
    ]);
    firebaseAuthApi = authApi;
    firestoreApi = firestoreSdk;
    const app = appApi.initializeApp(firebaseConfig);
    firebaseAuth = authApi.getAuth(app);
    firestoreDb = firestoreSdk.getFirestore(app);
    await authApi.setPersistence(firebaseAuth, authApi.browserLocalPersistence);

    authApi.onAuthStateChanged(firebaseAuth, async (user) => {
      if (stopWatchingAccountData) {
        stopWatchingAccountData();
        stopWatchingAccountData = null;
      }
      clearTimeout(saveTimer);
      pendingLocalChanges = false;
      currentUser = user;
      renderAuthMode();
      emit("mydaily:auth-state", {
        uid: user?.emailVerified ? user.uid : "",
        verified: Boolean(user?.emailVerified),
        statusKey: user ? (user.emailVerified ? "auth.signed-in" : "auth.verify-required") : "auth.local-mode"
      });

      if (!user) {
        setCloudStatus("auth.local-mode");
        return;
      }
      if (!user.emailVerified) {
        setCloudStatus("auth.verify-required");
        return;
      }

      watchAccountData(user);
    });
    setCloudStatus("auth.ready");
    firebaseUnavailableKey = "auth.not-configured";
  } catch (error) {
    console.error("Firebase could not be initialized:", error);
    firebaseUnavailableKey = error.code === "auth/network-request-failed" || error instanceof TypeError
      ? "auth.network-error"
      : authErrorKey(error);
    setCloudStatus(firebaseUnavailableKey);
  }
}

accountButtons.forEach((button) => button.addEventListener("click", showAuthDialog));

authModeToggle.addEventListener("click", () => {
  accountMode = accountMode === "sign-in" ? "sign-up" : "sign-in";
  authStatus.textContent = "";
  delete authStatus.dataset.statusKey;
  renderAuthMode();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!firebaseAuth) {
    setAuthStatus(firebaseUnavailableKey);
    return;
  }

  authSubmit.disabled = true;
  authStatus.textContent = "";
  try {
    const email = authEmail.value.trim();
    if (accountMode === "sign-up") {
      const credential = await firebaseAuthApi.createUserWithEmailAndPassword(firebaseAuth, email, authPassword.value);
      await firebaseAuthApi.sendEmailVerification(credential.user);
      setAuthStatus("auth.account-created");
    } else {
      const credential = await firebaseAuthApi.signInWithEmailAndPassword(firebaseAuth, email, authPassword.value);
      if (!credential.user.emailVerified) {
        await firebaseAuthApi.sendEmailVerification(credential.user);
        setAuthStatus("auth.verify-sent");
      } else {
        authDialog.close();
      }
    }
  } catch (error) {
    console.error("Authentication request failed:", error);
    setAuthStatus(authErrorKey(error));
  } finally {
    authSubmit.disabled = false;
  }
});

googleSignIn.addEventListener("click", async () => {
  if (!firebaseAuth) {
    setAuthStatus(firebaseUnavailableKey);
    return;
  }
  googleSignIn.disabled = true;
  try {
    const provider = new firebaseAuthApi.GoogleAuthProvider();
    await firebaseAuthApi.signInWithPopup(firebaseAuth, provider);
    authDialog.close();
  } catch (error) {
    console.error("Google sign-in failed:", error);
    setAuthStatus(error.code === "auth/operation-not-allowed"
      ? "auth.google-disabled"
      : authErrorKey(error));
  } finally {
    googleSignIn.disabled = false;
  }
});

authForgotPassword.addEventListener("click", async () => {
  if (!firebaseAuth) {
    setAuthStatus(firebaseUnavailableKey);
    return;
  }
  if (!authEmail.value.trim() || !authEmail.checkValidity()) {
    authEmail.reportValidity();
    return;
  }
  authForgotPassword.disabled = true;
  try {
    await firebaseAuthApi.sendPasswordResetEmail(firebaseAuth, authEmail.value.trim());
    setAuthStatus("auth.reset-sent");
  } catch (error) {
    console.error("Could not send password reset email:", error);
    setAuthStatus(authErrorKey(error));
  } finally {
    authForgotPassword.disabled = false;
  }
});

window.addEventListener("mydaily:update-profile", async (event) => {
  if (!firebaseAuth?.currentUser?.emailVerified) {
    emit("mydaily:profile-error", {});
    emit("mydaily:profile-save-finished", {});
    return;
  }
  try {
    await firebaseAuthApi.updateProfile(firebaseAuth.currentUser, {
      displayName: event.detail.displayName
    });
    emit("mydaily:profile-updated", {});
  } catch (error) {
    console.error("Could not update the account profile:", error);
    emit("mydaily:profile-error", {});
  } finally {
    emit("mydaily:profile-save-finished", {});
  }
});

authResend.addEventListener("click", async () => {
  if (!currentUser) return;
  try {
    await firebaseAuthApi.sendEmailVerification(currentUser);
    setAuthStatus("auth.verify-sent");
  } catch (error) {
    console.error("Could not resend email verification:", error);
    setAuthStatus(authErrorKey(error));
  }
});

authCheckVerification.addEventListener("click", async () => {
  if (!currentUser) return;
  try {
    await firebaseAuthApi.reload(currentUser);
    await firebaseAuthApi.getIdToken(currentUser, true);
    currentUser = firebaseAuth.currentUser;
    renderAuthMode();
    if (currentUser?.emailVerified) {
      emit("mydaily:auth-state", {
        uid: currentUser.uid,
        verified: true,
        statusKey: "auth.signed-in"
      });
      authDialog.close();
      watchAccountData(currentUser);
    } else {
      setAuthStatus("auth.verify-required");
    }
  } catch (error) {
    console.error("Could not refresh email verification status:", error);
    setAuthStatus(authErrorKey(error));
  }
});

authLogout.addEventListener("click", async () => {
  if (!firebaseAuth) return;
  try {
    await firebaseAuthApi.signOut(firebaseAuth);
    authDialog.close();
    emit("mydaily:auth-error", { statusKey: "auth.signed-out" });
  } catch (error) {
    console.error("Could not sign out:", error);
    setAuthStatus(authErrorKey(error));
  }
});

window.addEventListener("mydaily:local-data-change", (event) => {
  localData = {
    tasks: normalizeTasks(event.detail.tasks),
    notes: typeof event.detail.notes === "string" ? event.detail.notes : "",
    language: event.detail.language === "en" ? "en" : "so",
    theme: event.detail.theme === "dark" ? "dark" : "light"
  };
  queueCloudSave();
});

window.addEventListener("mydaily:language-changed", (event) => {
  currentLanguage = event.detail.language === "so" ? "so" : "en";
  renderAuthMode();
});

installButton.addEventListener("click", () => {
  if (!installDialog.open) installDialog.showModal();
});

installConfirm.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    installDescription.textContent = languageCopy[currentLanguage].installManual;
    installHelp.hidden = !( /iPhone|iPad|iPod/.test(navigator.userAgent) || navigator.userAgent.includes("Mac") && navigator.maxTouchPoints > 1 );
    installConfirm.hidden = true;
    return;
  }

  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  if (outcome === "accepted") installDialog.close();
  deferredInstallPrompt = null;
  installConfirm.hidden = true;
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

if (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) {
  installButton.hidden = true;
}

if ("serviceWorker" in navigator && window.isSecureContext) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.info("My Daily Tasks is ready for offline use."))
    .catch((error) => console.error("Could not register the app service worker:", error));
}

configureFirebase();
