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
    "Professional websites, WhatsApp chatbot automation, and digital catalogue generation for small and medium businesses in South Africa.",
};

export default function ServicesPage() {
  return (
    <>
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
              business a professional digital presence and automated customer
              engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Websites */}
      <section className="section-padding bg-white" id="websites">
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
                <div className="p-6 rounded-xl border border-surface-100 hover:border-primary-200 transition-colors">
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
            <div className="bg-surface-50 rounded-2xl p-8">
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

      {/* WhatsApp Chatbots */}
      <section className="section-padding bg-surface-50" id="chatbots">
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
            <div className="bg-white rounded-2xl p-8 border border-surface-100">
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

      {/* Catalogues */}
      <section className="section-padding bg-white" id="catalogues">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-surface-900">
                Digital Catalogues
              </h2>
            </div>
            <p className="text-surface-500 text-lg max-w-3xl mb-10 leading-relaxed">
              Professional PDF product catalogues your team can share instantly
              via WhatsApp, email, or print. We take your product data and images
              and turn them into branded, structured catalogues, segmented
              however you need.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Multiple Layouts",
                desc: "Choose products per page, column layouts, and page sizing to suit your brand.",
              },
              {
                icon: Search,
                title: "Smart Segmentation",
                desc: "Split catalogues by category, season, gender, price range, whatever makes sense for your business.",
              },
              {
                icon: Globe,
                title: "Future-Ready Data",
                desc: "The product data we structure feeds directly into a future website or online store. No rework needed.",
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
