import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for IZG Solutions (Pty) Ltd services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding pt-32 bg-white">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-surface-900 mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-surface-400 text-sm mb-10">
            Last updated: August 2026
          </p>

          <div className="prose prose-surface max-w-none space-y-8 text-surface-600 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                1. Introduction
              </h2>
              <p>
                These Terms and Conditions govern the use of the IZG Solutions
                (Pty) Ltd website and the provision of our services. By accessing
                this website or engaging our services, you agree to be bound by
                these terms.
              </p>
              <p className="mt-2">
                IZG Solutions (Pty) Ltd (Reg. No: 2025/205838/07) is a registered
                South African company providing website development, WhatsApp
                chatbot automation, and custom digital solutions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                2. Services
              </h2>
              <p>We provide the following services:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Professional website design and development</li>
                <li>WhatsApp chatbot automation and configuration</li>
                <li>Digital business card creation, hosting, and wallet passes</li>
                <li>Custom digital solutions (PDF catalogues, integrations, internal tools)</li>
                <li>Related digital solutions for small and medium businesses</li>
              </ul>
              <p className="mt-2">
                Specific deliverables, timelines, and pricing for each project
                are defined in individual quotations and service agreements
                between IZG Solutions and the client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                3. Platform Services
              </h2>
              <p>
                In addition to project-based deliverables, IZG Solutions provides
                ongoing hosted platform services (&quot;the Platform&quot;) that operate
                WhatsApp chatbots and host digital business cards on behalf of
                clients. The following terms apply to Platform usage:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The Platform is provided on a monthly subscription or per-agreement basis</li>
                <li>Digital business cards are charged as a once-off setup fee per card plus a recurring annual hosting fee, as set out in your quotation or the pricing on our website</li>
                <li>IZG Solutions will use reasonable efforts to maintain Platform availability, including card pages and wallet passes, but does not guarantee 100% uptime</li>
                <li>Planned maintenance will be communicated at least 24 hours in advance where possible</li>
                <li>Force majeure events (including Meta API outages, wallet provider changes by Apple, Google, or Samsung, Vercel incidents, or Supabase downtime) do not constitute a breach by IZG Solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                4. Acceptable Use Policy
              </h2>
              <p>Clients must not use the Platform to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Send unsolicited messages (spam) or messages without end-user consent</li>
                <li>Send content that violates South African law, including hate speech, fraud, or illegal activity</li>
                <li>Send content that violates Meta&apos;s WhatsApp Business Policy or Commerce Policy</li>
                <li>Impersonate another business or individual</li>
                <li>Collect or store end-customer data in violation of POPIA</li>
                <li>Exceed WhatsApp messaging limits or abuse Meta&apos;s API</li>
              </ul>
              <p className="mt-2">
                IZG Solutions reserves the right to suspend or terminate Platform
                access immediately if a client violates this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                5. Meta/WhatsApp Compliance
              </h2>
              <p>Clients acknowledge and agree that:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Their use of WhatsApp messaging through the Platform is subject to Meta&apos;s WhatsApp Business Terms of Service</li>
                <li>They must comply with Meta&apos;s Business Messaging Policy and Commerce Policy at all times</li>
                <li>Message templates submitted for approval must comply with Meta&apos;s template guidelines</li>
                <li>IZG Solutions is not responsible for Meta&apos;s decisions to reject templates, restrict messaging, or modify API functionality</li>
                <li>Changes to Meta&apos;s policies or API may require changes to the client&apos;s chatbot flow, which may incur additional fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                6. Client Data Ownership and Processing
              </h2>
              <p>
                The client retains ownership of all end-customer data processed
                through the Platform. IZG Solutions processes this data solely on
                the client&apos;s behalf and in accordance with the client&apos;s
                instructions.
              </p>
              <p className="mt-2">
                The client is the Responsible Party (data controller) under POPIA
                for their end-customers&apos; personal information. IZG Solutions acts
                as an Operator (data processor).
              </p>
              <p className="mt-2">The client is responsible for:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Obtaining any necessary consent from end-customers before engaging them via WhatsApp</li>
                <li>Ensuring their chatbot flows comply with POPIA</li>
                <li>Responding to data subject access requests from their end-customers</li>
              </ul>
              <p className="mt-2">
                IZG Solutions will assist the client in responding to data subject
                requests to the extent technically feasible.
              </p>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                Digital business card details
              </h3>
              <p>
                Where a client provides contact details for a digital business
                card, including details of their employees or representatives, the
                client warrants that they have the right and any necessary consent
                to provide those details and to have them published on a publicly
                accessible card. The client understands that a digital business
                card is designed to be shared publicly and that the contact
                details on it can be viewed and saved by anyone who scans or opens
                the card. The client is responsible for keeping card details
                accurate and for requesting removal when a person is no longer
                authorised to be represented.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                7. WhatsApp Messaging Costs
              </h2>
              <p>
                WhatsApp conversations are billed by Meta per conversation
                (24-hour window). The responsibility for these costs will be
                specified in the client&apos;s service agreement. Unless otherwise
                agreed:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Meta conversation charges are passed through to the client at cost</li>
                <li>IZG Solutions will provide monthly usage reports</li>
                <li>The client is responsible for managing their messaging volume within agreed limits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                8. Quotations and Acceptance
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>All quotations are valid for 7 days from date of issue unless otherwise stated.</li>
                <li>A quotation becomes binding once signed by both parties.</li>
                <li>Work will only commence upon receipt of the agreed deposit.</li>
                <li>Prices are quoted in South African Rand (ZAR) and are exclusive of VAT (IZG Solutions is not VAT registered).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                9. Payment Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment terms are specified in the project quotation or service agreement.</li>
                <li>Invoices are due within 7 days of issue.</li>
                <li>A late payment fee of 5% of the outstanding amount will be applied for every 14 days overdue.</li>
                <li>IZG Solutions reserves the right to suspend or withhold deliverables and Platform access until outstanding payments are settled.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                10. Delivery and Timelines
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Delivery timelines begin from the date all required content and assets are received from the client.</li>
                <li>Standard delivery is within 5 business days unless otherwise agreed.</li>
                <li>Delays caused by the client (e.g., late content, slow feedback) do not constitute a breach by IZG Solutions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                11. Revisions
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>2 rounds of revisions are included in the quoted price.</li>
                <li>Additional revisions beyond the included rounds will be billed at R200 per hour.</li>
                <li>A revision is defined as a set of changes requested at one time. Multiple requests sent separately may count as separate rounds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                12. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Custom content, copy, and design assets created for the client belong to the client upon full payment.</li>
                <li>Source code and technical infrastructure (platforms, engines, templates, and systems) remain the property of IZG Solutions, provided as part of the hosting arrangement.</li>
                <li>The client may not resell, redistribute, sublicense, or reverse-engineer the underlying systems.</li>
                <li>Content provided by the client (text, images, logos) remains the property of the client.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                13. Suspension and Termination
              </h2>
              <p>
                IZG Solutions may suspend or terminate Platform access immediately
                and without notice if:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The client breaches the Acceptable Use Policy</li>
                <li>The client&apos;s use of the Platform results in action by Meta against IZG Solutions&apos; WhatsApp Business Account or App</li>
                <li>The client fails to pay fees for more than 30 days</li>
                <li>Continued service would expose IZG Solutions to legal liability</li>
              </ul>
              <p className="mt-2">
                All business data (enquiries, contact submissions, analytics, and
                chatbot flow configuration) belongs to the client and will be
                provided on request if the engagement ends. End-customer
                conversation data will be deleted within 30 days of termination
                unless otherwise requested by the client. Where a digital business
                card subscription ends or is not renewed, the card and any
                associated wallet passes will be deactivated and the card data
                deleted within 30 days, unless otherwise requested by the client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                14. Cancellation
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>If the client cancels a project after the agreement is signed, the deposit is non-refundable.</li>
                <li>Any work completed beyond the deposit value will be invoiced and is payable within 7 days.</li>
                <li>If IZG Solutions cancels a project, any deposit paid will be refunded in full within 14 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                15. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any business information,
                customer data, pricing, and technical details shared during the
                project. This obligation survives the end of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                16. Limitation of Liability
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>IZG Solutions will not be liable for any indirect, incidental, or consequential damages arising from the use of our services, Platform, or website.</li>
                <li>Our total liability for any claim shall not exceed the total amount paid by the client for the specific project or 3 months of Platform fees, whichever is greater.</li>
                <li>We do not guarantee specific business outcomes (e.g., increased sales, leads, or traffic) as a result of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                17. Website Use
              </h2>
              <p>By using this website, you agree to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to gain unauthorised access to any part of the website</li>
                <li>Not use the website to transmit harmful or malicious content</li>
                <li>Accept that the website is provided &quot;as is&quot; without warranties of any kind</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                18. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the content, privacy practices, or availability
                of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                19. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of the
                Republic of South Africa. Any disputes arising from these terms
                shall be subject to the jurisdiction of the South African courts.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                20. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms and Conditions at any
                time. Changes will be posted on this page with an updated date.
                Continued use of our website or services after changes constitutes
                acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                21. Contact
              </h2>
              <p>
                For questions about these Terms and Conditions, contact us at:
              </p>
              <div className="mt-2 bg-surface-50 rounded-lg p-4">
                <p><strong>IZG Solutions (Pty) Ltd</strong></p>
                <p>3320 Thornton Place, Blue Valley Golf Estate, Centurion, 0157</p>
                <p>Email: info@izgsolutions.co.za</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
