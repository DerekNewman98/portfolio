# Portfolio

Personal portfolio site built with React, TypeScript, and Vite.

The site is structured as a small page-based frontend for research, demos, courses, and scientific visual communication. It includes:

- a central animated brain canvas
- a particle-network background
- page routing for home, research, demos, and courses
- a GitHub Pages deployment workflow

## Local Development

Prerequisites:

- Node.js 20+

Run locally:

```bash
npm install
npm run dev
```

The local dev server will start on the Vite default port unless you pass a custom one.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo is configured for deployment to GitHub Pages from the `main` branch using GitHub Actions.

Important:

- the current Vite base path is set for a repo named `portfolio`
- if you rename the GitHub repository, update the `repoBase` value in [vite.config.ts](/Users/derek/Documents/Github/portfolio/vite.config.ts)

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` > `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` and the workflow will deploy the contents of `dist/`.
