import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/site";
import { APP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingTiers() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => {
        const featured = plan.featured;
        return (
          <div
            key={plan.id}
            className={cn(
              "flex flex-col rounded-xl p-8",
              featured
                ? "bg-surface-dark text-on-dark shadow-float"
                : "border border-hairline-strong bg-surface",
            )}
          >
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "text-[17px] font-semibold tracking-[-0.01em]",
                  featured ? "text-on-dark" : "text-ink",
                )}
              >
                {plan.name}
              </h3>
              {featured && (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-on-dark">
                  Most popular
                </span>
              )}
            </div>

            <p
              className={cn(
                "mt-2 text-[13.5px] leading-relaxed",
                featured ? "text-on-dark-soft" : "text-body",
              )}
            >
              {plan.tagline}
            </p>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span
                className={cn(
                  "text-4xl font-semibold tracking-[-0.03em]",
                  featured ? "text-on-dark" : "text-ink",
                )}
              >
                ${plan.price}
              </span>
              <span
                className={cn(
                  "text-sm",
                  featured ? "text-on-dark-soft" : "text-muted",
                )}
              >
                / month
              </span>
            </div>

            <div
              className={cn(
                "mt-4 flex gap-4 text-[13px] font-medium",
                featured ? "text-on-dark-soft" : "text-body",
              )}
            >
              <span>{plan.seats}</span>
              <span className={featured ? "text-white/20" : "text-hairline-strong"}>
                ·
              </span>
              <span>{plan.aiJobs}</span>
            </div>
            <p
              className={cn(
                "mt-1.5 text-[12.5px]",
                featured ? "text-on-dark-soft" : "text-muted",
              )}
            >
              {plan.extraSeatPrice
                ? `+$${plan.extraSeatPrice}/mo per extra seat`
                : "Upgrade to Growth for more seats"}
            </p>

            <Button
              href={APP_URL}
              variant={featured ? "primary" : "secondary"}
              size="lg"
              className={cn(
                "mt-6 w-full",
                featured && "bg-white text-primary hover:bg-white/90",
              )}
            >
              Start free trial
            </Button>

            <ul className="mt-8 space-y-3">
              {plan.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[13.5px]">
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      featured ? "text-[#7fd1a0]" : "text-success",
                    )}
                  />
                  <span className={featured ? "text-on-dark-soft" : "text-body"}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
