"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Director {
  name: string;
  role: string;
  slug: string;
  walletImage: string;
}

const directors: Director[] = [
  {
    name: "Sandile Thabede",
    role: "Chief Growth Officer",
    slug: "sandile-thabede",
    walletImage: "/digital-cards/sandile-wallet.png",
  },
  {
    name: "Mpho Makgamatha",
    role: "Chief Revenue Officer",
    slug: "mpho-makgamatha",
    walletImage: "/digital-cards/mpho-wallet.png",
  },
  {
    name: "Makungu Kunda",
    role: "Chief Technology Officer",
    slug: "makungu-kunda",
    walletImage: "/digital-cards/makungu-wallet.png",
  },
];

const BASE = "https://cards.izgsolutions.co.za/izg-solutions";

// The card pages center a max-width 420px card in the viewport. We render each
// iframe at that card width so the card fills the frame edge-to-edge (matching
// the static wallet screenshot), then scale it down to the inner screen width.
const IFRAME_W = 420;
const IFRAME_H = 900;
const SCALE = 0.595; // 250px inner frame / 420px card width

const PHONE_SHELL =
  "relative w-[274px] max-w-full h-[566px] rounded-[42px] bg-surface-900 p-3 shadow-2xl shadow-primary-900/20";
const PHONE_SCREEN =
  "relative w-full h-full rounded-[32px] overflow-hidden bg-white";

function StepCaption({ label, caption }: { label: string; caption: string }) {
  return (
    <>
      <span className="mt-4 text-sm font-semibold text-surface-800">
        {label}
      </span>
      <span className="text-xs text-surface-400 mt-0.5">{caption}</span>
    </>
  );
}

/** Phone 1: static wallet screenshot (not clickable, no wallet URL in source).
    Sits on the same light-grey backdrop as the live card pages and is centered
    so it matches phones 2 & 3 exactly. */
function WalletPhone({ director }: { director: Director }) {
  return (
    <div className="flex flex-col items-center">
      <div className={PHONE_SHELL}>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-surface-900 rounded-b-2xl z-20" />
        <div className={`${PHONE_SCREEN} bg-[#e8e8e8] flex items-center justify-center`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={director.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full px-4 py-6"
            >
              <Image
                src={director.walletImage}
                alt={`${director.name}'s card being added to a phone wallet`}
                width={420}
                height={680}
                sizes="274px"
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <StepCaption label="1. Add to wallet" caption="You save your card" />
    </div>
  );
}

/** Phones 2 & 3: live iframe of the real card. */
function IframePhone({
  src,
  title,
  label,
  caption,
}: {
  src: string;
  title: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={PHONE_SHELL}>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-surface-900 rounded-b-2xl z-20" />
        <div className={PHONE_SCREEN}>
          <AnimatePresence mode="wait">
            <motion.iframe
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={src}
              title={title}
              loading="lazy"
              scrolling="no"
              style={{
                width: `${IFRAME_W}px`,
                height: `${IFRAME_H}px`,
                transform: `scale(${SCALE})`,
                transformOrigin: "top left",
              }}
              className="absolute top-0 left-0 border-0"
            />
          </AnimatePresence>
        </div>
      </div>
      <StepCaption label={label} caption={caption} />
    </div>
  );
}

function Connector() {
  return (
    <div className="flex xl:flex-col items-center justify-center text-primary-400 shrink-0 py-2 xl:py-0 xl:px-1">
      <ArrowRight size={26} className="rotate-90 xl:rotate-0" />
    </div>
  );
}

export default function CardDemo() {
  const [active, setActive] = useState(0);
  const current = directors[active];

  return (
    <div className="flex flex-col items-center">
      {/* Director selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {directors.map((d, i) => (
          <button
            key={d.slug}
            onClick={() => {
              setActive(i);
              window.izg?.track("card_demo_switch", { director: d.slug });
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === i
                ? "bg-primary-600 text-white"
                : "bg-white text-surface-600 border border-surface-200 hover:border-primary-300"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Full lifecycle: wallet (static) -> card -> preview */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
        <WalletPhone director={current} />
        <Connector />
        <IframePhone
          src={`${BASE}/${current.slug}/card`}
          title={`${current.name} digital card with QR code`}
          label="2. Show your card"
          caption="You share the QR"
        />
        <Connector />
        <IframePhone
          src={`${BASE}/${current.slug}/preview`}
          title={`${current.name} saved contact preview`}
          label="3. Contact saved"
          caption="They save you"
        />
      </div>

      {/* Caption */}
      <p className="text-surface-500 text-sm mt-10 text-center max-w-lg">
        Save your card to your phone wallet, show the QR to anyone, and they
        save your contact in one scan. These are real, live cards. No app, no
        sign-up.
      </p>
      <a
        href={`${BASE}/${current.slug}/preview`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.izg?.track("card_demo_open", { director: current.slug })
        }
        className="text-primary-600 text-sm font-medium mt-3 hover:text-primary-700 transition-colors"
      >
        Open {current.name.split(" ")[0]}&apos;s card in a new tab &rarr;
      </a>
    </div>
  );
}
