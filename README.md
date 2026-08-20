# SmartOnward — Next.js Website

Exact conversion of your SmartOnward landing page into a production-ready Next.js 14 (App Router) project.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll see the exact same site.

## 2. Push it to GitHub

```bash
git init
git add .
git commit -m "Initial commit - SmartOnward website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first at https://github.com/new — don't initialize it with a README there, since this project already has one.)

## 3. Deploy it (Vercel — recommended, built by the Next.js team, free tier)

**Option A — CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option B — Dashboard:**
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Leave all settings as default (Vercel auto-detects Next.js)
4. Click Deploy

You'll get a live URL like `smartonward.vercel.app` in about a minute. Add your own domain (e.g. smartonward.com) later under Project → Settings → Domains.

## 4. Editing content later

- All page content/sections: `app/page.tsx`
- All styling/colors: `app/globals.css`
- Site title, meta description: `app/layout.tsx`
- Update the WhatsApp number (`app/page.tsx`, search for `wa.me/91XXXXXXXXXX`) and the contact email (`hello@smartonward.com`) with your real details before going live.

## Tech stack
- Next.js 14 (App Router) + TypeScript
- Plain CSS (no framework) — same styling approach as the original HTML
- Zero external dependencies beyond React/Next.js
