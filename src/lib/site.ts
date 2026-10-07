export const APP_URL = "https://app.tradehound.app";
export const CONTACT_EMAIL = "hello@tradehound.app";
export const SUPPORT_EMAIL = "support@tradehound.app";

export const primaryNav = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Field app (PWA)", href: "/features#field-app" },
      { label: "AI job reports", href: "/features#ai-reports" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Sign in", href: APP_URL },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "SMS & A2P Policy", href: "/legal/sms-policy" },
    ],
  },
] as const;

export type PlanId = "solo" | "growth" | "scale";

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  tagline: string;
  seats: string;
  /** Monthly price per seat beyond the included ones; omitted = upgrade to add seats. */
  extraSeatPrice?: number;
  aiJobs: string;
  featured?: boolean;
  highlights: string[];
}

export const plans: Plan[] = [
  {
    id: "solo",
    name: "Solo",
    price: 49,
    tagline: "For owner-operators and two-person shops.",
    seats: "2 seats",
    aiJobs: "50 AI jobs / month",
    highlights: [
      "Voice-to-report AI pipeline",
      "Dispatch board & scheduling",
      "Invoicing with Stripe payment links",
      "Automatic SMS payment reminders",
      "Offline-first field app",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 149,
    tagline: "For growing crews that need dispatch and collections on autopilot.",
    seats: "8 seats included",
    extraSeatPrice: 25,
    aiJobs: "300 AI jobs / month",
    featured: true,
    highlights: [
      "Everything in Solo",
      "Preventive maintenance plans + SMS approvals",
      "Equipment / asset history",
      "Real-time sales tax on every invoice",
      "Role-based access (admin, dispatcher, tech)",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: 349,
    tagline: "For multi-crew operations running at volume.",
    seats: "20 seats included",
    extraSeatPrice: 20,
    aiJobs: "1,500 AI jobs / month",
    highlights: [
      "Everything in Growth",
      "Priority AI processing",
      "A2P 10DLC onboarding assistance",
      "Priority support",
      "Onboarding & data import help",
    ],
  },
];

export const faqs = [
  {
    q: "Do my technicians need to type reports?",
    a: "No. A tech taps the mic in the field app and talks through the job — what they found, what they fixed, what they used. TradeHound transcribes it and writes both an internal technical note and a clean, client-facing summary in your company's tone.",
  },
  {
    q: "Can the AI put wrong charges on an invoice?",
    a: "It can't. AI-detected parts arrive as suggestions with an estimated price and never touch the invoice total. A human approves, edits, or rejects each line. Invoicing is blocked until every suggestion is reviewed — so an AI mistake can never reach a customer.",
  },
  {
    q: "How does payment collection work?",
    a: "Every invoice gets a Stripe payment link. If a completed job stays unpaid, TradeHound sends escalating SMS reminders at 24, 48, and 72 hours, then flags the job as overdue on your dashboard. You collect through Stripe Connect and the money lands in your account.",
  },
  {
    q: "Is the field app usable without signal?",
    a: "Yes. It's an installable, offline-first PWA. Job data is cached on the device, and status changes, notes, parts, and voice recordings queue locally and sync the moment the phone reconnects.",
  },
  {
    q: "What about SMS compliance?",
    a: "TradeHound is built for US A2P 10DLC. Client SMS consent is captured and timestamped, every message carries an opt-out footer, and inbound STOP / HELP keywords are handled and logged automatically. On Scale we help you through brand and campaign registration.",
  },
  {
    q: "What happens when my team outgrows the included seats?",
    a: "On Growth and Scale you add seats one at a time — $25 per month each on Growth, $20 on Scale — billed monthly alongside your plan. Solo includes up to 2 seats; past that, move up to Growth.",
  },
  {
    q: "Is there a free trial?",
    a: "Every account starts with a 14-day free trial. No credit card to sign up. If the trial lapses the app goes read-only rather than locking you out, so you never lose access to your data.",
  },
  {
    q: "Which trades is this for?",
    a: "HVAC, plumbing, electrical, appliance repair, and adjacent residential and light-commercial service businesses — any shop that sends a technician to a site, does the work, and needs to bill for it.",
  },
];

export const trades = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Appliance Repair",
  "Refrigeration",
  "Handyman",
];
