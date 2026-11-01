"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCheck, RotateCcw } from "lucide-react";

/**
 * Scripted (non-interactive) WhatsApp-style conversation player.
 * Visitors pick a scenario and watch it play out. Nothing here talks to a
 * real bot, so every conversation is labelled as an example.
 */

type Message =
  | { from: "bot"; text: string; options?: string[] }
  | { from: "user"; text: string }
  | { from: "system"; text: string };

interface Scenario {
  id: string;
  label: string;
  blurb: string;
  business: string;
  messages: Message[];
}

const scenarios: Scenario[] = [
  {
    id: "booking",
    label: "Appointment booking",
    blurb: "Salons, clinics and studios",
    business: "Glow Studio",
    messages: [
      {
        from: "bot",
        text: "Hi! Welcome to Glow Studio. How can I help today?",
        options: ["Book appointment", "Prices", "Opening hours"],
      },
      { from: "user", text: "Book appointment" },
      {
        from: "bot",
        text: "Great! Which service would you like?",
        options: ["Haircut & style", "Manicure", "Facial"],
      },
      { from: "user", text: "Manicure" },
      {
        from: "bot",
        text: "Which day works for you?",
        options: ["Friday", "Saturday", "Monday"],
      },
      { from: "user", text: "Saturday" },
      {
        from: "bot",
        text: "Saturday slots are open at:",
        options: ["09:00", "11:30", "14:00"],
      },
      { from: "user", text: "11:30" },
      {
        from: "bot",
        text: "You're booked ✅ Manicure, Saturday at 11:30. We'll send a reminder the day before.",
      },
    ],
  },
  {
    id: "ordering",
    label: "Food ordering",
    blurb: "Restaurants and takeaways",
    business: "Spice Route Kitchen",
    messages: [
      {
        from: "bot",
        text: "Welcome to Spice Route Kitchen! What would you like to order?",
        options: ["Chicken Curry R85", "Veg Biryani R75", "Lamb Roti R95"],
      },
      { from: "user", text: "Chicken Curry" },
      {
        from: "bot",
        text: "Added: Chicken Curry (R85). Anything else?",
        options: ["Add a drink", "Checkout"],
      },
      { from: "user", text: "Checkout" },
      {
        from: "bot",
        text: "Delivery or collection?",
        options: ["Delivery", "Collection"],
      },
      { from: "user", text: "Delivery" },
      { from: "bot", text: "Please share your delivery address." },
      { from: "user", text: "12 Jacaranda Street, Centurion" },
      {
        from: "bot",
        text: "Order confirmed ✅ Your food will arrive in about 35 minutes.",
      },
    ],
  },
  {
    id: "quote",
    label: "Quote requests",
    blurb: "Trades and contractors",
    business: "Reliable Electrical",
    messages: [
      {
        from: "bot",
        text: "Hi, thanks for contacting Reliable Electrical. What do you need a quote for?",
        options: ["Wiring repair", "New installation", "Emergency call-out"],
      },
      { from: "user", text: "New installation" },
      {
        from: "bot",
        text: "Got it. Please describe the job in a sentence or two.",
      },
      { from: "user", text: "6 plug points and lights in a new garage" },
      { from: "bot", text: "Thanks. Can you send a photo of the space?" },
      { from: "user", text: "📷 Photo sent" },
      { from: "bot", text: "Perfect. Which area is the property in?" },
      { from: "user", text: "Centurion" },
      {
        from: "bot",
        text: "Thanks! Your request is with our team. Expect your quote within 24 hours.",
      },
    ],
  },
  {
    id: "support",
    label: "FAQs and follow-up requests",
    blurb: "Shops and service businesses",
    business: "Urban Threads",
    messages: [
      { from: "user", text: "Hi, do you deliver to Pretoria?" },
      {
        from: "bot",
        text: "Yes! We deliver nationwide. Pretoria orders arrive in 2 to 3 working days.",
      },
      { from: "user", text: "What's your return policy?" },
      {
        from: "bot",
        text: "Returns are free within 14 days with proof of purchase. Want me to start a return?",
        options: ["Start a return", "Speak to someone"],
      },
      { from: "user", text: "Speak to someone" },
      {
        from: "bot",
        text: "Of course. I've let the team know, and they'll get in touch with you on this number.",
      },
      { from: "system", text: "Request sent to the team" },
    ],
  },
];

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2.5 shadow-sm flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-surface-400 animate-bounce motion-reduce:animate-none"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function Bubble({ message }: { message: Message }) {
  if (message.from === "system") {
    return (
      <div className="flex justify-center">
        <span className="bg-[#fdf4c4] text-surface-600 text-[10px] px-2.5 py-1 rounded-md shadow-sm">
          {message.text}
        </span>
      </div>
    );
  }

  if (message.from === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-[#d9fdd3] text-surface-900 text-[13px] leading-snug rounded-lg rounded-tr-none px-3 py-2 shadow-sm max-w-[80%]">
          {message.text}
          <CheckCheck
            size={14}
            className="inline-block ml-1.5 -mb-0.5 text-[#53bdeb]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1.5">
      <div className="bg-white text-surface-900 text-[13px] leading-snug rounded-lg rounded-tl-none px-3 py-2 shadow-sm max-w-[85%]">
        {message.text}
      </div>
      {message.options && (
        <div className="flex flex-wrap gap-1.5 max-w-[90%]">
          {message.options.map((option) => (
            <span
              key={option}
              className="bg-white text-[#0a7cff] text-[12px] font-medium rounded-full px-3 py-1 shadow-sm"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatDemo() {
  const [active, setActive] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  const phoneRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(phoneRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const scenario = scenarios[active];
  const { messages } = scenario;

  // Play the script with timers. Restarts on scenario change or replay.
  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setShown(messages.length);
      setTyping(false);
      setDone(true);
      return;
    }

    setShown(0);
    setTyping(false);
    setDone(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 700;

    messages.forEach((message, i) => {
      if (message.from === "bot") {
        timers.push(setTimeout(() => setTyping(true), t));
        t += Math.min(1800, 600 + message.text.length * 16);
        timers.push(
          setTimeout(() => {
            setTyping(false);
            setShown(i + 1);
          }, t)
        );
        t += 900;
      } else if (message.from === "user") {
        t += 300;
        timers.push(setTimeout(() => setShown(i + 1), t));
        t += 700;
      } else {
        timers.push(setTimeout(() => setShown(i + 1), t));
        t += 500;
      }
    });

    timers.push(setTimeout(() => setDone(true), t));

    return () => timers.forEach(clearTimeout);
  }, [inView, active, runKey, messages, reduceMotion]);

  // Keep the newest message in view without scrolling the page itself.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [shown, typing, reduceMotion]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-center">
      {/* Scenario picker */}
      <div>
        <div className="space-y-3" role="group" aria-label="Choose an example">
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={active === i}
              onClick={() => {
                setActive(i);
                window.izg?.track("chat_demo_switch", { scenario: s.id });
              }}
              className={`w-full text-left rounded-xl border px-5 py-4 transition-colors ${
                active === i
                  ? "border-primary-300 bg-primary-50"
                  : "border-surface-200 bg-white hover:border-primary-200"
              }`}
            >
              <span
                className={`block font-semibold ${
                  active === i ? "text-primary-700" : "text-surface-800"
                }`}
              >
                {s.label}
              </span>
              <span className="block text-sm text-surface-500 mt-0.5">
                {s.blurb}
              </span>
            </button>
          ))}
        </div>

        <p className="text-surface-400 text-xs mt-6 max-w-sm">
          Example conversations, not a live chat. Every bot we build is
          configured around your own business, services and tone.
        </p>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center">
        <div
          ref={phoneRef}
          className="relative w-[300px] max-w-full h-[600px] rounded-[42px] bg-surface-900 p-3 shadow-2xl shadow-primary-900/20"
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-surface-900 rounded-b-2xl z-20" />

          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#efeae2] flex flex-col">
            {/* Header */}
            <div className="bg-[#075e54] text-white px-4 pt-8 pb-3 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                {scenario.business.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight truncate">
                  {scenario.business}
                </p>
                <p className="text-[11px] text-white/70 leading-tight">
                  {typing ? "typing..." : "online"}
                </p>
              </div>
            </div>

            {/* Messages (decorative; full transcript below for screen readers) */}
            <div
              ref={scrollRef}
              aria-hidden="true"
              className="flex-1 overflow-hidden px-3 py-4 space-y-2.5"
            >
              {messages.slice(0, shown).map((message, i) => (
                <motion.div
                  key={`${scenario.id}-${runKey}-${i}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Bubble message={message} />
                </motion.div>
              ))}
              {typing && <TypingIndicator />}
            </div>

            {/* Fake input bar */}
            <div
              aria-hidden="true"
              className="bg-[#f0f2f5] px-3 py-2.5 shrink-0"
            >
              <div className="bg-white rounded-full px-4 py-2 text-[12px] text-surface-400">
                Message
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 mt-4 flex items-center">
          {done && !reduceMotion ? (
            <button
              type="button"
              onClick={() => setRunKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              <RotateCcw size={14} /> Replay
            </button>
          ) : (
            <span className="text-xs text-surface-400">
              Example conversation
            </span>
          )}
        </div>
      </div>

      {/* Static transcript for assistive tech */}
      <ol className="sr-only">
        {messages.map((message, i) => (
          <li key={i}>
            {message.from === "user"
              ? "Customer"
              : message.from === "bot"
                ? scenario.business
                : "Note"}
            : {message.text}
            {message.from === "bot" && message.options
              ? ` Options: ${message.options.join(", ")}.`
              : ""}
          </li>
        ))}
      </ol>
    </div>
  );
}
