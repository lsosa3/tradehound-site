import { Container, Section, Eyebrow } from "@/components/ui/layout";
import {
  LayoutGrid,
  MessageSquareText,
  Receipt,
  CalendarClock,
  WifiOff,
  Boxes,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Dispatch board",
    body: "A live board of every job — Scheduled, En route, In progress, Completed. Filter to overdue, reassign techs, see the day at a glance.",
  },
  {
    icon: MessageSquareText,
    title: "AI job reports",
    body: "Every completed job gets an internal note and a client-facing summary written from the tech's voice memo, in your company's tone.",
  },
  {
    icon: Receipt,
    title: "Invoicing & payments",
    body: "Real-time sales tax by service address, Stripe payment links on every invoice, and money collected straight into your account via Stripe Connect.",
  },
  {
    icon: CalendarClock,
    title: "Automatic collections",
    body: "Completed but unpaid? TradeHound sends escalating SMS reminders at 24, 48, and 72 hours, then flags the job overdue — no one has to chase it.",
  },
  {
    icon: Boxes,
    title: "Preventive maintenance",
    body: "Turn a recommendation into a recurring plan. Clients approve by SMS link, and TradeHound auto-schedules the next visit when it's due.",
  },
  {
    icon: WifiOff,
    title: "Offline-first field app",
    body: "An installable PWA. Job data is cached on the phone; status changes, notes, parts, and recordings queue locally and sync on reconnect.",
  },
];

export function FeatureGrid() {
  return (
    <Section id="features" className="bg-canvas-soft">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>The platform</Eyebrow>
          <h2 className="display-lg mt-3 text-ink">
            One system for the whole job lifecycle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Scheduling, field work, reporting, billing, and follow-up — without
            stitching together four different apps.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-hairline-strong bg-surface p-6 transition-shadow hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-strong">
                <f.icon className="h-5 w-5 text-ink" />
              </span>
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
