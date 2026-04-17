# SOLO Plan + Trial Rollout — Marketing Site Handover

**Date**: 2026-04-14 (SOLO) → updated 2026-04-17 (trial rollout)
**From**: Repair-Keeperv2 (product)
**To**: RKMarketing (this repo)
**Commits**:
- [790c12d](https://github.com/TechFath3r/Repair-Keeperv2/commit/790c12d) — SOLO plan
- [664b24d](https://github.com/TechFath3r/Repair-Keeperv2/commit/664b24d) — grandfather existing FREE/BETA orgs
- [f54d106](https://github.com/TechFath3r/Repair-Keeperv2/commit/f54d106) — 14-day trial on first subscription + gate new signups
- [8320928](https://github.com/TechFath3r/Repair-Keeperv2/commit/8320928) — trial-ending email + trial status in billing UI

Two things have shipped since the original handover was written:
1. A new entry-level paid plan called **Solo** (the original subject of this doc).
2. **The free tier is no longer offered to new signups** — every paid plan now includes a **14-day free trial** instead. Existing FREE and BETA orgs are grandfathered and keep free access forever.

The marketing site needs to advertise Solo **and** rewrite the acquisition funnel to lead with the trial offer.

---

## The new plan

| Field | Value |
|---|---|
| Name | **Solo** |
| Monthly price | **£12** |
| Yearly price | **£120** (2 months free — matches Lite/Standard/Pro pattern) |
| Tickets / month | **75** |
| Team members | **1** |
| Emails / month | **100** |
| Storage quota | 5 MB |
| Enum value (backend) | `SOLO` |
| Position | Between Free and Lite |

### Why it exists
A long-standing beta tester wanted to convert but found Lite (£20/mo) too expensive for their volume. Solo fills the gap between Free (25 tickets) and Lite (150 tickets) at £12/mo.

### Target customer
Solo technicians doing low-volume repairs who want paid-tier features (custom SMTP, Stripe Connect, email templates) without the trade-in / catalogue / team features they won't use.

---

## Feature matrix — where Solo sits

Solo = Free's feature set **plus**:
- Custom SMTP & email templates
- Online card payments (Stripe Connect)

Solo **does NOT include** (these stay Lite+):
- Trade-in & refurbishment system
- Product catalogue
- Online repair booking
- Team roles & permissions (RBAC)
- Audit log / activity history
- Reporting & analytics
- Device photos on tickets
- Branding removal
- Note file attachments
- Webhooks & integrations

---

## Files that need updating

### 1. `src/data/pricing.ts` — the canonical source

Insert a new Solo plan **between Free and Lite** in the `plans` array. Copy the Free plan's feature list and flip these three to `included: true`:
- `Custom SMTP & email templates`
- `Online card payments (Stripe Connect)`

Plan object to add:

```ts
{
  name: "Solo",
  description: "For solo repairers who want paid-tier essentials",
  monthlyPrice: 12,
  yearlyPrice: 120,
  cta: "Start with Solo",
  ctaLink: "https://app.repairkeeper.co.uk/register",
  limits: [
    { label: "Tickets per month", value: "75" },
    { label: "Team members", value: "1" },
  ],
  features: [
    { text: "Core ticketing (multi-device)", included: true },
    { text: "Customer tracking page", included: true },
    { text: "Public repair enquiry form", included: true },
    { text: "Parts inventory & stock management", included: true },
    { text: "Wiki / internal knowledge base", included: true },
    { text: "Asset tracking (QR codes)", included: true },
    { text: "Label printing", included: true },
    { text: "CSV export", included: true },
    { text: "Custom ticket number prefix", included: true },
    { text: "Custom SMTP & email templates", included: true },
    { text: "Online card payments (Stripe Connect)", included: true },
    { text: "Trade-in & refurbishment system", included: false },
    { text: "Product catalogue", included: false },
    { text: "Online repair booking", included: false },
    { text: "Team roles & permissions (RBAC)", included: false },
    { text: "Audit log / activity history", included: false },
    { text: "Reporting & analytics", included: false },
    { text: "Device photos on tickets", included: false },
    { text: "Branding removal", included: false },
    { text: "Note file attachments", included: false },
    { text: "Webhooks & integrations", included: false },
    { text: "Multiple locations / branches", included: false },
  ],
},
```

### 2. `src/components/Pricing.astro`

- The grid currently uses `lg:grid-cols-4`. With 5 plans it'll feel cramped on laptop widths. Bump to `lg:grid-cols-5` (or keep 4 and scroll / stack — judgement call based on how the cards look).
- Verify the monthly/yearly toggle still renders correctly with the extra column.
- The "highlighted: true" flag stays on Standard (the recommended tier). Solo is not highlighted.

### 3. `CLAUDE.md` (this repo, root)

The pricing table (around line 180) needs an extra Solo column, and there are **pre-existing accuracy drifts** worth fixing while in there:

| Drift | Current (wrong) | Should be |
|---|---|---|
| Lite tickets/mo | 100 | **150** |
| Pro price | £55/mo | **£55/mo** ✅ (matches product, but see below) |
| Pro team members | Unlimited | **15** |
| Stripe Connect | Pro only | **Solo, Lite, Standard, Pro** (all paid tiers) |
| Wiki / Asset tracking / Inventory / Label printing | Standard+ only | **All plans including Free** |
| Public enquiry form / Custom prefix / CSV export | Lite+ only | **All plans including Free** |

The product-side feature matrix that reflects truth as of today lives at `claude/context.md` in the product repo (see commit 790c12d).

> Note on Pro price: the product `plans.ts` reflects £55/mo and the current marketing `pricing.ts` shows £60/mo — this is a pre-existing mismatch from before the SOLO work. Worth resolving but not blocking.

### 4. `src/data/faq.ts`

The **"Is there a free plan?"** answer needs a complete rewrite. The old answer referenced a permanent free tier; that is no longer offered to new signups.

Suggested new answer:

> We no longer offer a permanent free plan to new signups. Instead, every paid plan — starting from £12/mo with Solo — comes with a **14-day free trial**. You'll need to enter a card at signup, but we don't charge anything until the trial ends, and you can cancel any time before then with no charge. If you were a Repair Keeper user before April 2026, your free plan is grandfathered and still works as it always has.

The team-management answer might benefit from mentioning Solo as the cheapest way to get Stripe Connect without upgrading to a full team plan.

Other FAQ entries worth a pass:
- Any "how long is the trial?" / "do I need a card?" questions — add if missing.
- "What happens if I cancel during the trial?" — *"No charge. Your account loses access to the app at the end of the trial, but your data is retained for 30 days in case you want to reactivate."* (Verify data-retention wording with Dan before publishing.)

---

## Free tier removed + 14-day trial — now shipped (2026-04-17)

All three future changes flagged in the original handover are now live in production once the current branch is deployed. Summary of the behaviour change:

### New signup flow
1. User registers on the app.
2. They are immediately routed to a **"Choose your plan"** page — they cannot use any feature without picking one.
3. They select a paid plan → Stripe Checkout (card required) → subscription created with `trial_period_days: 14`.
4. They enter the app with full access to whichever plan they picked. Stripe does not charge the card for 14 days.
5. Stripe fires `customer.subscription.trial_will_end` ~3 days before the trial ends → the product sends a reminder email ("trial ends {date}, card will be charged £X").
6. On day 14, Stripe auto-charges. If the card fails, the subscription goes `past_due` and the user hits the `subscription-required` page.

### Grandfathering rules
- **Existing FREE orgs**: flagged `isGrandfathered = true` in the DB. They keep the permanent free tier forever, even if they later upgrade to paid and then cancel (they'd fall back to FREE with full access, as originally promised).
- **Existing BETA orgs**: also flagged grandfathered. When the grace period ends (2026-04-28), the auto-downgrade cron drops them to FREE **with grandfathered status**, honouring the fallback they were promised at signup.
- **Every other user**: no more free tier. They must maintain a paid subscription or lose access to the app.

### What this means for marketing

- **The hero offer is now "14-day free trial on every plan"**, not "free forever" or "free plan available".
- The pricing page should no longer show Free as a signup option. Free can either be removed entirely, or reframed as "Grandfathered plan (no longer accepting new signups)" if you want to be transparent — Dan's call.
- CTAs across the site should read **"Start 14-day free trial"** (or similar) rather than "Get started free" or "Sign up for free".
- The "card required" friction is intentional — trial conversion rates are 3–5× higher with a card on file than without. Don't try to hide it; say so clearly ("Card required — cancel any time before day 14 and you won't be charged").
- FAQ rewrite needed — see the updated FAQ section below.

---

## Backend changes (for reference, not action)

### SOLO plan
- New `SOLO` value added to the `Plan` Prisma enum (migration `20260416120000_add_solo_plan`)
- Stripe price IDs: `STRIPE_PRICE_SOLO_MONTHLY` and `STRIPE_PRICE_SOLO_YEARLY` (already configured in Vercel)
- Checkout route (`/api/billing/checkout`) accepts `"SOLO"` as a plan key
- Webhook maps Solo price IDs back to the `SOLO` enum value
- Admin pages show Solo with a teal badge
- `/subscription-required` page and in-app billing tab both show the Solo card
- `packages/core/__tests__/plans.test.ts` has Solo-specific test coverage — all passing

### Trial + grandfathering
- New `Organisation.isGrandfathered` boolean column (migration `20260417130000_add_org_is_grandfathered`), backfilled `true` for all FREE and BETA orgs at rollout time.
- Beta-downgrade cron (`/api/cron/downgrade-expired-beta`) now sets `isGrandfathered: true` alongside the BETA → FREE transition.
- Checkout session passes `subscription_data.trial_period_days: 14` only on first-time subscriptions (when `stripeSubscriptionId` is null); re-subscribers do not get another trial.
- `SuspendedGate` redirects any org with `plan = FREE && !isGrandfathered` to `/subscription-required`.
- Stripe webhook endpoint now subscribes to `customer.subscription.trial_will_end` (configured in the Stripe dashboard, production).
- Trial-ending email template added at `apps/web/src/lib/email-templates.ts` (`trialEndingEmailHtml`).
- Billing tab + `/api/billing/status` show "Free trial — card will be charged on {date}" during the `trialing` status.

---

## Checklist for whoever updates the site

### SOLO plan
- [ ] Add Solo plan to `src/data/pricing.ts`
- [ ] Bump grid to 5 columns in `Pricing.astro` (or validate 4-col still looks good)
- [ ] Update `CLAUDE.md` pricing table (add Solo column + fix the existing drifts listed above)

### Trial rollout
- [ ] Remove Free as a selectable plan from the pricing grid — or reframe it as "Grandfathered — no longer accepting new signups" if you want to be transparent about existing users (Dan's call).
- [ ] Rewrite hero copy to lead with "14-day free trial on every plan" as the headline offer.
- [ ] Rewrite all "Get started free" / "Sign up free" CTAs to "Start 14-day free trial" (or equivalent). Be upfront that a card is required.
- [ ] Rewrite FAQ "Is there a free plan?" answer (see suggested copy above).
- [ ] Add new FAQ entries: "How long is the trial?", "Do I need a card?", "What happens if I cancel during the trial?".
- [ ] Add trust-building copy near the CTA: e.g., "Cancel any time before day 14 — you won't be charged."

### General
- [ ] Visual check: hero CTA still makes sense, monthly/yearly toggle works, mobile stacking is clean, 5-column grid renders sensibly on laptop widths.
- [ ] Deploy (GitHub Pages / Cloudflare Pages — whichever is configured).
