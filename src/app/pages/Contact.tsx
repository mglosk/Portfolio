import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { FadeIn } from "@/app/components/FadeIn";

import imgImage7 from "@/imports/Rabanne/c9f568503f2e6cc411908b2e6e5f6542def23f8b.png";
import imgImage6 from "@/imports/Rabanne/fa56e89f1bf1038d17164892a4fb54db40666cb0.png";
import imgImage4 from "@/imports/Rabanne/f6ffbace16024e414fd06158e80b941071de88ac.png";
import imgImage1 from "@/imports/Rabanne/f4dd0475aec72ae9ac3c2553b3365b69e16f5362.png";
import imgImage2 from "@/imports/Rabanne/1af27ee79489839dab2f10c6ca30b51db6c47eed.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf4]">
      {/* Hero */}
      <section className="bg-[#343a3e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.35em] uppercase text-[#d4af37] mb-5">
              {"Let's connect"}
            </p>
            <h1 className="font-['Mulish',sans-serif] font-black text-5xl md:text-7xl uppercase leading-none text-[#eee5d4]">
              Get in<br />
              <span className="text-[#d4af37]">Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Info */}
            <FadeIn>
              <p className="font-['Inter',sans-serif] text-lg text-[#343a3e]/70 leading-relaxed mb-12 max-w-md">
                {"I'm a UX designer specialising in luxury brand digital experiences. Whether you're building something new or rethinking an existing product, I'd love to hear about it."}
              </p>

              <div className="space-y-8">
                <div>
                  <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#d4af37] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@designer.com"
                    className="font-['Inter',sans-serif] text-lg text-[#343a3e] hover:text-[#d4af37] transition-colors duration-200"
                  >
                    hello@designer.com
                  </a>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#d4af37] mb-2">
                    Social
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "LinkedIn", href: "#" },
                      { label: "Behance", href: "#" },
                      { label: "Dribbble", href: "#" },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="group flex items-center gap-2 font-['Inter',sans-serif] text-base text-[#343a3e]/70 hover:text-[#343a3e] transition-colors duration-200"
                      >
                        {label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#d4af37] mb-2">
                    Location
                  </p>
                  <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/70">
                    Paris, France — Open to remote worldwide
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.15}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start justify-center h-full gap-6"
                >
                  <div className="w-12 h-px bg-[#d4af37]" />
                  <h3 className="font-['Mulish',sans-serif] font-bold text-3xl uppercase text-[#1c1f23]">
                    Message received.
                  </h3>
                  <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/60 leading-relaxed max-w-sm">
                    Thank you for reaching out. I'll get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#343a3e]/50 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-[#343a3e]/20 focus:border-[#d4af37] outline-none py-3 font-['Inter',sans-serif] text-base text-[#343a3e] transition-colors duration-300 placeholder:text-[#343a3e]/30"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#343a3e]/50 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-[#343a3e]/20 focus:border-[#d4af37] outline-none py-3 font-['Inter',sans-serif] text-base text-[#343a3e] transition-colors duration-300 placeholder:text-[#343a3e]/30"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.25em] uppercase text-[#343a3e]/50 mb-3">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-[#343a3e]/20 focus:border-[#d4af37] outline-none py-3 font-['Inter',sans-serif] text-base text-[#343a3e] transition-colors duration-300 placeholder:text-[#343a3e]/30 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-3 bg-[#343a3e] text-[#eee5d4] px-10 py-4 font-['Barlow_Condensed',sans-serif] font-semibold text-sm tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#1c1f23] transition-colors duration-300"
                  >
                    Send Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="overflow-hidden">
        <div className="flex h-48">
          {[imgImage7, imgImage6, imgImage4, imgImage1, imgImage2].map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
