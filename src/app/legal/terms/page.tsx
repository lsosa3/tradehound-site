import type { Metadata } from "next";
import { LegalDoc } from "@/components/site/legal-doc";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The agreement governing use of TradeHound.",
};

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" updated="August 30, 2026">
      <h2>1. Agreement</h2>
      <p>
        These Terms govern your access to and use of TradeHound&rsquo;s software
        and websites (the &ldquo;Service&rdquo;), provided and operated by 
        <i> Bridgeview Group LLC </i> (&ldquo;TradeHound,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). 
        By creating an account or using the Service you agree to these Terms on behalf of your business
        (&ldquo;you&rdquo;).
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You must provide accurate registration information, including a valid business identity.</li>
        <li>You are responsible for your users, their actions, and keeping credentials secure.</li>
        <li>Each plan includes a fixed number of seats. On plans that offer additional seats, users beyond the included number are billed monthly at the then-current per-seat rate; on other plans, adding users beyond the limit requires an upgrade.</li>
      </ul>

      <h2>3. Trial and subscription</h2>
      <ul>
        <li>New accounts include a 14-day free trial. No card is required to start.</li>
        <li>After the trial, continued use requires a paid subscription billed monthly in advance through Stripe.</li>
        <li>If a subscription lapses, the Service becomes read-only rather than being terminated, so you retain access to your data.</li>
        <li>Fees are non-refundable except where required by law. You can cancel anytime through the billing portal; cancellation takes effect at the end of the current period.</li>
        <li>We may change pricing with at least 30 days&rsquo; notice before your next renewal.</li>
      </ul>

      <h2>4. Payments to you and your customers</h2>
      <p>
        The Service integrates with Stripe Connect so you can collect payment
        from your customers. Your use of Stripe is subject to Stripe&rsquo;s
        agreements. We are not a party to transactions between you and your
        customers, do not hold funds, and are not responsible for chargebacks,
        disputes, or tax remittance, which remain your responsibility.
      </p>

      <h2>5. AI-generated content</h2>
      <p>
        The Service uses automated transcription and language models to draft job
        reports and suggest parts. This output can be inaccurate. You are
        responsible for reviewing it. Part suggestions are not billable until a
        user confirms them, and you must review every report and invoice before
        sending it to a customer. TradeHound is not liable for content you choose
        to send.
      </p>

      <h2>6. Messaging and compliance</h2>
      <p>
        You are the sender of record for SMS delivered through the Service to
        your customers. You must obtain and maintain valid consent, honor
        opt-outs, and comply with the TCPA, CTIA guidelines, and A2P 10DLC
        requirements. See our{" "}
        <a href="/legal/sms-policy">SMS &amp; A2P Policy</a>. We may suspend
        messaging that appears non-compliant.
      </p>

      <h2>7. Acceptable use</h2>
      <ul>
        <li>Don&rsquo;t use the Service unlawfully or to send unsolicited messages.</li>
        <li>Don&rsquo;t attempt to breach security, reverse engineer, or resell the Service.</li>
        <li>Don&rsquo;t upload malware or content you have no right to upload.</li>
      </ul>

      <h2>8. Your data</h2>
      <p>
        You retain all rights to the data you and your users put into the
        Service. You grant us a limited license to host and process it solely to
        provide the Service. Our handling of personal data is described in the{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>9. Availability</h2>
      <p>
        We work to keep the Service available but do not guarantee uninterrupted
        operation. We may modify or discontinue features with reasonable notice.
      </p>

      <h2>10. Disclaimers and liability</h2>
      <p>
        <span className="uppercase"> The Service is provided &ldquo;as is&rdquo; without warranties of any
        kind to the maximum extent permitted by law</span>. To the extent permitted by
        law, TradeHound&rsquo;s total liability arising out of or related to the
        Service is limited to the amount you paid in the 12 months before the
        claim, and we are not liable for indirect, incidental, or consequential
        damages.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access for material breach of these Terms. On termination you may export
        your data for 30 days, after which we may delete it.
      </p>

      <h2>12. Changes and contact</h2>
      <p>
        We may update these Terms; material changes will be posted here with a
        new date. Questions:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalDoc>
  );
}
