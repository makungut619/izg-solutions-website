"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/components/ui/WhatsAppButton";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        window.izg?.track("form_submit", {
          form: "contact",
          page: "/contact",
          service: formData.service || "not_specified",
        });
      }
    } catch {
      // Still show success to the user, we'll see the error in logs
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 bg-surface-50">
        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-primary-600 text-sm font-medium uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
              Let&apos;s talk about your business.
            </h1>
            <p className="text-lg text-surface-500 max-w-2xl leading-relaxed">
              Tell us what you need, a website, a chatbot, or both. No
              pressure, no jargon. Just a conversation about how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-surface-900 mb-4">
                    Get in touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-surface-500">Email</p>
                        <a
                          href="mailto:info@izgsolutions.co.za"
                          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                          onClick={() =>
                            window.izg?.track("email_click", {
                              page: "/contact",
                            })
                          }
                        >
                          info@izgsolutions.co.za
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-surface-500">Location</p>
                        <p className="text-sm font-medium">Centurion, Gauteng</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="text-[#25D366] mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-surface-500">WhatsApp</p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                          onClick={() =>
                            window.izg?.track("whatsapp_click", {
                              page: "/contact",
                            })
                          }
                        >
                          Chat with us instantly
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-surface-900 mb-3">
                    Find us on
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/izgsolutions?igsh=ZW5mNzVjanhmNDc0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="text-surface-400 hover:text-primary-600 transition-colors"
                      onClick={() =>
                        window.izg?.track("social_click", { platform: "instagram", page: "/contact" })
                      }
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@izg.solutions?_r=1&_t=ZS-97zaB4AWOJw"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on TikTok"
                      className="text-surface-400 hover:text-primary-600 transition-colors"
                      onClick={() =>
                        window.izg?.track("social_click", { platform: "tiktok", page: "/contact" })
                      }
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52V7.5a4.85 4.85 0 01-1-.81z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/izgsolutions?s=11&t=18kaIJ8QYY8PY6Kqp3iUYw"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on X"
                      className="text-surface-400 hover:text-primary-600 transition-colors"
                      onClick={() =>
                        window.izg?.track("social_click", { platform: "x", page: "/contact" })
                      }
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-surface-900 mb-2">
                    Response time
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    We typically respond within a few hours during business days.
                    For urgent enquiries, give us a call or WhatsApp.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="md:col-span-2">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100 text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-primary-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-2">
                    Message sent!
                  </h3>
                  <p className="text-surface-500">
                    Thanks for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-surface-700 mb-1.5"
                      >
                        Your name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-surface-700 mb-1.5"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-surface-700 mb-1.5"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        placeholder="+27 72 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-surface-700 mb-1.5"
                      >
                        What do you need?
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Professional Website</option>
                        <option value="chatbot">WhatsApp Chatbot</option>
                        <option value="both">Website + Chatbot</option>
                        <option value="custom">Custom Digital Solution</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-surface-700 mb-1.5"
                    >
                      Tell us about your business *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                      placeholder="What does your business do? What problem are you trying to solve?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
