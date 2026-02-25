export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Ticket Management",
    description:
      "Create and track repair tickets with multi-device support, digital signatures, and intelligent auto-status updates.",
    icon: "ticket",
  },
  {
    title: "Quoting & Invoicing",
    description:
      "Generate professional quotes and invoices with PDF export, Stripe payments, and VAT support.",
    icon: "invoice",
  },
  {
    title: "Customer Management",
    description:
      "Full customer profiles with smart duplicate detection, one-click merge, and balance tracking.",
    icon: "customers",
  },
  {
    title: "Inventory & Stock",
    description:
      "Track stock across multiple locations with automatic allocation, low stock alerts, and supplier management.",
    icon: "inventory",
  },
  {
    title: "Repair Wiki",
    description:
      "Build a searchable knowledge base of devices, parts, faults, and repair guides — shared across all shops.",
    icon: "wiki",
  },
  {
    title: "Team & Permissions",
    description:
      "Manage your team with granular roles, 11 permission flags, invite system, and full audit logging.",
    icon: "team",
  },
];
