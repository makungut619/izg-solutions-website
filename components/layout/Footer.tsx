import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300 section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">IZG Solutions</h3>
            <p className="text-sm text-surface-400 leading-relaxed">
              Professional websites and WhatsApp automation for small and medium
              businesses. Your business, always on.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>makundat@gmail.com</li>
              <li>+27 72 362 8397</li>
              <li>Centurion, Gauteng</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-500">
          <span>&copy; {new Date().getFullYear()} IZG Solutions (Pty) Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
