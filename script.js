const STORAGE_KEY = "my-daily-tasks";
const NOTES_STORAGE_KEY = "my-daily-notes";
const THEME_STORAGE_KEY = "my-daily-theme";
const LANGUAGE_STORAGE_KEY = "my-daily-language";
const NOTIFICATIONS_STORAGE_KEY = "my-daily-notifications";
const IMPORT_STORAGE_KEY = "my-daily-imported";

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
    "nav.profile": "Profile",
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
    "task.date": "Date",
    "task.time": "Time",
    "task.priority": "Priority",
    "priority.low": "Low",
    "priority.medium": "Medium",
    "priority.high": "High",
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
    "stats.aria": "Task statistics",
    "stats.total": "Total tasks",
    "stats.total-caption": "Across your planner",
    "stats.completed": "Completed",
    "stats.completed-caption": "Tasks finished",
    "stats.pending": "Pending",
    "stats.pending-caption": "Still to do",
    "stats.today": "Today",
    "stats.today-caption": "Completed today",
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
    "auth.password": "Password",
    "auth.password-sign-up": "Password (at least 8 characters)",
    "auth.close": "Close",
    "auth.privacy": "Your tasks are private to your account.",
    "auth.not-configured": "Firebase is not configured yet. Add your web app settings in firebase-config.js.",
    "auth.firebase-auth-not-configured": "Firebase Authentication is not set up for this project yet. Open Authentication in Firebase Console and click Get started.",
    "auth.loading": "Connecting securely...",
    "auth.ready": "Firebase is ready. Sign in or create an account to sync your data.",
    "auth.signed-in": "Signed in. Your account is ready.",
    "auth.synced": "Signed in. Your tasks are syncing.",
    "auth.syncing": "Syncing your tasks securely...",
    "auth.sync-error": "Cloud sync failed. Your saved tasks are still available on this device.",
    "auth.network-error": "Could not connect. Check your internet connection and try again.",
    "auth.invalid-api-key": "Firebase rejected this Web API key. Check that it belongs to this project and is allowed to use Firebase Authentication.",
    "auth.provider-disabled": "Email/password sign-in is not enabled for this Firebase project.",
    "auth.domain-not-authorized": "This site is not an authorized Firebase Authentication domain. Add it in Firebase Console under Authentication settings.",
    "auth.error-generic": "We couldn't complete that request. Please try again.",
    "auth.email-required": "Enter your email address.",
    "auth.invalid-email": "Enter a valid email address.",
    "auth.password-required": "Enter your password.",
    "auth.email-in-use": "An account already uses that email. Try signing in.",
    "auth.weak-password": "Choose a password with at least 8 characters.",
    "auth.invalid-credentials": "Email or password is incorrect.",
    "auth.verify-required": "Check your inbox and verify your email before syncing.",
    "auth.verify-sent": "Verification email sent. Check your inbox.",
    "auth.resend": "Resend verification email",
    "auth.check-verification": "I've verified my email",
    "auth.account-created": "Account created. Verify your email before syncing.",
    "auth.google": "Continue with Google",
    "auth.forgot-password": "Forgot password?",
    "auth.reset-sent": "Password reset email sent. Check your inbox.",
    "auth.google-disabled": "Google sign-in is not enabled for this Firebase project.",
    "profile.eyebrow": "YOUR ACCOUNT",
    "profile.title": "Profile",
    "profile.description": "Manage your name and account details.",
    "profile.email": "Email address",
    "profile.name": "Display name",
    "profile.name-placeholder": "Your name",
    "profile.save": "Save profile",
    "profile.saving": "Saving your profile...",
    "profile.saved": "Your profile was updated.",
    "profile.save-error": "We couldn't update your profile. Please try again.",
    "profile.import-error": "We couldn't import the tasks from this device.",
    "profile.sign-in-required": "Sign in to manage your profile. Your on-device tasks stay separate until you choose to import them.",
    "profile.import-local": "Import tasks from this device",
    "notifications.title": "Task reminders",
    "notifications.description": "Enable notifications to be reminded when a task is due.",
    "notifications.enable": "Enable reminders",
    "notifications.enabled": "Reminders are enabled on this device.",
    "notifications.denied": "Notifications are blocked. Allow them in your browser settings.",
    "notifications.unsupported": "This browser does not support task notifications.",
    "notifications.task-due": "Task reminder",
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
    "nav.profile": "Akoon",
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
    "task.date": "Taariikh",
    "task.time": "Waqti",
    "task.priority": "Muhiimad",
    "priority.low": "Hoose",
    "priority.medium": "Dhexdhexaad",
    "priority.high": "Sare",
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
    "stats.aria": "Tirakoobka hawlaha",
    "stats.total": "Wadarta hawlaha",
    "stats.total-caption": "Dhammaan hawlahaaga",
    "stats.completed": "La dhammeeyay",
    "stats.completed-caption": "Hawlaha la qabtay",
    "stats.pending": "Sugaya",
    "stats.pending-caption": "Hawlaha harsan",
    "stats.today": "Maanta",
    "stats.today-caption": "Maanta la dhammeeyay",
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
    "auth.password": "Furaha sirta ah",
    "auth.password-sign-up": "Furaha sirta ah (ugu yaraan 8 xaraf)",
    "auth.close": "Xir",
    "auth.privacy": "Hawlahaagu akoonkaaga oo keliya ayay u gaar yihiin.",
    "auth.not-configured": "Firebase weli lama dejin. Geli xogta Web App-kaaga faylka firebase-config.js.",
    "auth.firebase-auth-not-configured": "Firebase Authentication weli lama hawlgelin. Firebase Console ka fur Authentication oo guji Get started.",
    "auth.loading": "Si ammaan ah ayaa loo xiriirayaa...",
    "auth.ready": "Firebase waa diyaar. Gal ama samee akoon si xogtaadu u wada shaqayso.",
    "auth.signed-in": "Waad gashay. Akoonkaagu waa diyaar.",
    "auth.synced": "Waad gashay. Hawlahaaga waa la waafajinayaa.",
    "auth.syncing": "Hawlahaaga si ammaan ah ayaa loo waafajinayaa...",
    "auth.sync-error": "Kaydinta cloud-ka way fashilantay. Hawlaha qalabkan ku kaydsan weli way kuu diyaar yihiin.",
    "auth.network-error": "Xiriir lama helin. Hubi internetka oo mar kale isku day.",
    "auth.invalid-api-key": "Firebase wuu diiday Web API key-ga. Hubi inuu mashruucan ka yimid oo loo oggol yahay Firebase Authentication.",
    "auth.provider-disabled": "Email/Password lagama shidin Firebase Authentication-ka project-kan.",
    "auth.domain-not-authorized": "Domain-kan looma oggola Firebase Authentication. Ka dar Firebase Console qaybta Authentication settings.",
    "auth.error-generic": "Codsiga lama dhammaystiri karin. Mar kale isku day.",
    "auth.email-required": "Geli cinwaanka iimaylkaaga.",
    "auth.invalid-email": "Geli cinwaan iimayl oo sax ah.",
    "auth.password-required": "Geli furaha sirta ah.",
    "auth.email-in-use": "Iimaylkan akoon ayaa ku jira. Isku day inaad gasho.",
    "auth.weak-password": "Dooro furaha sirta ah oo ugu yaraan 8 xaraf ah.",
    "auth.invalid-credentials": "Iimaylka ama furaha sirta ahi waa khaldan yahay.",
    "auth.verify-required": "Fur iimaylkaaga oo xaqiiji cinwaanka ka hor kaydinta.",
    "auth.verify-sent": "Iimayl xaqiijin ah ayaa laguu diray. Ka eeg sanduuqa iimaylka.",
    "auth.resend": "Dib u dir iimaylka xaqiijinta",
    "auth.check-verification": "Waan xaqiijiyay iimaylkayga",
    "auth.account-created": "Akoonka waa la sameeyay. Xaqiiji iimaylka ka hor kaydinta.",
    "auth.google": "Ku sii wad Google",
    "auth.forgot-password": "Ma illowday furaha sirta ah?",
    "auth.reset-sent": "Iimaylka dib u dejinta furaha waa la diray. Ka eeg iimaylkaaga.",
    "auth.google-disabled": "Google sign-in lagama hawlgelin Firebase-ka mashruucan.",
    "profile.eyebrow": "AKOONKAAGA",
    "profile.title": "Akoon",
    "profile.description": "Maamul magacaaga iyo faahfaahinta akoontiga.",
    "profile.email": "Cinwaanka iimaylka",
    "profile.name": "Magaca muuqda",
    "profile.name-placeholder": "Magacaaga",
    "profile.save": "Kaydi xogta",
    "profile.saving": "Xogta akoonka ayaa la kaydinayaa...",
    "profile.saved": "Xogta akoonkaaga waa la cusboonaysiiyay.",
    "profile.save-error": "Xogta akoonka lama cusboonaysiin. Mar kale isku day.",
    "profile.import-error": "Hawlaha qalabkan lama soo gelin karin.",
    "profile.sign-in-required": "Gal si aad u maamusho akoonkaaga. Hawlaha qalabkan si gooni ah ayay u jiraan ilaa aad doorato inaad soo geliso.",
    "profile.import-local": "Hawlaha qalabkan soo geli",
    "notifications.title": "Xusuusinta hawlaha",
    "notifications.description": "Daar ogeysiisyada si laguugu xusuusiyo marka hawl la gaaro.",
    "notifications.enable": "Daar xusuusinta",
    "notifications.enabled": "Xusuusintu way ka shaqaynaysaa qalabkan.",
    "notifications.denied": "Ogeysiisyadu waa xanniban yihiin. Ka oggolow dejimaha biraawsarka.",
    "notifications.unsupported": "Biraawsarkani ma taageero ogeysiisyada hawlaha.",
    "notifications.task-due": "Xusuusin hawl",
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
const taskDateInput = document.querySelector("#task-date");
const taskTimeInput = document.querySelector("#task-time");
const taskPriorityInput = document.querySelector("#task-priority");
const dataStats = {
  total: document.querySelector("#stat-total"),
  completed: document.querySelector("#stat-completed"),
  pending: document.querySelector("#stat-pending"),
  today: document.querySelector("#stat-today")
};
const notificationStatus = document.querySelector("#notification-status");
const notificationEnable = document.querySelector("#notification-enable");
const profileForm = document.querySelector("#profile-form");
const profileName = document.querySelector("#profile-name");
const profileStatus = document.querySelector("#profile-status");
const profileAuthRequired = document.querySelector("#profile-auth-required");
const importLocalData = document.querySelector("#import-local-data");
const themeToggles = document.querySelectorAll(".theme-toggle");
const languageButtons = document.querySelectorAll("[data-language]");

let today = new Date();
let calendarDate = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let language = "en";
let notesHaveError = false;
let tasksHaveError = false;
let signedInVerified = false;
let dataOwnerUid = "";

function storageKey(key) {
  return dataOwnerUid ? `${key}:${dataOwnerUid}` : key;
}

function localDateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function translate(key, values = {}) {
  return translations[language][key].replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}

function getTaskTitle(task) {
  const starterTask = starterTasks.find((item) => item.id === task.id && item.title === task.title);
  return starterTask ? translate(`starter.${starterTask.id}`) : task.title;
}

function getStarterTasks() {
  return starterTasks.map((task) => ({ ...task }));
}

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(storageKey(STORAGE_KEY));
    if (savedTasks === null) return dataOwnerUid ? [] : getStarterTasks();

    const parsedTasks = JSON.parse(savedTasks);
    if (!Array.isArray(parsedTasks) || !parsedTasks.every((task) =>
      task &&
      (typeof task.id === "number" || typeof task.id === "string") &&
      typeof task.title === "string" &&
      typeof task.completed === "boolean" &&
      (task.date === undefined || /^\d{4}-\d{2}-\d{2}$/.test(task.date)) &&
      (task.time === undefined || /^\d{2}:\d{2}$/.test(task.time)) &&
      (task.priority === undefined || ["low", "medium", "high"].includes(task.priority))
    )) {
      throw new Error("Saved tasks have an invalid format.");
    }

    return parsedTasks;
  } catch (error) {
    console.error("Could not load saved tasks:", error);
    tasksHaveError = true;
    return dataOwnerUid ? [] : getStarterTasks();
  }
}

let tasks = loadTasks();

function saveTasks({ broadcast = true } = {}) {
  try {
    localStorage.setItem(storageKey(STORAGE_KEY), JSON.stringify(tasks));
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

function refreshDailyView() {
  const nextDay = new Date();
  if (nextDay.toDateString() === today.toDateString()) return;
  const previousDay = today;
  today = nextDay;
  if (selectedDate.toDateString() === previousDay.toDateString()) {
    selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }
  updateDate();
  renderCalendar();
  renderTasks();
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
    const savedLanguage = localStorage.getItem(storageKey(LANGUAGE_STORAGE_KEY));
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
  notificationStatus.textContent = translate(getNotificationStatusKey());
  notificationEnable.textContent = translate("notifications.enable");
  if (profileStatus.dataset.statusKey) {
    profileStatus.textContent = translate(profileStatus.dataset.statusKey);
  }
  if (signedInVerified) {
    document.querySelectorAll("#account-button [data-i18n], #settings-account-button [data-i18n]").forEach((label) => {
      label.textContent = translate("auth.account-title");
    });
    document.querySelectorAll("#account-button, #settings-account-button").forEach((button) => {
      button.setAttribute("aria-label", translate("auth.account-title"));
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
    return localStorage.getItem(storageKey(THEME_STORAGE_KEY)) === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Could not load theme preference:", error);
    return "light";
  }
}

function loadNotes() {
  try {
    notesHaveError = false;
    return localStorage.getItem(storageKey(NOTES_STORAGE_KEY)) || "";
  } catch (error) {
    console.error("Could not load notes:", error);
    notesHaveError = true;
    notesStatus.textContent = translate("notes.load-error");
    return "";
  }
}

function getNotificationStatusKey() {
  if (!("Notification" in window)) return "notifications.unsupported";
  if (Notification.permission === "denied") return "notifications.denied";
  try {
    if (Notification.permission === "granted" &&
        localStorage.getItem(storageKey(NOTIFICATIONS_STORAGE_KEY)) === "enabled") {
      return "notifications.enabled";
    }
  } catch (error) {
    console.error("Could not read reminder preference:", error);
  }
  return "notifications.description";
}

function checkTaskReminders() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  try {
    if (localStorage.getItem(storageKey(NOTIFICATIONS_STORAGE_KEY)) !== "enabled") return;
  } catch (error) {
    console.error("Could not read reminder preference:", error);
    return;
  }

  const now = new Date();
  const dueTasks = tasks.filter((task) => {
    if (task.completed || !task.date || !task.time || task.remindedAt) return false;
    const dueAt = new Date(`${task.date}T${task.time}:00`);
    return dueAt.getTime() >= now.getTime() - 60_000
      && dueAt.getTime() <= now.getTime() + 10 * 60_000;
  });
  if (!dueTasks.length) return;

  const dueIds = new Set(dueTasks.map((task) => task.id));
  tasks = tasks.map((task) => dueIds.has(task.id) ? { ...task, remindedAt: now.toISOString() } : task);
  saveTasks();
  dueTasks.forEach((task) => {
    const options = { body: task.title, icon: "./icons/app-icon-192.png", tag: `task-${task.id}` };
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration()
        .then((registration) => registration
          ? registration.showNotification(translate("notifications.task-due"), options)
          : new Notification(translate("notifications.task-due"), options))
        .catch((error) => console.error("Could not display task reminder:", error));
    } else {
      try {
        new Notification(translate("notifications.task-due"), options);
      } catch (error) {
        console.error("Could not display task reminder:", error);
      }
    }
  });
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

    const details = document.createElement("span");
    details.className = "task-details";
    const detailParts = [];
    if (task.date) {
      const taskDay = new Date(`${task.date}T00:00:00`);
      detailParts.push(new Intl.DateTimeFormat(language === "so" ? "so-SO" : "en-US", {
        month: "short", day: "numeric"
      }).format(taskDay));
    }
    if (task.time) detailParts.push(task.time);
    if (task.priority) detailParts.push(`${translate("task.priority")}: ${translate(`priority.${task.priority}`)}`);
    details.textContent = detailParts.join(" · ");

    copy.append(title, subtitle);
    if (detailParts.length) copy.append(details);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.className = "task-edit";
    editButton.type = "button";
    editButton.textContent = translate("task.edit");
    editButton.setAttribute("aria-label", `${translate("task.edit")}: ${displayTitle}`);
    editButton.addEventListener("click", () => startTaskEdit(task, displayTitle, item));

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

function startTaskEdit(task, currentTitle, item) {
  const form = document.createElement("form");
  form.className = "task-edit-form";

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentTitle;
  input.maxLength = 100;
  input.required = true;
  input.setAttribute("aria-label", translate("task.edit-input"));

  const date = document.createElement("input");
  date.type = "date";
  date.value = task.date || localDateKey();
  date.setAttribute("aria-label", translate("task.date"));

  const time = document.createElement("input");
  time.type = "time";
  time.value = task.time || "";
  time.setAttribute("aria-label", translate("task.time"));

  const priority = document.createElement("select");
  priority.setAttribute("aria-label", translate("task.priority"));
  ["low", "medium", "high"].forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = translate(`priority.${value}`);
    priority.append(option);
  });
  priority.value = task.priority || "medium";

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
  form.append(input, date, time, priority, actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) {
      input.focus();
      return;
    }

    tasks = tasks.map((item) => {
      if (item.id !== task.id) return item;
      const savedTask = { ...item };
      delete savedTask.remindedAt;
      return {
        ...savedTask,
        title,
        date: date.value,
        time: time.value,
        priority: priority.value
      };
    });
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
  const todaysTasks = tasks.filter((task) => !task.date || task.date === localDateKey());
  const todaysCompleted = todaysTasks.filter((task) => task.completed).length;

  taskCount.textContent = translate(totalTasks === 1 ? "task.count-one" : "task.count-many", { count: totalTasks });
  dataStats.total.textContent = String(totalTasks);
  dataStats.completed.textContent = String(completedTasks);
  dataStats.pending.textContent = String(totalTasks - completedTasks);
  dataStats.today.textContent = `${todaysCompleted} / ${todaysTasks.length}`;
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
  checkTaskReminders();
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

  tasks.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    completed: false,
    date: taskDateInput.value || localDateKey(),
    time: taskTimeInput.value,
    priority: taskPriorityInput.value
  });
  saveTasks();
  taskInput.value = "";
  taskTimeInput.value = "";
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
      localStorage.setItem(storageKey(LANGUAGE_STORAGE_KEY), selectedLanguage);
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
    localStorage.setItem(storageKey(NOTES_STORAGE_KEY), notesInput.value);
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
      localStorage.setItem(storageKey(THEME_STORAGE_KEY), theme);
    } catch (error) {
      console.error("Could not save theme preference:", error);
    }
    dispatchLocalDataChange();
  });
});

notificationEnable.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    notificationStatus.textContent = translate("notifications.unsupported");
    return;
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      localStorage.setItem(storageKey(NOTIFICATIONS_STORAGE_KEY), "enabled");
      notificationStatus.textContent = translate("notifications.enabled");
      checkTaskReminders();
    } else {
      notificationStatus.textContent = translate(permission === "denied"
        ? "notifications.denied"
        : "notifications.description");
    }
  } catch (error) {
    console.error("Could not enable task reminders:", error);
    notificationStatus.textContent = translate("notifications.unsupported");
  }
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileStatus.dataset.statusKey = "profile.saving";
  profileStatus.textContent = translate("profile.saving");
  profileForm.querySelector('button[type="submit"]').disabled = true;
  window.dispatchEvent(new CustomEvent("mydaily:update-profile", {
    detail: { displayName: profileName.value.trim() }
  }));
});

importLocalData.addEventListener("click", () => {
  if (!dataOwnerUid) return;
  try {
    const alreadyImported = localStorage.getItem(`${IMPORT_STORAGE_KEY}:${dataOwnerUid}`) === "true";
    if (alreadyImported) {
      importLocalData.hidden = true;
      return;
    }

    const localTasksValue = localStorage.getItem(STORAGE_KEY);
    const importedTasks = localTasksValue ? JSON.parse(localTasksValue) : [];
    if (!Array.isArray(importedTasks) || !importedTasks.every((task) =>
      task &&
      (typeof task.id === "number" || typeof task.id === "string") &&
      typeof task.title === "string" &&
      typeof task.completed === "boolean" &&
      (task.date === undefined || /^\d{4}-\d{2}-\d{2}$/.test(task.date)) &&
      (task.time === undefined || /^\d{2}:\d{2}$/.test(task.time)) &&
      (task.priority === undefined || ["low", "medium", "high"].includes(task.priority))
    )) {
      throw new Error("On-device tasks have an invalid format.");
    }
    const imported = importedTasks.map((task, index) => ({
      ...task,
      id: `device-${Date.now()}-${index}`
    }));
    if (!notesInput.value) {
      notesInput.value = localStorage.getItem(NOTES_STORAGE_KEY) || "";
      localStorage.setItem(storageKey(NOTES_STORAGE_KEY), notesInput.value);
    }
    localStorage.setItem(`${IMPORT_STORAGE_KEY}:${dataOwnerUid}`, "true");
    tasks = [...imported, ...tasks];
    importLocalData.hidden = true;
    saveTasks();
    renderTasks();
  } catch (error) {
    console.error("Could not import on-device planner data:", error);
    profileStatus.dataset.statusKey = "profile.import-error";
    profileStatus.textContent = translate("profile.import-error");
  }
});

taskDateInput.value = localDateKey();
notificationStatus.textContent = translate(getNotificationStatusKey());
setLanguage(loadLanguage());
notesInput.value = loadNotes();
window.setInterval(checkTaskReminders, 30_000);
window.setInterval(refreshDailyView, 60_000);
document.addEventListener("visibilitychange", checkTaskReminders);
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
      localStorage.setItem(storageKey(LANGUAGE_STORAGE_KEY), remoteLanguage);
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
      localStorage.setItem(storageKey(THEME_STORAGE_KEY), remoteTheme);
    } catch (error) {
      console.error("Could not save synced theme preference locally:", error);
    }
    setTheme(remoteTheme);
  }
  if (typeof notes === "string") {
    notesInput.value = notes;
    try {
      localStorage.setItem(storageKey(NOTES_STORAGE_KEY), notes);
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
  const { verified, statusKey, uid } = event.detail;
  const nextOwnerUid = verified ? uid || "" : "";
  if (nextOwnerUid !== dataOwnerUid) {
    dataOwnerUid = nextOwnerUid;
    profileStatus.dataset.statusKey = "";
    profileStatus.textContent = "";
    profileForm.querySelector('button[type="submit"]').disabled = false;
    tasks = loadTasks();
    notesInput.value = loadNotes();
    setLanguage(loadLanguage());
    setTheme(loadTheme());
    renderTasks();
  }
  signedInVerified = Boolean(verified);
  profileForm.hidden = !signedInVerified;
  profileAuthRequired.hidden = signedInVerified;
  importLocalData.hidden = !signedInVerified;
  if (signedInVerified) {
    try {
      importLocalData.hidden = localStorage.getItem(`${IMPORT_STORAGE_KEY}:${dataOwnerUid}`) === "true"
        || localStorage.getItem(STORAGE_KEY) === null;
    } catch (error) {
      console.error("Could not read the device import status:", error);
      importLocalData.hidden = true;
    }
  }
  profileName.value = "";
  const accountButtons = document.querySelectorAll("#account-button, #settings-account-button");
  const accountStatus = document.querySelector("#account-status");
  accountButtons.forEach((button) => {
    button.dataset.signedIn = String(Boolean(verified));
    button.setAttribute("aria-label", translate(verified ? "auth.account-title" : "auth.sign-in"));
    const label = button.querySelector("[data-i18n]");
    if (label) label.textContent = translate(verified ? "auth.account-title" : "auth.sign-in");
  });
  accountStatus.textContent = translate(statusKey || "auth.local-mode");
});
window.addEventListener("mydaily:profile-updated", () => {
  profileName.value = "";
  profileStatus.dataset.statusKey = "profile.saved";
  profileStatus.textContent = translate("profile.saved");
});
window.addEventListener("mydaily:profile-error", () => {
  profileStatus.dataset.statusKey = "profile.save-error";
  profileStatus.textContent = translate("profile.save-error");
});
window.addEventListener("mydaily:profile-save-finished", () => {
  profileForm.querySelector('button[type="submit"]').disabled = false;
});
window.addEventListener("mydaily:cloud-status", (event) => {
  const { statusKey } = event.detail;
  document.querySelector("#account-status").textContent = translate(statusKey);
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
