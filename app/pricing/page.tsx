import AnimatedSection from "@/components/ui/AnimatedSection";
import TrackedLink from "@/components/ui/TrackedLink";
import {
  Globe,
  MessageCircle,
  FileText,
  CreditCard,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for websites, WhatsApp chatbots, and custom digital solutions. See what fits your business and budget.",
};

const websiteTiers = [
  {
    name: "Starter",
    price: "R3,500",
    description: "A clean single-page website to get your business online fast.",
    features: [
      "Single-page scrolling design",
      "Mobile responsive",
      "Basic SEO setup",
      "WhatsApp button",
      "Contact section",
      "Hosting & deployment",
    ],
  },
  {
    name: "Professional",
    price: "R6,000",
    popular: true,
    description:
      "A full multi-page website that builds credibility and converts visitors.",
    features: [
      "5+ pages (Home, About, Services, Projects, Contact)",
      "Mobile responsive",
      "Full SEO optimisation",
      "Project gallery",
      "Animations & transitions",
      "Google Maps integration",
      "Analytics setup",
      "Hosting & deployment",
    ],
  },
  {
    name: "E-commerce",
    price: "R12,000",
    description:
      "A full online store with product management and WhatsApp checkout.",
    features: [
      "Everything in Professional",
      "Product catalogue with CMS",
      "Client manages products themselves",
      "WhatsApp checkout flow",
      "Seasonal collections",
      "Privacy policy & terms",
      "Stock management",
      "Hosting & deployment",
    ],
  },
];

const chatbotTiers = [
  {
    name: "Simple Flow",
    price: "R3,000",
    description: "A straightforward conversation flow for one use case.",
    features: [
      "Up to 5 conversation stages",
      "Linear flow (no complex branching)",
      "Text & button messages",
      "Basic session management",
      "WhatsApp Business API setup",
      "Testing & go-live",
    ],
  },
  {
    name: "Advanced Flow",
    price: "R6,000",
    popular: true,
    description:
      "A full conversation system with branching, validation, and smart handling.",
    features: [
      "Up to 15 conversation stages",
      "Branching logic & multiple paths",
      "Input validation (numbers, dates)",
      "List messages & rich interactions",
      "Wrong-action handling",
      "Session expiry & management",
      "Marketing message setup",
      "Testing & go-live",
    ],
  },
  {
    name: "Enterprise",
    price: "R12,000",
    description:
      "Multiple flows, catalogue integration, and advanced automation.",
    features: [
      "Everything in Advanced",
      "Multiple conversation flows",
      "Product catalogue integration",
      "WhatsApp Flows (forms)",
      "Invoice generation",
      "Location sharing",
      "Priority support",
      "Custom integrations",
    ],
  },
];

const cardIndividual = {
  setup: "R249",
  annual: "R99",
  features: [
    "Branded digital card + QR code",
    "Save-contact landing page",
    "Apple, Google & Samsung Wallet",
    "Link-in-bio page (socials, booking, links)",
    "Update your details anytime",
    "Scan & save analytics",
    "Custom colours, logo & QR",
    "Setup & go-live",
  ],
};

// Team volume pricing. The annual discount % is applied to the setup fee too.
const cardVolumeTiers = [
  {
    range: "1 – 50 cards",
    setup: "R249",
    annual: "R99",
    note: "per card",
  },
  {
    range: "51 – 100 cards",
    setup: "R175",
    annual: "R67",
    note: "per card",
    popular: true,
  },
  {
    range: "101+ cards",
    setup: "R131",
    annual: "R50",
    note: "per card",
  },
];

const websiteMonthlyPlans = [
  {
    name: "Basic",
    price: "R350",
    features: ["Website hosting & uptime", "SSL certificate", "1 content update/month"],
  },
  {
    name: "Active",
    price: "R750",
    features: [
      "Everything in Basic",
      "SEO monitoring",
      "3-4 content updates/month",
      "Performance checks",
    ],
  },
  {
    name: "Pro",
    price: "R1,200",
    features: [
      "Everything in Active",
      "Weekly content updates",
      "Monthly reporting",
      "Priority support",
    ],
  },
];

const chatbotMonthlyPlans = [
  {
    name: "Starter",
    price: "R350",
    features: [
      "Platform hosting",
      "Up to 500 conversations/month",
      "Basic support (email)",
      "Message delivery monitoring",
    ],
  },
  {
    name: "Growth",
    price: "R750",
    features: [
      "Everything in Starter",
      "Up to 2,000 conversations/month",
      "Marketing message sending",
      "Flow updates (minor tweaks)",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "R1,200",
    features: [
      "Everything in Growth",
      "Unlimited conversations",
      "Invoice generation",
      "Monthly analytics report",
      "Dedicated support",
      "Flow changes included",
    ],
  },
];

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are these exact prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These are starting prices. Your exact quote depends on the scope of your project: number of pages, complexity of flows, amount of content, etc. We'll give you a clear quote before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "What about payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work on a deposit + balance model. Typically 50% upfront for smaller projects, with the balance due on delivery. Exact terms are in your quotation.",
        },
      },
      {
        "@type": "Question",
        name: "How long does delivery take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Websites are typically delivered within 5 business days from when we receive all your content. WhatsApp chatbots depend on Meta's verification and approval process, which can take longer. We'll give you a realistic timeline upfront based on your setup status.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need changes after delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 rounds of revisions are included in every project. Additional changes after that are billed at R200/hour.",
        },
      },
      {
        "@type": "Question",
        name: "Is the monthly plan mandatory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For websites, it's optional but recommended. For WhatsApp chatbots, yes. Your bot runs on our platform and requires ongoing hosting, monitoring, and Meta API access to function.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a website AND a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely, and they work best together. We offer bundle pricing when you take both services. Get in touch and we'll put together a package.",
        },
      },
      {
        "@type": "Question",
        name: "Do digital business cards work on every phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The person scanning your card just uses their phone camera, no app required, on both iPhone and Android. You can also add your own card to Apple, Google, or Samsung Wallet.",
        },
      },
      {
        "@type": "Question",
        name: "How does digital business card pricing work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each card has a once-off setup fee (from R249) plus a small annual fee (from R99/year) to keep it live and editable. For teams, both the setup and annual fee drop per card as you order more: R99/year for 1-50 cards, R67 for 51-100, and R50 for 101 or more.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="section-padding pt-32 bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
              Transparent pricing. No surprises.
            </h1>
            <p className="text-lg text-surface-500 max-w-2xl leading-relaxed">
              Every business is different, so exact pricing depends on your
              specific needs. But here&apos;s a clear guide so you know what to
              expect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Digital Business Cards */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <CreditCard className="text-primary-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-surface-900">
                Digital Business Cards
              </h2>
              <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                New
              </span>
            </div>
            <p className="text-surface-500 mb-8 max-w-2xl">
              A once-off setup fee per card, then a small annual fee to keep it
              live and editable. Buying for a team? The more cards, the lower
              the price per card.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Individual */}
            <AnimatedSection>
              <div className="relative p-7 rounded-2xl border border-surface-100 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Individual</h3>
                <p className="text-sm text-surface-500 mb-4">
                  One smart card for a single professional.
                </p>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-surface-900">
                    R249
                  </span>
                  <span className="text-surface-400 text-sm ml-1">
                    once-off setup
                  </span>
                </div>
                <div className="mb-5">
                  <span className="text-lg font-semibold text-surface-700">
                    + R99
                  </span>
                  <span className="text-surface-400 text-sm ml-1">
                    per year
                  </span>
                </div>
                <ul className="space-y-2.5 flex-grow">
                  {cardIndividual.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-surface-600"
                    >
                      <Check
                        className="text-primary-500 flex-shrink-0 mt-0.5"
                        size={15}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Teams — volume pricing (spans two columns on desktop) */}
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="relative p-7 rounded-2xl border border-primary-300 shadow-lg shadow-primary-100/50 h-full flex flex-col">
                <span className="absolute -top-3 left-6 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  For Teams
                </span>
                <h3 className="text-lg font-semibold mb-1">Teams</h3>
                <p className="text-sm text-surface-500 mb-6">
                  Branded cards for your whole company. Price per card drops as
                  you add more. Everything in Individual, for every employee.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cardVolumeTiers.map((tier) => (
                    <div
                      key={tier.range}
                      className={`relative p-5 rounded-xl border flex flex-col ${
                        tier.popular
                          ? "border-primary-300 bg-primary-50/40"
                          : "border-surface-100 bg-surface-50"
                      }`}
                    >
                      <span className="text-xs font-medium uppercase tracking-wider text-surface-500 mb-3">
                        {tier.range}
                      </span>
                      <div className="mb-1">
                        <span className="text-2xl font-bold text-surface-900">
                          {tier.setup}
                        </span>
                        <span className="text-surface-400 text-xs ml-1">
                          setup / card
                        </span>
                      </div>
                      <div>
                        <span className="text-base font-semibold text-surface-700">
                          + {tier.annual}
                        </span>
                        <span className="text-surface-400 text-xs ml-1">
                          / card / year
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-surface-400 mt-6">
                  Setup is a once-off fee per card; the annual fee recurs each
                  year. Example: 60 cards = R175 setup and R67/year, per card.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Chatbots */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-primary-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-surface-900">
                WhatsApp Chatbots
              </h2>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Meta Verified Tech Provider
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatbotTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative p-7 rounded-2xl border h-full flex flex-col ${
                    tier.popular
                      ? "border-primary-300 shadow-lg shadow-primary-100/50"
                      : "border-surface-100"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-surface-900">
                      {tier.price}
                    </span>
                    <span className="text-surface-400 text-sm ml-1">
                      starting from
                    </span>
                  </div>
                  <p className="text-sm text-surface-500 mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-2.5 flex-grow">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-surface-600"
                      >
                        <Check
                          className="text-primary-500 flex-shrink-0 mt-0.5"
                          size={15}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Websites */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Globe className="text-primary-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-surface-900">Websites</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websiteTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative p-7 rounded-2xl border bg-surface-50 h-full flex flex-col ${
                    tier.popular
                      ? "border-primary-300 shadow-lg shadow-primary-100/50"
                      : "border-surface-100"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-surface-900">
                      {tier.price}
                    </span>
                    <span className="text-surface-400 text-sm ml-1">
                      starting from
                    </span>
                  </div>
                  <p className="text-sm text-surface-500 mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-2.5 flex-grow">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-surface-600"
                      >
                        <Check
                          className="text-primary-500 flex-shrink-0 mt-0.5"
                          size={15}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Digital Solutions */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <FileText className="text-primary-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-surface-900">
                Custom Digital Solutions
              </h2>
            </div>
            <div className="max-w-2xl">
              <div className="p-7 rounded-2xl border border-surface-100">
                <div className="mb-3">
                  <span className="text-3xl font-bold text-surface-900">
                    Custom Quote
                  </span>
                </div>
                <p className="text-sm text-surface-500 mb-5">
                  Tailored solutions built for your specific business needs. From
                  PDF catalogues to custom integrations and internal tools. Price
                  depends on scope and complexity.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "PDF product catalogues (branded, structured, print-ready)",
                    "Custom integrations between your existing tools",
                    "Internal dashboards & reporting tools",
                    "Workflow automation",
                    "Data structuring & migration",
                    "Scoped and quoted per project",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-surface-600"
                    >
                      <Check
                        className="text-primary-500 flex-shrink-0 mt-0.5"
                        size={15}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-surface-900 mb-3">
              Monthly Support &amp; Hosting
            </h2>
            <p className="text-surface-500 mb-10 max-w-2xl">
              Keep your digital solutions running smoothly with ongoing support
              and hosting.
            </p>
          </AnimatedSection>

          {/* Chatbot Monthly */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-primary-600" size={16} />
              </div>
              <h3 className="text-lg font-semibold text-surface-900">
                Chatbot Hosting &amp; Operations
              </h3>
            </div>
            <p className="text-surface-400 text-sm mb-6 ml-11">
              Required. Your chatbot runs on our platform and needs ongoing hosting and monitoring.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {chatbotMonthlyPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-surface-100 bg-surface-50 h-full flex flex-col">
                  <h3 className="font-semibold mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-surface-900">
                      {plan.price}
                    </span>
                    <span className="text-surface-400 text-sm">/month</span>
                  </div>
                  <ul className="space-y-2 flex-grow">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-surface-600"
                      >
                        <Check
                          className="text-primary-500 flex-shrink-0 mt-0.5"
                          size={14}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Website Monthly */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                <Globe className="text-primary-600" size={16} />
              </div>
              <h3 className="text-lg font-semibold text-surface-900">
                Website Hosting &amp; Maintenance
              </h3>
            </div>
            <p className="text-surface-400 text-sm mb-6 ml-11">
              Optional, but recommended to keep your site updated and monitored.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {websiteMonthlyPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-surface-100 bg-surface-50 h-full flex flex-col">
                  <h3 className="font-semibold mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-surface-900">
                      {plan.price}
                    </span>
                    <span className="text-surface-400 text-sm">/month</span>
                  </div>
                  <ul className="space-y-2 flex-grow">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-surface-600"
                      >
                        <Check
                          className="text-primary-500 flex-shrink-0 mt-0.5"
                          size={14}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-xs text-surface-400 mt-6">
              * Meta WhatsApp conversation fees may apply in addition to the
              monthly plan, depending on message volume and type.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ / Notes */}
      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-surface-900 mb-8">
              Good to know
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Are these exact prices?",
                  a: "These are starting prices. Your exact quote depends on the scope of your project: number of pages, complexity of flows, amount of content, etc. We'll give you a clear quote before any work begins.",
                },
                {
                  q: "What about payment?",
                  a: "We work on a deposit + balance model. Typically 50% upfront for smaller projects, with the balance due on delivery. Exact terms are in your quotation.",
                },
                {
                  q: "How long does delivery take?",
                  a: "Websites are typically delivered within 5 business days from when we receive all your content. WhatsApp chatbots depend on Meta's verification and approval process, which can take longer. We'll give you a realistic timeline upfront based on your setup status.",
                },
                {
                  q: "What if I need changes after delivery?",
                  a: "2 rounds of revisions are included in every project. Additional changes after that are billed at R200/hour.",
                },
                {
                  q: "Is the monthly plan mandatory?",
                  a: "For websites, it's optional but recommended. For WhatsApp chatbots, yes. Your bot runs on our platform and requires ongoing hosting, monitoring, and Meta API access to function.",
                },
                {
                  q: "Can I get a website AND a chatbot?",
                  a: "Absolutely, and they work best together. We offer bundle pricing when you take both services. Get in touch and we'll put together a package.",
                },
                {
                  q: "Do digital business cards work on every phone?",
                  a: "Yes. The person scanning your card just uses their phone camera, no app required, on both iPhone and Android. You can also add your own card to Apple, Google, or Samsung Wallet.",
                },
                {
                  q: "How does digital business card pricing work?",
                  a: "Each card has a once-off setup fee (from R249) plus a small annual fee (from R99/year) to keep it live and editable. For teams, both the setup and annual fee drop per card as you order more: R99/year for 1-50 cards, R67 for 51-100, and R50 for 101 or more.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-surface-100 pb-5">
                  <h3 className="font-semibold text-surface-900 mb-1.5">
                    {item.q}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which fits?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll recommend the right
              solution, with a clear quote, no obligations.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              properties={{ button: "get_free_quote", page: "/pricing" }}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get a Free Quote <ArrowRight size={18} />
            </TrackedLink>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
