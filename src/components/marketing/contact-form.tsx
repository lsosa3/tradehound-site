"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status = "idle" | "submitting" | "done" | "error";

const inputClass =
  "h-11 w-full rounded-md border border-hairline-strong bg-surface px-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-primary";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!ENDPOINT) {
      // No backend configured — compose an email instead.
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nTeam size: ${data.teamSize}\n\n${data.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `TradeHound enquiry — ${data.company || data.name}`,
      )}&body=${body}`;
      setStatus("done");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-hairline-strong bg-surface p-8 text-center">
        <p className="text-[17px] font-semibold text-ink">Thanks — we&rsquo;ve got it.</p>
        <p className="mt-2 text-[14px] text-body">
          We&rsquo;ll reply within one business day. Urgent? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-hairline-strong bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Name</span>
          <input name="name" required className={`mt-1.5 ${inputClass}`} />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Company</span>
          <input name="company" className={`mt-1.5 ${inputClass}`} />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Work email</span>
          <input
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClass}`}
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ink">Team size</span>
          <select name="teamSize" className={`mt-1.5 ${inputClass}`} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Just me</option>
            <option>2–5</option>
            <option>6–15</option>
            <option>16–50</option>
            <option>50+</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-[13px] font-medium text-ink">How can we help?</span>
        <textarea
          name="message"
          required
          rows={4}
          className={`mt-1.5 w-full rounded-md border border-hairline-strong bg-surface px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-primary`}
        />
      </label>

      {status === "error" && (
        <p className="mt-3 text-[13px] text-danger">
          Something went wrong. Please email {CONTACT_EMAIL} directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
      <p className="mt-3 text-[12px] text-muted">
        By submitting this form you agree to our{" "}
        <a href="/legal/privacy" className="text-link hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
