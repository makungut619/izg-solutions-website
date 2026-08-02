import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center section-padding pt-32 bg-gradient-to-br from-surface-950 via-surface-900 to-primary-950">
      <div className="container-narrow relative z-10 text-center">
        <p className="text-primary-400 text-sm font-medium uppercase tracking-widest mb-4">
          Page Not Found
        </p>
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-6">
          4<span className="text-primary-400">0</span>4
        </h1>
        <p className="text-lg md:text-xl text-surface-300 max-w-lg mx-auto mb-10 leading-relaxed">
          Looks like this page went offline. Don&apos;t worry, your business
          doesn&apos;t have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-surface-600 text-surface-200 px-6 py-3 rounded-lg font-medium hover:border-surface-400 hover:text-white transition-colors"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
