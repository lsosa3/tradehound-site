import type { Metadata } from "next";
import { LegalDoc } from "@/components/site/legal-doc";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TradeHound collects, uses, and protects data.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" updated="October 7, 2026">
      <h2>1. Who we are</h2>
      <p>
        TradeHound (&ldquo;TradeHound,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        provides field service management software to trade and repair businesses. 
        This Privacy Policy is operated by <i> Bridgeview Group LLC </i> (referred to as &ldquo;we,&rdquo; &ldquo;us&rdquo;), registered in New Mexico. This policy explains what we collect and why. It covers our
        marketing site and the TradeHound application.
      </p>

      <h2>2. Data we collect</h2>
      <h3>From the business (our customer)</h3>
      <ul>
        <li>Account and company details: name, business name, EIN, email, role.</li>
        <li>Staff records you create: names, emails, roles.</li>
        <li>Billing information, processed and stored by Stripe, not by us.</li>
        <li>Operational content you enter: clients, equipment, jobs, notes, parts, invoices.</li>
        <li>Audio recordings submitted by technicians and the transcripts and reports generated from them.</li>
      </ul>
      <h3>From your customers (data you upload)</h3>
      <ul>
        <li>Contact and service-address details for the homeowners and sites you serve.</li>
        <li>SMS consent status, including when and how consent was captured.</li>
        <li>Message history for reminders and maintenance approvals.</li>
      </ul>
      <h3>Automatically</h3>
      <ul>
        <li>Standard log data: IP address, device and browser, timestamps, and pages or endpoints accessed.</li>
        <li>Essential cookies and local storage needed to keep you signed in and the app working offline.</li>
        <li>If you consent to analytics: how you use our website and app, such as pages and screens viewed, features used, and buttons clicked (see Cookies below).</li>
      </ul>

      <h2>3. How we use data</h2>
      <ul>
        <li>To provide and operate the service, including scheduling, reporting, invoicing, and collections.</li>
        <li>To transcribe technician audio and generate job reports and part suggestions.</li>
        <li>To send transactional SMS and email on your behalf and to your customers, subject to consent.</li>
        <li>To calculate sales tax, process subscription billing, and process customer payments.</li>
        <li>To secure the service, prevent abuse, and meet legal obligations.</li>
        <li>If you consent to analytics, to understand how our website and app are used and to improve them.</li>
      </ul>
      <p>
        We do not sell personal information, and we do not use your operational
        content or your customers&rsquo; data to train machine-learning models.
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use PostHog analytics on our website and in the TradeHound
        application to understand how they are used and to improve them, for
        example which pages and screens are viewed, which features are used, and
        which buttons are clicked. PostHog is loaded, and its cookies are set,
        only if you click &ldquo;Accept&rdquo; when we ask. If you decline, or
        until you choose, no analytics scripts run and no analytics cookies are
        set. We do not use advertising cookies. If your browser sends a Do Not
        Track signal, PostHog does not capture data even after you accept.
      </p>
      <p>
        One choice covers both our website and the application. When you are
        signed in to the application, analytics are linked to your user
        account. If you accepted analytics on our website before signing up,
        those earlier visits may also be linked to your account.
      </p>
      <p>
        We store your choice in a cookie for about six months, after which we
        ask again. You can change it at any time with the &ldquo;Cookie
        settings&rdquo; link in our website footer or in the application.
        Withdrawing consent stops analytics on both and removes PostHog&rsquo;s
        cookies.
      </p>
      <p>
        Apart from analytics, the application uses only strictly necessary
        cookies and local storage to keep you signed in, secure your session,
        and let the field app work offline.
      </p>

      <h2>5. Subprocessors</h2>
      <p>
        We share data with vendors strictly to run the service. Current
        subprocessors include:
      </p>
      <ul>
        <li><strong>Groq</strong> — audio transcription and report generation.</li>
        <li><strong>Stripe</strong> — subscription billing and customer payment processing.</li>
        <li><strong>Twilio</strong> — SMS and messaging delivery.</li>
        <li><strong>TaxJar</strong> — real-time sales-tax rate lookups.</li>
        <li><strong>PostHog</strong> — product analytics on our website and in the application, only with your consent.</li>
        <li>Cloud hosting and infrastructure providers used to operate the application.</li>
      </ul>

      <h2>6. Retention</h2>
      <p>
        We keep account and operational data for as long as your account is
        active. On written request we delete or return your data within 30 days,
        except where we must retain records to meet legal, tax, or compliance
        obligations (for example, SMS consent and opt-out logs).
      </p>

      <h2>7. Security</h2>
      <p>
        Data is encrypted in transit. Access is scoped per business, enforced by
        authentication and role checks, and isolated so one business cannot see
        another&rsquo;s data. No system is perfectly secure, but we work to
        protect your information using appropriate technical and organizational
        measures.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you or your customers live, applicable law may give
        rights to access, correct, delete, or export personal data, or to object
        to certain processing. Because we process most personal data on behalf of
        the business that uploaded it, we will refer consumer requests to that
        business and assist them in responding.
      </p>
      <p>
        If you are a resident of California, you may have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA), including the right to request access to or deletion of your data. Because we operate primarily as a service provider to businesses, we will direct your request to the respective business entity.
      </p>

      <h2>9. Children</h2>
      <p>
        The service is for businesses and is not directed to children. We do not
        knowingly collect data from anyone under 16.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy. Material changes will be posted here with a new
        &ldquo;last updated&rdquo; date and, where appropriate, notified in the
        app.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions or requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalDoc>
  );
}
