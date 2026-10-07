"use client";

import { useSyncExternalStore } from "react";

/**
 * Analytics consent, shared with app.tradehound.app through a cookie on the
 * parent domain: one choice covers the marketing site and the app. Storing
 * the choice is strictly necessary; nothing else is written until they accept.
 *
 * The app must use the same cookie name, values, and domain — see
 * CONSENT_COOKIE below.
 */
export type Consent = "granted" | "denied";

export const CONSENT_COOKIE = "th_analytics_consent";
const PARENT_DOMAIN = "tradehound.app";
/** The choice expires after about 6 months, and the banner asks again. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

const CHANGE_EVENT = "th-consent-change";
const OPEN_EVENT = "th-consent-open";

/** The banner and analytics only run when a PostHog key is configured. */
export const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);

/** On tradehound.app and its subdomains, scope to the parent; elsewhere (localhost, previews), host-only. */
function domainAttribute() {
  const host = location.hostname;
  return host === PARENT_DOMAIN || host.endsWith(`.${PARENT_DOMAIN}`)
    ? `; domain=.${PARENT_DOMAIN}`
    : "";
}

function readConsent(): Consent | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=(granted|denied)(?:;|$)`),
  );
  return match ? (match[1] as Consent) : null;
}

export function setConsent(value: Consent) {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${MAX_AGE_SECONDS}; samesite=lax${domainAttribute()}${secure}`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Cookies fire no change events, so re-check on focus: a choice made in the
 * app (or another tab) applies when the visitor comes back to this one.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("focus", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("focus", onChange);
  };
}

/**
 * The visitor's choice: `null` if they haven't chosen yet, `undefined` during
 * server render and hydration (when it can't be known yet).
 */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, readConsent, () => undefined);
}

/** Re-open the banner so the visitor can change their choice. */
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentSettingsOpen(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
