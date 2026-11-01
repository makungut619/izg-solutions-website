"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import type { ChatbotWork } from "@/app/work/projects";

export default function ChatbotsShowcase({ bot }: { bot: ChatbotWork }) {
  return (
    <div className="group rounded-2xl border border-surface-100 bg-white overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Copy */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <MessageCircle className="text-primary-600" size={16} />
            </div>
            <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
              WhatsApp Chatbot
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-surface-900 mb-2">
            {bot.name}
          </h3>
          <p className="text-sm text-surface-400 mb-3">{bot.industry}</p>

          <p className="text-lg text-surface-700 font-medium leading-snug mb-2">
            {bot.result}
          </p>
          <p className="text-surface-500 text-sm leading-relaxed mb-5">
            {bot.description}
          </p>

          <Link
            href="/whatsapp-chatbots"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            onClick={() =>
              window.izg?.track("work_visit_click", { project: bot.slug })
            }
          >
            See WhatsApp chatbots <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Conversation, in order. Scrolls sideways on small screens. */}
        <div className="lg:w-3/5 bg-surface-50 py-8 px-5">
          <ol className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:justify-center pb-2 lg:pb-0">
            {bot.screens.map((screen) => (
              <li
                key={screen.image}
                className="snap-center shrink-0 w-[62%] sm:w-[40%] lg:w-0 lg:flex-1 lg:min-w-0"
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-md"
                  style={{ backgroundColor: bot.accent }}
                >
                  <Image
                    src={screen.image}
                    alt={screen.alt}
                    width={1024}
                    height={1536}
                    sizes="(min-width: 1024px) 220px, 62vw"
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-3 text-center text-xs font-medium text-surface-500">
                  {screen.label}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
