"use client";

import { useEffect } from "react";
import type { PostHog } from "posthog-js";
import { analyticsEnabled, useConsent } from "@/lib/consent";

let posthog: PostHog | null = null;

/**
 * Loads PostHog only after the visitor accepts analytics. Before that, the
 * script isn't downloaded and nothing is stored. Revoking consent opts out,
 * which stops capture and clears PostHog's cookies and local storage.
 */
export function Analytics() {
  const consent = useConsent();

  useEffect(() => {
    if (!analyticsEnabled) return;

    if (consent !== "granted") {
      if (posthog) {
        posthog.opt_out_capturing();
        posthog.set_config({ disable_persistence: true });
        clearPostHogStorage();
      }
      return;
    }

    if (posthog) {
      posthog.set_config({ disable_persistence: false });
      posthog.opt_in_capturing();
      return;
    }

    let cancelled = false;
    import("posthog-js").then(({ default: client }) => {
      if (cancelled || posthog) return;
      client.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        defaults: "2026-08-30",
        capture_pageview: "history_change",
        person_profiles: "identified_only",
        respect_dnt: true,
        // Share PostHog's identity cookie with app.tradehound.app (same project),
        // so pre-signup visits join the account once the app calls identify().
        cross_subdomain_cookie: true,
      });
      // PostHog persists an earlier opt-out across visits; consent now overrides it.
      if (client.has_opted_out_capturing()) {
        client.opt_in_capturing({ captureEventName: false });
      }
      posthog = client;
    });
    return () => {
      cancelled = true;
    };
  }, [consent]);

  return null;
}

/**
 * `opt_out_capturing()` stops capture but leaves PostHog's `ph_*` cookies and
 * storage behind, so remove them. The identity cookie lives on the parent
 * domain and is shared with the app; since one choice covers both, declining
 * here removes it for the app too. Expire on every candidate domain to be
 * sure. PostHog's `__ph_opt_in_out_*` marker is kept as the opt-out record.
 */
function clearPostHogStorage() {
  try {
    const labels = location.hostname.split(".");
    const domains = [""];
    for (let i = 0; i < labels.length - 1; i++) {
      domains.push(`; domain=.${labels.slice(i).join(".")}`);
    }
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.split("=")[0].trim();
      if (!name.startsWith("ph_")) continue;
      for (const domain of domains) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
    for (const store of [localStorage, sessionStorage]) {
      for (const key of Object.keys(store)) {
        if (key.startsWith("ph_")) store.removeItem(key);
      }
    }
  } catch {
    // Storage blocked: nothing was persisted to remove.
  }
}
