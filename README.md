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
verifying their email. Existing local tasks are merged with account tasks at
first sign-in; local tasks are kept, and a non-empty account note takes
precedence over a local note.

## Install on phones and tablets

The web app is a Progressive Web App. Serve it over HTTPS, then use the browser's
**Install app** / **Add to Home Screen** action. On iPhone and iPad, open the site
in Safari and choose **Share → Add to Home Screen**. The service worker caches
the app shell for offline use; Firebase account features require a connection.

## iOS App Store

The PWA can be installed from Safari without the App Store. A future App Store
release uses the included Capacitor wrapper configuration. To generate or
refresh the iOS project, run `npm install`, then `npm run ios:add` the first
time or `npm run ios:sync` after web changes. The generated `ios/` project can
be opened with `npm run ios:open` on macOS with Xcode installed.

Before submitting, configure Firebase, test sign-in and email verification on
physical devices, set the final iOS bundle identifier and app icons, provide
Apple's required privacy disclosures, and complete signing and App Store
review. Building and signing the iOS app require macOS and Xcode; GitHub Pages
continues to serve the regular web/PWA version.
