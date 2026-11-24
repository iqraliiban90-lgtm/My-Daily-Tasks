const STORAGE_KEY = "my-daily-tasks";
const NOTES_STORAGE_KEY = "my-daily-notes";
const THEME_STORAGE_KEY = "my-daily-theme";
const LANGUAGE_STORAGE_KEY = "my-daily-language";

const translations = {
  en: {
    "page.title": "My Daily Tasks – Daily Productivity App",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.planner": "My Tasks",
    "nav.add-task": "Add New Task",
    "nav.calendar": "Calendar",
    "nav.progress": "Progress",
    "nav.about": "About",
    "nav.settings": "Settings",
    "language.label": "Language Settings",
    "sidebar.caption": "WORKSPACE",
    "header.kicker": "YOUR PERSONAL SPACE",
    "theme.dark": "Dark mode",
    "theme.light": "Light mode",
    "hero.eyebrow": "A FRESH START, EVERY DAY",
    "hero.title-first": "Make today",
    "hero.title-second": "count",
    "hero.description": "A little progress each day adds up to big things. Let's make yours a good one.",
    "hero.button": "Plan your day",
    "hero.art-title": "You've got this",
    "hero.art-subtitle": "One thing at a time",
    "planner.aria": "Daily planner",
    "planner.eyebrow": "DAILY PLANNER",
    "planner.title": "My goals",
    "planner.encouragement": "Keep it simple. You've got this.",
    "starter.1": "Take a few minutes to plan the day",
    "starter.2": "Make time for a little movement",
    "starter.3": "Focus on one important thing",
    "task.input-label": "What would you like to get done?",
    "task.placeholder": "What would you like to get done?",
    "task.create": "Create New Task",
    "task.filter-label": "Filter tasks",
    "task.filter-all": "All tasks",
    "task.filter-active": "To do",
    "task.filter-completed": "Completed tasks",
    "task.count-one": "{count} task",
    "task.count-many": "{count} tasks",
    "task.completed": "Nicely done!",
    "task.pending": "One step at a time",
    "task.edit": "Edit",
    "task.save": "Save",
    "task.cancel": "Cancel",
    "task.edit-input": "Edit task title",
    "task.mark-done": "Mark as done: {title}",
    "task.mark-undone": "Mark as not done: {title}",
    "task.delete": "Delete task: {title}",
    "empty.all": "Your list is clear. Add a task above to get started.",
    "empty.filter": "Nothing here right now. Try another filter.",
    "progress.label": "PROGRESS TRACKER",
    "progress.complete": "complete",
    "progress.ring-label": "{percentage}% of tasks completed",
    "progress.title-first": "Every step",
    "progress.title-second": "counts.",
    "progress.summary-empty": "Add a small goal and start fresh.",
    "progress.summary-complete": "You did it! Take a moment to celebrate.",
    "progress.summary-started": "Nice work. Keep going, one step at a time.",
    "progress.summary-start": "You've got a fresh page. Pick one thing and start there.",
    "progress.count": "{completed} of {total} {tasks} done",
    "calendar.eyebrow": "YOUR MONTH",
    "calendar.previous": "Previous month",
    "calendar.next": "Next month",
    "calendar.choose": "Choose a calendar date",
    "calendar.selected": "Selected:",
    "calendar.weekdays": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    "notes.eyebrow": "SAVE A THOUGHT",
    "notes.title": "Notes",
    "notes.label": "Your notes",
    "notes.placeholder": "Jot down a thought, reminder, or idea...",
    "notes.saved": "Saved on this device",
    "notes.save-error": "Notes could not be saved.",
    "notes.load-error": "Notes could not be loaded.",
    "settings.eyebrow": "PERSONALIZE YOUR APP",
    "settings.description": "Choose how My Daily Tasks looks and feels on this device.",
    "settings.language-title": "Language",
    "settings.language-description": "Choose your preferred app language.",
    "settings.theme-title": "Appearance",
    "settings.theme-description": "Switch between light and dark mode.",
    "settings.storage-title": "Your data stays on this device",
    "settings.storage-description": "Tasks and preferences are saved in this browser.",
    "settings.storage-error": "Your data could not be saved or loaded. Check this browser's storage settings.",
    "auth.eyebrow": "YOUR PERSONAL ACCOUNT",
    "auth.title": "Save your plans across devices",
    "auth.description": "Create a secure account or sign in to sync your tasks and notes.",
    "auth.account-title": "Your account",
    "auth.local-mode": "Using this device without an account.",
    "auth.sign-in": "Sign in",
    "auth.sign-up": "Create account",
    "auth.sign-out": "Sign out",
    "auth.create-account": "New here? Create an account",
    "auth.switch-to-sign-in": "Already have an account? Sign in",
    "auth.email": "Email address",
    "auth.password": "Password (at least 8 characters)",
    "auth.close": "Close",
    "auth.privacy": "Your tasks are private to your account.",
    "auth.not-configured": "Firebase is not configured yet. Add your web app settings in firebase-config.js.",
    "auth.firebase-auth-not-configured": "Firebase Authentication is not set up for this project yet. Open Authentication in Firebase Console and click Get started.",
    "auth.loading": "Connecting securely...",
    "auth.ready": "Firebase is ready. Sign in or create an account to sync your data.",
    "auth.signed-in": "Signed in as {email}",
    "auth.synced": "Signed in as {email}. Your tasks are syncing.",
    "auth.syncing": "Syncing your tasks securely...",
    "auth.sync-error": "Cloud sync failed. Your saved tasks are still available on this device.",
    "auth.network-error": "Could not connect. Check your internet connection and try again.",
    "auth.invalid-api-key": "Firebase rejected this Web API key. Check that it belongs to this project and is allowed to use Firebase Authentication.",
    "auth.provider-disabled": "Email/password sign-in is not enabled for this Firebase project.",
    "auth.domain-not-authorized": "This site is not an authorized Firebase Authentication domain. Add it in Firebase Console under Authentication settings.",
    "auth.error-generic": "We couldn't complete that request. Please try again.",
    "auth.invalid-email": "Enter a valid email address.",
    "auth.email-in-use": "An account already uses that email. Try signing in.",
    "auth.weak-password": "Choose a password with at least 8 characters.",
    "auth.invalid-credentials": "Email or password is incorrect.",
    "auth.verify-required": "Check your inbox and verify your email before syncing.",
    "auth.verify-sent": "Verification email sent. Check your inbox.",
    "auth.resend": "Resend verification email",
    "auth.check-verification": "I've verified my email",
    "auth.account-created": "Account created. Verify your email before syncing.",
    "auth.signed-out": "You are signed out. Your local tasks remain on this device.",
    "install.button": "Install",
    "install.eyebrow": "YOUR TASKS, ONE TAP AWAY",
    "install.title": "Add My Daily Tasks to your device",
    "install.description": "Install the app for a focused, app-like experience.",
    "install.ios-help": "On iPhone or iPad: tap Share in Safari, then choose Add to Home Screen.",
    "about.eyebrow": "A LITTLE ABOUT US",
    "about.title": "A calmer way to get things done.",
    "about.description": "My Daily Tasks helps you make a simple plan, celebrate small wins, and keep your day moving at your own pace. Your tasks, notes, and preferences stay saved on this device.",
    "footer.encouragement-label": "Daily encouragement",
    "footer.encouragement": "Progress, not perfection. You're doing better than you think.",
    "footer.made-for": "Made for your everyday"
  },
  so: {
    "page.title": "My Daily Tasks – Daily Productivity App",
    "nav.label": "Liiska hagidda",
    "nav.home": "Hoyga",
    "nav.planner": "Hawlahayga",
    "nav.add-task": "Samee Hawl Cusub",
    "nav.calendar": "Jadwalka",
    "nav.progress": "Horumarkayga",
    "nav.about": "Nagu saabsan",
    "nav.settings": "Dejimaha",
    "language.label": "Dejinta Luuqadda",
    "sidebar.caption": "GOOBTA SHAQADA",
    "header.kicker": "GOOBTAADA GAARKA AH",
    "theme.dark": "Habka Madow",
    "theme.light": "Habka Iftiinka",
    "hero.eyebrow": "BILOW CUSUB, MAALIN KASTA",
    "hero.title-first": "Maanta ka dhig",
    "hero.title-second": "mid qiimo leh",
    "hero.description": "Horumar yar oo maalin kasta ah wuxuu isu beddelaa guulo waaweyn. Maanta ka dhig maalin wanaagsan.",
    "hero.button": "Qorshee maalintaada",
    "hero.art-title": "Waad awooddaa",
    "hero.art-subtitle": "Hal mar hal tallaabo",
    "planner.aria": "Qorshaha maalinlaha",
    "planner.eyebrow": "QORSHAHA MAALINTA",
    "planner.title": "Yoolalkayga",
    "planner.encouragement": "Si fudud u bilow. Waad awooddaa.",
    "starter.1": "Waqti yar u qaado qorshaynta maalinta",
    "starter.2": "Samee dhaqdhaqaaq yar",
    "starter.3": "Diiradda saar hal arrin oo muhiim ah",
    "task.input-label": "Maxaad jeclaan lahayd inaad qabato?",
    "task.placeholder": "Maxaad jeclaan lahayd inaad qabato?",
    "task.create": "Samee Hawl Cusub",
    "task.filter-label": "Kala shaandhee hawlaha",
    "task.filter-all": "Dhammaan hawlaha",
    "task.filter-active": "Hawlaha sugaya",
    "task.filter-completed": "Hawlaha dhammaaday",
    "task.count-one": "{count} hawl",
    "task.count-many": "{count} hawlood",
    "task.completed": "Si fiican ayaad u qabatay!",
    "task.pending": "Hal tallaabo markiiba",
    "task.edit": "Wax ka beddel",
    "task.save": "Kaydi",
    "task.cancel": "Ka noqo",
    "task.edit-input": "Wax ka beddel magaca hawsha",
    "task.mark-done": "Calaamadee in la qabtay: {title}",
    "task.mark-undone": "Calaamadee inaan la qaban: {title}",
    "task.delete": "Tirtir hawsha: {title}",
    "empty.all": "Liiskaagu waa madhan yahay. Ku dar hawl cusub si aad u bilowdo.",
    "empty.filter": "Halkan waxba kama jiraan. Isku day shaandheyn kale.",
    "progress.label": "HORUMARKAYGA",
    "progress.complete": "la dhammeeyay",
    "progress.ring-label": "{percentage}% hawlood ayaa la dhammeeyay",
    "progress.title-first": "Tallaabo kastaa",
    "progress.title-second": "waa muhiim.",
    "progress.summary-empty": "Ku dar yool yar oo bilow.",
    "progress.summary-complete": "Waad dhamaysay! Qaado daqiiqad aad ku dabaaldegto.",
    "progress.summary-started": "Waa hagaag. Sii wad, hal tallaabo markiiba.",
    "progress.summary-start": "Bog cusub ayaad haysataa. Hal shay dooro oo ka bilow.",
    "progress.count": "{completed} ka mid ah {total} hawlood waa la dhammeeyay",
    "calendar.eyebrow": "BISHAN",
    "calendar.previous": "Bisha hore",
    "calendar.next": "Bisha xigta",
    "calendar.choose": "Dooro taariikh",
    "calendar.selected": "La doortay:",
    "calendar.weekdays": ["Isn", "Tal", "Arb", "Kha", "Jim", "Sab", "Axd"],
    "notes.eyebrow": "QOR FIKRAD",
    "notes.title": "Qoraallo",
    "notes.label": "Qoraalladaada",
    "notes.placeholder": "Qor fikrad, xusuusin, ama arrin muhiim ah...",
    "notes.saved": "Qoraalka qalabkan ayaa lagu kaydiyey",
    "notes.save-error": "Qoraalka lama kaydin karin.",
    "notes.load-error": "Qoraalka lama soo rari karin.",
    "settings.eyebrow": "HABEE BARNAAMIJKAAGA",
    "settings.description": "Dooro sida My Daily Tasks uga muuqdo qalabkan.",
    "settings.language-title": "Luuqadda",
    "settings.language-description": "Dooro luuqadda aad jeceshahay.",
    "settings.theme-title": "Muuqaalka",
    "settings.theme-description": "U beddel muuqaalka iftiinka ama mugdiga.",
    "settings.storage-title": "Xogtaadu qalabkan ayay ku jiraysaa",
    "settings.storage-description": "Hawlaha iyo doorashooyinka waxaa lagu kaydiyaa biraawsarkan.",
    "settings.storage-error": "Xogta lama kaydin ama lama soo rari karin. Hubi dejimaha kaydinta biraawsarka.",
    "auth.eyebrow": "AKOONKAAGA GAARKA AH",
    "auth.title": "Qorshahaaga qalab kasta ka isticmaal",
    "auth.description": "Samee akoon ammaan ah ama gal si hawlahaaga iyo qoraalladaadu u wada shaqeeyaan.",
    "auth.account-title": "Akoonkaaga",
    "auth.local-mode": "Qalabkan ayaad isticmaalaysaa adigoon akoon lahayn.",
    "auth.sign-in": "Gal",
    "auth.sign-up": "Samee akoon",
    "auth.sign-out": "Ka bax",
    "auth.create-account": "Akoon ma lihid? Samee mid cusub",
    "auth.switch-to-sign-in": "Akoon ma leedahay? Gal",
    "auth.email": "Cinwaanka iimaylka",
    "auth.password": "Furaha sirta ah (ugu yaraan 8 xaraf)",
    "auth.close": "Xir",
    "auth.privacy": "Hawlahaagu akoonkaaga oo keliya ayay u gaar yihiin.",
    "auth.not-configured": "Firebase weli lama dejin. Geli xogta Web App-kaaga faylka firebase-config.js.",
    "auth.firebase-auth-not-configured": "Firebase Authentication weli lama hawlgelin. Firebase Console ka fur Authentication oo guji Get started.",
    "auth.loading": "Si ammaan ah ayaa loo xiriirayaa...",
    "auth.ready": "Firebase waa diyaar. Gal ama samee akoon si xogtaadu u wada shaqayso.",
    "auth.signed-in": "Waxaad ku gashay {email}",
    "auth.synced": "Waxaad ku gashay {email}. Hawlahaaga waa la waafajinayaa.",
    "auth.syncing": "Hawlahaaga si ammaan ah ayaa loo waafajinayaa...",
    "auth.sync-error": "Kaydinta cloud-ka way fashilantay. Hawlaha qalabkan ku kaydsan weli way kuu diyaar yihiin.",
    "auth.network-error": "Xiriir lama helin. Hubi internetka oo mar kale isku day.",
    "auth.invalid-api-key": "Firebase wuu diiday Web API key-ga. Hubi inuu mashruucan ka yimid oo loo oggol yahay Firebase Authentication.",
    "auth.provider-disabled": "Email/Password lagama shidin Firebase Authentication-ka project-kan.",
    "auth.domain-not-authorized": "Domain-kan looma oggola Firebase Authentication. Ka dar Firebase Console qaybta Authentication settings.",
    "auth.error-generic": "Codsiga lama dhammaystiri karin. Mar kale isku day.",
    "auth.invalid-email": "Geli cinwaan iimayl oo sax ah.",
    "auth.email-in-use": "Iimaylkan akoon ayaa ku jira. Isku day inaad gasho.",
    "auth.weak-password": "Dooro furaha sirta ah oo ugu yaraan 8 xaraf ah.",
    "auth.invalid-credentials": "Iimaylka ama furaha sirta ahi waa khaldan yahay.",
    "auth.verify-required": "Fur iimaylkaaga oo xaqiiji cinwaanka ka hor kaydinta.",
    "auth.verify-sent": "Iimayl xaqiijin ah ayaa laguu diray. Ka eeg sanduuqa iimaylka.",
    "auth.resend": "Dib u dir iimaylka xaqiijinta",
    "auth.check-verification": "Waan xaqiijiyay iimaylkayga",
    "auth.account-created": "Akoonka waa la sameeyay. Xaqiiji iimaylka ka hor kaydinta.",
    "auth.signed-out": "Waad ka baxday. Hawlaha qalabkan ku kaydsan ma luminayaan.",
    "install.button": "Ku rakib",
    "install.eyebrow": "HAWLAHAAGA HAL TAABASHO",
    "install.title": "My Daily Tasks ku dar qalabkaaga",
    "install.description": "Ku rakib app-ka si aad si fudud ugu isticmaasho.",
    "install.ios-help": "iPhone ama iPad: Safari taabo Share, kadib dooro Add to Home Screen.",
    "about.eyebrow": "NAGU SAABSAN",
    "about.title": "Hab deggan oo hawlaha lagu dhammeeyo.",
    "about.description": "My Daily Tasks wuxuu kaa caawinayaa inaad samaysato qorshe fudud, ku faraxdo guulaha yaryar, maalintaadana ugu socoto xawaarahaaga. Hawlahaaga, qoraalladaada iyo doorashooyinkaagu qalabkan ayay ku kaydsan yihiin.",
    "footer.encouragement-label": "Dhiirrigelin maalinle ah",
    "footer.encouragement": "Horumar ayaa ka muhiimsan dhammaystirnaanta. Waxaad qabanaysaa wax ka badan inta aad moodayso.",
    "footer.made-for": "Maalin kasta adiga ayaa leh"
  }
};

const somaliMonths = [
  "Janaayo", "Febraayo", "Maarso", "Abriil", "Maajo", "Juun",
  "Luuliyo", "Agoosto", "Sebtembar", "Oktoobar", "Nofeembar", "Diseembar"
];
const somaliWeekdays = ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimco", "Sabti"];

const starterTasks = [
  { id: 1, title: "Take a few minutes to plan the day", completed: true },
  { id: 2, title: "Make time for a little movement", completed: false },
  { id: 3, title: "Focus on one important thing", completed: false }
];

const taskForm = document.querySelector("#add-task");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskFilter = document.querySelector("#task-filter");
const emptyState = document.querySelector("#empty-state");
const taskCount = document.querySelector("#task-count");
const progressRing = document.querySelector("#progress-ring");
const progressPercent = document.querySelector("#progress-percent");
const progressSummary = document.querySelector("#progress-summary");
const progressCount = document.querySelector("#progress-count");
const todayDate = document.querySelector("#today-date");
const calendarMonth = document.querySelector("#calendar-month");
const calendarDays = document.querySelector("#calendar-days");
const calendarWeekdays = document.querySelector("#calendar-weekdays");
const calendarSelected = document.querySelector("#calendar-selected");
const notesInput = document.querySelector("#notes-input");
const notesStatus = document.querySelector("#notes-status");
const storageStatus = document.querySelector("#storage-status");
const themeToggles = document.querySelectorAll(".theme-toggle");
const languageButtons = document.querySelectorAll("[data-language]");

const today = new Date();
let calendarDate = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let language = "en";
let notesHaveError = false;
let tasksHaveError = false;
let signedInEmail = "";
let signedInVerified = false;

function translate(key, values = {}) {
  return translations[language][key].replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}

function getTaskTitle(task) {
  const starterTask = starterTasks.find((item) => item.id === task.id && item.title === task.title);
  return starterTask ? translate(`starter.${starterTask.id}`) : task.title;
}

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks === null) return starterTasks;

    const parsedTasks = JSON.parse(savedTasks);
    if (!Array.isArray(parsedTasks) || !parsedTasks.every((task) =>
      task &&
      (typeof task.id === "number" || typeof task.id === "string") &&
      typeof task.title === "string" &&
      typeof task.completed === "boolean"
    )) {
      throw new Error("Saved tasks have an invalid format.");
    }

    return parsedTasks;
  } catch (error) {
    console.error("Could not load saved tasks:", error);
    tasksHaveError = true;
    return starterTasks;
  }
}

let tasks = loadTasks();

function saveTasks({ broadcast = true } = {}) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    tasksHaveError = false;
  } catch (error) {
    console.error("Could not save tasks:", error);
    tasksHaveError = true;
  }
  updateStorageStatus();
  if (broadcast) dispatchLocalDataChange();
}

function updateStorageStatus() {
  storageStatus.textContent = translate(tasksHaveError ? "settings.storage-error" : "settings.storage-description");
}

function dispatchLocalDataChange() {
  window.dispatchEvent(new CustomEvent("mydaily:local-data-change", {
    detail: {
      tasks,
      notes: notesInput.value,
      language,
      theme: document.body.dataset.theme || loadTheme()
    }
  }));
}

function updateDate() {
  const date = new Date();
  if (language === "so") {
    todayDate.textContent = `${somaliWeekdays[date.getDay()].slice(0, 3)}, ${date.getDate()} ${somaliMonths[date.getMonth()].slice(0, 3)}`;
    return;
  }

  todayDate.textContent = new Intl.DateTimeFormat(language === "so" ? "so-SO" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(date);
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const locale = language === "so" ? "so-SO" : "en-US";

  calendarMonth.textContent = language === "so"
    ? `${somaliMonths[month]} ${year}`
    : new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(calendarDate);
  calendarWeekdays.replaceChildren();
  translations[language]["calendar.weekdays"].forEach((weekday) => {
    const label = document.createElement("span");
    label.textContent = weekday;
    calendarWeekdays.append(label);
  });
  calendarDays.replaceChildren();

  for (let blank = 0; blank < firstDayOffset; blank += 1) {
    const spacer = document.createElement("span");
    spacer.className = "calendar-spacer";
    spacer.setAttribute("aria-hidden", "true");
    calendarDays.append(spacer);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = date.toDateString() === selectedDate.toDateString();
    const button = document.createElement("button");
    button.className = `calendar-day${isToday ? " is-today" : ""}${isSelected ? " is-selected" : ""}`;
    button.type = "button";
    button.textContent = String(day);
    button.setAttribute("aria-label", language === "so"
      ? `${somaliWeekdays[date.getDay()]}, ${date.getDate()} ${somaliMonths[month]} ${year}`
      : new Intl.DateTimeFormat(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(date));
    button.setAttribute("aria-pressed", String(isSelected));
    button.addEventListener("click", () => {
      selectedDate = date;
      renderCalendar();
    });
    calendarDays.append(button);
  }

  const selectedLabel = language === "so"
    ? `${somaliWeekdays[selectedDate.getDay()]}, ${selectedDate.getDate()} ${somaliMonths[selectedDate.getMonth()]}`
    : new Intl.DateTimeFormat(locale, {
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(selectedDate);
  calendarSelected.textContent = `${translate("calendar.selected")} ${selectedLabel}`;
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.dataset.theme = isDark ? "dark" : "light";
  themeToggles.forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? translate("theme.light") : translate("theme.dark"));
    button.querySelector(".theme-label").textContent = isDark ? translate("theme.light") : translate("theme.dark");
    button.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  });
}

function loadLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLanguage === "en" ? "en" : "so";
  } catch (error) {
    console.error("Could not load language preference:", error);
    return "so";
  }
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = translate("page.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  languageButtons.forEach((button) => {
    const isSelected = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("is-selected", isSelected);
  });

  notesStatus.textContent = translate(notesHaveError ? "notes.save-error" : "notes.saved");
  if (signedInEmail && signedInVerified) {
    document.querySelectorAll(".account-button [data-i18n]").forEach((label) => {
      label.textContent = signedInEmail;
    });
  }
  updateStorageStatus();
  updateDate();
  setTheme(document.body.dataset.theme || loadTheme());
  renderCalendar();
  renderTasks();
  window.dispatchEvent(new CustomEvent("mydaily:language-changed", { detail: { language } }));
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Could not load theme preference:", error);
    return "light";
  }
}

function loadNotes() {
  try {
    notesHaveError = false;
    return localStorage.getItem(NOTES_STORAGE_KEY) || "";
  } catch (error) {
    console.error("Could not load notes:", error);
    notesHaveError = true;
    notesStatus.textContent = translate("notes.load-error");
    return "";
  }
}

function renderTasks() {
  const filter = taskFilter.value;
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  taskList.replaceChildren();

  visibleTasks.forEach((task) => {
    const displayTitle = getTaskTitle(task);
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " is-complete" : ""}`;
    item.dataset.taskId = String(task.id);

    const checkbox = document.createElement("button");
    checkbox.className = "task-check";
    checkbox.type = "button";
    checkbox.textContent = task.completed ? "✓" : "";
    checkbox.setAttribute("aria-label", translate(task.completed ? "task.mark-undone" : "task.mark-done", { title: displayTitle }));
    checkbox.setAttribute("aria-pressed", String(task.completed));
    checkbox.addEventListener("click", () => toggleTask(task.id));

    const copy = document.createElement("span");
    copy.className = "task-copy";

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = displayTitle;

    const subtitle = document.createElement("span");
    subtitle.className = "task-subtitle";
    subtitle.textContent = translate(task.completed ? "task.completed" : "task.pending");

    copy.append(title, subtitle);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.className = "task-edit";
    editButton.type = "button";
    editButton.textContent = translate("task.edit");
    editButton.setAttribute("aria-label", `${translate("task.edit")}: ${displayTitle}`);
    editButton.addEventListener("click", () => startTaskEdit(task.id, displayTitle, item));

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", translate("task.delete", { title: displayTitle }));
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    actions.append(editButton, deleteButton);
    item.append(checkbox, copy, actions);
    taskList.append(item);
  });

  emptyState.hidden = visibleTasks.length > 0;
  if (visibleTasks.length === 0) {
    emptyState.textContent = translate(tasks.length === 0 ? "empty.all" : "empty.filter");
  }

  updateProgress();
}

function startTaskEdit(id, currentTitle, item) {
  const form = document.createElement("form");
  form.className = "task-edit-form";

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentTitle;
  input.maxLength = 100;
  input.required = true;
  input.setAttribute("aria-label", translate("task.edit-input"));

  const actions = document.createElement("div");
  actions.className = "task-edit-actions";

  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "task-edit-save";
  saveButton.textContent = translate("task.save");

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "task-edit-cancel";
  cancelButton.textContent = translate("task.cancel");
  cancelButton.addEventListener("click", renderTasks);

  actions.append(saveButton, cancelButton);
  form.append(input, actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) {
      input.focus();
      return;
    }

    tasks = tasks.map((task) => task.id === id ? { ...task, title } : task);
    saveTasks();
    renderTasks();
  });
  form.addEventListener("keydown", (event) => {
    if (event.key === "Escape") renderTasks();
  });

  item.replaceChildren(form);
  input.focus();
  input.select();
}

function updateProgress() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  taskCount.textContent = translate(totalTasks === 1 ? "task.count-one" : "task.count-many", { count: totalTasks });
  progressPercent.textContent = `${percentage}%`;
  progressCount.textContent = translate("progress.count", {
    completed: completedTasks,
    total: totalTasks,
    tasks: translate(totalTasks === 1 ? "task.count-one" : "task.count-many", { count: "" }).trim()
  });
  progressRing.setAttribute("aria-label", translate("progress.ring-label", { percentage }));
  progressRing.style.background = `conic-gradient(#8ba9ff ${percentage}%, rgba(255, 255, 255, 0.14) ${percentage}%)`;

  if (totalTasks === 0) {
    progressSummary.textContent = translate("progress.summary-empty");
  } else if (percentage === 100) {
    progressSummary.textContent = translate("progress.summary-complete");
  } else if (percentage > 0) {
    progressSummary.textContent = translate("progress.summary-started");
  } else {
    progressSummary.textContent = translate("progress.summary-start");
  }
}

function toggleTask(id) {
  tasks = tasks.map((task) => task.id === id
    ? { ...task, completed: !task.completed }
    : task);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (!title) {
    taskInput.focus();
    return;
  }

  tasks.unshift({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title, completed: false });
  saveTasks();
  taskInput.value = "";
  taskFilter.value = "all";
  renderTasks();
  taskInput.focus();
});

taskFilter.addEventListener("change", renderTasks);
document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".main-nav .nav-link").forEach((item) => {
      item.classList.toggle("active", item === link);
    });
  });
});
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.language;
    setLanguage(selectedLanguage);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
    } catch (error) {
      console.error("Could not save language preference:", error);
    }
    dispatchLocalDataChange();
  });
});
document.querySelector("#previous-month").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
  renderCalendar();
});
document.querySelector("#next-month").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
  renderCalendar();
});
notesInput.value = loadNotes();
notesInput.addEventListener("input", () => {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, notesInput.value);
    notesHaveError = false;
    notesStatus.textContent = translate("notes.saved");
  } catch (error) {
    console.error("Could not save notes:", error);
    notesHaveError = true;
    notesStatus.textContent = translate("notes.save-error");
  }
  dispatchLocalDataChange();
});
themeToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error("Could not save theme preference:", error);
    }
    dispatchLocalDataChange();
  });
});

setLanguage(loadLanguage());
notesInput.value = loadNotes();
window.addEventListener("mydaily:remote-data", (event) => {
  const { tasks: remoteTasks, notes, language: remoteLanguage, theme: remoteTheme } = event.detail;
  let shouldRenderTasks = false;
  if (Array.isArray(remoteTasks)) {
    tasks = remoteTasks;
    saveTasks({ broadcast: false });
    shouldRenderTasks = true;
  }
  if (remoteLanguage === "en" || remoteLanguage === "so") {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, remoteLanguage);
    } catch (error) {
      console.error("Could not save synced language preference locally:", error);
    }
    if (language !== remoteLanguage) {
      setLanguage(remoteLanguage);
      shouldRenderTasks = false;
    }
  }
  if (remoteTheme === "light" || remoteTheme === "dark") {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, remoteTheme);
    } catch (error) {
      console.error("Could not save synced theme preference locally:", error);
    }
    setTheme(remoteTheme);
  }
  if (typeof notes === "string") {
    notesInput.value = notes;
    try {
      localStorage.setItem(NOTES_STORAGE_KEY, notes);
      notesHaveError = false;
      notesStatus.textContent = translate("notes.saved");
    } catch (error) {
      console.error("Could not save synced notes locally:", error);
      notesHaveError = true;
      notesStatus.textContent = translate("notes.save-error");
    }
  }
  if (shouldRenderTasks) renderTasks();
});
window.addEventListener("mydaily:auth-state", (event) => {
  const { email, verified, statusKey } = event.detail;
  signedInEmail = email || "";
  signedInVerified = Boolean(verified);
  const accountButtons = document.querySelectorAll(".account-button");
  const accountStatus = document.querySelector("#account-status");
  accountButtons.forEach((button) => {
    button.dataset.signedIn = String(Boolean(email && verified));
    button.setAttribute("aria-label", email && verified ? email : translate("auth.sign-in"));
    const label = button.querySelector("[data-i18n]");
    if (label) label.textContent = email && verified ? email : translate("auth.sign-in");
  });
  accountStatus.textContent = translate(statusKey || "auth.local-mode", { email: email || "" });
});
window.addEventListener("mydaily:cloud-status", (event) => {
  const { statusKey, email } = event.detail;
  document.querySelector("#account-status").textContent = translate(statusKey, { email: email || "" });
  updateStorageStatus();
});
window.addEventListener("mydaily:auth-error", (event) => {
  const status = document.querySelector("#auth-status");
  status.dataset.statusKey = event.detail.statusKey;
  status.textContent = translate(event.detail.statusKey);
});
window.addEventListener("mydaily:language-changed", () => {
  const authStatusKey = document.querySelector("#auth-status").dataset.statusKey;
  if (authStatusKey) document.querySelector("#auth-status").textContent = translate(authStatusKey);
});
