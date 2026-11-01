import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TrackedLink from "@/components/ui/TrackedLink";
import ChatDemo from "@/components/chatbots/ChatDemo";
import {
  Calendar,
  Utensils,
  Smartphone,
  Megaphone,
  FileText,
  Star,
  Scissors,
  Wrench,
  ShoppingBag,
  ArrowRight,
  Check,
  X,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "WhatsApp Chatbots",
  description:
    "WhatsApp chatbots for South African businesses. Take bookings, orders and quote requests, answer questions and capture leads 24/7, and notify you when a customer needs a person.",
  keywords: [
    "WhatsApp chatbot South Africa",
    "WhatsApp automation for business",
    "WhatsApp booking bot",
    "WhatsApp ordering system",
    "WhatsApp Business API South Africa",
    "WhatsApp bot for small business",
    "automated WhatsApp replies",
    "WhatsApp lead capture",
    "Meta verified tech provider South Africa",
  ],
  openGraph: {
    title: "WhatsApp Chatbots | IZG Solutions",
    description:
      "Every message answered, even at 2am. WhatsApp chatbots that take bookings, orders and quote requests for your business.",
    url: "https://www.izgsolutions.co.za/whatsapp-chatbots",
  },
  alternates: {
    canonical: "https://www.izgsolutions.co.za/whatsapp-chatbots",
  },
};

/**
 * Media lives in /public/whatsapp-chatbots. Optional files are detected at
 * build time, so dropping a file in (and redeploying) is enough to switch it on:
 *   hero.mp4 / hero.webm   hero loop (hero.png is used as its poster)
 *   problem.png|jpg|webp   image for "The problem" section
 *   background.png|jpg|webp   backdrop for the closing call to action
 */
const MEDIA_DIR = "whatsapp-chatbots";

function findAsset(...names: string[]): string | null {
  for (const name of names) {
    if (fs.existsSync(path.join(process.cwd(), "public", MEDIA_DIR, name))) {
      return `/${MEDIA_DIR}/${name}`;
    }
  }
  return null;
}

const faqs = [
  {
    q: "How long does it take to go live?",
    a: "It depends mostly on Meta's verification and approval process for your WhatsApp Business account, which can take longer than the build itself. We give you a realistic timeline upfront, based on where your setup is today.",
  },
  {
    q: "Do I need the WhatsApp Business API?",
    a: "Yes, and we set it up for you. We are a Meta Verified Tech Provider, so we handle the API setup, the connection to your number and the go-live testing.",
  },
  {
    q: "What if a customer wants to speak to a person?",
    a: "The bot tells them someone will be in touch, and we email you their request so you or your team can follow up with them directly. The chat itself stays with the bot.",
  },
  {
    q: "What does it cost?",
    a: "There is a once-off build fee, plus a monthly hosting and operations plan, because your bot runs on our platform. Meta may also charge WhatsApp conversation fees depending on your message volume and type. Our pricing page has the details.",
  },
  {
    q: "Will it sound like a robot?",
    a: "Every conversation is written around your business, your services and your tone of voice, so customers get clear answers and simple choices instead of generic replies.",
  },
];

const features = [
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Customers pick a service and a time, and you get the booking. No phone tag, no double-booking.",
  },
  {
    icon: Utensils,
    title: "Orders",
    desc: "Browse the menu or catalogue, add to cart, give delivery details and confirm, all inside WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "FAQs and Lead Capture",
    desc: "Answer the questions you get every day and capture contact details. When a customer wants a person, you get an email to follow up.",
  },
  {
    icon: FileText,
    title: "Quote Requests",
    desc: "Customers describe the job, send photos and details, and you receive a complete request to price.",
  },
  {
    icon: Megaphone,
    title: "Promotions",
    desc: "Send approved promotional messages to your customers: new products, specials and announcements.",
  },
  {
    icon: Star,
    title: "Surveys and Feedback",
    desc: "Ask for feedback after a service and collect reviews while the experience is still fresh.",
  },
];

const useCases = [
  {
    icon: Scissors,
    title: "Salons and Clinics",
    desc: "Appointments booked and rebooked without anyone tied to the phone.",
  },
  {
    icon: Utensils,
    title: "Restaurants and Takeaways",
    desc: "Menus, orders and delivery details collected before the kitchen even looks up.",
  },
  {
    icon: Wrench,
    title: "Trades and Contractors",
    desc: "Quote requests with photos and job details, ready for you to price.",
  },
  {
    icon: ShoppingBag,
    title: "Shops and Retail",
    desc: "Product questions, delivery info and returns answered instantly.",
  },
];

export default function WhatsAppChatbotsPage() {
  const heroWebm = findAsset("hero.webm");
  const heroMp4 = findAsset("hero.mp4");
  const heroImage = findAsset("hero.png", "hero.jpg", "hero.webp");
  const problemImage = findAsset("problem.png", "problem.jpg", "problem.webp");
  const backgroundImage = findAsset(
    "background.png",
    "background.jpg",
    "background.webp"
  );

  const hasHeroVideo = Boolean(heroWebm || heroMp4);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "WhatsApp Chatbot Automation",
      description:
        "WhatsApp chatbots that take bookings, orders and quote requests, answer questions and capture leads 24/7, and notify the business when a customer needs a person.",
      provider: {
        "@type": "LocalBusiness",
        name: "IZG Solutions",
        url: "https://www.izgsolutions.co.za",
      },
      areaServed: { "@type": "Country", name: "South Africa" },
      serviceType: "WhatsApp Automation",
      url: "https://www.izgsolutions.co.za/whatsapp-chatbots",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding pt-32 overflow-hidden bg-gradient-to-br from-surface-950 via-surface-900 to-primary-950">
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary-400 text-sm font-medium uppercase tracking-widest mb-4">
                WhatsApp Chatbots
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Every message answered.
                <br />
                <span className="text-primary-400">Even at 2am.</span>
              </h1>
              <p className="text-lg text-surface-300 max-w-xl mb-8 leading-relaxed">
                Give your business a WhatsApp number that acts as a smart
                receptionist. It takes bookings and orders, answers questions
                and captures leads, so you don&apos;t have to be online 24/7.
              </p>
              <div className="inline-flex items-center gap-2 text-surface-300 text-sm border border-surface-700 rounded-full px-3 py-1.5 mb-8">
                <BadgeCheck size={16} className="text-primary-400" />
                Meta Verified Tech Provider
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink
                  href="/contact"
                  event="cta_click"
                  properties={{
                    button: "get_a_chatbot",
                    page: "/whatsapp-chatbots",
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Get Your Chatbot <ArrowRight size={18} />
                </TrackedLink>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 border border-surface-600 text-surface-200 px-6 py-3 rounded-lg font-medium hover:border-surface-400 hover:text-white transition-colors"
                >
                  See It In Action
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/30 aspect-video bg-surface-900">
                {hasHeroVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroImage ?? undefined}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {heroWebm && <source src={heroWebm} type="video/webm" />}
                    {heroMp4 && <source src={heroMp4} type="video/mp4" />}
                  </video>
                ) : (
                  heroImage && (
                    <Image
                      src={heroImage}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  )
                )}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  Illustration
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div
            className={
              problemImage
                ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                : ""
            }
          >
            <div>
              <AnimatedSection>
                <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                  Why Automate
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
                  Customers message when it suits them, not you.
                </h2>
                <p className="text-surface-500 text-lg mb-10 leading-relaxed max-w-2xl">
                  A slow reply often means a lost sale. Customers tend to go
                  with whichever business answers first.
                </p>
              </AnimatedSection>

              <div
                className={`grid grid-cols-1 gap-6 ${problemImage ? "" : "md:grid-cols-2"}`}
              >
                <AnimatedSection delay={0.1}>
                  <div className="h-full rounded-2xl border border-surface-100 bg-surface-50 p-6">
                    <h3 className="font-semibold text-surface-900 mb-4">
                      Without a chatbot
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Messages pile up after hours",
                        "The same questions, answered fifty times a day",
                        "Bookings and orders get lost in the chat",
                        "Leads move on to the competitor who replied",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-surface-600 text-sm"
                        >
                          <X
                            className="text-red-400 flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="h-full rounded-2xl border border-primary-200 bg-primary-50 p-6">
                    <h3 className="font-semibold text-surface-900 mb-4">
                      With a chatbot
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Every message gets an instant reply, day or night",
                        "Common questions handled automatically",
                        "Bookings, orders and quotes arrive complete",
                        "You only step in when a person is really needed",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-surface-700 text-sm"
                        >
                          <Check
                            className="text-primary-600 flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {problemImage && (
              <AnimatedSection delay={0.15}>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={problemImage}
                    alt="A stressed business owner buried in message notifications beside a relaxed owner whose chatbot handles the same messages"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="section-padding bg-surface-50 scroll-mt-20">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                See It In Action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
                Watch a chatbot do the work.
              </h2>
              <p className="text-surface-500 text-lg">
                Pick a scenario and watch how a conversation plays out, from the
                first hello to a confirmed booking, order or quote request.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ChatDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              What It Does
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              A receptionist that never clocks off.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
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

      {/* Use cases */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
              Built for businesses that live on WhatsApp.
            </h2>
            <p className="text-surface-500 max-w-2xl mb-14 text-lg">
              If your customers already message you, a chatbot makes sure none
              of those messages go cold.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, i) => (
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

          <AnimatedSection>
            <p className="text-surface-500 text-sm mt-8">
              Don&apos;t see your industry? If customers message you, we can
              build for it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-14">
              From first chat to live bot.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "We Talk",
                desc: "Tell us how customers contact you today and what you want the bot to handle.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "We design the conversation around your business and set up your WhatsApp Business API connection.",
              },
              {
                step: "03",
                title: "You Test",
                desc: "Try it yourself on your own phone, and we refine the flow until it feels right.",
              },
              {
                step: "04",
                title: "Go Live",
                desc: "Once Meta approves your account, your bot starts answering real customers.",
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

      {/* Pricing teaser */}
      <section className="section-padding bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="rounded-2xl border border-surface-100 bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                  Pricing
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-3">
                  Chatbots from R3,000 once-off.
                </h2>
                <p className="text-surface-500 leading-relaxed">
                  Plus a monthly hosting plan from R350, because your bot runs
                  on our platform. Meta WhatsApp conversation fees may apply
                  depending on your message volume.
                </p>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-primary-600 text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors shrink-0"
              >
                See full pricing <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
                Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-10">
                Good to know before you start.
              </h2>
            </AnimatedSection>

            <div className="divide-y divide-surface-100 border-y border-surface-100">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-surface-900 [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown
                      size={18}
                      className="text-surface-400 shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="text-surface-500 text-sm leading-relaxed mt-3 pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`relative overflow-hidden section-padding ${
          backgroundImage
            ? "bg-surface-950"
            : "bg-gradient-to-br from-primary-600 to-primary-800"
        }`}
      >
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/80 to-surface-950/20" />
          </>
        )}
        <div
          className={`container-narrow relative z-10 ${
            backgroundImage ? "" : "text-center"
          }`}
        >
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to stop missing messages?
            </h2>
            <p
              className={`text-lg mb-8 max-w-xl ${
                backgroundImage
                  ? "text-surface-300"
                  : "text-primary-100 mx-auto"
              }`}
            >
              Tell us how your customers reach you and we&apos;ll show you what
              a chatbot could handle. No pressure, no jargon.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              properties={{
                button: "get_a_chatbot",
                page: "/whatsapp-chatbots",
              }}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get Your Chatbot <ArrowRight size={18} />
            </TrackedLink>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
