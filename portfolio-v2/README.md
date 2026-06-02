# Akoi Cybersecurity Portfolio

Production-ready single-page portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode, no `any`)
- **Styling**: Tailwind CSS
- **Fonts**: Space Mono + DM Sans (via `next/font/google`)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
app/
  layout.tsx          — Root layout with metadata & fonts
  page.tsx            — Main page, assembles all sections
  globals.css         — Global styles + Tailwind directives

components/
  Navbar.tsx          — Sticky navbar with smooth scroll
  HeroSection.tsx     — Hero with CTAs and stats
  CredentialsSection.tsx — Education + Credly badge
  SkillsSection.tsx   — Skills matrix with Tailwind badges
  ProjectsSection.tsx — Project cards
  ContactSection.tsx  — LinkedIn activity + typed contact form
  Footer.tsx
  Divider.tsx
  ScrollRevealProvider.tsx — Client-side IntersectionObserver wrapper

hooks/
  useScrollReveal.ts  — Scroll-triggered reveal animation

lib/
  data.ts             — All site content as typed constants

types/
  index.ts            — Shared TypeScript interfaces
```

## Customization

All content lives in `lib/data.ts` — update your projects, skills, credentials,
and activity items there. No hunting through JSX.

## Contact Form

The form is wired for submission simulation. To connect EmailJS:

1. `npm install @emailjs/browser`
2. In `ContactSection.tsx`, replace the `setTimeout` block with:

```ts
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { from_name: form.name, from_email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
);
```
