import { Mic, Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Scheduled",
    dot: "bg-muted-soft",
    jobs: [
      { c: "Alvarez Residence", t: "AC not cooling · 9:00a", tech: "M. Ruiz" },
      { c: "Northgate Deli", t: "Walk-in freezer check · 11:30a", tech: "M. Ruiz" },
    ],
  },
  {
    title: "En route",
    dot: "bg-[#0d74ce]",
    jobs: [{ c: "Whitfield HVAC Retrofit", t: "Quote follow-up · 10:15a", tech: "D. Park" }],
  },
  {
    title: "In progress",
    dot: "bg-[#f5a623]",
    jobs: [{ c: "Camden Townhomes #4", t: "Furnace no-heat · started 8:42a", tech: "You" }],
  },
  {
    title: "Completed",
    dot: "bg-success",
    jobs: [
      { c: "Serrano Residence", t: "Capacitor + tune-up · $284", tech: "Paid" },
      { c: "Bright Star Laundromat", t: "Drain line · $410", tech: "Sent" },
    ],
  },
];

export function ProductMock({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Browser-framed dashboard */}
      <div className="overflow-hidden rounded-xl border border-hairline-strong bg-surface shadow-float lg:mr-20 xl:mr-28">
        <div className="flex items-center gap-2 border-b border-hairline bg-canvas-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
          <span className="ml-3 rounded bg-surface-strong px-2 py-0.5 font-mono text-[11px] text-muted">
            app.tradehound.app/dispatch
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="eyebrow text-muted">Tuesday · Dispatch board</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.01em]">
                6 active jobs
              </p>
            </div>
            <div className="hidden gap-4 text-right sm:flex">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  Overdue
                </p>
                <p className="text-sm font-semibold text-danger">$1,240</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  Collected
                </p>
                <p className="text-sm font-semibold text-success">$8,910</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="rounded-lg bg-canvas-soft p-2.5">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className={cn("h-2 w-2 rounded-full", col.dot)} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-body">
                    {col.title}
                  </span>
                </div>
                <div className="space-y-2">
                  {col.jobs.map((job) => (
                    <div
                      key={job.c}
                      className="rounded-md border border-hairline bg-surface p-2.5 shadow-soft"
                    >
                      <p className="text-[12px] font-semibold leading-tight text-ink">
                        {job.c}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-muted">
                        {job.t}
                      </p>
                      <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wide text-body">
                        {job.tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating field-app phone */}
      <div className="absolute -bottom-10 right-0 hidden w-[176px] rotate-1 overflow-hidden rounded-[26px] border-[6px] border-[#14182a] bg-[#14182a] shadow-float lg:block">
        <div className="rounded-[20px] bg-canvas">
          <div className="px-4 pb-4 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Camden Townhomes #4
            </p>
            <p className="mt-1 text-[13px] font-semibold leading-tight text-ink">
              Furnace no-heat
            </p>

            <div className="my-4 flex flex-col items-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-danger/10">
                <span className="absolute inset-0 animate-ping rounded-full bg-danger/20" />
                <Mic className="h-6 w-6 text-danger" />
              </span>
              <p className="mt-2 font-mono text-[11px] text-body">02:14 · recording</p>
            </div>

            <div className="space-y-1.5">
              {[
                "Replaced ignitor",
                "Cleaned flame sensor",
                "2 lbs R-410A",
              ].map((line, i) => (
                <div
                  key={line}
                  className="flex items-center gap-1.5 text-[11px] text-body"
                >
                  {i < 2 ? (
                    <Check className="h-3 w-3 shrink-0 text-success" />
                  ) : (
                    <Circle className="h-3 w-3 shrink-0 text-muted-soft" />
                  )}
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
