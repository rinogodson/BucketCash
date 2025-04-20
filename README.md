# BucketCash

## Project Structure:
```
📦 
├─ BucketCash-backend
│  ├─ db
│  │  └─ database.go
│  ├─ go.mod
│  ├─ go.sum
│  ├─ handlers
│  │  ├─ auth.go
│  │  ├─ buckets.go
│  │  └─ transfers.go
│  ├─ main.go
│  ├─ middleware
│  │  └─ auth.go
│  ├─ models
│  │  └─ models.go
│  └─ utils
│     └─ jwt.go
├─ BucketCash-frontend
│  ├─ .gitignore
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ notes.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ components
│  │  │  ├─ BottomBar.css
│  │  │  ├─ BottomBar.jsx
│  │  │  ├─ Bucket
│  │  │  │  ├─ Bucket.css
│  │  │  │  └─ Bucket.jsx
│  │  │  ├─ BucketContainer
│  │  │  │  ├─ BucketContainer.css
│  │  │  │  └─ BucketContainer.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ Logo.css
│  │  │  ├─ Logo.jsx
│  │  │  ├─ Logs.css
│  │  │  ├─ Logs.jsx
│  │  │  ├─ Pond
│  │  │  │  ├─ Pond.css
│  │  │  │  └─ Pond.jsx
│  │  │  ├─ ToolButton.jsx
│  │  │  └─ Toolbar
│  │  │     ├─ Toolbar.css
│  │  │     └─ Toolbar.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
└─ README.md
```