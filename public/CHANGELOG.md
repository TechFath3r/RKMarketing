# RepairKeeper Changelog

A running record of changes shipped to beta testers. Newest entries at the top.

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

