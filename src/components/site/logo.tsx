import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * TradeHound lockup — a compact navy chip carrying the hound-and-wrench
 * mark, next to the wordmark. `tone` flips it for use on dark surfaces.
 */
export function Logo({
  className,
  tone = "dark",
  href = "/",
}: {
  className?: string;
  tone?: "dark" | "light";
  href?: string | null;
}) {
  const wordColor = tone === "dark" ? "text-ink" : "text-on-dark";

  const mark = (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#14182a" />
        {/* hound head */}
        <path
          d="M9.5 11.2c0-1.9 1.6-3.2 3.2-2.7 0.7 0.2 1.2 0.7 2 0.7h4.9c2.6 0 4.7 2.1 4.7 4.7v2.2c0 2.4-1.5 3.6-1.5 5.1 0 0.7-0.6 1.3-1.3 1.3s-1.3-0.6-1.3-1.3v-1.2c-1 0.5-2.2 0.8-3.4 0.8h-3.6c-0.7 0-1.3 0.6-1.3 1.3v0.3c0 0.7-0.6 1.3-1.3 1.3s-1.3-0.6-1.3-1.3v-2.9c-0.9-0.8-1.7-2-1.7-3.4z"
          fill="#ffffff"
        />
        <circle cx="19.7" cy="13.4" r="1.05" fill="#14182a" />
        {/* wrench collar */}
        <path
          d="M10.5 24.2c1.6 1.1 3.7 1.7 5.9 1.7 3.1 0 5.8-1.2 7.4-3l-2-1.4c-1.1 1.2-2.9 2-5 2-1.3 0-2.5-0.3-3.5-0.8z"
          fill="#f5a623"
        />
      </svg>
      <span
        className={cn(
          "text-[19px] font-semibold tracking-[-0.02em]",
          wordColor,
        )}
      >
        TradeHound
      </span>
    </span>
  );

  if (href === null) {
    return <span className={cn("inline-flex", className)}>{mark}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="TradeHound home"
    >
      {mark}
    </Link>
  );
}
