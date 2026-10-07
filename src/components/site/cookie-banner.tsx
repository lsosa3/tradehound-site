"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  analyticsEnabled,
  onConsentSettingsOpen,
  openConsentSettings,
  setConsent,
  useConsent,
  type Consent,
} from "@/lib/consent";

/**
 * Asks for analytics consent on first visit, and again whenever the visitor
 * opens "Cookie settings" in the footer. Accept and Decline carry equal weight.
 */
export function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => onConsentSettingsOpen(() => setReopened(true)), []);

  if (!analyticsEnabled || consent === undefined) return null;
  if (consent !== null && !reopened) return null;

  const choose = (value: Consent) => {
    setConsent(value);
    setReopened(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-xl border border-hairline-strong bg-surface p-5 shadow-float sm:flex sm:items-center sm:gap-6"
    >
      <p className="text-[13.5px] leading-relaxed text-body">
        We use PostHog analytics cookies to understand how people use
        TradeHound&rsquo;s website and app. They&rsquo;re only set if you
        accept, and your choice applies to both.{" "}
        <Link href="/legal/privacy/" className="text-link hover:underline">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <Button
          variant="secondary"
          className="flex-1 sm:flex-none"
          onClick={() => choose("denied")}
        >
          Decline
        </Button>
        <Button
          className="flex-1 sm:flex-none"
          onClick={() => choose("granted")}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}

/** Footer link that re-opens the banner so a visitor can change their choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  if (!analyticsEnabled) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={openConsentSettings}
    >
      Cookie settings
    </button>
  );
}
