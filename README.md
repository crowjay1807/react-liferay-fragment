# Liferay React Fragment

This project is a **React application integrated with Liferay Fragment**.  
It is built using **Create React App (CRA)** and includes a custom script to **build and sync React output into a Liferay Fragment structure** automatically.

The goal is to develop React UI normally, then deploy it as a **Liferay Fragment** without manual copy/paste.

---

## 📦 Tech Stack

- React (Create React App)
- React DOM
- Liferay Fragment
- Node.js
- Custom sync script (`sync-to-liferay.js`)

---

## 📁 Project Structure (Important)

```text
.
├── public/
│   ├── index.html                # Default CRA entry (dev only)
│   └── index-liferay.html        # Optional Liferay-specific HTML
├── src/
│   ├── App.js                    # Main React component
│   ├── App.css
│   ├── index.js                  # React bootstrap
│   ├── assets/
│   └── liferay-fragment/          # (Optional source for fragment logic)
├── liferay-test/                 # Liferay workspace (target for sync)
│   └── src/
│       └── liferay-fragment/
│           ├── collection.json
│           └── fragments/
│               └── react-hello-world/
│                   ├── fragment.json
│                   ├── index.html
│                   ├── index.js
│                   ├── index.css
│                   └── resources/
│                       └── static/
├── sync-to-liferay.js             # Sync build → Liferay Fragment
├── craco.config.js
├── package.json
└── README.md
```
---
## 🚀 Available Scripts

npm start

Runs the React app in development mode.

npm start

App runs at: http://localhost:3000

Hot reload enabled

Used for development only

❌ Not used by Liferay

npm test

Runs tests in watch mode.

npm test

npm run build

Builds the React app for production.

npm run build


Output goes to build/

Generates optimized static files:

static/js/main.*.js

static/css/main.*.css

npm run sync

Syncs the React build output into a Liferay Fragment structure.

npm run sync


What this script does:

Verifies build/ exists

Copies build/static → fragment resources/

Auto-detects hashed main.*.js and main.*.css

Generates:

index.html

index.js

index.css

fragment.json

Updates collection.json

⭐ npm run build:liferay (Recommended)

Build + sync in one command.

npm run build:liferay


Equivalent to:

npm run build
npm run sync

---
## 🧩 How React Works Inside Liferay

React is built normally with CRA

The build exposes a global render function (for example: window.ReactHelloWorldApp)

Liferay Fragment:

Loads static JS/CSS from resources

Calls window.ReactHelloWorldApp.render(rootElement)

React mounts into:

<div id="react-root"></div>


defined inside the fragment index.html

---
## 📥 Deploy to Liferay

After running:

npm run build:liferay


Then:

cd liferay-test
npm run compress


Choose No when asked about deployment descriptor

Import the generated ZIP file into Liferay → Fragments

---
## ⚠️ Notes & Common Pitfalls

❌ Do NOT expect App.js to render automatically in Liferay

✅ React must be mounted manually via fragment index.js

❌ npm start is NOT used in Liferay

✅ Only build/ output is used

---
## 🧠 Summary Flow

React Dev (App.js)
      ↓
npm run build
      ↓
static/js + static/css
      ↓
npm run sync
      ↓
Liferay Fragment
      ↓
Rendered inside Portal

---
## 📚 References

https://reactjs.org

https://learn.liferay.com

https://github.com/facebook/create-react-app
