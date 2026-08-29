import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TrackedLink from "@/components/ui/TrackedLink";
import CardDemo from "@/components/ui/CardDemo";
import {
  Wallet,
  QrCode,
  RefreshCw,
  Leaf,
  BarChart3,
  Zap,
  Home,
  Briefcase,
  Users,
  Scissors,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Digital Business Cards",
  description:
    "Smart digital business cards for South African professionals. Share your contact with one QR scan, add your card to Apple, Google & Samsung Wallet, and never reprint a card again.",
  keywords: [
    "digital business card South Africa",
    "digital business cards Centurion",
    "QR code business card",
    "Apple Wallet business card",
    "Google Wallet business card",
    "Samsung Wallet business card",
    "vCard QR code",
    "smart business card",
    "electronic business card",
    "contactless business card South Africa",
    "virtual business card",
    "link in bio South Africa",
  ],
  openGraph: {
    title: "Digital Business Cards | IZG Solutions",
    description:
      "Share your contact with one scan. Add your card to Apple, Google & Samsung Wallet. Always current, never reprinted.",
    url: "https://www.izgsolutions.co.za/digital-cards",
  },
  alternates: {
    canonical: "https://www.izgsolutions.co.za/digital-cards",
  },
};

export default function DigitalCardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Business Cards",
    description:
      "Smart digital business cards that share contact details via QR code scan and live in Apple, Google, and Samsung Wallet. Always current, with scan analytics and custom branding.",
    provider: {
      "@type": "LocalBusiness",
      name: "IZG Solutions",
      url: "https://www.izgsolutions.co.za",
    },
    areaServed: { "@type": "Country", name: "South Africa" },
    serviceType: "Digital Business Cards",
    url: "https://www.izgsolutions.co.za/digital-cards",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding pt-32 overflow-hidden bg-surface-950">
        <Image
          src="/digital-cards/card-in-wallet.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-950/90 via-surface-950/70 to-surface-950/40" />
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary-400 text-sm font-medium uppercase tracking-widest mb-4">
                Digital Business Cards
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                One scan.
                <br />
                <span className="text-primary-400">Contact saved.</span>
              </h1>
              <p className="text-lg text-surface-300 max-w-xl mb-10 leading-relaxed">
                A smart business card that lives in your phone. Share it with a
                single QR scan, add it to Apple, Google, or Samsung Wallet, and
                update your details anytime, without ever reprinting a card.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink
                  href="/contact"
                  event="cta_click"
                  properties={{ button: "get_a_card", page: "/digital-cards" }}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Get Your Card <ArrowRight size={18} />
                </TrackedLink>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 border border-surface-600 text-surface-200 px-6 py-3 rounded-lg font-medium hover:border-surface-400 hover:text-white transition-colors"
                >
                  See It Live
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/digital-cards/wallet-drop-exact-card-poster.jpg"
                  className="w-full h-auto"
                >
                  <source
                    src="/digital-cards/izg-wallet-drop-exact-card.webm"
                    type="video/webm"
                  />
                  <source
                    src="/digital-cards/izg-wallet-drop-exact-card.mp4"
                    type="video/mp4"
                  />
                </video>
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  Illustration
                </span>
              </div>
              <p className="text-surface-400 text-xs mt-3 text-center">
                Illustrative preview. Scan a real card below to try it live.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Paper vs Digital */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                Why Go Digital
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-6">
                Paper cards get lost. Yours never will.
              </h2>
              <p className="text-surface-500 text-lg mb-6 leading-relaxed">
                Printed cards end up in a drawer, go out of date the moment you
                change a number, and cost you every time you reprint. A digital
                card is one scan away, always current, and impossible to run out
                of.
              </p>
              <ul className="space-y-3">
                {[
                  "Update your details anytime, the QR never changes",
                  "Works on every phone, no app required",
                  "Never run out or reprint again",
                  "See who saved your card with scan analytics",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-surface-700"
                  >
                    <Check
                      className="text-primary-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/digital-cards/paper-vs-digital.png"
                  alt="A paper business card being tossed into a drawer versus scanning a QR code to instantly save a contact"
                  width={1232}
                  height={1232}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section
        id="demo"
        className="section-padding bg-surface-50 scroll-mt-20"
      >
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                See It Live
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
                Try our team&apos;s real cards.
              </h2>
              <p className="text-surface-500 text-lg">
                These are the actual digital cards our directors carry. Switch
                between them, and scan the QR with your phone to save the
                contact for real.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <CardDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              Everything a paper card can&apos;t do.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: QrCode,
                title: "One Scan to Save",
                desc: "Anyone scans your QR with their phone camera and saves your full contact instantly. No app, no typing.",
              },
              {
                icon: Wallet,
                title: "Lives in Your Wallet",
                desc: "Add your card to Apple, Google, or Samsung Wallet. Always ready, just open your wallet and show the QR.",
              },
              {
                icon: RefreshCw,
                title: "Always Current",
                desc: "Change your number, title, or company anytime. Everyone who scans gets your latest details, same QR.",
              },
              {
                icon: BarChart3,
                title: "Scan Analytics",
                desc: "See how many people scanned and saved your card. Know your networking is actually working.",
              },
              {
                icon: Zap,
                title: "Link-in-Bio Page",
                desc: "Optional branded page with all your links: socials, WhatsApp, booking, website. One tap to everything.",
              },
              {
                icon: Leaf,
                title: "Custom Branding",
                desc: "Your logo, your colours, your photo. Cards match your brand, or your whole company's, for a polished look.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-surface-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <item.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
              Built for people who meet people.
            </h2>
            <p className="text-surface-500 max-w-2xl mb-14 text-lg">
              If you hand out cards, network at events, or want prospects to
              reach you instantly, a digital card pays for itself fast.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Real Estate Agents",
                desc: "Share your details at viewings and open houses. Buyers save you in one scan, no card to lose.",
              },
              {
                icon: Briefcase,
                title: "Sales Teams",
                desc: "Every rep on the same branded card. Track scans and make sure no lead's contact goes cold.",
              },
              {
                icon: Users,
                title: "Event Networking",
                desc: "Conferences, expos, meetups. Swap contacts instantly instead of fumbling with paper.",
              },
              {
                icon: Scissors,
                title: "Salons & Services",
                desc: "Let clients save you and book again with a tap. Add your socials and booking link too.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-surface-100 bg-white hover:border-primary-200 transition-colors h-full">
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
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              Live in a day. Yours forever.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Send Us Your Details",
                desc: "Name, title, contact info, photo, and your brand colours. We do the rest.",
              },
              {
                step: "02",
                title: "We Build Your Card",
                desc: "A branded card, QR code, wallet pass, and optional link-in-bio page, all set up for you.",
              },
              {
                step: "03",
                title: "Add to Your Wallet",
                desc: "Save your card to Apple, Google, or Samsung Wallet so it's always one tap away.",
              },
              {
                step: "04",
                title: "Start Sharing",
                desc: "Show your QR anywhere. People scan, save, and you're in their phone in seconds.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div>
                  <span className="text-4xl font-bold text-primary-100">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-surface-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
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
              Ready to ditch the paper?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Get a digital business card that works as hard as you do. For you,
              or your whole team.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              properties={{ button: "get_a_card", page: "/digital-cards" }}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get Your Card <ArrowRight size={18} />
            </TrackedLink>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
