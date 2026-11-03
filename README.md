<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00aaff,100:0055ff&height=200&section=header&text=ITSFOUR&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Personal%20Website&descSize=22&descAlignY=60" width="100%" alt="itsfour personal website banner">
  <br>
  <img src="./img/itsfourvn.svg" width="150" alt="itsfour animated name">
  <br><br>

  <p>
    [![Netlify Status](https://api.netlify.com/api/v1/badges/e7548ae3-b197-40fd-ab49-c52d8b098124/deploy-status)](https://app.netlify.com/projects/thientu/deploys)
  <br>
    <img src="https://img.shields.io/badge/Platform-Web-00aaff?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web platform">
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-AGPL--3.0-blue?style=for-the-badge&logo=gnu" alt="GNU Affero General Public License v3.0"></a>
  </p>

  <p>
    <a href="https://github.com/itsfour"><img src="https://img.shields.io/badge/Personal-Portfolio-0055ff?style=for-the-badge&logo=github&logoColor=white" alt="Personal portfolio"></a>
    <img src="https://img.shields.io/badge/Hosted%20on-Netlify-00c7b7?style=for-the-badge&logo=netlify&logoColor=white" alt="Hosted on Netlify">
  </p>

  <p>A personal corner on the web, built to share projects, music, and a little bit of everyday life.</p>
</div>

<br>

---

## ✨ Features

- **Personal portfolio** — GitHub repositories, contribution stats, and language breakdown.
- **Discord integration** — Live presence and server invite preview.
- **Music player** — Browse and play tracks from the site's music collection.
- **Video backgrounds** — Media manifests are generated from the files in the repository.
- **Netlify Functions** — Visitor counter, GitHub profile data, and Discord information.
- **Responsive interface** — Designed for both desktop and mobile screens.

## 🧰 Built with

- HTML, CSS, and JavaScript
- Netlify Functions and Netlify Blobs
- Node.js

## 🚀 Run locally

```bash
npm install
npm run dev
```

Update social usernames and links in [`site-config.mjs`](./site-config.mjs). The main site and related Netlify Functions use this shared configuration.

For the GitHub profile function, add a token to the root `.dev.vars` file:

```env
GITHUB_TOKEN=your_token
```

The local dev script loads `.dev.vars` for Netlify Dev. This file is ignored by Git; **never commit or publish your token**.

Generate the media manifests without starting the development server:

```bash
npm run build
```

## ☁️ Deploy to Netlify

The repository includes [`netlify.toml`](./netlify.toml), which configures the project root as the publish directory and `netlify/functions/` as the Functions directory. Netlify runs `npm run build` during deployment.

Add `GITHUB_TOKEN` in the Netlify project's environment variables for the `/fetchgithub` endpoint. Keep secrets in Netlify's environment settings, not in source files or `netlify.toml`.

| Endpoint | Purpose |
| :--- | :--- |
| `/count` | Returns and increments the visitor counter |
| `/fetchdiscordinvite` | Loads Discord invite information |
| `/fetchlanyard` | Loads Discord presence |
| `/fetchgithub` | Loads GitHub profile data |

## 📄 License

Copyright © 2026 itsfour. This project is licensed under the [GNU Affero General Public License v3.0](./LICENSE).

<div align="center">
  <sub>Made with care by <a href="https://github.com/itsfour">itsfour</a></sub>
</div>
