# My Daily Tasks – Daily Productivity App

Responsive, bilingual daily planner built with HTML, CSS, and JavaScript. The
app works offline with device-local storage and can optionally sync verified
accounts through Firebase Authentication and Cloud Firestore.

## Run locally

Run `npm install` once, then `npm run dev` and open
`http://127.0.0.1:5173/`. The included server binds only to this computer.
Alternatively, open the folder in VS Code and use the Live Server extension.
HTTPS or localhost is required for service workers.

## Configure Firebase

1. Create a Firebase project and register a **Web app**.
2. In Firebase Authentication, enable **Email/Password** sign-in.
3. Create a Cloud Firestore database.
4. Add `localhost` and your deployed site domain to Authentication's authorized
   domains.
5. Copy the web app's `apiKey`, `authDomain`, `projectId`, and `appId` into
   `firebase-config.js`.
6. Publish `firestore.rules` in the Firestore Rules console. Rules restrict each
   verified account to its own planner document.

The Firebase web configuration is visible to users of a web app. Never add a
service-account JSON file or private key to this repository. Firestore access
is protected by the rules, not by hiding the web API key.

Account creation sends an email verification link. Users can sync only after
verifying their email. Email/password and Google sign-in are supported. Enable
both providers in Firebase Authentication and add every deployed domain to the
authorized domains list. Google sign-in uses a browser popup and may require a
native OAuth plugin before it can be used inside a Capacitor WebView.

Each account has a separate local cache and Firestore document. Tasks saved on
this device are not automatically copied into a newly signed-in account; use
**Profile → Import tasks from this device** to explicitly import them. This
avoids exposing one person's local tasks to another account on a shared device.
Firestore rules allow only the verified account owner to read and write their
own planner document.

Task reminders use the browser Notification API and fire up to ten minutes
before a task while the app is open. Grant notification permission from Settings.
Reliable background/push delivery while the app is closed requires a push
notification service and server-side scheduling, which are not configured in
this project.

## Install on phones and tablets

The web app is a Progressive Web App. Serve it over HTTPS, then use the browser's
**Install app** / **Add to Home Screen** action. On iPhone and iPad, open the site
in Safari and choose **Share → Add to Home Screen**. The service worker caches
the app shell for offline use; Firebase account features require a connection.

## iOS App Store

The PWA can be installed from Safari without the App Store. Capacitor iOS and
Android wrappers use the existing project configuration. Run `npm run ios:sync`
or `npm run android:sync` after web changes; the corresponding `*:add` command
is only needed the first time for a platform. Open the projects with
`npm run ios:open` (macOS with Xcode) or `npm run android:open` (Android Studio).
Apple signing/builds require macOS and Xcode; Android release builds require
Android Studio/SDK and signing configuration.

Before submitting, configure Firebase, publish the Firestore rules, test sign-in
and email verification on physical devices, set final bundle identifiers and
app icons, provide store privacy disclosures, and complete signing and store
review. GitHub Pages continues to serve the regular web/PWA version.
