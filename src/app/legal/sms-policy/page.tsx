import type { Metadata } from "next";
import { LegalDoc } from "@/components/site/legal-doc";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS & A2P Policy",
  description:
    "How TradeHound handles SMS consent, opt-outs, and A2P 10DLC compliance for messages sent to your customers.",
};

export default function SmsPolicyPage() {
  return (
    <LegalDoc title="SMS & A2P Policy" updated="August 30, 2026">
      <h2>1. Purpose</h2>
      <p>
        TradeHound sends transactional SMS on behalf of trade businesses to the
        customers those businesses serve. This policy describes the message
        types, how consent is obtained, and how opt-outs are handled. It supports
        A2P 10DLC brand and campaign registration in the United States.
      </p>

      <h2>2. Message types</h2>
      <p>All SMS sent through TradeHound is transactional customer care:</p>
      <ul>
        <li><strong>Appointment and job updates</strong> — scheduling and status information for a service visit.</li>
        <li><strong>Invoice and payment links</strong> — a link to pay for completed work.</li>
        <li><strong>Payment reminders</strong> — follow-ups on an unpaid completed job at 24, 48, and 72 hours.</li>
        <li><strong>Maintenance approvals</strong> — a link for a customer to approve a proposed maintenance plan.</li>
      </ul>
      <p>
        TradeHound does not send marketing or promotional SMS, and does not
        permit its customers to use the platform for such messages.
      </p>

      <h2>3. Consent</h2>
      <p>
        The business collects express consent from each customer before any SMS
        is sent. Consent is recorded in TradeHound with a status
        (<strong>opted in</strong>, <strong>opted out</strong>, or{" "}
        <strong>unknown</strong>), a timestamp, and the source (for example, a
        web form or a signed work authorization). A customer with unknown or
        opted-out status is never messaged.
      </p>
      <p>Sample consent language the business presents to the customer:</p>
      <ul>
        <li>
          &ldquo;I agree to receive service, appointment, and payment text
          messages from [Business Name] at the number provided. Message and data
          rates may apply. Message frequency varies. Reply STOP to opt out or
          HELP for help.&rdquo;
        </li>
      </ul>

      <h2>4. Opt-out and help</h2>
      <p>
        Every message includes a &ldquo;Reply STOP to opt out&rdquo; footer.
        Inbound messages are processed automatically:
      </p>
      <ul>
        <li><strong>STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT</strong> — the customer is set to opted out and receives no further messages.</li>
        <li><strong>START, UNSTOP, YES</strong> — the customer is opted back in.</li>
        <li><strong>HELP, INFO</strong> — an automatic reply with the business name and contact information.</li>
      </ul>
      <p>
        Every inbound message is logged with its timestamp as a compliance
        record. Opt-out is honored immediately and permanently unless the
        customer opts back in.
      </p>

      <h2>5. A2P 10DLC registration</h2>
      <p>
        Messaging is sent through a registered A2P 10DLC campaign. The business
        registers its brand (legal name, EIN, address, website) and a
        customer-care campaign describing the message types above with sample
        messages that include the opt-out footer. On the Scale plan, TradeHound
        assists with this registration.
      </p>

      <h2>6. Data and carriers</h2>
      <p>
        Messages are delivered via Twilio. Message content, delivery status, and
        opt-out state are stored to operate the service and demonstrate
        compliance. Carriers may filter or block messages that appear
        non-compliant; TradeHound may suspend messaging for any account that
        violates this policy.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalDoc>
  );
}
