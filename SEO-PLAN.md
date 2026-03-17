# RepairKeeper — SEO Execution Plan

**Created:** 2026-03-17
**Status:** Draft for review

---

## Current State Assessment

### What We Have
- **2 pages**: Home (`/`) and Changelog (`/changelog`)
- Solid technical SEO foundation: structured data (JSON-LD), canonical URLs, OG tags, sitemap, robots.txt
- Well-written homepage covering all features in a single long-form page
- Good meta title: "RepairKeeper — Repair Shop Management Software for Phone, Electronics & Computer Repairs"
- FAQPage schema with 15 questions

### The Core Problem
We have **one indexable commercial page** trying to rank for everything. Google has no reason to see RepairKeeper as an authority on any specific repair-shop topic because there's no topical depth. Competitors like RepairDesk and RepairShopr have dozens of pages — dedicated feature pages, comparison pages, use-case pages, integrations pages, and blog content — each targeting distinct search intents. We're bringing a single page to a multi-page fight.

### Where Competitors Are Stronger
- **RepairDesk**: Extensive feature pages (`/repair-ticket-management/`, `/repair-shop-inventory/`, etc.), comparison pages ("RepairDesk vs RepairShopr"), industry-specific landing pages, established blog with repair industry content
- **RepairShopr**: Strong brand recognition (now merged with Syncro), extensive documentation, comparison pages, integration listings
- **My Gadget Repairs**: UK-focused, established local presence, longer domain history
- **RepairQ / Fixably**: Enterprise positioning with case studies and vertical pages

**Their weakness**: Most of these tools are US-focused, generic helpdesk tools adapted for repair, or expensive. RepairKeeper is UK-built, purpose-built for repair shops, with genuinely differentiated features (multi-device tickets, auto-status, repair wiki). We can win on specificity and intent match.

---

## Keyword Clusters & Intent Mapping

### Cluster 1: Core Commercial (High Priority)
These are the money terms — people actively looking for software to buy.

| Keyword | Monthly Search Vol (est.) | Intent | Difficulty |
|---------|--------------------------|--------|------------|
| repair shop software | Medium | Commercial | High |
| repair shop management software | Low-Med | Commercial | Medium |
| phone repair shop software | Low-Med | Commercial | Medium |
| repair ticket system | Low | Commercial | Medium |
| repair tracking software | Low | Commercial | Medium |
| electronics repair software | Low | Commercial | Medium |
| computer repair shop software | Low | Commercial | Medium |
| repair shop software UK | Low | Commercial/Local | Low-Med |
| repair shop management system | Low | Commercial | Medium |

### Cluster 2: Feature-Specific (Medium Priority)
People searching for specific capabilities — often mid-funnel, comparing options.

| Keyword | Intent | Notes |
|---------|--------|-------|
| repair shop invoicing software | Commercial | We have strong invoicing |
| repair shop inventory management | Commercial/Info | Strong feature for us |
| repair ticket tracking | Commercial | Core feature |
| customer repair tracking | Commercial/Info | Unique self-service angle |
| repair shop POS software | Commercial | Adjacent — we're not POS but capture this intent |
| phone repair booking system | Commercial | Online booking feature |
| repair shop CRM | Commercial | Customer management angle |
| trade-in software / buyback software | Commercial | Differentiator — few competitors have this |
| repair shop quoting software | Commercial | Specific feature |

### Cluster 3: Problem-Aware / Informational (Medium Priority)
People who have the problem but haven't decided on software yet.

| Keyword | Intent | Content Type |
|---------|--------|-------------|
| how to manage a repair shop | Informational | Guide/Blog |
| repair shop workflow | Informational | Guide |
| how to track repair jobs | Informational | Guide |
| repair shop tips / how to start a phone repair business | Informational | Guide |
| repair shop customer communication | Informational | Guide |
| how to price phone repairs | Informational | Guide |

### Cluster 4: Comparison / Alternative (High Priority)
People already aware of competitors — high purchase intent.

| Keyword | Intent | Notes |
|---------|--------|-------|
| RepairDesk alternative | Commercial | Direct competitor |
| RepairShopr alternative | Commercial | Direct competitor |
| RepairDesk vs RepairShopr | Commercial | We insert ourselves |
| best repair shop software 2026 | Commercial | Listicle/comparison intent |
| best repair shop software UK | Commercial | Strong angle for us |
| free repair shop software | Commercial | We have a free plan |

### Cluster 5: Use-Case / Vertical (Lower Priority, High Relevance)
Specific business types searching for solutions.

| Keyword | Intent |
|---------|--------|
| phone repair shop software | Commercial |
| computer repair business software | Commercial |
| electronics repair management | Commercial |
| mobile phone repair tracking | Commercial |
| laptop repair shop management | Commercial |

---

## Page Strategy

### A. Existing Pages — Optimisation

#### Homepage `/`
**Current title:** "RepairKeeper — Repair Shop Management Software for Phone, Electronics & Computer Repairs"
**Keep as-is.** The homepage is well-structured. Minor tweaks only:

- [ ] Add `id` attributes to each major section for defined anchor links (some already exist)
- [ ] Ensure the H1 contains a primary keyword variant. Current H1 ("Stop juggling spreadsheets...") is good for conversion but weak for SEO. **Recommendation**: keep the H1 for users but add a visually-hidden `<span>` or restructure so the primary keyword phrase appears in the hero section's semantic content (e.g. a `<p>` directly under the H1 that includes "repair shop management software")
- [ ] The meta description is 77 words — far too long. Google will truncate it. **Trim to ~155 characters.** Suggested: "All-in-one repair shop management software for phone, electronics & computer repairs. Track tickets, manage inventory, invoice customers. Free plan available."
- [ ] Add internal links to new feature pages from the relevant homepage sections (once created)

#### Changelog `/changelog`
**No SEO changes needed.** This page serves product credibility, not search traffic. It's fine as-is.

---

### B. New Pages — Feature Pages (Phase 1)

Each feature page targets a specific keyword cluster, provides genuine depth, and links back to the homepage and other feature pages. These are NOT thin pages — each should be 800-1500 words of real content explaining the feature, how it works, who it's for, and why it matters.

**Use a shared layout**: Badge → H1 → Description → Feature details (with screenshots/mockups) → How it works → Related features → CTA.

| Page | URL | Target H1 | Primary Keywords | Intent |
|------|-----|-----------|-----------------|--------|
| Ticket Management | `/features/ticket-management` | "Repair ticket management that handles the complexity" | repair ticket system, repair ticket tracking, repair ticket software | Commercial |
| Multi-Device Tickets | `/features/multi-device-tickets` | "Multi-device repair tickets with intelligent auto-status" | multi-device repair tickets, repair auto-status | Commercial (differentiator) |
| Quoting & Invoicing | `/features/quoting-invoicing` | "Professional repair quotes and invoices in minutes" | repair shop invoicing software, repair shop quoting | Commercial |
| Inventory Management | `/features/inventory-management` | "Repair shop inventory and stock management" | repair shop inventory management, repair parts tracking | Commercial |
| Customer Tracking | `/features/customer-tracking` | "Let your customers track their repairs in real time" | customer repair tracking, repair tracking page | Commercial |
| Trade-In & Refurbishment | `/features/trade-in-refurbishment` | "Buy, refurbish, and resell devices — tracked end to end" | trade-in software, phone buyback software, refurbishment tracking | Commercial |
| Online Booking | `/features/online-booking` | "Online repair booking for your customers" | phone repair booking system, repair shop online booking | Commercial |
| Team & Permissions | `/features/team-permissions` | "Team management built for repair shops" | repair shop team management, repair shop permissions | Commercial |
| Repair Wiki | `/features/repair-wiki` | "A shared repair knowledge base for your team" | repair knowledge base, repair wiki software | Commercial |

**Important**: Each feature page should include:
- Genuine screenshots or detailed mockups of the feature in action
- A "How it works" section explaining the workflow
- A "Who is this for?" paragraph
- Links to 2-3 related feature pages
- A clear CTA to sign up or see pricing
- Unique meta title and description targeting the page's primary keywords
- SoftwareApplication or Product structured data where appropriate

---

### C. New Pages — Comparison / Alternative Pages (Phase 1)

These target high-intent searchers who are already aware of competitors. Be factual and fair — not slimy. Focus on genuine differences.

| Page | URL | Target H1 | Primary Keywords |
|------|-----|-----------|-----------------|
| RepairKeeper vs RepairDesk | `/compare/repairdesk` | "RepairKeeper vs RepairDesk — which repair shop software fits your business?" | RepairDesk alternative, RepairKeeper vs RepairDesk |
| RepairKeeper vs RepairShopr | `/compare/repairshopr` | "RepairKeeper vs RepairShopr — a straightforward comparison" | RepairShopr alternative, RepairKeeper vs RepairShopr |
| Best Repair Shop Software UK | `/compare/best-repair-shop-software-uk` | "Best repair shop software in the UK (2026)" | best repair shop software UK, repair shop software UK |

**Content approach for comparison pages:**
- Honest feature comparison table
- Highlight where RepairKeeper genuinely excels (multi-device tickets, auto-status, UK focus, free plan, trade-in module)
- Acknowledge where competitors have strengths (larger ecosystem, more integrations, longer track record)
- Include pricing comparison
- Target the "[Competitor] alternative" and "vs" keywords explicitly
- Update these pages whenever competitors change pricing or features

---

### D. New Pages — Use-Case Pages (Phase 2)

Vertical landing pages for specific repair business types. These capture "[business type] software" searches.

| Page | URL | Target H1 | Primary Keywords |
|------|-----|-----------|-----------------|
| Phone Repair Shops | `/for/phone-repair-shops` | "Software built for phone repair shops" | phone repair shop software, mobile phone repair software |
| Computer Repair Shops | `/for/computer-repair-shops` | "Management software for computer repair shops" | computer repair shop software, computer repair business software |
| Electronics Repair | `/for/electronics-repair` | "Repair management for electronics repair businesses" | electronics repair software, electronics repair management |

**Content approach**: Each page speaks directly to that business type's workflow, pain points, and how RepairKeeper maps to their needs. Include relevant feature callouts and a tailored CTA.

---

### E. New Pages — Pricing Page (Phase 1)

| Page | URL | Target H1 | Primary Keywords |
|------|-----|-----------|-----------------|
| Pricing | `/pricing` | "Simple, transparent pricing for repair shops" | repair shop software pricing, RepairKeeper pricing |

Currently pricing lives as a section on the homepage. It should **also** exist as a standalone page because:
- People search for "[product] pricing" directly
- It's a standard SaaS page that Google expects to find
- It can rank for "free repair shop software" and "repair shop software pricing"
- Keep the homepage pricing section too — duplicate content between your own pages is not an issue here since the canonical will differ

---

### F. Content / Blog (Phase 2-3)

**Do NOT launch a blog just to have one.** Only publish content that:
1. Targets a specific keyword with real search volume
2. Provides genuine value that builds trust and authority
3. Can naturally link to feature pages or the homepage

**Recommended initial articles (Phase 2, pick 3-5):**

| Article | Target Keywords | Intent | Why |
|---------|----------------|--------|-----|
| "How to manage a phone repair shop: the complete workflow" | how to manage a repair shop, repair shop workflow | Informational | Top-of-funnel, establishes authority, natural segue to product |
| "Repair shop inventory management: a practical guide" | repair shop inventory management, how to manage repair parts | Informational | Supports the inventory feature page |
| "How to price phone repairs (and actually make money)" | how to price phone repairs, repair shop pricing guide | Informational | Useful content for target audience |
| "Multi-device repair tickets: why they matter" | multi-device repair tickets | Informational/Commercial | Explains our differentiator, educates the market |
| "Repair shop customer communication: SMS, email, and tracking" | repair shop customer communication | Informational | Supports customer tracking feature page |

**Content rules:**
- Every article must be genuinely useful even if the reader never signs up
- No AI-generated filler. Every article should reflect real knowledge about running a repair shop
- Each article links to 1-2 relevant feature pages (internal linking)
- Each article has a soft CTA, not aggressive selling
- Publish on a `/blog/[slug]` route with proper article structured data
- Aim for 1000-2000 words per article — quality over quantity

---

## Internal Linking Strategy

Internal linking is critical for a small site. Every page should link to related pages, creating a web of relevance.

### Link Architecture

```
                        Homepage (/)
                       /    |    \
                      /     |     \
              Features   Pricing   Compare
             /  |  \       |       /  |  \
            /   |   \      |      /   |   \
     Tickets  Invoice  Inventory  vs RD  vs RS  Best UK
        |        |        |
    [Blog posts supporting each feature]
```

### Specific Linking Rules

1. **Homepage → Feature pages**: Each feature section on the homepage should include a "Learn more →" link to its dedicated feature page
2. **Feature pages → Feature pages**: Each feature page links to 2-3 related features (e.g. Ticket Management links to Multi-Device Tickets and Customer Tracking)
3. **Feature pages → Pricing**: Every feature page CTA section includes a link to pricing
4. **Comparison pages → Feature pages**: When mentioning a specific advantage, link to the relevant feature page
5. **Comparison pages → Pricing**: Always link to pricing from comparison pages
6. **Blog → Feature pages**: Every blog post links to 1-2 relevant feature pages
7. **Use-case pages → Feature pages**: Link to the features most relevant to that business type
8. **Footer**: Add feature page links to the footer navigation (already partially done with "Feature Links" section)
9. **Header nav**: Add a "Features" dropdown menu linking to individual feature pages

### Anchor Text
- Use descriptive, keyword-relevant anchor text (not "click here" or "learn more")
- Vary anchor text — don't use the exact same phrase every time
- Examples: "repair ticket management", "see how inventory tracking works", "multi-device ticket system"

---

## Technical SEO Actions

### Immediate
- [ ] **Fix meta description length**: Homepage description is ~400 characters. Trim to 150-160 characters
- [ ] **Add feature pages to sitemap**: Astro's sitemap plugin will handle this automatically when pages are created
- [ ] **Breadcrumb structured data**: Add proper breadcrumbs to all new pages (Home > Features > [Page])
- [ ] **Image alt text audit**: Ensure all images have descriptive, keyword-relevant alt text (current mockups should have alt text describing the feature shown)
- [ ] **Page speed**: Run Lighthouse audit on the live site. Astro is fast by default, but verify. Watch for large images (dashboard.png is 1504x848 — ensure it's optimised, consider WebP/AVIF format and srcset for responsive sizes)

### Near-Term
- [ ] **Structured data per feature page**: Add SoftwareApplication or Product schema to each feature page
- [ ] **Hreflang**: Not needed yet (UK-only), but note for future if expanding internationally
- [ ] **GSC setup**: Ensure Google Search Console is configured, submit sitemap, monitor indexing
- [ ] **Bing Webmaster Tools**: Submit sitemap there too — free traffic
- [ ] **Image optimisation pipeline**: Use Astro's `<Image>` component for automatic format conversion and sizing

### Later
- [ ] **Core Web Vitals monitoring**: Track LCP, FID, CLS monthly
- [ ] **404 monitoring**: Watch for broken links as pages are added/moved
- [ ] **Schema markup expansion**: Add Review/Rating schema when real reviews exist (remove the current aggregateRating of 5/5 from 1 rating — this looks artificial and could be flagged)

---

## Off-Page Considerations

This plan focuses on on-site SEO, but noting these for completeness:

1. **Google Business Profile**: If there's a physical presence, set one up
2. **Directories**: List RepairKeeper on SaaS directories (G2, Capterra, GetApp, Product Hunt, AlternativeTo)
3. **Repair industry forums**: Engage genuinely in communities where repair shop owners discuss tools (GSM Forum, Reddit r/mobilerepair, iFixit community)
4. **Founder content**: Dan writing about building RepairKeeper on personal channels / LinkedIn builds credibility and attracts natural backlinks
5. **Partnerships**: Reach out to repair parts suppliers — mutual linking benefits both parties

---

## Phased Execution Plan

### Phase 1: Foundation (Weeks 1-4)
**Goal**: Fix what we have and create the highest-impact new pages.

1. **Homepage optimisations** (Week 1)
   - Fix meta description length
   - Review and optimise image assets (WebP, srcset)
   - Run Lighthouse audit and fix any issues

2. **Standalone Pricing page** (Week 1)
   - Create `/pricing` with full plan comparison
   - Target: "repair shop software pricing", "free repair shop software"

3. **Feature pages — first batch** (Weeks 2-3)
   - Ticket Management (`/features/ticket-management`)
   - Multi-Device Tickets (`/features/multi-device-tickets`)
   - Quoting & Invoicing (`/features/quoting-invoicing`)
   - Customer Tracking (`/features/customer-tracking`)
   - Inventory Management (`/features/inventory-management`)

4. **Internal linking pass** (Week 3)
   - Add "Learn more" links from homepage sections to feature pages
   - Cross-link feature pages to each other
   - Update header/footer navigation

5. **Comparison page — first one** (Week 4)
   - Best Repair Shop Software UK (`/compare/best-repair-shop-software-uk`)
   - This is the safest comparison page to start with — no direct competitor naming issues

6. **Technical SEO** (Ongoing through Phase 1)
   - Verify GSC indexing
   - Submit sitemap to GSC and Bing
   - Fix aggregateRating schema (remove or get real reviews)

### Phase 2: Expand (Weeks 5-8)
**Goal**: Fill out remaining feature pages, add competitor comparisons, begin content.

7. **Feature pages — second batch** (Weeks 5-6)
   - Trade-In & Refurbishment (`/features/trade-in-refurbishment`)
   - Online Booking (`/features/online-booking`)
   - Team & Permissions (`/features/team-permissions`)
   - Repair Wiki (`/features/repair-wiki`)

8. **Comparison pages** (Weeks 6-7)
   - RepairKeeper vs RepairDesk (`/compare/repairdesk`)
   - RepairKeeper vs RepairShopr (`/compare/repairshopr`)

9. **First blog articles** (Weeks 7-8)
   - Pick 2-3 from the recommended list
   - Set up `/blog/` route with proper article schema

### Phase 3: Deepen (Weeks 9-12)
**Goal**: Use-case pages, more content, refine based on data.

10. **Use-case pages** (Weeks 9-10)
    - Phone Repair Shops (`/for/phone-repair-shops`)
    - Computer Repair Shops (`/for/computer-repair-shops`)
    - Electronics Repair (`/for/electronics-repair`)

11. **Additional blog content** (Weeks 10-12)
    - 2-3 more articles based on GSC data (what queries are we appearing for?)

12. **Review and refine** (Week 12)
    - Analyse GSC data: which pages are indexed, which queries drive impressions
    - Identify underperforming pages and improve them
    - Look for new keyword opportunities from search query data

### Ongoing
- Monitor GSC weekly for indexing issues and new keyword opportunities
- Update comparison pages when competitor pricing/features change
- Publish 1-2 blog posts per month (only if genuinely useful)
- Build backlinks through directories, communities, and partnerships

---

## Metrics to Track

| Metric | Tool | Frequency |
|--------|------|-----------|
| Indexed pages | Google Search Console | Weekly |
| Organic impressions | Google Search Console | Weekly |
| Organic clicks | Google Search Console | Weekly |
| Average position for target keywords | Google Search Console | Weekly |
| Referring domains | Ahrefs/GSC | Monthly |
| Core Web Vitals | PageSpeed Insights / GSC | Monthly |
| Organic signups (UTM tracking) | App analytics | Weekly |

---

## Summary

The single most impactful thing we can do right now is **expand from 2 pages to ~15 pages** by creating dedicated feature pages, a standalone pricing page, and an initial comparison page. This gives Google actual pages to rank for specific queries instead of trying to rank one monolith page for everything.

The second most impactful thing is **comparison and alternative pages** — these target the highest-intent searchers who are already in buying mode.

Blog content is Phase 2-3 and should be treated as supporting infrastructure, not the primary strategy. A repair shop owner searching "repair shop invoicing software" is closer to buying than one searching "how to run a repair shop" — prioritise the commercial pages first.

RepairKeeper's advantages in SEO will come from:
1. **Sharper relevance** — purpose-built pages for repair shop searches, not generic helpdesk content
2. **UK specificity** — targeting "UK" variants where competitors are US-focused
3. **Genuine differentiators** — multi-device tickets, auto-status, trade-in module, repair wiki are real features competitors lack
4. **Free plan** — can target "free repair shop software" credibly
5. **Founder credibility** — Dan's direct involvement in the repair industry adds authenticity that content farms can't replicate
