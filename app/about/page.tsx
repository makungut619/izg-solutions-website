import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Users, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "IZG Solutions helps small and medium businesses in South Africa establish a professional digital presence and automate customer engagement. Based in Centurion, Gauteng.",
  keywords: [
    "about IZG Solutions",
    "web developer Centurion",
    "digital agency Gauteng",
    "small business digital partner South Africa",
    "WhatsApp automation company",
    "website agency Pretoria",
  ],
  openGraph: {
    title: "About Us | IZG Solutions",
    description:
      "We help small businesses in South Africa get online and automate customer engagement with professional websites and WhatsApp chatbots.",
    url: "https://www.izgsolutions.co.za/about",
  },
  alternates: {
    canonical: "https://www.izgsolutions.co.za/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
              We believe every business deserves to look professional online.
            </h1>
            <p className="text-lg text-surface-500 max-w-3xl leading-relaxed">
              Too many small businesses lose customers because they don&apos;t
              have a website, or because they can&apos;t respond fast enough on
              WhatsApp. We fix that.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-surface-900 mb-6">
                The problem we solve
              </h2>
              <div className="space-y-4 text-surface-600 leading-relaxed">
                <p>
                  Small businesses in South Africa are expected to have a
                  professional online presence, respond to customers instantly,
                  and compete with larger companies, all while running their
                  actual business.
                </p>
                <p>
                  Most can&apos;t afford a full-time developer or marketing team.
                  They end up with a weak Facebook page, missed WhatsApp
                  messages, and potential customers who move on to someone who
                  looks more established.
                </p>
                <p>
                  We built IZG Solutions to close that gap. We give small
                  businesses the digital tools that used to be reserved for
                  companies with big budgets: professional websites that attract
                  customers, and WhatsApp automation that serves them.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-surface-900 mb-6">
                How we work
              </h2>
              <div className="space-y-4 text-surface-600 leading-relaxed">
                <p>
                  We&apos;ve built a system of proven templates and automation
                  engines that let us deliver high-quality work fast. That means
                  you get premium results without waiting months or paying agency
                  prices.
                </p>
                <p>
                  Every website we build is mobile-first, SEO-ready, and
                  designed to convert. Every chatbot we configure is tested,
                  reliable, and built to handle real customer conversations
                  without breaking.
                </p>
                <p>
                  We&apos;re not a massive agency. We&apos;re a focused team
                  that cares about getting it right for each client. We speak
                  your language, understand your market, and deliver solutions
                  that actually work for your business.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-surface-900 mb-12">
              What drives us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Practical over perfect",
                desc: "We build things that work and deliver value now, not theoretical solutions that take forever to ship.",
              },
              {
                icon: Users,
                title: "Partnership, not transactions",
                desc: "We're in it for the long run. Your growth is our growth. We build relationships, not just invoices.",
              },
              {
                icon: Lightbulb,
                title: "Simplicity is the goal",
                desc: "Technology should make your life easier, not more complicated. We handle the complexity so you don't have to.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white border border-surface-100">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-primary-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">
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
