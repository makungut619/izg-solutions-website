import AnimatedSection from "@/components/ui/AnimatedSection";
import TrackedLink from "@/components/ui/TrackedLink";
import {
  Globe,
  MessageCircle,
  FileText,
  CreditCard,
  Clock,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding pt-32 bg-gradient-to-br from-surface-950 via-surface-900 to-primary-950">
        <div className="container-narrow relative z-10">
          <AnimatedSection>
            <p className="text-primary-400 text-sm font-medium uppercase tracking-widest mb-4">
              Digital Solutions for Growing Businesses
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your business,
              <br />
              <span className="text-primary-400">always on.</span>
            </h1>
            <p className="text-lg md:text-xl text-surface-300 max-w-2xl mb-10 leading-relaxed">
              We build professional websites and WhatsApp chatbots that work for
              your business 24/7. Attract customers online, serve them
              automatically, and grow without being glued to your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedLink
                href="/contact"
                event="cta_click"
                properties={{ button: "get_started", page: "/" }}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Get Started <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href="/services"
                event="cta_click"
                properties={{ button: "view_services", page: "/" }}
                className="inline-flex items-center justify-center gap-2 border border-surface-600 text-surface-200 px-6 py-3 rounded-lg font-medium hover:border-surface-400 hover:text-white transition-colors"
              >
                View Services
              </TrackedLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
              Four ways we help. One goal.
            </h2>
            <p className="text-surface-500 max-w-2xl mb-14 text-lg">
              We give small and medium businesses the digital capability of much
              larger operations, without the overhead.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="group p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <Globe className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Professional Websites</h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Modern, responsive websites that make your business look
                  credible and rank on Google. Built fast, designed to convert.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <MessageCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">WhatsApp Automation</h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Automated WhatsApp assistants that take orders, book
                  appointments, answer questions, and capture leads, 24/7.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <FileText className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Custom Digital Solutions</h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Tailored IT solutions for your unique business needs. From PDF
                  catalogues to custom integrations, we build what off-the-shelf
                  software can&apos;t.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <TrackedLink
                href="/digital-cards"
                event="card_click"
                properties={{ card: "digital_business_cards", page: "/" }}
                className="group block p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <CreditCard className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Digital Business Cards</h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Smart cards that share your contact with one QR scan and live
                  in Apple, Google &amp; Samsung Wallet. Always current, never
                  reprinted.
                </p>
                <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  See it live <ArrowRight size={15} />
                </span>
              </TrackedLink>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              Simple process. Real results.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "We Talk",
                desc: "Tell us about your business and what you need. We'll show you what's possible.",
              },
              {
                step: "02",
                title: "We Demo",
                desc: "We build a quick preview so you can see how your solution will look and feel before you commit.",
              },
              {
                step: "03",
                title: "We Build",
                desc: "Once you're happy, we design and develop the full solution. Website, chatbot, or both.",
              },
              {
                step: "04",
                title: "Go Live",
                desc: "You review, we refine, and we launch. Your business is now online and automated.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div>
                  <span className="text-4xl font-bold text-primary-100">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Why IZG Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              Built for businesses like yours.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "Most projects delivered within 5 business days. No months of waiting.",
              },
              {
                icon: Shield,
                title: "You Own the Output",
                desc: "Your website, your catalogues, your data. We retain the engine, you get the results.",
              },
              {
                icon: Zap,
                title: "Always Working",
                desc: "Your chatbot doesn't sleep. Your website doesn't close. Customers are served 24/7.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-surface-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to take your business online?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s talk about what you need. No pressure, no jargon, just
              a conversation about how we can help.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              properties={{ button: "get_in_touch", page: "/" }}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get In Touch <ArrowRight size={18} />
            </TrackedLink>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
