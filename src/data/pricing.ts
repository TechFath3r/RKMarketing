export interface PricingLimit {
  label: string;
  value: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  limits: PricingLimit[];
  features: PricingFeature[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Get started with the basics",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started Free",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    limits: [
      { label: "Tickets per month", value: "25" },
      { label: "Team members", value: "1" },
    ],
    features: [
      { text: "Core ticketing & invoicing", included: true },
      { text: "Public enquiry form", included: false },
      { text: "Custom ticket prefix", included: false },
      { text: "CSV export", included: false },
      { text: "Asset tracking", included: false },
      { text: "Repair wiki / knowledge base", included: false },
      { text: "Inventory & stock management", included: false },
      { text: "Label printing", included: false },
      { text: "Team management & RBAC", included: false },
      { text: "Audit log viewing", included: false },
      { text: "Stripe Connect payments", included: false },
      { text: "Branding removal", included: false },
    ],
  },
  {
    name: "Lite",
    description: "More capacity for solo repairers",
    monthlyPrice: 20,
    yearlyPrice: 192,
    cta: "Start with Lite",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    limits: [
      { label: "Tickets per month", value: "100" },
      { label: "Team members", value: "1" },
    ],
    features: [
      { text: "Core ticketing & invoicing", included: true },
      { text: "Public enquiry form", included: true },
      { text: "Custom ticket prefix", included: true },
      { text: "CSV export", included: true },
      { text: "Asset tracking", included: false },
      { text: "Repair wiki / knowledge base", included: false },
      { text: "Inventory & stock management", included: false },
      { text: "Label printing", included: false },
      { text: "Team management & RBAC", included: false },
      { text: "Audit log viewing", included: false },
      { text: "Stripe Connect payments", included: false },
      { text: "Branding removal", included: false },
    ],
  },
  {
    name: "Standard",
    description: "For growing repair shops",
    monthlyPrice: 30,
    yearlyPrice: 288,
    cta: "Start with Standard",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    highlighted: true,
    limits: [
      { label: "Tickets per month", value: "Unlimited" },
      { label: "Team members", value: "5" },
    ],
    features: [
      { text: "Core ticketing & invoicing", included: true },
      { text: "Public enquiry form", included: true },
      { text: "Custom ticket prefix", included: true },
      { text: "CSV export", included: true },
      { text: "Asset tracking", included: true },
      { text: "Repair wiki / knowledge base", included: true },
      { text: "Inventory & stock management", included: true },
      { text: "Label printing", included: true },
      { text: "Team management & RBAC", included: true },
      { text: "Audit log viewing", included: true },
      { text: "Stripe Connect payments", included: false },
      { text: "Branding removal", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Full power, no limits",
    monthlyPrice: 55,
    yearlyPrice: 528,
    cta: "Start with Pro",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    limits: [
      { label: "Tickets per month", value: "Unlimited" },
      { label: "Team members", value: "Unlimited" },
    ],
    features: [
      { text: "Core ticketing & invoicing", included: true },
      { text: "Public enquiry form", included: true },
      { text: "Custom ticket prefix", included: true },
      { text: "CSV export", included: true },
      { text: "Asset tracking", included: true },
      { text: "Repair wiki / knowledge base", included: true },
      { text: "Inventory & stock management", included: true },
      { text: "Label printing", included: true },
      { text: "Team management & RBAC", included: true },
      { text: "Audit log viewing", included: true },
      { text: "Stripe Connect payments", included: true },
      { text: "Branding removal", included: true },
    ],
  },
];
