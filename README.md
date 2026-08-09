# Abi Malar R — Portfolio

A premium, dark-themed personal portfolio built with React, Vite, Tailwind CSS and Framer Motion. Fully responsive, animated, SEO-structured, and ready to deploy.

## Tech stack

- **React 18** + **Vite 5** — app framework & build tool
- **Tailwind CSS** — styling, using a custom token system (colors, fonts, glow shadows) defined in `tailwind.config.js`
- **Framer Motion** — entrance animations, scroll reveals, hover micro-interactions
- **Lucide React** — icon set

## Project structure

```
portfolio/
├── index.html              # SEO meta tags, fonts, entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── RESUME_PLACEHOLDER.txt   # replace with your real resume.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/                # content lives here — edit these, not the components
    │   ├── skills.js
    │   ├── projects.js
    │   ├── experience.js
    │   ├── education.js
    │   └── achievements.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SectionHeading.jsx
```

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

This starts a dev server, usually at `http://localhost:5173`.

## 3. Build for production

```bash
npm run build
```

Output is written to `dist/`. To sanity-check the production build locally:

```bash
npm run preview
```

## Before you deploy — a few things to personalize

1. **Resume**: add your actual PDF as `public/resume.pdf` (the Navbar and Hero "Download Resume" buttons link to `/resume.pdf`). Remove `public/RESUME_PLACEHOLDER.txt` once done.
2. **Contact links**: update the email, LinkedIn and GitHub URLs in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
3. **Project links**: update the `github` and `demo` URLs for each project in `src/data/projects.js`.
4. **Contact form**: the form currently only shows a confirmation state — wire the `handleSubmit` function in `src/components/Contact.jsx` to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) to actually deliver messages.
5. **Domain / SEO**: replace `https://your-domain-here.com` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with your real deployed URL once you have one.
6. **Achievements**: `src/data/achievements.js` currently holds placeholder certification cards — replace with real ones as you earn them.

## Deployment

### Option A — Vercel (recommended, zero config)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`. Click **Deploy**.
4. Every push to your main branch redeploys automatically.

Or from the CLI:

```bash
npm install -g vercel
vercel
```

### Option B — GitHub Pages

1. Install the deploy helper:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these two lines to `package.json`:

   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. In `vite.config.js`, set the base path to your repo name:

   ```js
   export default defineConfig({
     base: "/<repo-name>/",
     plugins: [react()],
   });
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

5. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

## Accessibility & performance notes

- All interactive elements have visible focus states (`:focus-visible`).
- `prefers-reduced-motion` is respected — animations are disabled for users who request it.
- Images/icons are decorative SVG (Lucide) and don't require alt text; if you add photos, include descriptive `alt` attributes.
- Semantic HTML is used throughout (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy `h1` → `h2` → `h3`).


## Portfolio update

This version includes additional sections for:
- What I Do
- Leadership & Activities
- Currently Learning
- Expanded About content
- Expanded project technology details

### Before publishing
Replace the placeholder GitHub, LinkedIn and email links in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
Add your real `public/resume.pdf` file if you want the Resume buttons to work.
Update `src/data/achievements.js` with only verified certificates/awards you want to display.
