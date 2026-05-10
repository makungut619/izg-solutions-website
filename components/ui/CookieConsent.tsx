"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("izg-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("izg-cookie-consent", "accepted");
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem("izg-cookie-consent", "essential-only");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl bg-surface-900 rounded-2xl shadow-2xl border border-surface-700 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="text-primary-400" size={20} />
              </div>

              <div className="flex-grow">
                <h3 className="text-white font-semibold mb-2">
                  We use cookies
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed mb-4">
                  We use essential cookies to make our site work. With your
                  consent, we may also use analytics cookies to understand how
                  you interact with our site and improve our services. Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary-400 hover:text-primary-300 underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more details.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="px-5 py-2.5 bg-surface-700 text-surface-200 text-sm font-medium rounded-lg hover:bg-surface-600 transition-colors"
                  >
                    Essential Only
                  </button>
                </div>
              </div>

              <button
                onClick={acceptEssential}
                className="text-surface-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close cookie banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
