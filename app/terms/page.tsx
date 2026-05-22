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
            Last updated: 10 May 2026
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
                IZG Solutions (Pty) Ltd (Reg. No: K2025205838) is a registered
                South African company providing website development, WhatsApp
                chatbot automation, and digital catalogue services.
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
                <li>Digital PDF catalogue generation</li>
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
                3. Quotations and Acceptance
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
                4. Payment Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment terms are specified in the project quotation.</li>
                <li>Invoices are due within 7 days of issue.</li>
                <li>A late payment fee of 5% of the outstanding amount will be applied for every 14 days overdue.</li>
                <li>IZG Solutions reserves the right to suspend or withhold deliverables until outstanding payments are settled.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                5. Delivery and Timelines
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Delivery timelines begin from the date all required content and assets are received from the client.</li>
                <li>Standard delivery is within 5 business days unless otherwise agreed.</li>
                <li>Delays caused by the client (e.g., late content, slow feedback) do not constitute a breach by IZG Solutions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                6. Revisions
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>2 rounds of revisions are included in the quoted price.</li>
                <li>Additional revisions beyond the included rounds will be billed at R200 per hour.</li>
                <li>A revision is defined as a set of changes requested at one time. Multiple requests sent separately may count as separate rounds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                7. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>IZG Solutions retains ownership of all underlying source code, templates, engines, and systems used to deliver projects.</li>
                <li>Upon full payment, the client receives a perpetual, non-exclusive licence to use the final delivered output (website, chatbot configuration, catalogues) for their business purposes.</li>
                <li>The client may not resell, redistribute, sublicense, or reverse-engineer the underlying systems.</li>
                <li>Content provided by the client (text, images, logos) remains the property of the client.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                8. Cancellation
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>If the client cancels a project after the agreement is signed, the deposit is non-refundable.</li>
                <li>Any work completed beyond the deposit value will be invoiced and is payable within 7 days.</li>
                <li>If IZG Solutions cancels a project, any deposit paid will be refunded in full within 14 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                9. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any business information,
                customer data, pricing, and technical details shared during the
                project. This obligation survives the end of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                10. Limitation of Liability
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>IZG Solutions will not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</li>
                <li>Our total liability for any claim shall not exceed the total amount paid by the client for the specific project in question.</li>
                <li>We do not guarantee specific business outcomes (e.g., increased sales, leads, or traffic) as a result of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                11. Website Use
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
                12. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the content, privacy practices, or availability
                of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                13. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of the
                Republic of South Africa. Any disputes arising from these terms
                shall be subject to the jurisdiction of the South African courts.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                14. Changes to These Terms
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
                15. Contact
              </h2>
              <p>
                For questions about these Terms and Conditions, contact us at:
              </p>
              <div className="mt-2 bg-surface-50 rounded-lg p-4">
                <p><strong>IZG Solutions (Pty) Ltd</strong></p>
                <p>3320 Thornton Place, Blue Valley Golf Estate, Centurion, 0157</p>
                <p>Email: info@izgsolutions.co.za</p>
                <p>Phone: +27 72 362 8397</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
