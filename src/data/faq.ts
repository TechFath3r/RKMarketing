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
      "Yes! The Free plan includes core ticketing and invoicing for up to 25 tickets per month at no cost — forever, not a trial. Paid plans start at £20/mo for higher limits and additional features. During our beta period, early adopters get full access to all features.",
  },
  {
    question: "What makes RepairKeeper different from other repair shop software?",
    answer:
      "RepairKeeper is the only platform with true multi-device tickets (one ticket, multiple devices, each tracked independently), an intelligent auto-status engine that moves tickets forward automatically, and a shared global repair wiki. Plus features like passkey login, customer duplicate detection, and a full audit trail.",
  },
  {
    question: "Can my customers track their repairs?",
    answer:
      "Absolutely. Every ticket generates a unique tracking link that you share with the customer. They can see real-time repair progress, view quotes and invoices, and even pay online via Stripe — all without needing to create an account.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. RepairKeeper is a web-based SaaS application that works in any modern browser on desktop, tablet, or phone. There's nothing to install, update, or maintain — just log in and go.",
  },
  {
    question: "How does the auto-status system work?",
    answer:
      "RepairKeeper automatically advances device statuses based on your parts workflow. For example, when you mark a part as 'ordered', the device moves to 'Awaiting Parts'. When parts arrive and are allocated, it moves to 'Parts Arrived'. The ticket status always reflects the most behind device — zero manual updates needed.",
  },
  {
    question: "Can I manage multiple team members?",
    answer:
      "Yes, on the Standard plan (up to 5 team members) and Pro plan (unlimited). RepairKeeper supports three roles (Owner, Admin, Technician) with 11 granular permission flags that you can customise per team member. Invite new members via email, and every action is recorded in a full audit log with before/after diffs.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built into every layer. RepairKeeper uses encrypted passwords, supports passkey/biometric login (WebAuthn), enforces strict multi-tenancy isolation so no data leaks between shops, and logs every change in a tamper-evident audit trail.",
  },
  {
    question: "Can I accept online payments?",
    answer:
      "Yes, with the Pro plan. RepairKeeper integrates with Stripe Connect so your customers can pay invoices directly from their tracking page. Payment status updates automatically — no manual reconciliation needed.",
  },
  {
    question: "Can I transfer my current data into RepairKeeper?",
    answer:
      "Yes. RepairKeeper has built-in migration tools to help you import your existing data from other repair shop management platforms. You can bring across your customers, devices, and repair history so you're not starting from scratch.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just click 'Get Started Free' and create your account in under a minute. No credit card required. You'll have a fully functional repair management system ready to use immediately.",
  },
];
