# FRONT-END

>## Overview

![Frontend Image](https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png)

This project is built with Vite + React.js + TypeScript.

To run the project, you need to run the following command in the main or root folder:

1. Server
```zsh
$ npm run build
```
2. Developer
```zsh
$ npm run dev
```

## Folder Architecture
---------------------------------------
```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂helpers
 ┣ 📂hooks
 ┣ 📂interfaces
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂services
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## Routes
---------------------------------------
The available routes or endpoints are:

```
-> /
   └─ user
      └─ :id
```

## Commands
---------------------------------------
The commands available for the execution and management of the project are:

1. Run the project with tsc and vite once as server. 
```zsh
$ npm run build
```

2. Run the project with vite waiting for the changes to be updated. 
```zsh
$ npm run dev
```

3. Run the project in preview mode.
```zsh
$ npm run preview
```

## Libraries
---------------------------------------
The project has the following dependency libraries:

```
->  Dependencisas:
    ├─"axios": "^1.1.3",
    ├─"daisyui": "^2.38.0",
    ├─"localforage": "^1.10.0",
    ├─"match-sorter": "^6.3.1",
    ├─"react": "^18.2.0",
    ├─"react-dom": "^18.2.0",
    ├─"react-router-dom": "^6.4.3",
    ├─"sort-by": "^1.2.0",
    ├─"sweetalert2": "^11.6.7",
    └─"sweetalert2-react-content": "^5.0.7"
    
->  devDependencies
    ├─"@types/react": "^18.0.22",
    ├─"@types/react-dom": "^18.0.7",
    ├─"@vitejs/plugin-react": "^2.2.0",
    ├─"autoprefixer": "^10.4.13",
    ├─"postcss": "^8.4.18",
    ├─"tailwindcss": "^3.2.1",
    ├─"typescript": "^4.6.4",
    └─"vite": "^3.2.0"
```