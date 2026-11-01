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
  Target,
  Users,
  Lightbulb,
} from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.izgsolutions.co.za",
  },
};

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

            <AnimatedSection delay={0.2}>
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

            <AnimatedSection delay={0.3}>
              <TrackedLink
                href="/whatsapp-chatbots"
                event="card_click"
                properties={{ card: "whatsapp_automation", page: "/" }}
                className="group block p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <MessageCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">WhatsApp Automation</h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Automated WhatsApp assistants that take orders, book
                  appointments, answer questions, and capture leads, 24/7.
                </p>
                <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  See it in action <ArrowRight size={15} />
                </span>
              </TrackedLink>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
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

      {/* About */}
      <section id="about" className="section-padding bg-surface-50 scroll-mt-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-6">
                Every business deserves to look professional online.
              </h2>
              <div className="space-y-4 text-surface-600 leading-relaxed">
                <p>
                  Small businesses in South Africa are expected to have a
                  professional online presence and respond to customers
                  instantly, all while running the actual business. Most
                  can&apos;t afford a full-time developer or marketing team, so
                  they end up with a weak Facebook page, missed WhatsApp
                  messages, and customers who move on to someone who looks more
                  established.
                </p>
                <p>
                  We built IZG Solutions to close that gap. We&apos;re a focused
                  team in Centurion, Gauteng, using proven templates and
                  automation to deliver premium results fast, without agency
                  prices. We speak your language, understand your market, and
                  build things that actually work.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Practical over perfect",
                  desc: "We build things that work and deliver value now, not theoretical solutions that take forever to ship.",
                },
                {
                  icon: Users,
                  title: "Partnership, not transactions",
                  desc: "We're in it for the long run. Your growth is our growth.",
                },
                {
                  icon: Lightbulb,
                  title: "Simplicity is the goal",
                  desc: "Technology should make your life easier. We handle the complexity so you don't have to.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-white border border-surface-100">
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
