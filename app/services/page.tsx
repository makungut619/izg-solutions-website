import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Globe,
  MessageCircle,
  FileText,
  ShoppingCart,
  Calendar,
  Utensils,
  Briefcase,
  Palette,
  Smartphone,
  BarChart3,
  Search,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "WhatsApp chatbot automation, professional websites, and custom digital solutions for small and medium businesses in South Africa. Meta verified tech provider.",
  keywords: [
    "WhatsApp chatbot South Africa",
    "WhatsApp automation for business",
    "WhatsApp ordering system",
    "WhatsApp booking bot South Africa",
    "professional website South Africa",
    "business website Centurion",
    "web design Gauteng",
    "ecommerce website South Africa",
    "custom digital solutions",
    "PDF catalogue design",
    "small business automation",
  ],
  openGraph: {
    title: "Our Services | IZG Solutions",
    description:
      "WhatsApp chatbot automation, professional websites, and custom digital solutions for growing businesses in South Africa.",
    url: "https://www.izgsolutions.co.za/services",
  },
  alternates: {
    canonical: "https://www.izgsolutions.co.za/services",
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IZG Solutions Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "WhatsApp Chatbot Automation",
        description:
          "Automated WhatsApp assistants that take orders, book appointments, answer questions, and capture leads 24/7.",
        provider: {
          "@type": "LocalBusiness",
          name: "IZG Solutions",
          url: "https://www.izgsolutions.co.za",
        },
        areaServed: { "@type": "Country", name: "South Africa" },
        serviceType: "WhatsApp Automation",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Professional Website Development",
        description:
          "Modern, mobile-first websites that make your business look credible, rank on Google, and convert visitors into customers.",
        provider: {
          "@type": "LocalBusiness",
          name: "IZG Solutions",
          url: "https://www.izgsolutions.co.za",
        },
        areaServed: { "@type": "Country", name: "South Africa" },
        serviceType: "Web Development",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Custom Digital Solutions",
        description:
          "Tailored digital solutions including PDF catalogues, custom integrations, and internal business tools.",
        provider: {
          "@type": "LocalBusiness",
          name: "IZG Solutions",
          url: "https://www.izgsolutions.co.za",
        },
        areaServed: { "@type": "Country", name: "South Africa" },
        serviceType: "Custom Software Development",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Hero */}
      <section className="section-padding pt-32 bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
              Everything your business needs to be online and automated.
            </h1>
            <p className="text-lg text-surface-500 max-w-2xl leading-relaxed">
              We offer three core services that work together to give your
              business a professional digital presence, automated customer
              engagement, and custom solutions built for your unique needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Chatbots */}
      <section className="section-padding bg-white" id="chatbots">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-surface-900">
                WhatsApp Chatbot Automation
              </h2>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Meta Verified Tech Provider
              </span>
            </div>
            <p className="text-surface-500 text-lg max-w-3xl mb-10 leading-relaxed">
              Give your business a WhatsApp number that acts as a smart
              receptionist, taking orders, booking appointments, answering
              questions, and capturing customer details. Without you needing to
              be online 24/7.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Calendar,
                title: "Appointment Booking",
                desc: "Customers book appointments through WhatsApp. Select service, choose time, provide details. All automated.",
              },
              {
                icon: Utensils,
                title: "Food & Product Ordering",
                desc: "Browse catalogue, add to cart, provide delivery details, confirm order. All within WhatsApp.",
              },
              {
                icon: Smartphone,
                title: "Customer Service & FAQs",
                desc: "Answer common questions, route enquiries, capture leads, and hand off to a human when needed.",
              },
              {
                icon: BarChart3,
                title: "Marketing & Promotions",
                desc: "Send promotional templates to your customer base. New products, specials, announcements.",
              },
              {
                icon: Globe,
                title: "Quote Requests",
                desc: "Customers describe what they need, provide details and images, and receive a quote, all via WhatsApp.",
              },
              {
                icon: Globe,
                title: "Surveys & Feedback",
                desc: "Collect customer feedback, run satisfaction surveys, and gather reviews after service delivery.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-surface-100 bg-white hover:border-primary-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-primary-600" size={20} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-surface-50 rounded-2xl p-8 border border-surface-100">
              <h3 className="font-semibold mb-4">How it works for your customers:</h3>
              <div className="flex flex-col md:flex-row gap-6">
                {[
                  { step: "1", text: "Customer messages your WhatsApp number" },
                  { step: "2", text: "Bot greets them and presents options" },
                  { step: "3", text: "Customer selects, provides info, confirms" },
                  { step: "4", text: "You receive the booking/order/lead" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 flex-1">
                    <span className="w-7 h-7 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {item.step}
                    </span>
                    <p className="text-sm text-surface-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Websites */}
      <section className="section-padding bg-surface-50" id="websites">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <Globe className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-surface-900">
                Professional Websites
              </h2>
            </div>
            <p className="text-surface-500 text-lg max-w-3xl mb-10 leading-relaxed">
              Modern, mobile-first websites that make your business look
              credible, rank on Google, and convert visitors into customers. We
              build fast using proven templates so you get premium quality
              without the premium timeline.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Briefcase,
                title: "Trade & Contractor Sites",
                desc: "For electricians, plumbers, builders, roofers. Dark industrial aesthetic with project galleries and quote request forms.",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Storefronts",
                desc: "Online shops with product management, WhatsApp checkout, and seasonal collections. Client manages products via CMS.",
              },
              {
                icon: Utensils,
                title: "Restaurant & Hospitality",
                desc: "Menu displays, online ordering integration, location maps, and booking functionality.",
              },
              {
                icon: Palette,
                title: "Professional Services",
                desc: "For consultants, lawyers, accountants, financial advisors. Clean, trustworthy design that builds credibility.",
              },
              {
                icon: Globe,
                title: "Health & Beauty",
                desc: "For salons, spas, clinics, wellness practitioners. Elegant design with booking integration and service showcases.",
              },
              {
                icon: Globe,
                title: "Real Estate & Property",
                desc: "For agents, developers, and property managers. Listing displays, virtual tours, and lead capture.",
              },
              {
                icon: Globe,
                title: "Education & Training",
                desc: "For tutors, training providers, and schools. Course listings, timetables, and enquiry forms.",
              },
              {
                icon: Globe,
                title: "Events & Entertainment",
                desc: "For DJs, photographers, event planners, venues. Portfolio galleries, booking forms, and package displays.",
              },
              {
                icon: Globe,
                title: "Automotive & Transport",
                desc: "For mechanics, car washes, logistics companies. Service listings, quote requests, and fleet showcases.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-surface-100 bg-white hover:border-primary-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-primary-600" size={20} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-surface-100">
              <h3 className="font-semibold mb-4">Every website includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Mobile responsive design",
                  "SEO optimisation",
                  "Fast loading performance",
                  "WhatsApp integration ready",
                  "Contact forms",
                  "Google Maps",
                  "Analytics setup",
                  "SSL security",
                  "Hosting & deployment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-surface-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Custom Digital Solutions */}
      <section className="section-padding bg-white" id="custom-solutions">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-surface-900">
                Custom Digital Solutions
              </h2>
            </div>
            <p className="text-surface-500 text-lg max-w-3xl mb-10 leading-relaxed">
              Every business has unique challenges that off-the-shelf software
              can&apos;t solve. We build tailored digital solutions that fit your
              specific workflows, from PDF catalogues to custom integrations and
              internal tools.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "PDF Catalogues",
                desc: "Professional branded product catalogues your team can share via WhatsApp, email, or print. Structured from your data and ready to use.",
              },
              {
                icon: Search,
                title: "Custom Integrations",
                desc: "Connect your existing tools and platforms. Automate data flow between systems so nothing falls through the cracks.",
              },
              {
                icon: Globe,
                title: "Internal Tools & Dashboards",
                desc: "Custom-built tools for your team. Reporting dashboards, workflow automation, and anything else your business needs to run smoother.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-surface-100 hover:border-primary-200 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-primary-600" size={20} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-surface-500 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
