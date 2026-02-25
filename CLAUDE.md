
# RepairKeeper — Landing Page Build Context

This document provides full context about RepairKeeper so that a marketing/landing page can be built with accurate, detailed knowledge of the product.

---

The site should be fast, modern, and optimised for the latest SEO best practices. It should make smart use of css animations where appropriate.

The site will be hosted free on github pages with a custom url of repairkeeper.co.uk. The RepairKeeper app is hosted at app.repairkeeper.co.uk/register

I would like to use Astro

Colours and theme should be in line with that of a modern tech company, and design approaches should be focused on current best practices for driving sales

## What Is RepairKeeper?

RepairKeeper is a **repair shop management platform** built for independent repair businesses — phone repair shops, electronics repair centres, computer service providers, and similar trades. It replaces spreadsheets, paper tickets, and disconnected tools with a single web app that handles the full repair lifecycle: from customer enquiry through to invoicing and collection.

**Existing metadata tagline**: "Repair shop management — track tickets, generate quotes, and manage customers."

**Dashboard tagline**: "Your repair shop at a glance"

---

## Target Audience

- Independent phone/electronics/computer repair shops
- Small-to-medium repair businesses with 1–20 staff
- Repair shops that want to professionalise their workflow
- Businesses currently using paper, spreadsheets, or basic POS systems

---

## Core Value Propositions

1. **All-in-one repair management** — tickets, customers, invoicing, inventory, and knowledge base in one place
2. **Multi-device tickets** — a single ticket can hold multiple devices, each with its own status and parts (e.g. a customer drops off a phone and a tablet)
3. **Intelligent auto-status** — the system automatically moves device/ticket statuses forward based on parts workflow, so technicians don't have to manually update statuses
4. **Customer self-service** — customers get a tracking link to see real-time repair progress and pay invoices online
5. **Team-ready from day one** — roles, permissions, and audit logging built in
6. **Shared repair knowledge** — a wiki/knowledge base where shops can contribute and access global repair guides

---

## Feature Breakdown (For Landing Page Sections)

### Ticket Management

- Create repair tickets with full customer details, device info, fault descriptions, and accessories
- **Multi-device support**: one ticket can contain multiple devices (e.g. phone + tablet), each tracked independently
- Customisable ticket reference format (e.g. `RK-0001`, or your own prefix)
- Assign tickets to specific team members
- Track custody: "With Customer", "In Shop", or "Collected"
- Capture **digital intake and collection signatures** on-screen
- Set drop-off dates, collection dates, and repair-due-by deadlines
- Record device passcodes, condition notes, and accessories
- **Soft delete** with 30-day recovery — nothing is lost accidentally

### Intelligent Auto-Status System

- **9 default statuses** out of the box: Awaiting Drop Off → Booked In → Diagnosing → Parts Need Ordering → Awaiting Parts → Parts Arrived → In Repair → Ready for Collection → Collected
- Fully customisable — create your own statuses with custom names, colours, and ordering
- **Two-tier automation**:
  - Device statuses auto-advance based on parts (e.g. when a part is marked "ordered", the device moves to "Awaiting Parts")
  - Ticket status auto-derives from the "most behind" device — always accurate, zero manual updates needed
- **Booking-in workflow**: capturing an intake signature or marking a device as received automatically advances all "Awaiting Drop Off" devices to "Booked In"
- Stale/urgent alerts: configure how many days before a status is flagged as overdue

### Customer Management

- Full customer profiles: name, email, phone, address, company, preferred contact method
- Track how customers found you (source tracking)
- Customer notes for internal reference
- Email notification preferences per customer
- **Smart duplicate detection**: automatically identifies potential duplicate customers using name and phone matching
- **One-click customer merge**: resolve duplicates by merging records with field-by-field conflict resolution
- Customer balance tracking across all invoices

### Customer-Facing Features

- **Public tracking page**: customers receive a unique link to track their repair in real time — device statuses, estimated costs, public notes timeline, and quote/invoice details
- **Online invoice payment**: customers can pay outstanding invoices directly from the tracking page via Stripe
- **Public enquiry form**: embed a branded enquiry form on your website — captures name, contact details, device type, fault description
  - Spam protection built in (honeypot + time-trap)
  - Enquiries land as Leads in your dashboard
- **Automated email notifications**: customers receive emails when their ticket is created and when statuses change (respects per-customer opt-out preferences)

### Leads / Enquiries

- Incoming enquiries from the public form appear as Leads
- Status workflow: New → Contacted → Converted → Closed
- Convert a lead directly into a ticket with one click
- Unactioned leads badge on the dashboard so nothing slips through
- Expandable rows to view full enquiry details at a glance

### Quoting & Invoicing

- **Quick Quote calculator**: fast estimates without creating a full ticket
- **Detailed quotes**: line items with labour, parts, postage, payment fees, and VAT
- **Professional invoices**:
  - Draft and finalised states (finalised invoices are locked to prevent accidental changes)
  - Flexible line items with quantity, unit price, and descriptions
  - Discount support (fixed amount or percentage)
  - Customisable invoice message and footer
  - VAT registration support with configurable rates (separate rates for quotes vs invoices, overridable per document)
- **PDF export**: generate professional PDF invoices and quotes
- **Email invoices**: send invoices directly to customers with one click, with sent-date tracking
- **Payment tracking**: mark invoices as Unpaid, Pending, or Paid with method (Cash, Bank Transfer, Card Terminal, Stripe, Other)
- **Stripe Connect**: accept online payments — customers pay from the tracking page, payment status updates automatically

### Inventory & Stock Management (Optional Feature)

- Track stock levels across **multiple locations** (e.g. main shop, warehouse, second branch)
- **Automatic stock allocation**: when a part is added to a ticket, stock is checked and decremented instantly if available
- **Smart availability indicators**: see at a glance which parts are in stock and which need ordering
- **One-click allocation**: when stock arrives, allocate to waiting tickets with a single click
- **Stock demand view**: see all parts needed across all open tickets with supplier links
- **Low stock alerts**: set minimum stock levels per part per location
- Full **audit trail**: every stock movement (receive, adjust, ticket use, return, faulty) is logged
- Supplier management with website, contact details, SKUs, and costs per part

### Repair Wiki / Knowledge Base

- Build a searchable knowledge base of **devices, parts, faults, and repair guides**
- Link relationships: which parts fit which devices, which faults affect which devices, which guides solve which faults
- Attach **resources**: links to videos, supplier pages, guides, forums, and documentation
- **Global sharing**: contribute your repair knowledge to a shared database visible to all RepairKeeper shops — or keep entries private to your organisation
- Import devices in bulk via CSV

### Asset Registry

- Track **customer-owned devices** as named assets (e.g. "Dan's work phone")
- Record serial numbers, link to wiki device types, and track ownership
- See repair history per asset — which tickets has this device been through?
- Quick-select assets when creating new tickets

### Scheduling & Calendar

- View upcoming **drop-offs, collections, and repair deadlines** in one place
- Time range filters: today, this week, this month, or all
- Overdue highlighting for missed deadlines
- Per-device date tracking

### Team Management & Permissions

- **Three roles**: Owner, Admin, Technician
- **11 granular permission flags** that can be customised per team member:
  - Manage settings, statuses, team, customers, inventory
  - Create/finalise/unlock invoices
  - Edit wiki, delete tickets, remove members
- **Invite system**: send email invitations with role pre-assigned
- Owner permissions are locked — they always have full access
- Full **audit log**: every create, update, and delete is recorded with before/after diffs, user attribution, and timestamps

### Settings & Customisation

- Custom **branding**: organisation logo, shop name
- Custom **ticket prefix** (up to 10 characters)
- **Label printing**: generate adhesive labels with QR codes, ticket reference, serial number, fault description — configurable dimensions (default 62×29mm)
- **Email notification toggles**: choose which events trigger customer emails (ticket created, status update, new enquiry)
- **Card terminal integration ready**: fields for Square/SumUp provider selection
- **Custom statuses**: full control over status names, colours, order, and timing alerts
- **Multiple locations**: manage separate stock locations
- **Supplier directory**: store supplier details and link to parts

### Authentication & Security

- **Email + password** login with bcrypt hashing
- **Passkey / biometric login** (WebAuthn): log in with fingerprint, Face ID, or security key — no password needed
- Secure **password reset** via email
- **Invite-only registration**: new shops can only be created when registration is explicitly enabled — prevents unauthorised signups
- **Multi-tenancy isolation**: every query is scoped to the organisation — no data leaks between shops
- JWT sessions with 7-day expiry

---

## Pricing Plans

|                                     | Free   | Lite (£20/mo) | Standard (£30/mo) | Pro (£55/mo) |
| ----------------------------------- | ------ | ------------- | ------------------ | ------------ |
| Tickets per month                   | 25     | 100           | Unlimited          | Unlimited    |
| Team members                        | 1      | 1             | 5                  | Unlimited    |
| Core ticketing & invoicing          | Yes    | Yes           | Yes                | Yes          |
| Public enquiry form                 | —     | Yes           | Yes                | Yes          |
| Custom ticket prefix                | —     | Yes           | Yes                | Yes          |
| CSV export                          | —     | Yes           | Yes                | Yes          |
| Asset tracking                      | —     | —            | Yes                | Yes          |
| Repair wiki / knowledge base        | —     | —            | Yes                | Yes          |
| Inventory & stock management        | —     | —            | Yes                | Yes          |
| Label printing                      | —     | —            | Yes                | Yes          |
| Team management & RBAC              | —     | —            | Yes                | Yes          |
| Audit log viewing                   | —     | —            | Yes                | Yes          |
| Stripe Connect (online payments)    | —     | —            | —                 | Yes          |
| Branding removal                    | —     | —            | —                 | Yes          |

(There is also a BETA plan used during early access that grants all features.)

Monthly and yearly billing options are available via Stripe Checkout.

---

## Technology (If Relevant to Landing Page)

- Web-based — works on any device with a browser (desktop, tablet, phone)
- Hosted / SaaS — no installation needed
- Real-time updates
- Built with Next.js, PostgreSQL, and modern web standards
- Secure by default: encrypted passwords, passkey support, tenant isolation, audit logging

---

## Brand Elements

- **App Name**: RepairKeeper
- **Domain**: repairkeeper.co.uk
- **Email Domain**: contact.repairkeeper.co.uk
- **Existing Copy**:
  - "Your repair shop at a glance" (dashboard)
  - "Repair shop management — track tickets, generate quotes, and manage customers" (meta description)
  - "Powered by RepairKeeper" (public tracking/enquiry pages)
  - "Sent via RepairKeeper" (email footer)
  - "Tell us about your repair" (enquiry form heading)

---

## Suggested Landing Page Sections

1. **Hero**: headline + tagline + CTA (e.g. "Get Started Free" / "Book a Demo")
2. **Feature overview**: high-level icons/cards for the major feature areas
3. **Multi-device tickets**: explain the unique multi-device + auto-status system
4. **Customer experience**: tracking page, online payments, email notifications
5. **Inventory management**: stock tracking, allocation, demand view
6. **Wiki / Knowledge base**: shared repair knowledge
7. **Team & permissions**: roles, audit logging, invite system
8. **Pricing**: plan comparison table
9. **Testimonials / Social proof** (placeholder)
10. **FAQ**
11. **CTA / Sign-up**

---

## Differentiators vs Competitors

These are the features that make RepairKeeper stand out:

1. **Multi-device tickets with independent statuses** — most competitors treat a ticket as one device
2. **Intelligent auto-status engine** — statuses move themselves based on parts workflow
3. **Global repair wiki** — shared knowledge base across all shops using the platform
4. **Customer duplicate detection + merge** — smart matching algorithm with conflict resolution
5. **Passkey authentication** — passwordless login with biometrics
6. **Asset registry** — track customer devices across multiple repairs over time
7. **Granular RBAC** — 11 permission flags per team member, not just "admin or not"
8. **Customer self-service** — tracking + online payment from a single link
9. **Full audit trail** — every change logged with diffs for compliance
10. **Spam-protected public enquiry forms** — capture leads directly from your website
