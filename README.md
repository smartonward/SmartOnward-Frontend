# SmartOnward Technologies — Next.js Application

A modern, production-ready web application for SmartOnward Technologies, built with Next.js 14, Tailwind CSS, and Supabase.

## 🚀 Tech Stack
- **Framework:** Next.js 14 (App Router) + React + TypeScript
- **Styling:** Tailwind CSS (Custom Design System, Glassmorphism)
- **Database / Backend:** Supabase (for Growth Audit lead captures)
- **Deployment:** Optimized for Vercel or Hostinger
- **SEO:** Built-in dynamic metadata, sitemap.xml, robots.txt

## 🛠️ Features
- **Responsive Layout:** Custom sticky floating header and mobile-optimized menus.
- **Dynamic Services Pages:** Dedicated pages for AI Automation, Digital Marketing, Branding, Video/Reels, Website Development, and Social Media Management.
- **Lead Generation:** Integrated "Growth Audit" modal form that saves directly to Supabase.
- **Legal Compliance:** Built-in Cookie Policy, Privacy Policy, Terms of Service, and floating Cookie Banner.
- **Analytics:** Google Analytics (`G-HZ5THH5NXZ`) pre-configured.

---

## 1. Local Development

First, make sure you have your `.env.local` file configured with your Supabase credentials. (See `.env.example`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 2. Environment Variables

To run the site fully, you need a Supabase project for the form submissions. Create an `.env.local` file at the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

*Note: When deploying to Hostinger or Vercel, make sure to add these variables to your production environment settings!*

## 3. Project Structure

- **`app/page.tsx`**: The main landing page.
- **`app/components/`**: Reusable components (`Header.tsx`, `Footer.tsx`, `AuditModal.tsx`, `CookieBanner.tsx`).
- **`app/lib/`**: Utility files (like `supabase-config.ts` for database connections).
- **`app/(legal)/`**: Routes for Cookie Policy, Privacy Policy, etc.
- **`app/(services)/`**: The individual service pages.
- **`app/globals.css`**: Tailwind directives and custom ambient animations.

## 4. Editing Content

- **Contact Info:** To update WhatsApp numbers or Emails, check `app/components/Header.tsx`, `app/components/Footer.tsx`, and `app/components/StruggleSection.tsx`.
- **Database Table:** The Audit Modal pushes to a Supabase table called `growth_audits`. If you change form fields, make sure to update your Supabase table schema to match.

## 5. Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to Vercel and import the repository.
3. Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the Environment Variables settings.
4. Click Deploy.

### Hostinger (VPS or Node.js Hosting)
1. Ensure Node.js is installed on your Hostinger panel.
2. Clone the repository.
3. Add the `.env.local` variables via the hPanel.
4. Run `npm install` and `npm run build`.
5. Start the production server using `npm start` (or PM2).
