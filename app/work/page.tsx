import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TrackedLink from "@/components/ui/TrackedLink";
import WorkGallery from "@/components/work/WorkGallery";

export const metadata = {
  title: "Our Work",
  description:
    "See what we've built. Websites, WhatsApp chatbots, and custom digital solutions for real businesses.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
              Real solutions for real businesses.
            </h1>
            <p className="text-lg text-surface-500 max-w-2xl leading-relaxed">
              Here&apos;s a selection of what we&apos;ve built. Each project
              solves a specific business problem, from online presence to
              automated customer engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery (filter + featured + grid) */}
      <section className="section-padding bg-white">
        <WorkGallery />
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Like what you see?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build yours. Tell us about your business and we&apos;ll
              show you what&apos;s possible.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              properties={{ button: "get_in_touch", page: "/work" }}
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
