# Bravya Web Solutions — Company Website

Production-ready marketing site for Bravya Web Solutions built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui. The project ships with MDX-powered content, server actions, and SEO optimisations tailored for high-performing lead generation websites.

## Features
- **Next.js 14 (App Router)** with hybrid rendering, server components, and server actions.
- **Tailwind CSS + shadcn/ui** design system with accessible, responsive components and dark mode.
- **Content authored in MDX** for blog posts and case studies with automatic reading time, search, and JSON-LD metadata.
- **Lead capture** via contact form using zod validation, file upload support, and Nodemailer integration (mock-friendly when SMTP is absent).
- **SEO-ready**: dynamic metadata, sitemap, robots.txt, structured data (Organization, WebSite, BreadcrumbList, BlogPosting, CreativeWork), and dynamic Open Graph images.
- **Analytics-ready** with @vercel/analytics and a slot for external providers.
- **Developer experience**: ESLint, Prettier (+ Tailwind plugin), TypeScript strictness, Vitest test harness, Husky + lint-staged pre-commit hook.

## Getting Started

### Prerequisites
- Node.js 18.17+ (match your deployment target, e.g. Vercel).
- npm 9+ (or pnpm/yarn if you adapt the scripts).

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Access the site at http://localhost:3000.

### Additional Scripts
- `npm run build` — production build.
- `npm start` — run the compiled build.
- `npm run lint` — ESLint (Next.js core-web-vitals + TypeScript rules).
- `npm run format` — Prettier with Tailwind plugin.
- `npm run typecheck` — TypeScript in no-emit mode.
- `npm test` — Vitest (JS DOM environment).

Husky installs automatically after `npm install`. To re-install manually, run `npm run prepare`.

## Environment Variables
Copy `.env.example` to `.env.local` and populate:
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
CONTACT_TO=contact@bravyaweb.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```
If SMTP variables are omitted, the contact form logs a warning and pretends success for local development.

## Content Management (MDX)
- **Blog posts** live in `content/blog`. Each file is an `.mdx` document with frontmatter (`title`, `description`, `date`, `categories`, `tags`).
- **Case studies** live in `content/case-studies` with additional fields (`problem`, `approach`, `stack`, `outcomes`, `coverImage`, `images`).
- Files are automatically discovered, sorted by date, and exposed at `/blog/[slug]` and `/case-studies/[slug]`.
- To add a new entry, duplicate an existing file, update the frontmatter and content, then commit.

## Branding & UI Customisation
- **Colors** are centralised in `tailwind.config.ts` under the `brand` palette. Adjust values to update buttons, accents, and badges.
- **Typography** uses the Inter and Fira Code Google fonts (`lib/fonts.ts`). Swap fonts there and update Tailwind if needed.
- **Logos & imagery** live in `public/`. Replace `public/logo.svg` and the placeholder assets under `public/images/...` with production-ready files.
- UI primitives (buttons, cards, etc.) live in `components/ui/` making shadcn-based adjustments straightforward.

## Contact Form Internals
- Client component: `components/contact-form.tsx` (uses server actions + optimistic UI).
- Server action: `app/contact/actions.ts` validates input via zod, enforces a 5 MB upload limit, and invokes the API route.
- API route: `app/api/contact/route.ts` sends the email via Nodemailer (`lib/email.ts`).
- Reuse `lib/validation.ts` and `lib/email.ts` if you integrate other forms.

## Metadata & SEO
- Route-level metadata is defined via `generateMetadata` or static `metadata` objects.
- JSON-LD helpers live in `lib/seo.ts`.
- Dynamic Open Graph images are served from `app/api/og/route.tsx`. Update the design there if needed.
- Sitemap and robots entries are generated in `app/sitemap.ts` and `app/robots.ts`.

## Deployment
This project is Vercel-ready:
1. Set environment variables in the Vercel dashboard (`SMTP_*`, `CONTACT_TO`, optional analytics IDs).
2. Connect the repository and deploy. Build command: `npm run build`. Install command: `npm install`. Output directory: `.next`.
3. Optionally enable Vercel Analytics or integrate Google Analytics via `NEXT_PUBLIC_ANALYTICS_ID`.

For self-hosting, run `npm run build` followed by `npm start` behind your preferred Node.js process manager.

## Testing & Quality
- Run `npm run lint`, `npm run typecheck`, and `npm test` before pushing changes.
- The contact form has built-in error states; configure SMTP credentials locally to exercise the full flow.

Happy shipping!
