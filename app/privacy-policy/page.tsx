import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for IZG Solutions (Pty) Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-32 bg-white">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-surface-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-surface-400 text-sm mb-10">
            Last updated: June 2026
          </p>

          <div className="prose prose-surface max-w-none space-y-8 text-surface-600 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                1. Introduction
              </h2>
              <p>
                IZG Solutions (Pty) Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
                protecting your personal information in accordance with the
                Protection of Personal Information Act 4 of 2013 (POPIA) and
                other applicable South African legislation.
              </p>
              <p className="mt-2">
                This Privacy Policy explains how we collect, use, store, and
                protect your personal information when you use our website,
                engage our services, or interact with our WhatsApp chatbot
                platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                A) Information from Business Clients (our direct customers)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Business name, contact person name, email address, and phone number</li>
                <li>WhatsApp Business Account credentials and phone number IDs</li>
                <li>Billing and payment information</li>
                <li>Chatbot configuration and conversation flow content</li>
              </ul>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                B) Information from End-Customers (people who message our clients&apos; chatbots on WhatsApp)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>WhatsApp phone number (wa_id)</li>
                <li>Message content sent to and received from the chatbot</li>
                <li>Message timestamps and delivery status</li>
                <li>Session state (which stage of the conversation they are in)</li>
              </ul>
              <p className="mt-2">
                We do not collect names, profile photos, or any other personal
                details from end-customers beyond what is included in WhatsApp
                message payloads.
              </p>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                C) Information from Website Visitors
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Name and surname</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name and industry</li>
                <li>Message content submitted via our contact form</li>
                <li>Technical data such as IP address, browser type, and device information</li>
                <li>Cookie and usage data (see our Cookie Policy below)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                3. How We Use Your Information
              </h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your enquiries and provide requested services</li>
                <li>Prepare quotations and service agreements</li>
                <li>Communicate with you about projects and deliverables</li>
                <li>Operate and maintain our WhatsApp chatbot platform on behalf of business clients</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-2">
                We will not use your personal information for purposes other
                than those stated above without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                4. WhatsApp and Meta Platform Data
              </h2>
              <p>
                IZG Solutions operates a WhatsApp chatbot platform that uses
                Meta&apos;s WhatsApp Business Cloud API. Through this integration, we
                access the following Meta platform permissions:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>whatsapp_business_messaging</strong>: to send and
                  receive WhatsApp messages on behalf of connected client
                  businesses
                </li>
                <li>
                  <strong>whatsapp_business_management</strong>: to manage
                  WhatsApp Business Account details, phone number registration,
                  and message templates
                </li>
              </ul>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                How we use Meta Platform Data:
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Receive inbound messages from end-customers and route them to the correct client chatbot</li>
                <li>Send automated responses on behalf of client businesses</li>
                <li>Store conversation history for session continuity and client reporting</li>
                <li>Manage message templates and phone number configuration</li>
              </ul>

              <h3 className="text-base font-medium text-surface-800 mt-4 mb-2">
                Restrictions on use:
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Meta Platform Data is not used for advertising, profiling, or selling to third parties</li>
                <li>Data is used solely for the core WhatsApp chatbot functionality described above</li>
                <li>We do not use Meta data to build user profiles or target advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                5. Data Processor and Controller Roles
              </h2>
              <p>
                For personal information collected from our business clients
                (account data, billing, contact details), IZG Solutions acts as
                the Responsible Party (data controller) under POPIA.
              </p>
              <p className="mt-2">
                For personal information of end-customers who interact with our
                clients&apos; WhatsApp chatbots (phone numbers, message content,
                session data), IZG Solutions acts as an Operator (data processor)
                on behalf of the client, who remains the Responsible Party for
                their customers&apos; data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                6. Legal Basis for Processing
              </h2>
              <p>We process your personal information based on:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your consent (e.g., submitting a contact form)</li>
                <li>Contractual necessity (e.g., delivering services you have engaged us for)</li>
                <li>Legitimate interest (e.g., improving our website, operating the chatbot platform)</li>
                <li>Legal obligation (e.g., tax and business records)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                7. Third-Party Service Providers (Sub-Processors)
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third
                parties. We use the following third-party service providers to
                operate our platform:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-surface-200">
                      <th className="text-left py-2 pr-4 font-semibold text-surface-900">Sub-processor</th>
                      <th className="text-left py-2 pr-4 font-semibold text-surface-900">Purpose</th>
                      <th className="text-left py-2 pr-4 font-semibold text-surface-900">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Meta Platforms, Inc.</td>
                      <td className="py-2 pr-4">WhatsApp Business Cloud API, sending and receiving messages</td>
                      <td className="py-2 pr-4">United States</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Supabase, Inc.</td>
                      <td className="py-2 pr-4">Cloud database, stores sessions, messages, and customer records</td>
                      <td className="py-2 pr-4">EU (Ireland)</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Vercel, Inc.</td>
                      <td className="py-2 pr-4">Application hosting and serverless functions</td>
                      <td className="py-2 pr-4">United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                All third-party processors are contractually bound to process
                data only on our instructions and in accordance with applicable
                data protection laws.
              </p>
              <p className="mt-2">
                We may also share your information with professional advisors
                (e.g., accountants, legal counsel) and regulatory authorities
                where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                8. International Data Transfers
              </h2>
              <p>
                Your data may be transferred to and processed in countries
                outside South Africa, including the United States and the
                European Union, where our sub-processors (Meta, Supabase, Vercel)
                operate.
              </p>
              <p className="mt-2">
                We ensure these transfers comply with POPIA section 72 by:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Transferring data only to countries with adequate data protection laws, or</li>
                <li>Ensuring binding agreements are in place that provide POPIA-equivalent protection</li>
              </ul>
              <p className="mt-2">
                Despite the transfer, we remain responsible for the protection of
                your personal information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                9. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfil the purposes for which it was collected, or as required
                by law. Specific retention periods are as follows:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-surface-200">
                      <th className="text-left py-2 pr-4 font-semibold text-surface-900">Data type</th>
                      <th className="text-left py-2 pr-4 font-semibold text-surface-900">Retention period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Client account and billing data</td>
                      <td className="py-2 pr-4">Duration of contract + 12 months</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">WhatsApp conversation content (messages)</td>
                      <td className="py-2 pr-4">6 months (rolling)</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Session data (conversation state)</td>
                      <td className="py-2 pr-4">30 days after session ends</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">End-customer phone numbers</td>
                      <td className="py-2 pr-4">Duration of client contract</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">API and system logs</td>
                      <td className="py-2 pr-4">30 days</td>
                    </tr>
                    <tr className="border-b border-surface-100">
                      <td className="py-2 pr-4">Contact form submissions</td>
                      <td className="py-2 pr-4">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                10. Data Breach Notification
              </h2>
              <p>
                In the event of a security compromise involving personal
                information, we will:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Notify the Information Regulator as soon as reasonably possible
                  after becoming aware of the compromise
                </li>
                <li>
                  Notify affected data subjects as soon as reasonably possible if
                  there are reasonable grounds to believe their personal
                  information has been accessed by an unauthorised person
                </li>
              </ul>
              <p className="mt-2">
                This is in accordance with POPIA section 22.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                11. Your Rights
              </h2>
              <p>Under POPIA, you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at info@izgsolutions.co.za.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                12. Security
              </h2>
              <p>
                We take reasonable technical and organisational measures to
                protect your personal information against unauthorised access,
                loss, or destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                13. Cookies
              </h2>
              <p>
                Our website uses cookies to improve your browsing experience. See
                our cookie consent banner for details on what cookies we use and
                how to manage your preferences. We use:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Essential cookies:</strong> Required for the website to function</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                14. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with an updated &quot;Last updated&quot; date. We
                encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-surface-900 mb-3">
                15. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your rights, contact us at:
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
