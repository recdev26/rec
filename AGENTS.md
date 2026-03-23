# AGENTS.md — REC Real Estate Consulting Website

> **This file is the single source of truth for any LLM agent working on this project.**
> Read it fully before writing a single line of code. Violations will break the project.

---

## 1. Project Overview

**Client:** REC, Lda. — Real Estate Consulting  
**Parent Group:** Meridian 32  
**Location:** Maputo, Mozambique  
**Website language:** Portuguese (European — Portugal variant, NOT Brazilian)  
**Stack:** TanStack Start (SSR) + Headless WordPress (REST API) + Nitro + Vercel  
**Design reference:** [Valom HTML Demo](https://valom-html-demo.vercel.app/index.html) — use this as the direct layout blueprint  
**Purpose:** Corporate consultancy website with WordPress-managed blog

---

## 2. Stack & Architecture — Non-Negotiable

### 2.1 Frontend

| Layer | Technology | Notes |
|---|---|---|
| Framework | **TanStack Start** | SSR required — never downgrade to CSR |
| Routing | **TanStack Router** (file-based) | Use `routes/` directory convention |
| Data fetching | **TanStack Query** | All WP API calls go through Query |
| Styling | **Tailwind CSS v4** | Utility-first, no inline styles |
| Language | **TypeScript** (strict) | No `any`, no `// @ts-ignore` |
| Package manager | **pnpm** | Never use npm or yarn |

### 2.2 Backend / CMS

| Layer | Technology | Notes |
|---|---|---|
| CMS | **WordPress** (Headless) | Content editors use WP Admin only |
| API | **WordPress REST API** | `/wp-json/wp/v2/` endpoints |
| Auth | **Application Passwords** (WP) | For protected endpoints only |

### 2.3 Hosting & Deployment

| Service | Purpose |
|---|---|
| **Vercel** | Frontend hosting + deployment target for Nitro output |
| **Nitro** | SSR runtime / server output used by TanStack Start |
| WordPress hosting | Separate VPS or managed WP host |

### 2.4 Build & Rebuild Strategy

- Blog posts are fetched at **request time via SSR** (not SSG)
- When a client publishes in WP Admin, changes appear on next page load — no rebuild trigger needed
- **Static pages** (Home, About, Services, Contact) are SSR with caching configured for Vercel/Nitro delivery

---

## 3. Project Structure — Strictly Enforced

```
rec-website/
├── AGENTS.md                     ← This file
├── src/
│   ├── routes/
│   │   ├── __root.tsx            ← Root layout: TopBar + Header + Footer
│   │   ├── index.tsx             ← / → Home page
│   │   ├── about.tsx             ← Current About route (rename only with matching doc update)
│   │   ├── sobre-nos.tsx         ← /sobre-nos → About page public route
│   │   ├── servicos/
│   │   │   ├── avaliacao-e-consultoria.tsx
│   │   │   ├── gestao-de-projectos.tsx
│   │   │   └── peritagens-tecnicas.tsx
│   │   └── ...                   ← Additional file-based routes added as the project evolves
│   ├── components/
│   │   ├── Header.tsx            ← Shared site header
│   │   ├── Footer.tsx            ← Shared site footer
│   │   └── ...                   ← Layout, UI, sections, and blog components
│   ├── lib/
│   │   ├── wp-api.ts             ← All WordPress API functions
│   │   ├── constants.ts          ← Site-wide constants + feature flags
│   │   └── utils.ts
│   ├── types/
│   │   └── wordpress.ts          ← All WP API type definitions
│   ├── router.tsx                ← Router creation
│   └── styles.css                ← Global Tailwind imports + CSS variables
├── public/
├── .output/                      ← Nitro build output (generated)
├── .nitro/                       ← Nitro cache/build artifacts (generated)
├── .env.example
├── vite.config.ts
├── tsconfig.json
└── package.json
```

**Rules:**
- Never create files outside this structure without updating this document
- Never put business logic inside route files — extract to `src/lib/` or `src/components/`
- Never put API calls directly in components — always use `src/lib/wp-api.ts`

---

## 4. Design System — Valom Layout Reference

The visual language follows the **Valom business consultancy template** at `https://valom-html-demo.vercel.app`. When in doubt about any layout decision, open that URL and match it. The template establishes a clean, professional consultancy aesthetic: structured sections, warm neutrals, a strong accent color, bold typography, and layered components.

### 4.1 Color Palette

The Valom template uses a dark teal/green as both its nav background and primary accent color. The screenshot confirms: nav bar, highlighted text, icon circle backgrounds, and button borders are all the same teal-green family. Adapted for REC:

```css
:root {
  /* Primary nav / dark section background */
  --color-primary:        #0D6B65;  /* Dark teal — nav bg, footer bg, dark sections */
  --color-primary-light:  #0F7A73;  /* Slightly lighter — hover states on dark bg */

  /* Accent — the bright teal used for highlights, CTAs, icon bg, links */
  --color-accent:         #128982;  /* Valom teal — accent text, icon circles, button borders */
  --color-accent-hover:   #0D6B65;  /* Darker teal — hover state */
  --color-accent-light:   #E8F5F4;  /* Very pale teal tint — section alt bg, card hover bg */

  /* Neutrals */
  --color-white:          #FFFFFF;
  --color-off-white:      #F0F4F4;  /* Section alt backgrounds (the light grayish-teal bg in screenshot) */
  --color-gray-light:     #E2E8E8;  /* Dividers */
  --color-gray-mid:       #9A9A9A;  /* Captions, meta text */
  --color-gray-dark:      #555555;  /* Body text */
  --color-text:           #1A2E2D;  /* Main headings — very dark teal-black */

  /* Section backgrounds — alternating pattern */
  --bg-white:             #FFFFFF;
  --bg-off-white:         #F0F4F4;  /* Light gray-teal — used in featured services section */
  --bg-dark:              #0D6B65;  /* Dark teal — nav, stats band, footer */
  --bg-accent-tint:       #E8F5F4;  /* Pale teal tint — callout and commitment sections */
}
```

> **Critical:** `--color-accent` (#128982) is the ONLY accent hue — a teal/dark cyan. Do not introduce gold, orange, or any warm hue without explicit client approval. Every interactive element (buttons, links, icon backgrounds, active nav states, highlighted heading words) uses this teal.

### 4.2 Typography

```css
--font-heading: 'Barlow', 'Inter', sans-serif;
--font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif;

/* Scale */
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px — hero only */
```

**Typography rules:**
- Section overlines (e.g. "OUR FEATURED", "Os Nossos Serviços"): uppercase, `--color-accent` teal, `text-sm font-semibold tracking-widest`
- H2 section titles: `text-4xl font-bold` in `--color-text` (dark teal-black). The **last line or key phrase** can be rendered in `--color-accent` teal — this is Valom's signature typographic move (see "transform your business" in the screenshot)
- Body: `text-base text-gray-dark leading-relaxed`
- Stats numbers: `text-5xl font-extrabold` — white on dark teal bg
- Never use arbitrary font sizes outside this scale

### 4.3 Spacing System

Tailwind spacing only — no arbitrary values like `mt-[37px]`.

| Context | Value |
|---|---|
| Section vertical padding | `py-20` desktop / `py-14` mobile |
| Container | `max-w-7xl mx-auto px-6 lg:px-8` |
| Card internal padding | `p-8` desktop / `p-6` mobile |
| Component gaps | `gap-8` or `gap-12` |
| Between section label and title | `mb-3` |
| Between title and body text | `mt-5` |

### 4.4 Valom Layout Patterns — Map These to REC

These are the structural patterns extracted from the Valom template. Every section must match these patterns.

#### **A. TopBar (thin strip above nav)**
- Background: `--color-primary` (dark teal `#0D6B65`)
- Left: email address + working hours ("Seg–Sex: 08h00–17h00")
- Right: social links (LinkedIn) or secondary links (Notícias | FAQ | Contacto)
- Text: white, `text-sm`
- Height: ~40px

#### **B. Header / Sticky Nav**
- Background: `--color-primary` (same dark teal as TopBar — they form one continuous dark band as seen in the screenshot)
- Logo: white version on dark bg
- Nav links: white text, active/hover in `--color-accent-light` or underline
- Far right: **"Contacte-nos"** button — transparent bg + white border + white text (outlined style, matching Valom's "Book Appointment")
- On scroll: slight shadow added
- Mobile: hamburger → full-width overlay drawer in teal bg

#### **C. Hero Section (Home only)**
- Full viewport height (`min-h-screen`) with dark overlay background image
- Rotating/fading text slides OR static single hero
- Overline: "Bem-vindo à REC"
- H1: "Consultoria Imobiliária de Excelência em Moçambique"
- Description: company intro sentence
- Two CTAs: [Os Nossos Serviços] (accent bg) + [Saiba Mais] (white outline)

#### **D. Featured Services Band (3-column strip)**
Appears on a light gray-teal background (`--bg-off-white` / `#F0F4F4`) with a centered title block above:
- Overline: "OUR FEATURED" → for REC: "OS NOSSOS SERVIÇOS"
- H2 (two-line, large): black first line + teal accent second line — e.g.:
  "Juntos podemos conceber, inspirar e" (black)
  "transformar o seu investimento" (teal `--color-accent`)
- 3 white cards below, evenly spaced, with a subtle shadow:
  - Each card: teal circle icon background + line icon → bold service title → description text
  - No border — shadow only (`shadow-md`)
  - On hover: slight lift (`hover:-translate-y-1 transition-transform`)
- Map to REC's 3 services: Avaliação | Gestão de Projectos | Peritagens

#### **E. About Section (2-column)**
- Left: overlapping stacked images (Valom uses two images offset — one larger, one smaller inset)
  - A percentage badge overlaid: "96% Successful Stories" → for REC use "+20 Anos de Experiência"
- Right: overline → H2 → lead paragraph → 2 feature rows (bold label + description) → phone CTA line
  - "Ligue-nos: +258 21 505 000"

#### **F. Full Services Section (alternating rows)**
```
Row 1: [ Text left ]  |  [ Image right ]   ← Avaliação e Consultoria
Row 2: [ Image left ] |  [ Text right ]    ← Gestão de Projectos
Row 3: [ Text left ]  |  [ Image right ]   ← Peritagens Técnicas
```
Each row: service name as H3 → description → "Ver serviço →" link

#### **G. Stats Counter Band (dark bg)**
Full-width, `--bg-dark`, 3 stats centered:
```
|  +20 Anos  |  |  11 Províncias  |  |  +2.500 Clientes  |
  de experiência      abrangidas          atendidos
```
- Numbers: white, `text-5xl font-extrabold`
- Labels: white or `--color-accent-light` (pale teal), `text-sm uppercase tracking-wide`
- Thin white semi-transparent vertical dividers between stats

#### **H. Team Section (conditionally shown)**
- Section overline + H2 "A Nossa Equipa"
- 3-column grid: circular photo → name → title → social icon
- Only rendered when `FEATURES.SHOW_TEAM_SECTION === true`

#### **I. Commitment / Goal Section (2-column, tinted bg)**
- `--bg-accent-tint` background
- Left: real estate image
- Right: overline → H2 "O Nosso Compromisso" → mission text → 2 items: Missão + Visão

#### **J. Projects Carousel (conditionally shown)**
- Horizontal scrolling carousel of case study cards
- Only rendered when `FEATURES.SHOW_PROJECTS_SECTION === true`
- Each card: image → category tag → project name

#### **K. Blog Section (3 cards)**
- Overline "Notícias" + H2 "Últimas Publicações"
- 3-column blog cards from WP API (latest 3 posts)
- Card: image with date badge (accent bg, overlaid top-left) → category → H3 title → excerpt → "Ler mais →"

#### **L. Newsletter / CTA Band**
- `--bg-accent-tint` or `--bg-dark` background
- Centered H3 + CTA button
- For REC: "Transformamos desafios em soluções. Contacte-nos." → [Contacte-nos]

#### **M. Footer (4-column, dark bg)**
```
[ Logo + description ]  |  [ Quick Links ]  |  [ Office Info ]  |  [ Social / Instagram Grid ]
```
- Background: `--bg-dark` (dark teal #0D6B65)
- Text: white / `--color-gray-mid`
- Accent color for column titles
- Bottom bar: "REC, Lda. © 2025. Todos os direitos reservados. | Grupo Meridian 32"
- Instagram grid: replace with a LinkedIn/contact card or remove if no social presence

---

## 5. Page-by-Page Layout Spec

### 5.1 Inner Page Hero (Shared: `<PageBreadcrumb />`)

All inner pages share this component:
```
[ Full-width dark bg with subtle overlay or texture ]
[ Center: small overline label ]
[ Center: H1 page title ]
[ Center: breadcrumb — Início / Page Name ]
```
- Height: ~280px (compact, not full viewport)
- Breadcrumb: `text-sm`, active item in accent color

### 5.2 Home Page (`/`)

```
1. TOPBAR
2. HEADER (sticky)
3. HERO SECTION (full-height, bg image + overlay)
4. FEATURED SERVICES BAND (white, 3-col)
5. ABOUT SECTION (off-white, 2-col with overlapping images)
6. FULL SERVICES SECTION (white, alternating rows)
7. STATS COUNTER BAND (dark bg)
8. COMMITMENT SECTION (accent-tinted bg, 2-col)
9. TEAM SECTION (white — conditional)
10. PROJECTS CAROUSEL (off-white — conditional)
11. BLOG SECTION (white, 3 cards from WP)
12. NEWSLETTER / CTA BAND
13. FOOTER
```

### 5.3 Sobre Nós (`/sobre-nos`)

```
1. TOPBAR + HEADER
2. PAGE BREADCRUMB HERO — "Sobre Nós"
3. ABOUT SECTION (white, 2-col, expanded — same pattern as home)
   + RICS / IVSC / TEGoVA certification badges below text
4. STATS COUNTER BAND (dark bg — reused)
5. MISSION / VISION (off-white, 2 cards side by side)
6. VALUES GRID (white, 2–3 col, 5 values)
7. TEAM SECTION (conditional)
8. COMMITMENT / GOAL SECTION (accent-tinted, 2-col)
9. FOOTER
```

### 5.4 Service Pages (`/servicos/*`)

All 3 service pages share this template (based on Valom's `service-details.html`):

Routes implemented:
- `/servicos/avaliacao-e-consultoria`
- `/servicos/gestao-de-projectos`
- `/servicos/peritagens-tecnicas`

```
1. TOPBAR + HEADER
2. PAGE BREADCRUMB HERO (service name)

3. MAIN CONTENT — 2-column layout (sidebar pattern)

   LEFT MAIN (~70%):
   ├── Full-width service header image
   ├── H2: service name
   ├── Lead description (from client doc)
   ├── H3 "Visão Geral" + body text
   ├── H3 "Os Nossos Serviços" — sub-services as numbered steps or accordion cards
   └── H3 "Por que escolher a REC?" — 3 reasons with icons

   RIGHT SIDEBAR (~30%):
   ├── "Os Nossos Serviços" nav list
   │     (links to all 3 service pages, active state highlighted in accent)
   ├── Download Brochure card
   └── "Tem alguma questão?" phone CTA card
         → "+258 21 505 000"

4. STATS COUNTER BAND (dark bg — reused)
5. FOOTER
```

### 5.5 Blog Listing (`/blog`)

```
1. TOPBAR + HEADER
2. PAGE BREADCRUMB HERO — "Blog & Insights"
3. BLOG GRID (off-white bg, 3 columns)
   Each card:
   - Image with date badge overlay (accent bg, DD MMM format)
   - Category tag (accent color, text-sm)
   - H3 post title (linked)
   - 2–3 line excerpt
   - "Ler mais →" link
4. PAGINATION (prev / next or numbered)
5. FOOTER
```

### 5.6 Single Blog Post (`/blog/$slug`)

```
1. TOPBAR + HEADER
2. PAGE BREADCRUMB HERO — post title

3. POST LAYOUT — 2-column sidebar

   LEFT MAIN (~70%):
   ├── Featured image
   ├── Meta: category + date (DD de MMMM de YYYY) + estimated read time
   ├── H1: post title
   ├── Article body (.prose)
   └── Author card

   RIGHT SIDEBAR (~30%):
   ├── Search box
   ├── Recent posts list
   ├── Categories list
   └── Contact CTA card

4. RELATED POSTS (3 cards, same category)
5. FOOTER
```

### 5.7 Contactos (`/contactos`)

```
1. TOPBAR + HEADER
2. PAGE BREADCRUMB HERO — "Contacte-nos"

3. CONTACT SECTION (white bg — Valom contact.html pattern)
   Top: H2 "Precisam de Ajuda? Fale Connosco"

   LEFT (~60%): Contact form
   - Nome completo, E-mail, Empresa (optional), Assunto, Mensagem
   - [Enviar Mensagem] — accent bg button

   RIGHT (~40%): Contact info cards (3 icon-rows)
   - 📞 +258 21 505 000 / +258 84 382 2494
   - ✉️  consulting@rec.co.mz
   - 📍 Av. FPLM, nº 857 — Maputo

4. MAP EMBED (full-width)
   - Google Maps embed: Av. FPLM, nº 857, Maputo

5. FOOTER
```

---

## 6. WordPress API Integration

### 6.1 All API logic lives in `src/lib/wp-api.ts`

```typescript
const WP_API_BASE = process.env.WP_API_URL ?? 'https://cms.rec.co.mz/wp-json/wp/v2'

export async function getPosts(params?: {
  page?: number
  perPage?: number
  category?: number
}): Promise<WPPost[]> { ... }

export async function getPostBySlug(slug: string): Promise<WPPost | null> { ... }
export async function getCategories(): Promise<WPCategory[]> { ... }
export async function getPages(): Promise<WPPage[]> { ... }
```

**Rules:**
- Never call `fetch('/wp-json/...')` directly in a component or route
- All functions must be typed — see `src/types/wordpress.ts`
- All functions must handle errors gracefully — never throw uncaught

### 6.2 WordPress API Types (`src/types/wordpress.ts`)

```typescript
export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  modified: string
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
    'wp:term'?: Array<WPCategory[]>
  }
  categories: number[]
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface WPPage {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
}
```

### 6.3 TanStack Query in Routes

```typescript
export const Route = createFileRoute('/blog/')({
  loader: async () => ({
    posts: await getPosts({ perPage: 9, page: 1 }),
  }),
  component: BlogPage,
})
```

- Always use route `loader` for SSR data — never fetch inside `useEffect`
- Client-side pagination may use `useQuery` with `keepPreviousData: true`

---

## 7. Content — Portuguese Rules

**This site is in European Portuguese. Every word must follow EP conventions.**

### 7.1 Vocabulary differences to enforce

| ❌ Brazilian PT | ✅ European PT |
|---|---|
| Nossos | Os nossos |
| Você | V. Ex.ª or "o cliente" |
| Celular | Telemóvel |
| Aplicativo | Aplicação |
| Buscar | Procurar |
| Contato | Contacto |
| Projeto | Projecto |
| Objeto | Objecto |

### 7.2 Fixed copy — use exactly as written

**Company description (hero):**
> A REC, Lda. é uma empresa de consultoria especializada em avaliação e consultoria imobiliária, gestão de projectos e fiscalização de obras e peritagens técnicas.

**Mission:**
> Prestar serviços de excelência nas áreas de avaliação, consultoria e gestão imobiliária, oferecendo soluções adaptadas às necessidades de cada cliente, maximizando o valor dos activos e assegurando qualidade, rigor e transparência.

**Vision:**
> Ser reconhecida como uma referência no mercado nacional e internacional, pela competência técnica, ética profissional e capacidade de gerar valor acrescentado aos nossos clientes.

**Contact intro:**
> Na REC, acreditamos que cada cliente merece atenção personalizada.

**Address:** Av. FPLM, nº 857 — Maputo  
**Email:** consulting@rec.co.mz  
**Phone:** +258 21 505 000  
**Mobile:** +258 84 382 2494

### 7.3 Nav link labels — exactly these

- Início
- Sobre Nós
- Serviços *(dropdown)*
- Blog
- Contactos

Navigation behaviour:
- Clicking the parent `Serviços` nav label scrolls to the services section on the homepage (`/#servicos`)
- The dropdown items link to the 3 service detail pages under `/servicos/*`

### 7.4 CTA labels

- Primary: **Contacte-nos**
- Secondary: **Saiba mais**
- Blog: **Ler mais →**
- Services: **Ver serviço →**
- Form submit: **Enviar Mensagem**

---

## 8. SEO Requirements

Every page:

```tsx
<Head>
  <title>{pageTitle} | REC — Real Estate Consulting</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={ogImage} />
  <link rel="canonical" href={canonicalUrl} />
</Head>
```

Blog posts additionally:
```tsx
<meta property="article:published_time" content={post.date} />
<meta property="article:modified_time" content={post.modified} />
<script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
```

Homepage Organization schema:
- `name`: "REC, Lda. — Real Estate Consulting"
- `url`: "https://rec.co.mz"
- `telephone`: "+258215050000"
- `address.streetAddress`: "Av. FPLM, nº 857"
- `address.addressLocality`: "Maputo"
- `address.addressCountry`: "MZ"

---

## 9. Performance Rules

- All images: explicit `width` and `height` attributes (no layout shift)
- Images: served through a Vercel/Nitro-compatible optimization or proxy path — never render raw WP upload URLs directly in the UI
- Fonts: preloaded with `font-display: swap`
- Third-party scripts (analytics, maps): `defer` or `async`
- **Core Web Vitals targets:** LCP < 2.5s | CLS < 0.1 | INP < 200ms
- Tailwind: `content` array in `tailwind.config.ts` must cover all source files

---

## 10. Accessibility Requirements

- All images: descriptive `alt` in Portuguese
- All text contrast combinations must pass WCAG AA (4.5:1)
- Keyboard-navigable nav with visible focus rings
- Skip-to-content link in `<Header>` (visually hidden, visible on focus)
- Form fields must have associated `<label>` — never placeholder-only
- One `<h1>` per page; logical heading hierarchy thereafter

---

## 11. Environment Variables

```bash
# .env — never commit
WP_API_URL=https://cms.rec.co.mz/wp-json/wp/v2
WP_APP_USER=api-user
WP_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx

# Public
VITE_SITE_URL=https://rec.co.mz
VITE_GA_ID=G-XXXXXXXXXX
```

- Never hardcode URLs or credentials in source files
- Only commit `.env.example` with placeholder values

---

## 12. Git & Code Quality

### Branch naming
```
feature/blog-listing
fix/nav-mobile-overflow
content/update-services-copy
```

### Commit messages (Conventional Commits)
```
feat: add blog listing page with WP API integration
fix: correct mobile nav overlay z-index
style: match hero section to Valom layout spec
content: update services copy from client document
```

### Code quality checklist
- ESLint + Prettier pass before every commit
- No `console.log` in production code
- All components typed — no untyped props
- All async functions have try/catch or error boundaries
- Component files should not exceed 250 lines; split large components into smaller reusable parts

---

## 13. What Agents Must NEVER Do

Absolute prohibitions — no exceptions, no clever workarounds:

1. **Never use Brazilian Portuguese** — not in copy, comments, or variable names
2. **Never introduce new colors** outside the defined palette
3. **Never use inline styles** (`style={{ ... }}`) — Tailwind classes only
4. **Never fetch WordPress data inside a component** — always via `lib/wp-api.ts` and route loaders
5. **Never render unescaped WordPress HTML** without `dangerouslySetInnerHTML` + `.prose` class scoping
6. **Never add npm dependencies without justification** — document the reason in a comment
7. **Never modify approved client copy** without explicit instruction
8. **Never create a new route** without adding it to Section 5 of this document
9. **Never use `any` type** in TypeScript
10. **Never disable ESLint rules** without a written explanation comment
11. **Never deploy to production** without `pnpm build` passing with zero TypeScript errors
12. **Never use `useEffect` for data fetching** — use route loaders or TanStack Query
13. **Never add placeholder/lorem ipsum** to any production file
14. **Never deviate from the Valom layout structure** for any page — consult `https://valom-html-demo.vercel.app` before building any new section and document any deliberate divergence here

---

## 14. Contact Form Behavior

- **Fields:** Nome completo, E-mail, Empresa (optional), Assunto, Mensagem
- **Validation:** Client-side (required + email format) + server-side
- **Submission:** POST to TanStack Start server function (`src/server/contact.ts`)
- **On success:** "Obrigado. A sua mensagem foi enviada com sucesso. Entraremos em contacto brevemente."
- **On error:** "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou contacte-nos directamente por e-mail."
- **Email delivery:** Resend or SMTP → inbox: consulting@rec.co.mz
- **Never use** Typeform, JotForm, or any third-party form embed

---

## 15. Blog Content Rules

Rendered WP content must:
- Be sanitized server-side (DOMPurify or equivalent)
- Be wrapped in `<article className="prose prose-lg max-w-none">`
- Have `<img>` tags routed through the project's Vercel/Nitro-compatible image optimization or proxy layer
- Display: category tag, date in `DD de MMMM de YYYY` Portuguese locale, estimated read time
- Date format: `14 de Março de 2025` — never `03/14/2025` or `14/03/2025`

---

## 16. Reusable Components Reference

Build once, reuse everywhere — never duplicate:

| Component | Location | Used In |
|---|---|---|
| `<TopBar />` | `src/components/layout/TopBar.tsx` | All pages (via `src/routes/__root.tsx`) |
| `<Header />` | `src/components/layout/Header.tsx` | All pages |
| `<Footer />` | `src/components/layout/Footer.tsx` | All pages |
| `<PageBreadcrumb />` | `src/components/layout/PageBreadcrumb.tsx` | All inner pages |
| `<StatsBand />` | `src/components/sections/StatsBand.tsx` | Home, About, Service pages |
| `<NewsletterBand />` | `src/components/sections/NewsletterBand.tsx` | Home + most pages (bottom) |
| `<ServiceCard />` | `src/components/ui/ServiceCard.tsx` | Home featured services band |
| `<BlogCard />` | `src/components/blog/BlogCard.tsx` | Home blog section + /blog |
| `<SectionLabel />` | `src/components/ui/SectionLabel.tsx` | Overline text above H2 titles |
| `<Button />` | `src/components/ui/Button.tsx` | All CTAs (variants: primary, secondary, outline) |
| `<ContactSidebar />` | `src/components/ui/ContactSidebar.tsx` | Service detail + blog detail |

---

## 17. Feature Flags

```typescript
// src/lib/constants.ts
export const FEATURES = {
  SHOW_TEAM_SECTION:     false,   // Enable when team photos are ready
  SHOW_PROJECTS_SECTION: false,   // Enable when case studies are ready
  SHOW_NEWSLETTER_FORM:  true,
  BLOG_ENABLED:          true,
} as const
```

- Never hard-delete unfinished sections — wrap in a feature flag check
- This allows toggling sections without touching layout code

---

*Last updated: March 2026 — Update this file whenever architecture, copy, or design decisions change.*  
*Layout reference: https://valom-html-demo.vercel.app/index.html*
