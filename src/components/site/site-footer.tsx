import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "@/components/ui/layout";
import { footerNav, CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              AI field service management for HVAC, plumbing, and repair
              businesses in the United States.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block font-mono text-[13px] text-link hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h3 className="eyebrow text-muted">{col.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-body transition-colors hover:text-ink"
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TradeHound. All rights reserved.</p>
          <p>
            Built for the trades. Not affiliated with any equipment manufacturer.
          </p>
        </div>
      </Container>
    </footer>
  );
}
