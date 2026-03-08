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
  monthlyPrice: number | null;
  yearlyPrice: number | null;
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
      { text: "Core ticketing (multi-device)", included: true },
      { text: "Customer tracking page", included: true },
      { text: "Public repair enquiry form", included: true },
      { text: "Parts inventory & stock management", included: true },
      { text: "Wiki / internal knowledge base", included: true },
      { text: "Asset tracking (QR codes)", included: true },
      { text: "Label printing", included: true },
      { text: "CSV export", included: true },
      { text: "Custom ticket number prefix", included: true },
      { text: "Custom SMTP", included: false },
      { text: "Custom email templates", included: false },
      { text: "Online card payments (Stripe Connect)", included: false },
      { text: "Trade-in & refurbishment system", included: false },
      { text: "Product catalogue", included: false },
      { text: "Team roles & permissions (RBAC)", included: false },
      { text: "Audit log / activity history", included: false },
      { text: "Reporting & analytics", included: false },
      { text: "Device photos on tickets", included: false },
      { text: "Branding removal", included: false },
      { text: "Note file attachments", included: false },
      { text: "Multiple locations / branches", included: false },
    ],
  },
  {
    name: "Lite",
    description: "More capacity for solo repairers",
    monthlyPrice: 20,
    yearlyPrice: 200,
    cta: "Start with Lite",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    limits: [
      { label: "Tickets per month", value: "150" },
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
      { text: "Custom SMTP", included: true },
      { text: "Custom email templates", included: true },
      { text: "Online card payments (Stripe Connect)", included: true },
      { text: "Trade-in & refurbishment system", included: true },
      { text: "Product catalogue", included: true },
      { text: "Team roles & permissions (RBAC)", included: false },
      { text: "Audit log / activity history", included: false },
      { text: "Reporting & analytics", included: false },
      { text: "Device photos on tickets", included: false },
      { text: "Branding removal", included: false },
      { text: "Note file attachments", included: false },
      { text: "Multiple locations / branches", included: false },
    ],
  },
  {
    name: "Standard",
    description: "For growing repair shops",
    monthlyPrice: 30,
    yearlyPrice: 320,
    cta: "Start with Standard",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    highlighted: true,
    limits: [
      { label: "Tickets per month", value: "Unlimited" },
      { label: "Team members", value: "5" },
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
      { text: "Custom SMTP", included: true },
      { text: "Custom email templates", included: true },
      { text: "Online card payments (Stripe Connect)", included: true },
      { text: "Trade-in & refurbishment system", included: true },
      { text: "Product catalogue", included: true },
      { text: "Team roles & permissions (RBAC)", included: true },
      { text: "Audit log / activity history", included: true },
      { text: "Reporting & analytics", included: true },
      { text: "Device photos on tickets", included: true },
      { text: "Branding removal", included: true },
      { text: "Note file attachments", included: false },
      { text: "Multiple locations / branches", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Full power for busy shops",
    monthlyPrice: 60,
    yearlyPrice: 670,
    cta: "Start with Pro",
    ctaLink: "https://app.repairkeeper.co.uk/beta",
    limits: [
      { label: "Tickets per month", value: "Unlimited" },
      { label: "Team members", value: "15" },
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
      { text: "Custom SMTP", included: true },
      { text: "Custom email templates", included: true },
      { text: "Online card payments (Stripe Connect)", included: true },
      { text: "Trade-in & refurbishment system", included: true },
      { text: "Product catalogue", included: true },
      { text: "Team roles & permissions (RBAC)", included: true },
      { text: "Audit log / activity history", included: true },
      { text: "Reporting & analytics", included: true },
      { text: "Device photos on tickets", included: true },
      { text: "Branding removal", included: true },
      { text: "Note file attachments", included: true },
      { text: "Multiple locations / branches", included: false },
    ],
  },
];

export const enterprisePlan = {
  name: "Enterprise",
  description:
    "For multi-location repair chains or businesses with custom requirements.",
  cta: "Contact Us",
  ctaLink: "mailto:hello@repairkeeper.co.uk",
  limits: [
    { label: "Tickets per month", value: "Unlimited" },
    { label: "Team members", value: "Custom" },
  ],
  highlights: [
    "Everything in Pro",
    "Multiple locations / branches",
    "Unlimited team members",
    "Dedicated support",
  ],
};
