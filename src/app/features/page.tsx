import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Workflow } from "@/components/marketing/workflow";
import { AiSafety } from "@/components/marketing/ai-safety";
import { CtaBand } from "@/components/marketing/cta-band";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import {
  LayoutGrid,
  Receipt,
  MessageSquareText,
  CalendarClock,
  WifiOff,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "How TradeHound works: AI job reports from a voice memo, a live dispatch board, invoicing with real sales tax and payment links, automatic SMS collections, preventive maintenance, and an offline-first field app.",
};

const deepDives = [
  {
    id: "ai-reports",
    icon: MessageSquareText,
    eyebrow: "AI job reports",
    title: "A voice memo becomes two reports and a job summary",
    body: "The technician describes the visit in the field app. Groq Whisper transcribes it; a language model produces a raw internal note for your records, a clean client-facing summary written in your company's tone, and a one-line description of the work done. If the tech mentions a recurring problem, the AI flags a maintenance recommendation.",
    points: [
      "Internal note keeps the technical detail your office needs",
      "Client summary is professional and jargon-free",
      "Tone is configurable per business — formal or plain-spoken",
      "Runs after the job; the tech never types a report",
    ],
  },
  {
    id: "review",
    icon: ShieldCheck,
    eyebrow: "Billing safety",
    title: "AI-suggested parts never reach an invoice unreviewed",
    body: "Parts the AI hears are written as suggestions with an estimated price. They don't count toward the subtotal. Someone in the office approves, edits, or rejects each one in the job's work log, and invoicing is blocked while any suggestion is still pending.",
    points: [
      "Suggestions are visually separated from confirmed line items",
      "Approve-all for straightforward jobs",
      "Every subtotal counts confirmed parts only",
      "Hard stop: no invoice while suggestions remain",
    ],
  },
  {
    id: "dispatch",
    icon: LayoutGrid,
    eyebrow: "Dispatch",
    title: "The whole day on one board",
    body: "Jobs move across four columns — Scheduled, En route, In progress, Completed. Dispatchers reassign technicians, filter to overdue work, and see revenue collected and outstanding at a glance. Technicians see only their own jobs.",
    points: [
      "Status advances from the field app with one tap",
      "Overdue and unpaid work surfaces in a dedicated panel",
      "Role-based views for admin, dispatcher, and technician",
    ],
  },
  {
    id: "invoicing",
    icon: Receipt,
    eyebrow: "Invoicing & payments",
    title: "Correct sales tax, a payment link, money in your account",
    body: "TradeHound resolves the real combined sales tax rate for the service address (state, county, city, special district) and never blocks an invoice if the lookup fails — it falls back to a state table. Each invoice gets a Stripe payment link, and funds settle to your account through Stripe Connect.",
    points: [
      "Real-time rates via TaxJar with a static fallback",
      "Manual rate override when you need it",
      "Sequential invoice numbers (INV-2026-0001)",
      "Add labor and fees as extra line items",
    ],
  },
  {
    id: "collections",
    icon: CalendarClock,
    eyebrow: "Collections",
    title: "Unpaid jobs chase themselves",
    body: "When a completed job stays unpaid, TradeHound sends an SMS with the payment link at 24 hours, a firmer one at 48, and a final notice at 72 that also marks the job overdue on your dashboard. Consent-aware — opted-out clients are skipped and every message carries an opt-out footer.",
    points: [
      "Escalating cadence, fully automatic",
      "Manual 'remind now' button on any job",
      "Full SMS history per job",
    ],
  },
  {
    id: "maintenance",
    icon: Users,
    eyebrow: "Preventive maintenance",
    title: "Turn one visit into a standing relationship",
    body: "Create a maintenance plan for a piece of equipment or a whole property. The client approves it from an SMS link, and when the next service date comes due TradeHound auto-creates the scheduled job and advances the date.",
    points: [
      "One plan per asset, or a client-wide plan",
      "SMS approval — no login for the client",
      "Auto-scheduling ahead of the due date",
    ],
  },
  {
    id: "field-app",
    icon: WifiOff,
    eyebrow: "Field app",
    title: "Works in a basement with no bars",
    body: "The field app is an installable PWA. Recent jobs are cached on the device, and status changes, notes, parts, and voice recordings queue locally when there's no connection and sync the moment the phone is back online.",
    points: [
      "Install to the home screen on iOS and Android",
      "Offline job cache (7 days / 200 jobs)",
      "Recordings up to 5 minutes, queued if offline",
      "Push notifications for assignments and payments",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything between the service call and the deposit"
        intro="TradeHound covers scheduling, field work, AI reporting, invoicing, and collections in one place — with a human checkpoint on anything that touches a customer's bill."
      />

      <Workflow />

      <div className="border-t border-hairline">
        {deepDives.map((d, i) => (
          <Section
            key={d.id}
            id={d.id}
            className={i % 2 === 1 ? "bg-canvas-soft" : ""}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-strong">
                    <d.icon className="h-5 w-5 text-ink" />
                  </span>
                  <Eyebrow className="mt-5 block">{d.eyebrow}</Eyebrow>
                  <h2 className="display-md mt-2 text-ink">{d.title}</h2>
                </div>
                <div>
                  <p className="text-[15px] leading-relaxed text-body">
                    {d.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {d.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[14px] text-body"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        ))}
      </div>

      <AiSafety />
      <CtaBand />
    </>
  );
}
