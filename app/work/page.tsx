import AnimatedSection from "@/components/ui/AnimatedSection";
import { Globe, MessageCircle, FileText } from "lucide-react";

export const metadata = {
  title: "Our Work",
  description:
    "See what we've built. Websites, WhatsApp chatbots, and digital catalogues for real businesses.",
};

const projects = [
  {
    title: "Platinum Projects SA",
    category: "Website",
    icon: Globe,
    industry: "Electrical Contractor",
    description:
      "A premium, dark industrial website for an electrical contractor in Gauteng. Features project gallery with lightbox, service breakdowns, WhatsApp integration, and quote request functionality.",
  },
  {
    title: "Asante Investments",
    category: "Website",
    icon: Globe,
    industry: "Construction",
    description:
      "Professional construction company website for a Kempton Park-based builder. Showcases services, project portfolio, and company credibility. Designed for future WhatsApp and quote request integration.",
  },
  {
    title: "Luxe Petals",
    category: "Website",
    icon: Globe,
    industry: "Florist / E-commerce",
    description:
      "An elegant online storefront for a florist business. Includes content management for products, seasonal collections, WhatsApp checkout, and legal compliance pages.",
  },
  {
    title: "XYZ Dentistry",
    category: "WhatsApp Chatbot",
    icon: MessageCircle,
    industry: "Healthcare",
    description:
      "Automated appointment booking via WhatsApp. Patients select location, preferred time, booking type, and optionally capture medical aid details, all through a guided conversation flow.",
  },
  {
    title: "XYZ Restaurant",
    category: "WhatsApp Chatbot",
    icon: MessageCircle,
    industry: "Food & Beverage",
    description:
      "WhatsApp-based food ordering system. Customers browse the catalogue, place orders, provide collection details, and receive location pins for pickup.",
  },
  {
    title: "Mvelase Aura",
    category: "Digital Catalogue",
    icon: FileText,
    industry: "Fragrance / Retail",
    description:
      "Professional PDF product catalogues for a perfume brand. 80 products structured and segmented by gender and season into multiple branded, print-ready catalogues.",
  },
];

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

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <project.icon className="text-primary-600" size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-surface-400 mb-3">
                    {project.industry}
                  </p>
                  <p className="text-surface-500 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
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
