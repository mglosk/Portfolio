import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

import imgHeroSphere       from "@/imports/GreensawanCaseStudy-2/hero-sphere.png";
import imgExpertIllust     from "@/imports/GreensawanCaseStudy-2/expert-illustration.png";
import imgCloud            from "@/imports/GreensawanCaseStudy-2/cloud.png";
import imgBenchmarkCanva   from "@/imports/GreensawanCaseStudy-2/benchmark-canva.png";
import imgBenchmarkScreen  from "@/imports/GreensawanCaseStudy-2/benchmark-screen.png";
import imgBenchmarkGuided  from "@/imports/GreensawanCaseStudy-2/benchmark-guided.png";
import imgUiExp1           from "@/imports/GreensawanCaseStudy-2/ui-exp-1.png";
import imgUiExp2           from "@/imports/GreensawanCaseStudy-2/ui-exp-2.png";
import imgUiExp3           from "@/imports/GreensawanCaseStudy-2/ui-exp-3.png";
import imgJourney1         from "@/imports/GreensawanCaseStudy-2/journey-1.png";
import imgJourney2         from "@/imports/GreensawanCaseStudy-2/journey-2.png";
import imgJourney3         from "@/imports/GreensawanCaseStudy-2/journey-3.png";
import imgJourney4         from "@/imports/GreensawanCaseStudy-2/journey-4.png";
import imgPrototypeGif     from "@/imports/GreensawanCaseStudy-2/prototype-screen.gif";
import imgNextRabanne      from "@/imports/GreensawanCaseStudy-2/image-9.png";
import imgNextImpossible   from "@/imports/GreensawanCaseStudy-2/image-38.png";

/* ─────────────────────────────────────────────────────────────
   Animation constants  (shared across the site)
───────────────────────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

const listContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const listItem = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const cardContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardItem = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const TEAL = "#0e5f61";
const DARK = "#092626";
const GOLD = "#d4af37";

/* ─────────────────────────────────────────────────────────────
   Shared heading helper
───────────────────────────────────────────────────────────── */
function SectionH2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease, delay: 0.06 }}
      className={`font-['Mulish',sans-serif] font-bold text-[clamp(32px,4vw,48px)] leading-[1.1] uppercase ${light ? "text-white" : "text-[#151515]"}`}
    >
      {children}
    </motion.h2>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────── */
export default function GreensawanCaseStudy() {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState("work-background");

  /* Scroll-spy for process bar */
  useEffect(() => {
    const ids = ["work-background", "work-research", "work-ideation", "work-production", "work-delivery"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActivePhase(id); },
        { rootMargin: "-25% 0px -65% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const phases = [
    { id: "work-background", n: "01", label: "Background" },
    { id: "work-research",   n: "02", label: "Research"   },
    { id: "work-ideation",   n: "03", label: "Ideation"   },
    { id: "work-production", n: "04", label: "Production" },
    { id: "work-delivery",   n: "05", label: "Delivery"   },
  ] as const;

  const activeIdx = phases.findIndex((p) => p.id === activePhase);

  return (
    <div className="min-h-screen bg-[#f3f3f3]">

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#f3f3f3]" style={{ height: "clamp(480px, 56vw, 680px)" }}>

        {/* Left — bottom-anchored text */}
        <div className="absolute bottom-0 left-0 z-10 flex flex-col justify-end px-10 pb-16 w-full lg:w-[42%]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="font-['Mulish',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#092626]"
              >
                AI Tooling
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2, ease }}
                  className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#092626]"
                >
                  GreenSwan.ai
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
              className="flex flex-wrap gap-4"
            >
              {["Research", "Wireframing", "Prototyping", "Design System"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.75 + i * 0.07, ease }}
                  className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase border border-[#0e5f61] text-[#0e5f61] px-[18px] py-[10px]"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right — sphere bleeds off all edges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
          className="hidden lg:block absolute"
          style={{
            width: "70%",
            right: "-12%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={imgHeroSphere}
            alt="GreenSwan AI"
            className="w-full object-contain"
          />
        </motion.div>
      </section>

      {/* ══ PROCESS BAR ═══════════════════════════════════════════════════ */}
      <div className="sticky top-20 z-30 overflow-x-auto" style={{ backgroundColor: "#343a3e" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex min-w-max">
            {phases.map(({ id, n, label }, i) => {
              const isActive = activePhase === id;
              const isPast   = activeIdx > i;
              return (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 136, behavior: "smooth" });
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-[18px] transition-colors duration-300 focus-visible:outline-none border-r border-[rgba(238,229,212,0.1)] last:border-r-0 ${
                    isActive ? "bg-[rgba(212,175,55,0.08)]" : "hover:bg-[rgba(238,229,212,0.05)]"
                  }`}
                >
                  {/* active top bar */}
                  <span
                    className="absolute inset-x-0 top-0 h-[2px] transition-all duration-500"
                    style={{ backgroundColor: isActive ? GOLD : isPast ? "rgba(212,175,55,0.2)" : "transparent" }}
                  />
                  {/* dot */}
                  <span
                    className="w-[6px] h-[6px] rounded-full flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? GOLD : isPast ? "rgba(212,175,55,0.4)" : "rgba(238,229,212,0.2)",
                      transform: isActive ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                  <span
                    className="font-['Mulish',sans-serif] text-[10px] tracking-[2px] transition-colors duration-300"
                    style={{ color: isActive ? GOLD : "rgba(212,175,55,0.35)" }}
                  >
                    {n}
                  </span>
                  <span
                    className="font-['Mulish',sans-serif] text-[11px] font-bold tracking-[1.8px] uppercase transition-colors duration-300"
                    style={{
                      color: isActive ? "#eee5d4" : isPast ? "rgba(238,229,212,0.4)" : "rgba(238,229,212,0.3)",
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ INTRODUCTION ══════════════════════════════════════════════════ */}
      <section id="work-background" className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-start">

            {/* Sticky left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="lg:sticky lg:top-20 py-16 w-full lg:w-[44%] flex-shrink-0 flex flex-col gap-8"
            >
              <SectionH2>Introduction</SectionH2>
              <div className="flex flex-col gap-5">
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  GreenSwan AI was developing a new product to help scientists generate, customize, and review AI-assisted research reports.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  The product was part of a larger business pivot. As AI began reshaping the scientific research industry, GreenSwan needed a tool that could make advanced report generation feel accessible, credible, and useful for expert users.
                </p>
              </div>
            </motion.div>

            {/* Right — illustration */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
              className="hidden lg:block flex-1 py-16 relative"
            >
              {/* Cloud floats above */}
              <motion.img
                src={imgCloud}
                alt=""
                aria-hidden="true"
                className="absolute top-8 right-8 w-24 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <img
                src={imgExpertIllust}
                alt="Scientist working on research"
                className="w-full object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ THE CHALLENGE ═════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease }}
              className="lg:w-[42%] flex-shrink-0 flex flex-col gap-6"
            >
              <SectionH2>The Challenge</SectionH2>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  GreenSwan AI needed to launch a new product in a fast-moving AI market. The tool had to help scientists create customizable research reports, but the experience needed to feel approachable for users who may not be familiar with AI software or template-based creation tools.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  The challenge was to make a complex workflow feel simple, credible, and usable while preserving brand identity and moving quickly enough to support the launch.
                </p>
              </div>
            </motion.div>

            {/* Right — problems */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="font-['Mulish',sans-serif] font-bold text-[11px] uppercase tracking-[2.5px] text-[#0e5f61] mb-8"
              >
                Key problems
              </motion.p>
              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                className="flex flex-col gap-7"
              >
                {[
                  "Brand new product category — no existing patterns to follow",
                  "Target users (scientists) unfamiliar with AI-powered software",
                  "Had to stay relevant in a fast-moving AI landscape",
                  "Extremely tight timeline (2 months) to design and ship",
                  "Balance usability for non-technical users with brand integrity",
                ].map((text, i) => (
                  <motion.div key={i} variants={listItem} className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-['Mulish',sans-serif] font-bold text-[15px]"
                      style={{ backgroundColor: TEAL }}
                    >
                      {i + 1}
                    </div>
                    <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)] pt-1">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GOALS — 3 connected problems ══════════════════════════════════ */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <SectionH2>The design had to solve for three connected problems</SectionH2>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            {[
              { bg: "#ff6c02", title: "Strategic relevance",       body: "Help GreenSwan respond to AI-driven shifts in the scientific research industry." },
              { bg: "#c1d5cf", title: "Usable AI workflow",        body: "Create a clear interface for users unfamiliar with AI report-generation tools." },
              { bg: "#e6e4de", title: "Launch-ready experience",   body: "Design a polished, credible product direction to support GreenSwan's new vision." },
            ].map(({ bg, title, body }) => (
              <motion.div key={title} variants={cardItem} className="flex-1">
                <div className="flex flex-col justify-between px-6 py-8 h-full min-h-[280px]" style={{ backgroundColor: bg }}>
                  <p className="font-['Mulish',sans-serif] font-bold text-[20px] uppercase leading-tight text-black">{title}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] text-[15px] font-medium leading-[1.5] text-black/75">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 02 — MY APPROACH ══════════════════════════════════════════════ */}
      <section id="work-research" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <SectionH2>My Approach</SectionH2>
          </motion.div>

          <div className="max-w-[700px] flex flex-col gap-5 mb-10">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              My approach was to simplify a complex AI-enabled workflow into a product experience that felt familiar, structured, and easy to act on.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              I focused on three questions:
            </p>
          </div>

          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex flex-col gap-6 max-w-3xl mb-10"
          >
            {[
              "How should users move from report setup to customization to output?",
              "What interaction patterns would make AI-assisted report creation feel understandable?",
              "How could the product feel credible for scientific users while carrying the GreenSwan brand?",
            ].map((q, i) => (
              <motion.div key={i} variants={listItem} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-white font-['Mulish',sans-serif] font-bold text-[11px]" style={{ backgroundColor: TEAL }}>{i + 1}</span>
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">{q}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-4">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              To make the product feel approachable, I structured the experience around a familiar creation flow: start with a report goal, choose a template, add relevant inputs, customize the output, and review the generated report before export.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              This helped turn an open-ended AI capability into a guided workflow with clear user control.
            </p>
          </div>
        </div>
      </section>

      {/* ══ BENCHMARKING ══════════════════════════════════════════════════ */}
      <section className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-start">

            {/* Sticky left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="lg:sticky lg:top-20 py-16 w-full lg:w-[40%] flex-shrink-0 flex flex-col gap-8"
            >
              <SectionH2>Benchmarking creation tools</SectionH2>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  Because GreenSwan was creating a new type of AI research tool, I looked beyond direct competitors. I benchmarked template-based and no-code creation tools such as Canva, Adobe Express, and Adobe Firefly to understand how users customize complex outputs without starting from scratch.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                  This helped me identify interaction patterns that could translate into the GreenSwan experience: guided setup, template selection, editable outputs, preview states, and clear next steps.
                </p>
              </div>
            </motion.div>

            {/* Right — benchmark image grid matching Figma */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="hidden lg:flex flex-1 py-16 flex-col gap-8"
            >
              {/* Row 1: two screenshots side by side */}
              <motion.div variants={cardItem} className="flex gap-4 items-start">
                <img src={imgBenchmarkCanva} alt="Canva template selection" className="flex-1 min-w-0 object-cover" />
                <img src={imgBenchmarkScreen} alt="Adobe Express benchmark" className="flex-1 min-w-0 object-cover" />
              </motion.div>

              {/* Row 2: label + full-width guided creation screenshot */}
              <motion.div variants={cardItem} className="flex flex-col gap-3">
                <p className="font-['Mulish',sans-serif] text-[11px] font-medium uppercase tracking-[2.2px] text-[rgba(52,58,62,0.5)]">Guided creation</p>
                <img src={imgBenchmarkGuided} alt="Guided creation flow patterns" className="w-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ STRATEGIC INSIGHTS ════════════════════════════════════════════ */}
      <section className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="lg:sticky lg:top-20 py-16 w-full lg:w-[40%] flex-shrink-0 flex flex-col gap-8"
            >
              <SectionH2>Strategic Insights</SectionH2>
              <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
                Usability was the top priority, and time was extremely short. Looking at proven UX patterns in adjacent industries let me move quickly without reinventing the wheel.
              </p>
            </motion.div>

            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex-1 py-16 flex flex-col gap-4"
            >
              {[
                { n: "1", title: "AI workflows need visible structure",     body: "Users should always understand where they are, what the AI needs, and what happens next." },
                { n: "2", title: "Expert users still need simplicity",      body: "Scientific users may be highly knowledgeable, but that does not mean they want a complicated interface." },
                { n: "3", title: "Familiar patterns reduce friction",       body: "Template-based tools offered useful patterns for helping users customize complex outputs quickly." },
                { n: "4", title: "Trust matters more than novelty",         body: "For a scientific audience, the interface needed to feel credible and professional — not just futuristic." },
              ].map(({ n, title, body }) => (
                <motion.div key={n} variants={cardItem} className="border border-[#4c657e] px-6 py-7 flex flex-col gap-3 text-[#656663]">
                  <p className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase tracking-[-0.04em]">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[16px] leading-[1.2]">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[1.4]">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 03 — RAPID UI EXPLORATION ═════════════════════════════════════ */}
      <section id="work-ideation" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <SectionH2>Rapid UI Exploration</SectionH2>
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-4 mb-10">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              With only two months to define the product direction, I used a lean design process. Instead of separate wireframe rounds, I moved directly into structured UI exploration so the team could evaluate layout, hierarchy, interaction patterns, and brand expression simultaneously.
            </p>
          </div>

          {/* Static exploration screens */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          >
            {[imgUiExp1, imgUiExp2, imgUiExp3].map((src, i) => (
              <motion.img key={i} variants={cardItem} src={src} alt={`UI exploration ${i + 1}`} className="w-full object-cover" />
            ))}
          </motion.div>

          {/* Why this worked */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-['Mulish',sans-serif] font-bold text-[11px] uppercase tracking-[2px] text-[#0e5f61] mb-4">Why this worked</p>
            <div className="flex flex-col gap-3">
              {[
                "Benchmarking gave me enough UX direction to move confidently",
                "Client needed to see visual design quickly to approve direction",
                "Faster high-fidelity iteration meant stakeholder validation sooner",
                "The template-based approach had clear existing patterns to follow",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0e5f61] flex-shrink-0 mt-2" />
                  <p className="font-['Helvetica_Neue',sans-serif] text-[15px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ DESIGNING FOR UNFAMILIAR WORKFLOWS ════════════════════════════ */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <SectionH2>Designing for unfamiliar workflows</SectionH2>
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-4 mb-10">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              Because AI-assisted report generation was a new workflow for many users, the interface needed to borrow from familiar patterns. I focused on reducing ambiguity: clear steps, recognizable templates, visible customization options, and a logical path from input to generated report.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              The goal was not to make the AI feel magical. It was to make the workflow feel understandable.
            </p>
          </div>

          {/* Flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center flex-wrap gap-3 mb-8"
          >
            {["Create report", "Choose template", "Add inputs", "Customize sections", "Generate draft", "Review & edit", "Export"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-2 text-white font-['Mulish',sans-serif] font-bold text-[11px] uppercase tracking-wider" style={{ backgroundColor: TEAL }}>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </motion.div>

          {/* Journey screens */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[imgJourney1, imgJourney2, imgJourney3, imgJourney4].map((src, i) => (
              <motion.img key={i} variants={cardItem} src={src} alt={`User journey step ${i + 1}`} className="w-full object-cover" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 04 — PROTOTYPE & OUTCOME ══════════════════════════════════════ */}
      <section id="work-production" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <SectionH2>Prototype & Outcome</SectionH2>
          </motion.div>

          <div className="max-w-[640px] flex flex-col gap-4 mb-10">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              The final prototype demonstrated how GreenSwan's AI research report tool could guide users from setup to customization to generated output. It gave the client a tangible product direction and helped communicate how the tool could feel usable, credible, and brand-aligned.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              The prototype also served as a foundation for future product refinement, stakeholder feedback, and development planning.
            </p>
          </div>

          {/* Dark teal prototype showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.95, ease }}
            className="overflow-hidden"
            style={{ backgroundColor: DARK }}
          >
            <img
              src={imgPrototypeGif}
              alt="GreenSwan AI — final prototype walkthrough"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ══ 05 — DELIVERY ═════════════════════════════════════════════════ */}
      <section id="work-delivery" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <SectionH2>What I delivered</SectionH2>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)] max-w-2xl mt-5">
              In two months, I delivered a full product design direction that gave the GreenSwan team a clear foundation for their AI research tool launch.
            </p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { n: "1", title: "Product interface direction", body: "Full UI system for the report-building tool, from setup to output." },
              { n: "2", title: "Report-building workflow",    body: "End-to-end user flow covering all key states and transitions." },
              { n: "3", title: "UI system & visual patterns", body: "A consistent set of components and patterns aligned to the GreenSwan brand." },
              { n: "4", title: "Marketing website direction", body: "Visual and structural direction for the product's public-facing site." },
              { n: "5", title: "Clickable prototype",         body: "Fully navigable prototype for stakeholder review and development handoff." },
              { n: "6", title: "Design assets",               body: "Production-ready assets organized for the engineering team." },
            ].map(({ n, title, body }) => (
              <motion.div key={n} variants={cardItem} className="border border-[#4c657e] px-6 py-7 flex flex-col gap-3 text-[#656663]">
                <p className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase tracking-[-0.04em]">{n}</p>
                <p className="font-['Mulish',sans-serif] font-medium text-[16px] leading-[1.2]">{title}</p>
                <p className="font-['Mulish',sans-serif] font-medium text-[13px] leading-[1.4]">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ REFLECTION ════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-6"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[clamp(32px,4vw,48px)] uppercase text-[#343a3e] leading-[1.1]">Reflection</h2>
          </motion.div>
          <div className="max-w-3xl flex flex-col gap-4 mb-16">
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              This project taught me that speed and quality don't have to be in conflict. When you move quickly with the right research foundation, you can make confident decisions without sacrificing the user experience.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] text-[16px] font-medium leading-[1.5] text-[rgba(52,58,62,0.8)]">
              The strongest AI products don't lead with the technology. They lead with the workflow — making the capability feel structured, familiar, and trustworthy to users encountering it for the first time.
            </p>
          </div>

          {/* Next case study — with images */}
          <div className="border-t border-[#343a3e]/20 pt-16">
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {[
                { title: "Rabanne.com",     to: "/work/rabanne",         img: imgNextRabanne,    imgBg: "#f3f3f3" },
                { title: "Impossible Foods", to: "/work/impossible-foods", img: imgNextImpossible, imgBg: "#260212" },
              ].map(({ title, to, img, imgBg }, i) => (
                <motion.div key={title} variants={cardItem}>
                  <button
                    onClick={() => navigate(to)}
                    className="w-full text-left group focus-visible:outline-none flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-48" style={{ backgroundColor: imgBg }}>
                      <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Label */}
                    <div className="border border-t-0 border-[#343a3e]/15 px-6 py-6 flex items-center justify-between group-hover:border-[#343a3e]/30 transition-colors duration-300">
                      <div className="flex flex-col gap-1">
                        <p className="font-['Mulish',sans-serif] text-[10px] tracking-[3px] uppercase text-[#0e5f61]">Next case study</p>
                        <p className="font-['Mulish',sans-serif] font-bold text-[26px] uppercase leading-none text-[#151515]">{title}</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-[#343a3e] transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
