"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard, ArrowUpRight } from "lucide-react";
import { digitalCards } from "@/app/work/projects";

export default function DigitalCardsShowcase() {
  // Duplicate the list so the marquee can loop seamlessly.
  const track = [...digitalCards, ...digitalCards];

  return (
    <div className="group rounded-2xl border border-surface-100 bg-white overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Copy */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <CreditCard className="text-primary-600" size={16} />
            </div>
            <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
              Digital Cards
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-surface-900 mb-2">
            Digital Business Cards
          </h3>
          <p className="text-sm text-surface-400 mb-3">
            Teams &amp; professionals
          </p>

          <p className="text-lg text-surface-700 font-medium leading-snug mb-2">
            One scan to share contact details, always current, never reprinted.
          </p>
          <p className="text-surface-500 text-sm leading-relaxed mb-5">
            We&apos;ve built branded digital cards for whole teams across law,
            consulting and more. Each one is custom-styled, wallet-ready, and
            editable anytime.
          </p>

          <Link
            href="/digital-cards"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            onClick={() =>
              window.izg?.track("work_visit_click", { project: "digital-cards" })
            }
          >
            See digital cards <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Marquee of card mockups */}
        <div className="lg:w-3/5 relative overflow-hidden bg-surface-50 py-8">
          <div className="flex w-max gap-5 px-5 animate-cards-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {track.map((card, i) => (
              <div
                key={`${card.slug}-${i}`}
                className="relative w-28 md:w-32 aspect-[9/19] shrink-0 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={card.image}
                  alt={`${card.name} — digital business card by IZG Solutions`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-surface-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-surface-50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
