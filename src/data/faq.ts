export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What types of repair shops is RepairKeeper for?",
    answer:
      "RepairKeeper is built for any independent repair business — phone repair shops, electronics repair centres, computer service providers, and similar trades. Whether you're a solo technician or a team of 20, RepairKeeper scales to fit your workflow.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "We no longer offer a permanent free plan to new signups. Instead, every paid plan — starting from £12/mo with Solo — comes with a 14-day free trial. You'll need to enter a card at signup, but we don't charge anything until the trial ends, and you can cancel any time before then with no charge. If you were a RepairKeeper user before April 2026, your free plan is grandfathered and still works as it always has.",
  },
  {
    question: "How long is the free trial?",
    answer:
      "14 days on whichever plan you choose. You get full access to that plan's feature set from day one, and we send a reminder email 3 days before the trial ends so nothing surprises you.",
  },
  {
    question: "Do I need a credit card to start the trial?",
    answer:
      "Yes — Stripe holds the card on file and only charges on day 14 if you haven't cancelled. We've found that requiring a card leads to far better onboarding (fewer abandoned accounts, more engaged trials), but you're never locked in: cancel any time during the trial and you won't be charged a penny.",
  },
  {
    question: "What happens if I cancel during the trial?",
    answer:
      "No charge at all. Your subscription ends immediately, your account loses access to the app when the trial period ends, and your data is retained for 30 days in case you decide to come back. After 30 days, the data is permanently deleted unless you reactivate.",
  },
  {
    question: "What makes RepairKeeper different from other repair shop software?",
    answer:
      "RepairKeeper is the only platform with true multi-device tickets (one ticket, multiple devices, each tracked independently), an intelligent auto-status engine, a built-in trade-in and refurbishment pipeline, customer diagnosis approval, online repair booking, and a shared global repair wiki. Plus passkey authentication, GDPR-compliant customer management, and a full audit trail with before/after diffs.",
  },
  {
    question: "Can my customers track their repairs?",
    answer:
      "Absolutely. Every ticket generates a unique tracking link. Customers can see real-time repair progress, view device photos, approve or decline diagnoses, accept quotes, and pay invoices or deposits online via Stripe — all without creating an account.",
  },
  {
    question: "How does the auto-status system work?",
    answer:
      "RepairKeeper automatically advances device statuses based on your parts workflow. When you mark a part as 'ordered', the device moves to 'Awaiting Parts'. When parts arrive and are allocated, it moves forward again. The ticket status always reflects the most behind device — zero manual updates needed. You can also create custom statuses with your own names, colours, and overdue alerts.",
  },
  {
    question: "Can I buy and resell refurbished devices?",
    answer:
      "Yes. RepairKeeper includes a full trade-in and refurbishment system. Record purchases from customers or suppliers, grade device condition, run refurbishment checklists, track costs, and manage the lifecycle from purchase to sale. Margin scheme support is included for VAT-registered businesses.",
  },
  {
    question: "How does quoting and invoicing work?",
    answer:
      "You can create quick estimates or formal quotes with line items that customers accept or decline from a unique link. Quotes convert to invoices with one click. Invoices support discounts, VAT, partial payments, deposits, PDF export, email sending with reminders, and online payment via Stripe. Draft invoices can be edited; finalised invoices are locked to prevent accidental changes.",
  },
  {
    question: "Can customers book repairs online?",
    answer:
      "Yes. You can set up an online booking page where customers select a service, pick an available date, and pay a deposit. You control availability per day of the week, set blackout dates, and cap maximum bookings per day. Bookings land as leads in your dashboard for easy conversion to tickets.",
  },
  {
    question: "Can I manage multiple team members?",
    answer:
      "Yes, on the Standard plan (up to 5 team members) and Pro plan (up to 15). RepairKeeper supports three roles (Owner, Admin, Technician) with 11 granular permission flags that you can customise per team member. Invite new members via email, and every action is recorded in a full audit log with before/after diffs.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built into every layer. RepairKeeper uses encrypted passwords, supports passkey/biometric login (WebAuthn), enforces strict multi-tenancy isolation so no data leaks between shops, and logs every change in a tamper-evident audit trail. Customer data can be anonymised for GDPR compliance.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. RepairKeeper is a web-based SaaS application that works in any modern browser on desktop, tablet, or phone. There's nothing to install, update, or maintain — just log in and go.",
  },
  {
    question: "Can I send devices out to subcontractors?",
    answer:
      "Yes. Mark any device as sent to a subcontractor with courier name, tracking number, and return tracking. When the device comes back, record the action taken and return it to your normal repair workflow.",
  },
  {
    question: "What reporting is available?",
    answer:
      "RepairKeeper includes reports for repair summaries, revenue tracking, customer insights, and inventory analysis. Export your data as CSV for use in spreadsheets or accounting software. The dashboard gives you a real-time overview of key metrics, upcoming deadlines, and unactioned leads.",
  },
  {
    question: "Can I integrate RepairKeeper with other tools?",
    answer:
      "RepairKeeper supports configurable webhooks that fire on key events like ticket creation, lead submission, and invoice creation. You can also sync your calendar via iCal, export data as CSV, and configure custom SMTP for email sending.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click 'Start 14-day free trial', pick the plan that fits your shop, and create your account in under a minute. You'll have full access to your chosen plan immediately, and Stripe won't charge your card until day 14.",
  },
];
