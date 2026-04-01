# RepairKeeper Changelog

A running record of changes shipped to beta testers. Newest entries at the top.

---

## 1 April 2026

### Bug Fixes
- **Key Dates — Time Saving** — Fixed a bug where editing a collection, drop-off, or repair due date would revert to the wrong time after saving. Entering 15:30 would save as 16:30 due to a timezone offset issue. Now saves correctly.
- **Booking Calendar** — Fixed calendar dates shifting one column right in BST (e.g. April 1 appearing under Thursday instead of Wednesday). Also fixed today's highlight showing on the wrong date.

### Platform
- **New Subscriber Notifications** — Platform now sends an email notification when a new organisation subscribes to a paid plan.
- **Feedback Notifications** — Platform now sends an email notification when a user submits feedback or a feature suggestion.

---

## 31 March 2026

### Diagnostics
- **Customer Reference in Diagnosis Email** — The customer's own reference number now appears prominently in the diagnosis approval email subject line and body, making it easier for customers to match the email to their repair.
- **Customer Reference on Tracking Portal** — The customer reference is now shown clearly at the top of the device card on the repair tracking page.

---

## 28 March 2026

### Invoices
- **Multiple Invoices Per Ticket** — Tickets can now have more than one invoice. Useful for deposits followed by final invoices, or splitting charges across visits.
- **VAT Settings Respected** — Fixed an issue where invoices were created with VAT applied even when the organisation had VAT disabled in settings.

### Tickets & Devices
- **Customer Reference in Search** — Global search now includes customer reference numbers, making it faster to pull up a ticket from a customer's own job number.
- **Corporate Device Auto-Email Bypass** — Fixed an edge case where the auto-email setting was being ignored for corporate-owned devices.

---

## 25 March 2026

### Payments
- **Stripe Webhook Hardening** — Fixed dual-secret verification to correctly route platform subscription events and Connect payment events through separate signing secrets. Prevents webhook delivery failures when both event types are active.
- **Invoice Auto-Marking** — Invoices paid via Stripe Connect now automatically update to "Paid" status without manual intervention.

### Bookings
- **Phone Number Validation** — Fixed a validation error that was blocking booking enquiry form submissions when a customer phone number wasn't provided.

---

## 20 March 2026

### Accounts & Billing
- **Billing Tab** — A new Billing tab in Settings shows your current plan and links directly to manage your subscription via Stripe.
- **Plan Indicator** — Your active plan is now shown clearly in account settings.
- **Beta Transition** — The app now displays a transition notice for beta users ahead of the move to paid plans. The banner can be dismissed. A grace period applies before any access changes take effect.
- **Free Plan Default** — New sign-ups now correctly start on the Free plan rather than Beta.

### Settings
- **URL-Driven Tab Routing** — Settings tabs now use `?tab=` query parameters, so you can deep-link directly to a specific settings section.
- **API Keys Moved** — API Keys have moved to Settings > Account for a cleaner layout.

---

## 17 March 2026

### Security & Performance
- **Security Hardening** — Multiple security improvements applied across the API layer following an internal audit.
- **Soft-Delete** — Organisations, customers, leads, and invoices can now be soft-deleted (recoverable) rather than permanently removed. Cascade protections prevent data loss on related records.
- **Session Type Safety** — Internal session typing overhauled to remove unsafe casts and improve reliability.

### API
- **API Keys for Standard Plan** — Organisation API keys are now available to Standard plan subscribers (previously restricted to higher tiers).

---

## 13 March 2026

### Integrations
- **API Keys** — Org-scoped API keys are now available for external integrations. Keys use a `rk_live_` prefix, are hashed with SHA-256 (never stored in plain text), and support per-key permissions and IP allowlists. Requires a Standard plan or above.
- **Outbound Webhooks** — Configure webhooks to push real-time events (ticket created, device status changed, invoice paid, quote accepted, and more) to external systems. Payloads are signed with HMAC-SHA256 and retried automatically on failure.

---

## 11 March 2026

### Trade-In & Refurbishment
- **Editable Trade Device Details** — Grade, condition notes, and accessories on trade devices can now be edited inline from the detail page.
- **Part Allocation After Deposit** — Parts on a ticket with a finalised deposit invoice can now be allocated stock. Previously, the finalised invoice blocked status changes — this is now unblocked for deposit-first workflows.

### Label Printing
- **DYMO 30336 Preset** — New label size preset for the DYMO 30336 (1" x 2-1/8").
- Fixed landscape label printing on Dymo drivers by using dimension swapping instead of CSS transforms.
- Fixed blank labels appearing after printing due to page-break styling.
- Fixed double labels printing by removing the page-break-after on the last label.

---

## 10 March 2026

### Tickets
- **Diagnosis Approval Workflow** — Share a completed diagnosis with the customer via their tracking link. Customers can approve or decline the repair from the public tracking page. Approval status is shown on the device card and the dashboard shows a count of responses awaiting action.
- **Manual Diagnosis Email** — For shops with auto-send emails disabled, a manual "Send Diagnosis" button lets you notify the customer when a diagnosis is ready.
- **Pre-Work Deposit Requests** — Request a deposit from a customer before ordering parts or starting work. Customers can pay via their tracking link using Stripe, or contact the shop directly. Independent of the invoice system.

### Booking System
- **ICS Calendar Feed** — Subscribe to your bookings in Google Calendar, Apple Calendar, or Outlook. A unique feed URL is generated in Settings and stays up to date automatically. Cancelled bookings appear as struck-through in supporting apps.
- **Pre-fill Booking Form** — Booking form fields can now be pre-filled via URL query parameters, useful for linking from your website or social media.

### Reports
- **Year-End Accounting** — Revenue reports now include a per-invoice CSV export, a quarterly VAT summary table for MTD/VAT return prep, and an accounts receivable aging breakdown (0-30 / 31-60 / 61-90 / 90+ days) with CSV export.

### Inventory
- **Configurable Low-Stock Minimums** — Each part can now have its own minimum stock level per location. Parts without a minimum set are never flagged as low stock. The inventory overview has a new "Low stock only" filter.

### Emails
- **Auto-Send Master Toggle** — A new master toggle in email settings lets you disable all automatic status-update emails at once. Manual sends still work. Per-type toggles are dimmed when auto-send is off.

### Bug Fixes
- Fixed stock adjustment validation and a double-submit issue when receiving stock.
- Fixed the autoSendEmails field not loading correctly on the settings page.
- Fixed diagnosis approval polling, badge display, filter, and icon rendering.

---

## 9 March 2026

### Booking System
- **Public Drop-Off Booking Page** — Customers can now book a drop-off appointment from a public page (`/book/your-slug`). They pick a date from a calendar driven by your per-day availability settings, choose a time preference, and describe the device and fault. Confirmation and notification emails are sent automatically.
- **Service Catalogue Integration** — The booking form can show your service catalogue so customers select what they need when booking. Services are pulled from your existing catalogue.
- **Booking Deposits** — Configure a deposit amount per service. When a customer books, they pay the deposit via Stripe Checkout. The deposit is surfaced on the ticket once the booking is converted.
- **Booking Confirmation & Rejection** — Confirm or reject bookings from the Leads page. Confirmed bookings send a green confirmation email; rejections send a red email with an optional reason.
- **Blackout Dates** — Mark specific dates as closed in Settings. Blacked-out dates are hidden from the booking calendar and rejected if submitted directly.
- **Percentage Deposits** — Job deposits and booking deposits now support percentage amounts (e.g. 25%) in addition to fixed amounts.

### Leads
- **Quote from Lead** — Create a pre-filled formal quote directly from a lead with one click, pulling in the customer and device details.
- **Lead Correspondence** — Send and log messages to leads from the Leads page. Outbound emails use your custom SMTP when configured. Inbound replies can be pasted manually. The full thread carries over to the ticket after conversion.
- **Inline Wiki Device Creation** — When converting a lead to a ticket, you can now create a new wiki device entry inline without leaving the dialog.

### Bug Fixes
- Fixed an error when creating a second warranty return on the same ticket.
- Fixed stale subcontractor badge not clearing after return was recorded.

---

## 8 March 2026

### Invoices
- **Per-Invoice Payment Toggle** — Control whether online card payment is available on a per-invoice basis. When disabled, the customer's tracking page hides the Pay by Card button.

### Subcontractors
- **Return Tracking** — When a device comes back from board work, you can now record the exact return date. The device card shows a full custody timeline with sent and returned dates.

### Plans
- **Plan Restructure** — Stripe Connect is now available from the Lite plan onwards. Branding removal is now included in Standard. Pro is capped at 15 team members. A new Enterprise tier is shown for shops needing more.
- **Pricing on Upgrade Cards** — Plan upgrade cards in Account settings now show monthly pricing and a link to the full pricing page.

### Quotes
- **Response Notifications** — The sidebar now shows a badge when customers have accepted or declined quotes. Quote status badges (accepted, declined, sent) also appear on the ticket list.

### GDPR Compliance
- **Privacy Policy** — Add your shop's privacy policy in Settings. It's shown on the enquiry form (with a consent checkbox) and on the customer tracking page.
- **Customer Anonymisation** — When a customer has ticket history and can't be fully deleted, you can now anonymise their personal data instead, satisfying UK GDPR right-to-erasure requirements.
- **Data Retention Cleanup** — Audit logs older than 2 years and email logs older than 90 days are automatically purged. Ticket photo uploads stored in R2 are now deleted when tickets are permanently purged.
- **Terms & Conditions** — Terms and Privacy Policy settings have been moved to the Account settings tab for easier access.

### Bug Fixes
- Fixed the online payment toggle not being saved when clicking Finalise directly.
- Fixed the Stripe Connect status not syncing correctly from live Stripe account state.
- Fixed the card payment toggle not appearing in the invoice editor.
- Fixed cross-organisation data leak in wiki device and fault related tickets.
- Fixed part status changes being blocked on tickets with a finalised invoice.
- Fixed sidebar not updating after toggling a feature on or off.
- Fixed Unpaid invoice filter not including all non-paid finalised invoices.
- Fixed expired sessions not redirecting to login.
- Fixed stale SWR cache causing email state to revert on the ticket page.

---

## 7 March 2026

### Trade-In & Refurbishment
- **Trade-In System** — A complete trade-in and refurbishment pipeline for shops that buy, refurb, and resell devices. Available on Lite plans and above, with an org-level toggle in Settings.
- **Device Intake** — Record purchase details, source, cost, condition grade (A/B/C/D/Parts Only), and photos when buying a device.
- **Refurbishment Tickets** — Start a refurbishment ticket directly from a trade device. The ticket tracks parts, labour, and repair work. Actual refurb costs are calculated from the linked ticket.
- **Sale Recording** — Record the sold price and date. VAT-registered shops can use the VAT Margin Scheme (VAT on profit only). A downloadable PDF sale receipt is generated with full margin breakdown.
- **Testing Checklists** — Create reusable checklist templates in Settings with pass/fail/N/A items and a critical flag. Run a checklist on any trade device — the system suggests a condition grade based on the results.
- **Default Checklist Template** — A built-in default checklist is provided to get started quickly. Grades can be overridden manually after running a checklist.
- **Product Catalogue** — A new catalogue section for accessories, devices, and consumables with quantity tracking, stock movements, and a simple sales flow. Products can be added directly to invoices from the invoice editor via a search dialog.

---

## 6 March 2026

### Tickets
- **Photos at Booking-In** — You can now add photos of the device when creating a ticket or adding a device to an existing ticket. Photos are uploaded automatically once the ticket is saved. Requires a Standard plan or above.
- **Services Now Optional** — Adding a service is no longer required when creating a ticket or adding a device to an existing ticket. The customer fault description remains required, but you can now proceed without selecting a service — useful when the work isn't yet known and diagnosis isn't needed either.

### Repair Wiki
- **Automatic Part–Device Linking** — When you mark a part as installed on a ticket, the wiki now automatically links that part to the device it was fitted to. Going forward, the wiki device page will show which parts have been used on it, and the wiki part page will show which devices it's been fitted to — without any manual linking needed.



### Invoices
- **Customer Invoice Download** — Customers can now download their invoice as a PDF directly from the tracking page. The invoice number is now a clickable link that opens the PDF in a new tab — no login required.

### Quotes
- **Revise Accepted Quotes** — If a customer accidentally accepts the wrong quote, you can now revise it. An accepted quote can be reopened as a draft, edited, and resent for the customer to re-approve. If the quote has already been converted to an invoice, delete the draft invoice first and then use Revise.
- **Edit Draft Quotes** — Draft quotes on a ticket can now be edited before sending. A pre-populated editor lets you update line items, VAT, discounts, notes, and expiry date.

### Invoices
- **Invoice Hub** — A dedicated Invoices page is now in the sidebar, giving you a full overview of all invoices across every ticket. Filter by All, Drafts, Unpaid, Overdue, or Paid. Overdue invoices are highlighted in red. Click any row to jump straight to the ticket.
- **Send Payment Reminders** — From the Invoice Hub, send a payment reminder email directly to a customer (with the invoice PDF attached) without needing to open the ticket first.
- **Company & VAT Number on Invoices** — You can now add your Companies House registration number and VAT number in Settings → Invoices. Both are printed on all invoices when set.

---

## 5 March 2026

### Invoices
- **Payment Terms & Due Dates** — Invoices now support payment terms (e.g. 30 days). Set a default in Settings, or override it per invoice. The due date is shown on the invoice.
- **Refresh after quote conversion** — The invoice section now refreshes automatically after converting a quote to an invoice.

### Quotes
- **Ticket-Linked Quotes** — Quotes can now be created directly from within a ticket, and accepted quotes are linked back to the ticket automatically.
- **Cancel Sent Quotes** — You can now manually cancel a quote you've already sent.
- **VAT Default** — The New Quote dialog now pre-fills the VAT rate from your invoice VAT setting.

### Warranty Returns
- **Full Custody Chain** — Warranty returns now track re-collection date alongside drop-off and repair dates, giving you a complete history for each returned device.
- **Tracking Portal** — Customers can now see warranty return status on the public tracking portal.
- **Backfill** — A Warranty status has been added automatically for all existing organisations.

### Bug Fixes
- Fixed an issue where saving one field on a ticket device could accidentally clear date fields on unrelated devices.
- Fixed the diagnosis estimate and revert buttons not working correctly on device cards.
- Fixed the quotes section on tickets not refreshing after accepting or declining.

---

## 4 March 2026

### Tickets
- **Diagnosis Workflow** — Device cards now support a proper diagnosis flow. Add services from a service catalogue, capture technician notes, and mark whether a device requires diagnosis before work begins. Estimates are tracked per device.
- **Calendar View** — The Schedule page and Tickets page both now have a calendar view alongside the list view.
- **Tickets List Improvements** — Customer phone and email are now visible in the tickets list. You can sort by Created date. Tickets awaiting drop-off now show their drop-off date.

### Repair Wiki
- **Device Categories** — Categories are now a full feature in the wiki, with a dedicated Categories tab. Devices can be assigned custom categories. Dark mode category select fixed.
- **Global Device Search** — Search across all wiki devices by name, brand, or model directly from the device browser.
- **Pagination & Sorting** — All four wiki tabs (Devices, Parts, Faults, Resources) now have pagination and sort controls.

### Emails
- **Email Template Customisation** — Customise the body text of outgoing emails (status updates, invoices, quotes) from Settings.

### Settings
- **Settings Reorganisation** — The Settings page has been restructured from 17 tabs down to 12, with fields grouped more logically.

### Bug Fixes
- Fixed the wiki page crashing due to a category data mismatch.

---

## 3 March 2026

### Tickets
- **Guided Device Browser** — When creating a ticket, a guided device browser lets you search and select a device from the wiki, linking the ticket to the correct wiki entry automatically.

### Emails
- Fixed duplicate status emails being sent in some cases (atomic claim fix).

### Bug Fixes
- Fixed invoice item descriptions being incorrectly required.
- Various wiki validation fixes for optional fields.

---

## 2 March 2026

### Invoices
- **Partial Payments & Deposits** — Record multiple payments against an invoice with a full payment ledger. You can also set a deposit amount when creating an invoice.
- **Import from Parts** — When editing an invoice, you can now pull in the ticket's parts with a single click rather than re-typing them.

### Quotes
- **Formal Quotes System** — A full standalone quotes workflow is now available. Create, send, and manage formal quotes with a public customer-facing view link. Quotes can be accepted, declined, or expired, and converted into tickets.
- **Inline Customer Creation** — Create a new customer directly from the New Quote dialog without navigating away.

### Tickets
- **Cancelled / Abandoned Statuses** — New terminal statuses (Cancelled, Abandoned) for tickets that don't proceed to completion. Terminal tickets are visually distinct and won't trigger auto-status logic.
- **Editable Ticket References** — Ticket reference numbers can now be edited after creation.

### Emails
- **Custom Email Sender & SMTP** — Send emails from your own domain using a custom Reply-To address or a fully custom SMTP server.
- **Email Queue & Activity Log** — Outgoing emails are now queued reliably and logged. A unified email activity view shows what's been sent per ticket.
- **Scheduled Status Emails** — Status update emails can be queued with a delay so you can review before they send.

### Label Printing
- **Label Enhancements** — Font size and padding controls, estimate field, and device passcode option added to label printing.
- **New Size Presets** — DYMO and Brother label size presets added.

### Bug Fixes
- Fixed email countdown not persisting correctly after page reload.
- Fixed queued emails never sending after countdown expires.

---

## 1 March 2026

### App
- **Announcements & Feedback** — In-app announcements from the RepairKeeper team, plus a feedback form available directly from the sidebar.

### Plans
- **Plan Updates** — Core features (wiki, asset tracking, inventory, label printing, etc.) are now available on Free and Lite plans. The Lite plan ticket limit has been increased to 150/month.

---

## 28 February 2026

### Label Printing
- **Landscape Orientation** — Labels can now be printed in landscape orientation (useful for wider labels like DK-11208).
- **Brother DK-11208 Preset** — New label preset for the QL-1110NWB printer.

### App
- **Install as App (PWA)** — RepairKeeper can now be installed on your phone or desktop as a home screen app. Basic offline viewing is also supported when your connection drops.
- **Landline Field** — Customers now have a separate landline number field alongside mobile.

### Bug Fixes
- Fixed the back button using hardcoded routes instead of browser history.

---

## 27 February 2026

### App
- **Address Notes** — Add free-text notes to a customer's address (e.g. access instructions, buzzer code).
- **Quick Quote Transaction Fee** — You can now include a fixed transaction fee in Quick Quote calculations.
- **Undo Booking-In** — Owners can now undo a booking-in if it was done in error, returning affected devices to "Awaiting Drop Off".

### Bug Fixes
- Fixed mobile scrolling inside dialogs.
- Fixed review link URLs causing relative-path 404s.

---

