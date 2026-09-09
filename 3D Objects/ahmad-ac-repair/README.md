# Ahmad AC Repair Service — Riyadh AC, Refrigerator & Washing Machine Repair Website

A professional, **English-first / Arabic-second** bilingual website for an AC, refrigerator
and washing machine repair business in Riyadh. Built as a senior UI/UX redesign with every
service on its own dedicated page.

## 🌐 Language Structure

- **Single bilingual version — no switcher.** English renders first and larger (~70%
  visual weight); the Arabic translation sits immediately with it — right under
  headings/paragraphs, or right after buttons/labels on the same line — always visible.
  There's no EN/AR toggle to click; both languages are simply part of the same page.
- Phone numbers always render left-to-right (`+966 50 053 4907`), so digits never mirror.
- WhatsApp and Call buttons keep readable, matching text color for both languages (fixed
  a contrast bug where the Arabic label used to render in a muted gray on colored buttons).

## 🏷️ Brands We Service

A "Brands We Service" strip (LG, Samsung, Gree, Midea, Panasonic, Daewoo, Ariston,
Electrolux, Whirlpool, Bosch, Haier, O General) now appears on the Home and Services pages
— text-based brand chips (no third-party logos used, to avoid trademark/logo-rights issues).

## 📸 Real Photos &amp; Video

The `images/` folder now uses your own job-site photos instead of stock images:
- Real AC and washing-machine repair photos are used as the background of every inner-page
  hero (About, Services, Contact, FAQ, Blog, Gallery, and each individual service/article
  page) — the Home page keeps the original text + side-image layout as requested.
- The Gallery page shows 12 real photos (filterable by category) plus your 2 on-site videos
  with playable `<video>` cards.
- Refrigerator-related pages keep a stock photo since no refrigerator job photos were supplied.

## 📄 Site Map (13 pages, each fully separate)

| Page | File |
|---|---|
| Home | `index.html` |
| Services (hub — links to all 6 below) | `services.html` |
| Split AC Repair | `split-ac-repair.html` |
| Central AC Repair | `central-ac-repair.html` |
| Concealed AC Repair | `concealed-ac-repair.html` |
| Cassette AC Repair | `cassette-ac-repair.html` |
| Refrigerator Repair | `refrigerator-repair.html` |
| Washing Machine Repair | `washing-machine-repair.html` |
| Gallery | `gallery.html` |
| Blog (hub) | `blog.html` |
| — Why Is My AC Not Cooling? | `why-is-my-ac-not-cooling.html` |
| — Common Causes of AC Water Leakage | `ac-water-leakage-causes.html` |
| — When Does Your Refrigerator Need Repair? | `when-refrigerator-needs-repair.html` |
| — Why Is My Washing Machine Not Spinning? | `washing-machine-not-spinning.html` |
| — How Regular AC Maintenance Prevents Repairs | `ac-maintenance-prevents-repairs.html` |
| — The Importance of Professional AC Installation | `importance-of-professional-ac-installation.html` |
| About | `about.html` |
| Contact | `contact.html` |
| FAQ | `faq.html` |

Every individual service page follows the required order: **English Hero → English
Description → Common Problems → Repair Services → Benefits → FAQ → CTA**, each block
paired with a natural Arabic translation beneath it, plus a "you may also need" cross-link
grid to the other five services and a full breadcrumb (Home / Services / Service Name).

Every blog article follows: **Hero + meta bar → Featured image → Intro → 5 numbered
sections (bilingual) → Highlight box → Conclusion → CTA buttons → Author box → Related
articles**, with a magazine-style featured post at the top of the blog hub and polished
editorial cards (category badge, meta row, author avatar, hover zoom) throughout.

## 🎨 Design System

- **Fonts:** Poppins (English) + Tajawal (Arabic) — via Google Fonts.
- **Palette:** Teal (`#0EA5B7`) + deep ink (`#0B1F26`) + amber accent (`#F5A623`) for CTAs.
- Gradient hero sections, floating stat cards, icon-badge service cards, animated counters,
  scroll-reveal effects, sticky navbar with a "Services" mega-dropdown linking straight to
  each repair type, and floating Call/WhatsApp buttons on every page.
- Fully responsive (Bootstrap 5 grid) for mobile, tablet and desktop.

## 📁 Files

- `styles.css` — full design system + bilingual layout rules
- `script.js` — scroll reveal, counters, form handling, gallery lightbox (no language switcher — single bilingual version)
- All `.html` pages share the same header/footer for a consistent experience

## 🎨 Latest Polish Pass

- **Topbar** rebuilt to stay on one line at every width (phone + WhatsApp grouped left,
  the "24/7 Emergency" message right, no more wrapping).
- **Call vs WhatsApp buttons** are now visually distinct and consistent on every page:
  Call = white pill with a teal outline, WhatsApp = solid WhatsApp-green pill — applied to
  the navbar, hero, every service/blog CTA, the contact cards, and the floating action
  buttons.
- **Home hero stats** (5,000+ customers / 4.9★ / 24/7 / 15+ years) now sit in one fixed
  4-column row that never wraps, with the Arabic caption stacked neatly under each stat.
- **Animations**: the hero content fades up on load; cards, stats, testimonials, team
  members, FAQ items and CTA bands now animate into view on scroll (staggered within each
  row) instead of appearing instantly.
- **Fonts** (Poppins / Tajawal) are now enforced with high-priority rules across every
  Bootstrap component (buttons, forms, dropdowns, accordions) so nothing silently falls
  back to a system font.
- The Blog page's featured article card now has proper breathing room below the hero.

## 🏢 Branding &amp; Location (latest update)

- **Brand**: renamed everywhere to **Ahmad AC Repair Service** / **احمد لتصليح المكيفات**,
  with your logo in the navbar and footer (name in English on top, Arabic underneath).
- **Location**: added to the topbar (English only, as requested) and footer, both linking
  to your real Google Maps pin — `King Fahd Branch Rd, 3091, Al Olaya, Riyadh 12212,
  Saudi Arabia`. The Contact page's location card now says "Get Directions" and links
  straight to Maps.
- **WhatsApp number** is now a clickable link everywhere it appears (topbar, footer,
  buttons) — not just plain text.
- **Call vs WhatsApp buttons** are locked to one line and equal width everywhere they
  appear together (`.cta-btn-row`), including the homepage hero.
- **Home hero stats** (5,000+ / 4.9★ / 24/7 / 15+ years) moved into their own full-width
  row beneath the hero content, with divider lines between each stat.
- **Card outlines** strengthened across every card type (services, info panels,
  testimonials, blog/gallery cards, accordion items) for clearer definition.

## ⚙️ Before Going Live

- [x] ~~Replace placeholder phone number~~ — now using **+966 50 053 4907** for Call & WhatsApp
- [x] ~~Replace placeholder company name~~ — now **Ahmad AC Repair Service** with your logo
- [ ] Add real refrigerator job photos (none were supplied yet — those pages use a stock photo)
- [ ] Connect the contact/service-request forms to a real backend
- [ ] Add Google Analytics / Google Search Console
- [ ] Deploy (Netlify, Vercel or GitHub Pages) and connect a custom domain

## 🚀 Local Preview

Just open `index.html` in a browser — no build step required. For clean routing between
pages, you can also serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```
