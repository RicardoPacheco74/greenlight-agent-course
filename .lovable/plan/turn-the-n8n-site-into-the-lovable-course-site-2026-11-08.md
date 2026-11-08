# Turn the n8n site into the Lovable course site

Keep every section, layout, animation and button position exactly as they are today. Change only the colors, the images and the text so the site sells the Lovable course.

## What changes

**Colors and look (dark neon Lovable style)**
- Deep black background, magenta and violet gradients, with pink, blue and orange accents (orange only as a small accent).
- Glowing borders, glass-style cards, tech grid and particles. The current glow and hover effects stay, recolored.
- Palette taken from the design brief and the Lovable reference image.

**Images**
- The Lovable reference image becomes the main picture at the top of the page, with the Lovable logo and name.
- The image used when the link is shared is replaced with a Lovable one.

**Text, section by section (same order as today)**
1. Menu: same links, new labels where they mention n8n.
2. Top of page: Lovable headline, course pitch, the same two buttons, quick course facts (10 modules, number of lessons counted from the lesson list).
3. Why now: AI-built apps, prototyping, interfaces, SaaS, databases, automation, publishing. No made-up statistics.
4. What you'll build: the course's real projects, which are a landing page, an app connected to an external API, a sales app with a database, ValidaLegal (Lovable + n8n + Supabase + AI), a social network, an AI SaaS and a data dashboard.
5. Course content: all 10 modules with every lesson from the lesson list, in expandable sections with "expand all / collapse all" and a count of open modules.
6. Projects showcase: the same 7 projects, each with its tools and expected result.
7. Who it's for: only profiles supported by the course plan.
8. Learning path: steps in module order (Lovable basics → landing page → prompts → design system → APIs → database → n8n webhooks → social network → AI SaaS → dashboard).
9. Testimonials: no real Lovable testimonials were provided, so this section becomes "what makes this course different". No invented students.
10. FAQ: answers based on the course plan and the real price and link.
11. Concepts: how Lovable, Supabase, n8n, AI, databases, integrations and publishing fit together.
12. Final call to action: same layout, recolored, R$ 24,90, same guarantee wording as today.
13. Footer: stays Academia da Nuvem branded, updated course name.

**Buttons and price**
- Every buy button stays in the same place and goes to: https://www.udemy.com/course/draft/7325535/?couponCode=NOV2026
- Price shown: R$ 24,90.

**Search and sharing**
- New page title, description and sharing text for the Lovable course.
- The n8n web address stays as the site address until you tell me the Lovable one.

## Not included
- No new sections and no removed sections.
- No invented hours, certificates, statistics or testimonials.
- Nothing from the n8n course stays on the page.

## Technical details
- Rewrite `src/data/course.ts` (modules, lessons, projects, FAQ, offer) from the lesson list. Components keep their structure; only labels and data change.
- Replace the theme tokens in `src/styles.css` with the Lovable palette. Fonts are loaded in `__root.tsx`.
- Upload the reference image as a Lovable asset for the top of the page. Generate an image for link sharing.
- Update the `head()` and JSON-LD in `routes/index.tsx`.
- Update the memory note for the offer (Lovable course, R$ 24,90, Udemy link). Remove the n8n-only rules.
- Check the page with Playwright at 1440, 768 and 390 px widths. Confirm the expandable sections, the menu and every buy link work.
