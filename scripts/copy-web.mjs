import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const webOutput = resolve(root, "www");
const webFiles = [
  "index.html",
  "style.css",
  "script.js",
  "firebase.js",
  "firebase-config.js",
  "manifest.webmanifest",
  "sw.js"
];

await mkdir(webOutput, { recursive: true });

for (const file of webFiles) {
  await cp(resolve(root, file), resolve(webOutput, file));
}

await cp(resolve(root, "icons"), resolve(webOutput, "icons"), { recursive: true });
console.info("Copied the My Daily Tasks web app into www/.");
