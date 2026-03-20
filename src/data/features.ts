export interface Feature {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export const features: Feature[] = [
  {
    title: "Ticket Management",
    description:
      "Multi-device tickets with digital signatures, intelligent auto-status, diagnosis workflows, and subcontractor tracking — all in one view.",
    icon: "ticket",
    href: "/repair-ticket-software",
  },
  {
    title: "Quoting & Invoicing",
    description:
      "Professional quotes with customer accept/decline, invoices with partial payments, PDF export, deposit requests, and Stripe online payments.",
    icon: "invoice",
    href: "/repair-shop-invoicing-software",
  },
  {
    title: "Customer Management",
    description:
      "Full customer profiles with smart duplicate detection, one-click merge, GDPR anonymisation, and per-customer notification preferences.",
    icon: "customers",
    href: "/repair-shop-crm",
  },
  {
    title: "Inventory & Stock",
    description:
      "Track stock across multiple locations with automatic allocation, low stock alerts, supplier management, and full audit trail on every movement.",
    icon: "inventory",
    href: "/repair-shop-inventory-software",
  },
  {
    title: "Trade-in & Refurbishment",
    description:
      "Buy, grade, refurbish, and resell devices. Condition checklists, margin scheme support, and full lifecycle tracking from purchase to sale.",
    icon: "refresh-cw",
  },
  {
    title: "Repair Wiki",
    description:
      "Build a searchable knowledge base of devices, parts, faults, and repair guides — shared across all shops or kept private to yours.",
    icon: "wiki",
  },
  {
    title: "Online Booking",
    description:
      "Let customers book repairs directly from your website. Service selection, availability management, and deposit collection — all automated.",
    icon: "calendar",
    href: "/repair-booking-software",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Revenue reports, repair summaries, customer insights, and inventory analysis. Understand your business at a glance with exportable data.",
    icon: "bar-chart",
  },
  {
    title: "Team & Permissions",
    description:
      "Three roles, 11 granular permission flags, email invitations, and a full audit log with before/after diffs on every action.",
    icon: "team",
  },
];
