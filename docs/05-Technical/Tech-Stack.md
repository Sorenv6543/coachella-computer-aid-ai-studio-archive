# Tech Stack — Technology Choices & Rationale

**Production-Quality, Scalable, Future-Proof Technology**

> **Status note (2026-08-25):** The frontend actually shipped as **React + TypeScript + Vite + Tailwind CSS**, not the Vue 3 + Vuetify 4 + Pinia stack this doc originally planned — see the corrected Frontend Architecture, Frontend Structure, and Dependencies sections below. Everything past "Backend & Services" (Supabase, testing, deployment, analytics, integrations) is still just the **plan** — none of it is implemented in the repo yet; the live app is static, with no backend, no test runner, and no linting/CI configured.

---

## 🎯 Philosophy

We're building this like a real software company would—not a one-off website, but a sustainable platform that can grow into a full community technology center system.

Every technology choice prioritizes:
- **Maintainability** — Easy for team to work with
- **Scalability** — Can grow from 1,000 to 10,000+ users
- **Community** — Use technologies with strong communities
- **Open Source** — Where possible, for transparency
- **Performance** — Fast, responsive experience
- **Accessibility** — Built-in support for WCAG AA+

---

## 🏗️ Frontend Architecture

### Framework: React 18
**Why:** Shipped this way — the live app in `src/` is React with TypeScript, function components and hooks (no class components).  
**Version:** 18.x  
**Ecosystem:** Large community, many libraries

### Build Tool: Vite 6
**Why:** Ultra-fast development, instant reload, optimized production builds  
**Features:** Next-generation ES modules, instant HMR  
**Plugins:** `@vitejs/plugin-react`, `@tailwindcss/vite`

### Component Library: none
**Reality:** There is no Vuetify (or other) component library. All UI in `src/components/` is hand-built, styled with Tailwind utility classes directly in JSX.  
**Accessibility:** Handled manually per component — no built-in WCAG support from a library, so it needs deliberate attention (see the Brand Bible / accessibility guidance in the root `CLAUDE.md`).

### State Management: none
**Reality:** No Pinia/Redux/Zustand — `App.tsx` holds a handful of `useState` values (language, large-text toggle, modal open/selected state) and passes them down as props. Fine at the current size; revisit if the component tree grows much further.

### Styling: Tailwind CSS 4
**Why:** Utility-first, fast to iterate, no separate stylesheet to keep in sync  
**Use:** Classes directly in JSX (`className="..."`); `src/index.css` for global styles/font-face  
**Scope:** No CSS Modules or scoped styles — Tailwind's utility classes avoid the collision problem Sass/SCSS scoping was meant to solve

### Utility Libraries

| Library | Purpose |
|---------|---------|
| **lucide-react** | Icon set |
| **clsx** | Conditional className composition |
| **tailwind-merge** | Resolves conflicting Tailwind classes when composing className strings |

### Build Optimizations
- **Code Splitting:** Not yet set up (single-page app, one entry point)
- **Image Optimization:** Illustration assets are pre-exported as PNG + WebP pairs in `src/assets/images/illustrations/`; no build-time image pipeline
- **Tree Shaking:** Handled by Vite/Rollup by default
- **Minification:** Production builds minified via `npm run build`

---

## 🔌 Backend & Services

### Database: Supabase
**Why:** Open-source Firebase alternative, PostgreSQL, built-in auth  
**Features:**
- Real-time database
- Authentication (email, OAuth)
- Row-level security
- Auto-generated API
- Built-in file storage

**Tables:**
- Users (profiles, roles)
- Appointments (bookings, history)
- Workshops (details, registrations)
- Resources (guides, materials)
- Testimonials (stories, feedback)
- Donations/Payments (transaction logs)
- Volunteers (profiles, hours)
- Analytics (custom tracking)

### API: Supabase Auto-Generated REST API
**Why:** No backend code needed initially, scales as needed  
**GraphQL:** Optional upgrade as complexity increases

### Authentication
- **Primary:** Email + password (Supabase Auth)
- **Optional:** Google OAuth, Apple Sign-In
- **Admin:** Email verification, password reset

### File Storage: Supabase Storage
**What:** PDF guides, video thumbnails, user uploads  
**Security:** Private buckets, public CDN where needed

---

## 📊 Analytics & Monitoring

### Google Analytics 4
**Why:** Free, comprehensive, privacy-respecting  
**Tracks:**
- Visitor demographics
- Page engagement
- Conversion goals (bookings, signups)
- Device and browser usage
- Geographic data

### Error Tracking: Sentry (Optional)
**When to add:** Phase 2+ when we need production monitoring  
**Tracks:** JavaScript errors, performance issues

### Performance: Lighthouse
**Tools:** Chrome DevTools Lighthouse  
**Target:** 90+ score on all metrics  
**Monitoring:** Quarterly audits

---

## 🔒 Security & Compliance

### HTTPS/SSL
- **Required:** All traffic encrypted
- **Provider:** Let's Encrypt (free) or similar
- **Auto-renewal:** Automatic certificate updates

### Data Protection
- **Encryption:** In transit (HTTPS) and at rest (Supabase)
- **Backups:** Daily automated backups
- **Privacy Policy:** CCPA/GDPR compliant

### Authentication Security
- **Password Requirements:** Min 8 characters (Supabase defaults)
- **Rate Limiting:** Prevent brute force attacks
- **2FA (Optional):** For admin accounts

### Code Security
- **Dependencies:** Regular audits with `npm audit`
- **Secrets Management:** Environment variables, never in code
- **Headers:** Security headers configured (CSP, X-Frame-Options, etc.)

---

## 📱 Frontend Structure

This is the **actual current layout** (single-page site, no router yet):

```
src/
├── assets/
│   └── images/illustrations/   (exported PNG + WebP, organized by category)
├── components/                 (flat — one file per homepage section/modal:
│                                 Navbar, Hero, Mission, WhoWeHelp, Services,
│                                 HowItWorks, PayWhatYouCan, Workshops, Stories,
│                                 Survey, Footer, HelpRequestModal, WorkshopModal)
├── data/
│   └── translations.ts         (single EN/ES keyed object — no i18n library)
├── App.tsx                     (root component — composes the page from
│                                 src/components/, holds lang/modal state)
├── main.tsx                    (Vite/React entry point)
├── index.css                   (global styles)
└── vite-env.d.ts
```

No `pages/`, `stores/`, `router/`, `composables/`, or `plugins/` — those were part of the original Vue plan and don't exist. If the site grows past a single page, routing and a `pages/` split would need to be introduced then.

---

## 🧪 Testing & Quality

**Not yet set up** — no test runner, linter, or formatter is configured in `package.json` today. `npm run lint` currently just runs `tsc --noEmit`. The below is still the plan for when it's added.

### Vitest
**Why:** Fast, modern test runner, pairs naturally with Vite  
**What:** Unit and component tests (React Testing Library for component tests)  
**Target:** 70%+ code coverage

### ESLint
**Why:** Catch errors before runtime  
**Config:** React + TypeScript rules  
**Enforcement:** Pre-commit hook

### Prettier
**Why:** Automatic code formatting  
**Benefit:** No style debates, consistent code

### Pre-commit Hooks (Husky)
**Runs:** Linting and formatting before commit  
**Prevents:** Broken code from being committed

---

## 🚀 Deployment & Hosting

### Frontend Hosting: Vercel or Netlify
**Why:** Zero-config static hosting for Vite builds, automatic deployments  
**Features:**
- Automatic builds from GitHub
- Preview deployments
- CDN distribution
- Serverless functions (if needed)
- Analytics included

### Domain & DNS
- **Domain:** coachellcomputeraid.org (or .com)
- **DNS:** Cloudflare (optional, for extra security/performance)

### SSL/HTTPS
- **Automatic:** Provided by Vercel/Netlify
- **Certificate:** Auto-renewed

### Monitoring
- **Uptime:** Uptime Robot (free tier)
- **Notifications:** Slack/email alerts if site goes down

---

## 🔄 Development Workflow

### Version Control: Git + GitHub
- **Repo:** Private GitHub repo
- **Branches:** main (production), develop (staging), feature branches
- **PRs:** Code review before merging
- **Commits:** Descriptive messages

### Development Environment
- **Node.js:** LTS version (currently 18+)
- **Package Manager:** npm or pnpm
- **Local Dev:** `npm run dev` (Vite dev server)
- **Environment:** Local .env file with API keys

### Production Deployment
- **Build:** `npm run build`
- **Deploy:** Git push to main → Vercel/Netlify auto-deploys
- **Duration:** Typically 2-5 minutes

### Environment Variables
- **Local:** `.env.local` (not in git)
- **Production:** Vercel/Netlify environment variables
- **Key Variables:**
  - Supabase URL
  - Supabase API key
  - Google Analytics ID
  - API endpoints

---

## 📦 Dependencies (Key Packages)

This is what's actually in `package.json` today:

### Core
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.7.3"
}
```

### Utilities
```json
{
  "lucide-react": "^1.16.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.0.2"
}
```

### Build & Dev
```json
{
  "vite": "^6.1.0",
  "@vitejs/plugin-react": "^4.3.4",
  "tailwindcss": "^4.0.0",
  "@tailwindcss/vite": "^4.0.0"
}
```

Vitest/ESLint/Prettier/Husky from the Testing & Quality section above are **not** installed yet — that list is aspirational.

---

## 🌐 Browser Support

### Target Browsers
- Chrome 90+ (latest 2 versions)
- Firefox 88+ (latest 2 versions)
- Safari 14+ (latest 2 versions)
- Edge 90+ (latest 2 versions)

### Mobile
- iOS Safari 14+
- Chrome Android 90+

### Approach
- **Progressive Enhancement:** Core works in older browsers
- **Polyfills:** Added for needed features
- **Testing:** Tested on actual devices

---

## 📊 Performance Targets

### Page Load
- **First Paint:** < 1 second
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

### Bundle Size
- **JavaScript:** < 150KB (gzipped)
- **CSS:** < 30KB (gzipped)
- **Images:** Optimized, lazy-loaded

### SEO
- **Core Web Vitals:** All green
- **PageSpeed Insights:** 90+ score
- **Meta Tags:** Configured
- **Open Graph:** Sharing optimized
- **Sitemap:** Included

---

## 🔗 Integration Points

### Email Service
- **Confirmation emails:** Supabase + SendGrid/Resend
- **Newsletter:** Mailchimp or Supabase
- **Reminders:** Automated via serverless function

### Payment (Phase 3+)
- **Provider:** Stripe or Supabase billing
- **Use:** Pay-What-You-Can processing

### Calendar (Phase 2+)
- **Google Calendar API:** Sync workshop schedules
- **iCal:** Public calendar feeds

### SMS (Optional, Phase 3+)
- **Provider:** Twilio or similar
- **Use:** Appointment reminders

---

## 🔗 Related Documents

- [[Folder-Structure.md|Folder Structure]] — Project organization
- [[Development-Plan.md|Development Plan]] — How to build
- [[../../03-Website-Design/Design-Language.md|Design Language]] — Visual specs
- [[../../01-Project-Foundation/Brand-Bible.md|Brand Bible]] — Brand guidelines

---

**Status:** Frontend architecture reflects the shipped app; Backend/Testing/Deployment/Analytics sections remain the plan, not yet implemented  
**Version:** 1.1  
**Last Updated:** August 25, 2026  
**Maintainability:** High (modern stack, well-documented)
