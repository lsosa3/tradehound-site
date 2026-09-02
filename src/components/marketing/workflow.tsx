import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Mic, FileText, ShieldCheck, Send } from "lucide-react";

const steps = [
  {
    icon: Mic,
    n: "01",
    title: "The tech talks",
    body: "On site, the technician opens the field app and describes the job out loud — findings, work done, parts used. Works offline; uploads when there's signal.",
  },
  {
    icon: FileText,
    n: "02",
    title: "AI writes it up",
    body: "Whisper transcribes the audio. A language model produces an internal technical note, a polished client summary in your tone, and a one-line job summary.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Your office reviews",
    body: "AI-detected parts land as suggestions with estimated prices — never on the total. A person approves, edits, or rejects each line before anything is billed.",
  },
  {
    icon: Send,
    n: "04",
    title: "Invoice goes out",
    body: "TradeHound calculates real sales tax for the service address, generates the invoice, and attaches a Stripe payment link. Unpaid jobs get automatic SMS follow-up.",
  },
];

export function Workflow() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="display-lg mt-3 text-ink">
            Four steps from the driveway to paid
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            The technician does what they already do — talk through the job.
            Everything downstream is handled, with a human checkpoint where it
            matters.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col rounded-xl border border-hairline-strong bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-strong">
                  <step.icon className="h-[18px] w-[18px] text-ink" />
                </span>
                <span className="font-mono text-[13px] text-muted-soft">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
