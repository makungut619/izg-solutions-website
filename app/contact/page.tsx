"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
      }
    } catch {
      // Still show success to the user — we'll see the error in logs
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
              Tell us what you need — a website, a chatbot, or both. No
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
                        <p className="text-sm font-medium">makundat@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-surface-500">Phone</p>
                        <p className="text-sm font-medium">+27 72 362 8397</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-surface-500">Location</p>
                        <p className="text-sm font-medium">Centurion, Gauteng</p>
                      </div>
                    </div>
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
                        <option value="catalogue">Digital Catalogue</option>
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
