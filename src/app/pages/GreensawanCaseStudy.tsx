import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";

import imgScreenMacbook    from "@/imports/GreensawanCaseStudy-1/screen-macbook.png";
import imgExpertScientist  from "@/imports/GreensawanCaseStudy-1/expert-scientist.png";
import imgBenchmark1       from "@/imports/GreensawanCaseStudy-1/benchmark-screen-1.png";
import imgBenchmark2       from "@/imports/GreensawanCaseStudy-1/benchmark-screen-2.png";
import imgBenchmark3       from "@/imports/GreensawanCaseStudy-1/benchmark-screen-3.png";
import imgUiExp1           from "@/imports/GreensawanCaseStudy-1/ui-exploration-1.png";
import imgUiExp2           from "@/imports/GreensawanCaseStudy-1/ui-exploration-2.png";
import imgUiExp3           from "@/imports/GreensawanCaseStudy-1/ui-exploration-3.png";
import imgJourney1         from "@/imports/GreensawanCaseStudy-1/journey-1.png";
import imgJourney2         from "@/imports/GreensawanCaseStudy-1/journey-2.png";
import imgJourney3         from "@/imports/GreensawanCaseStudy-1/journey-3.png";
import imgJourney4         from "@/imports/GreensawanCaseStudy-1/journey-4.png";

/* ─────────────────────────────────────────────────────────────
   Animation constants
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

const TEAL  = "#0e5f61";
const DARK  = "#092626";

/* ─────────────────────────────────────────────────────────────
   Shared label / heading helpers
───────────────────────────────────────────────────────────── */
function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.9, ease }}
      className={`font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase ${light ? "text-[#7ecece]" : "text-[#0e5f61]"}`}
    >
      {children}
    </motion.p>
  );
}

function SectionH2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease, delay: 0.08 }}
      className={`font-['Mulish',sans-serif] font-bold text-[48px] leading-[48px] uppercase ${light ? "text-white" : "text-[#151515]"}`}
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
  const [activePhase, setActivePhase] = useState<string>("work-background");

  useEffect(() => {
    const ids = ["work-background", "work-research", "work-ideation", "work-production", "work-delivery"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActivePhase(id); },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);

  return (
    <div className="min-h-screen bg-[#f3f3f3]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ height: 580, backgroundColor: DARK }}>
        {/* Left — text pinned to bottom */}
        <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end px-6 md:px-10 pb-14 w-[55%]">
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
            >
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#4a8f8f]">Green Swan</p>
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-white">Labs</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
            className="flex flex-wrap gap-3"
          >
            {["Product Design", "UI Design", "Prototyping", "Design System"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease }}
                className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase border border-[#7ecece] text-[#7ecece] px-[17px] py-[9px]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right — product screenshot with parallax */}
        <motion.div
          className="absolute right-0 top-0 h-full w-[50%] flex items-end justify-center overflow-hidden"
          style={{ y: heroImgY }}
        >
          <motion.img
            src={imgScreenMacbook}
            alt="Green Swan AI research tool interface"
            className="w-full h-full object-cover object-left-top"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          />
        </motion.div>
      </section>

      {/* ── Process phases bar ────────────────────────────────────────── */}
      <div className="bg-[#f3f3f3] border-b border-[#343a3e]/10 sticky top-20 z-30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex min-w-max">
            {(
              [
                { id: "work-background", phase: "01", label: "Background" },
                { id: "work-research",   phase: "02", label: "Research"   },
                { id: "work-ideation",   phase: "03", label: "Ideation"   },
                { id: "work-production", phase: "04", label: "Production" },
                { id: "work-delivery",   phase: "05", label: "Delivery"   },
              ] as const
            ).map(({ id, phase, label }, i, arr) => {
              const phaseIds   = arr.map(p => p.id);
              const activeIdx  = phaseIds.indexOf(activePhase as typeof phaseIds[number]);
              const isActive   = activePhase === id;
              const isPast     = activeIdx > i;
              return (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 128, behavior: "smooth" });
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-4 transition-colors duration-300 focus-visible:outline-none ${
                    i < arr.length - 1 ? "border-r border-[#343a3e]/10" : ""
                  } ${isActive ? "bg-[#0e5f61]/8" : "hover:bg-[#343a3e]/5"}`}
                >
                  <span className={`absolute inset-x-0 bottom-0 h-[2px] transition-all duration-500 ${isActive ? "bg-[#0e5f61]" : isPast ? "bg-[#0e5f61]/25" : "bg-transparent"}`} />
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? "bg-[#0e5f61] scale-125" : isPast ? "bg-[#0e5f61]/40" : "bg-[#343a3e]/20 group-hover:bg-[#343a3e]/40"}`} />
                  <span className={`font-['Mulish',sans-serif] text-[10px] tracking-[2px] transition-colors duration-300 ${isActive ? "text-[#0e5f61]" : "text-[#343a3e]/35"}`}>{phase}</span>
                  <span className={`font-['Mulish',sans-serif] text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isActive ? "text-[#151515]" : isPast ? "text-[#343a3e]/50" : "text-[#343a3e]/35 group-hover:text-[#343a3e]/60"}`}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 01 — Background / Project Overview ──────────────────────── */}
      <section id="work-background" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left — project meta */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease }}
              className="lg:w-[38%] flex-shrink-0 flex flex-col gap-8"
            >
              <SectionH2>Green Swan AI</SectionH2>

              <div className="flex flex-col divide-y divide-[#343a3e]/10">
                {[
                  { label: "Company",  value: "Green Swan AI" },
                  { label: "Role",     value: "Product Design" },
                  { label: "Length",   value: "2 months (2024)" },
                  { label: "Team",     value: "Freelance" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-8 py-4">
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] text-[rgba(52,58,62,0.5)] w-24 flex-shrink-0">{label}</p>
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] text-[rgba(52,58,62,0.8)]">{value}</p>
                  </div>
                ))}
                <div className="flex gap-8 py-4 items-start">
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] text-[rgba(52,58,62,0.5)] w-24 flex-shrink-0 pt-1">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["Prototyping", "Product design", "UI design", "Design system"].map((skill) => (
                      <span
                        key={skill}
                        className="font-['Mulish',sans-serif] font-extrabold text-[11px] uppercase tracking-wider text-white px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: TEAL }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — MacBook screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
              className="flex-1"
            >
              <img
                src={imgScreenMacbook}
                alt="Green Swan AI research tool — product interface"
                className="w-full object-cover"
                style={{ aspectRatio: "16/10" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────── */}
      <section className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-start">

            {/* Sticky left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="lg:sticky lg:top-20 py-16 w-full lg:w-[45%] flex-shrink-0 flex flex-col gap-8"
            >
              <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2]">
                Introduction
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  GreenSwan AI was developing a new product to help scientists generate, customize, and review AI-assisted research reports.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  The product was part of a larger business pivot. As AI began reshaping the scientific research industry, GreenSwan needed a tool that could make advanced report generation feel accessible, credible, and useful for expert users.
                </p>
              </div>
            </motion.div>

            {/* Scrolling right — scientist photo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
              className="hidden lg:block flex-1 py-16"
            >
              <img
                src={imgExpertScientist}
                alt="Scientist using research tools"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="mb-8"><SectionH2>The Challenge</SectionH2></div>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                GreenSwan AI needed to launch a new product in a fast-moving AI market. The tool had to help scientists create customizable research reports, but the experience needed to feel approachable for users who may not be familiar with AI software or template-based creation tools.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The challenge was to make a complex workflow feel simple, credible, and usable while preserving the company's brand identity and moving quickly enough to support the launch.
              </p>
            </div>
          </motion.div>

          {/* Key problems */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mb-8"
          >
            <p className="font-['Mulish',sans-serif] font-bold text-[16px] tracking-[3px] uppercase text-[#0e5f61] mb-10">Key problems</p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
          >
            {[
              { n: "1", text: "Brand new product category — no existing patterns to follow" },
              { n: "2", text: "Target users (scientists) unfamiliar with this type of AI-powered software" },
              { n: "3", text: "Had to stay relevant in a fast-moving AI landscape" },
              { n: "4", text: "Extremely tight timeline (2 months) to design and ship" },
              { n: "5", text: "Needed to balance usability (easy for non-technical users) with aesthetic integrity (maintain brand identity)" },
            ].map(({ n, text }) => (
              <motion.div key={n} variants={cardItem} className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: TEAL }}
                >
                  <span className="font-['Mulish',sans-serif] font-bold text-[18px] uppercase text-white">{n}</span>
                </div>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)] pt-1.5">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Goals — 3 connected problems ──────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2]">
              The redesign had to solve for three connected problems
            </h2>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            {[
              {
                bg: "#ff6c02",
                title: "Strategic relevance",
                body: "Help GreenSwan respond to AI-driven shifts in the scientific research industry.",
              },
              {
                bg: "#c1d5cf",
                title: "Usable AI workflow",
                body: "Create a clear interface for users who may not be familiar with AI report-generation tools.",
              },
              {
                bg: "#e6e4de",
                title: "Launch-ready experience",
                body: "Design a polished, credible product direction that could support GreenSwan's new vision.",
              },
            ].map(({ bg, title, body }) => (
              <motion.div key={title} variants={cardItem} className="flex-1">
                <div
                  className="flex flex-col justify-between px-5 py-8 h-full min-h-[320px]"
                  style={{ backgroundColor: bg }}
                >
                  <p className="font-['Mulish',sans-serif] font-bold text-[22px] uppercase leading-tight text-black">{title}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-black/80">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 02 — Research / My Approach ──────────────────────────────── */}
      <section id="work-research" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="mb-8"><SectionH2>My Approach</SectionH2></div>
            <div className="max-w-[700px] flex flex-col gap-5">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                My approach was to simplify a complex AI-enabled workflow into a product experience that felt familiar, structured, and easy to act on.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                I focused on three questions:
              </p>
            </div>
          </motion.div>

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
              "How could the product feel credible for scientific users while still carrying the GreenSwan brand?",
            ].map((q, i) => (
              <motion.div key={i} variants={listItem} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: TEAL }}
                >
                  <span className="font-['Mulish',sans-serif] font-bold text-[11px] text-white">{i + 1}</span>
                </span>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{q}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl flex flex-col gap-4"
          >
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
              To make the product feel approachable, I structured the experience around a familiar creation flow: start with a report goal, choose a template, add relevant inputs, customize the output, and review the generated report before export.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
              This helped turn an open-ended AI capability into a guided workflow with clear user control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Benchmarking creation tools ───────────────────────────────── */}
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
              <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2]">
                Benchmarking creation tools
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  Because GreenSwan was creating a new type of AI research tool, I looked beyond direct competitors. I benchmarked template-based and no-code creation tools such as Canva, Adobe Express, and Adobe Firefly to understand how users customize complex outputs without starting from scratch.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  This helped me identify interaction patterns that could translate into the GreenSwan experience: guided setup, template selection, editable outputs, preview states, and clear next steps.
                </p>
              </div>
            </motion.div>

            {/* Scrolling right */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="hidden lg:flex flex-1 py-16 flex-col gap-8"
            >
              <motion.div variants={cardItem}>
                <p className="font-['Mulish',sans-serif] font-medium text-[11px] uppercase tracking-[2.5px] text-[rgba(52,58,62,0.5)] mb-3">Template selection</p>
                <div className="grid grid-cols-2 gap-4">
                  <img src={imgBenchmark1} alt="Adobe Express template selection" className="w-full object-cover" />
                  <img src={imgBenchmark2} alt="Canva template patterns" className="w-full object-cover" />
                </div>
              </motion.div>
              <motion.div variants={cardItem}>
                <p className="font-['Mulish',sans-serif] font-medium text-[11px] uppercase tracking-[2.5px] text-[rgba(52,58,62,0.5)] mb-3">Guided creation</p>
                <img src={imgBenchmark3} alt="Guided creation flow patterns" className="w-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Strategic Insights ───────────────────────────────────────── */}
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
              <SectionH2>Strategic Insights</SectionH2>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                Usability was the top priority, and time was extremely short. Looking at proven UX patterns in adjacent industries let me move quickly without reinventing the wheel.
              </p>
            </motion.div>

            {/* Scrolling right — insight cards */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex-1 py-16 flex flex-col gap-5"
            >
              {[
                {
                  n: "1",
                  title: "AI workflows need visible structure",
                  body: "Users should always understand where they are, what the AI needs from them, and what happens next.",
                },
                {
                  n: "2",
                  title: "Expert users still need simplicity",
                  body: "Scientific users may be highly knowledgeable in their field, but that does not mean they want a complicated interface.",
                },
                {
                  n: "3",
                  title: "Familiar creation patterns reduce friction",
                  body: "Template-based tools offered useful patterns for helping users customize complex outputs quickly.",
                },
                {
                  n: "4",
                  title: "Trust matters more than novelty",
                  body: "For a scientific audience, the interface needed to feel credible, controlled, and professional — not just futuristic.",
                },
              ].map(({ n, title, body }) => (
                <motion.div key={n} variants={cardItem} className="border border-[#4c657e] px-6 py-8 flex flex-col gap-3 text-[#656663]">
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] leading-[1.2] tracking-[-0.04em] uppercase">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[16px] leading-[1.125]">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[1.4]">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03 — Ideation / Rapid UI Exploration ─────────────────────── */}
      <section id="work-ideation" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="mb-8"><SectionH2>Rapid UI Exploration</SectionH2></div>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                With only two months to define the product direction, I used a lean design process. Instead of spending time on separate wireframe rounds, I moved directly into structured UI exploration so the team could evaluate layout, hierarchy, interaction patterns, and brand expression at the same time.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                This approach helped us move quickly while still making deliberate product decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { src: imgUiExp1, alt: "UI exploration — dashboard layout" },
              { src: imgUiExp2, alt: "UI exploration — report builder" },
              { src: imgUiExp3, alt: "UI exploration — template selection" },
            ].map(({ src, alt }) => (
              <motion.div key={alt} variants={cardItem}>
                <img src={src} alt={alt} className="w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            {[
              { label: "Why this worked", items: ["Benchmarking gave me enough UX direction to move confidently", "Client needed to see visual design quickly to approve direction", "Faster iteration in high-fidelity meant we could validate with stakeholders sooner", "The template-based approach had clear existing patterns to follow"] },
            ].map(({ label, items }) => (
              <motion.div key={label} variants={cardItem} className="flex-1 flex flex-col gap-4">
                <p className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase tracking-[2px] text-[#0e5f61]">{label}</p>
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e5f61] flex-shrink-0 mt-2" />
                      <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[15px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Designing for unfamiliar workflows ───────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="mb-8"><SectionH2>Designing for unfamiliar workflows</SectionH2></div>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                Because AI-assisted report generation was a new workflow for many users, the interface needed to borrow from familiar patterns. I focused on reducing ambiguity: clear steps, recognizable templates, visible customization options, and a logical path from input to generated report.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The goal was not to make the AI feel magical. It was to make the workflow feel understandable.
              </p>
            </div>
          </motion.div>

          {/* User journey flow */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={cardItem}>
              <div className="flex items-center gap-3 flex-wrap mb-6">
                {["Create report", "Choose template", "Add inputs", "Customize sections", "Generate draft", "Review & edit", "Export"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className="px-4 py-2 text-white font-['Mulish',sans-serif] font-bold text-[12px] uppercase tracking-wider"
                      style={{ backgroundColor: TEAL }}
                    >
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#0e5f61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { src: imgJourney1, alt: "Report creation — step 1" },
                { src: imgJourney2, alt: "Template selection — step 2" },
                { src: imgJourney3, alt: "Input and customization — step 3" },
                { src: imgJourney4, alt: "Generated output — step 4" },
              ].map(({ src, alt }) => (
                <motion.div key={alt} variants={cardItem}>
                  <img src={src} alt={alt} className="w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 04 — Production / Prototype and Outcome ──────────────────── */}
      <section id="work-production" className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="mb-8"><SectionH2>Prototype & Outcome</SectionH2></div>
            <div className="max-w-[638px] flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The final prototype demonstrated how GreenSwan's AI research report tool could guide users from setup to customization to generated output. It gave the client a tangible product direction for their new AI offering and helped communicate how the tool could feel usable, credible, and brand-aligned.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The prototype also served as a foundation for future product refinement, stakeholder feedback, and development planning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.95, ease }}
          >
            <img
              src={imgScreenMacbook}
              alt="Green Swan AI — final product interface"
              className="w-full shadow-md"
              style={{ aspectRatio: "16/9" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 05 — Delivery / Conclusion ───────────────────────────────── */}
      <section id="work-delivery" className="bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Deliverables */}
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease }}
              className="mb-11"
            >
              <div className="mb-8"><SectionH2>What I delivered</SectionH2></div>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)] max-w-2xl">
                In two months, I delivered a full product design direction that gave the GreenSwan team a clear foundation for their AI research tool launch.
              </p>
            </motion.div>

            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {[
                { n: "1", title: "Product interface direction", body: "Full UI system for the report-building tool, from setup to output." },
                { n: "2", title: "Report-building workflow", body: "End-to-end user flow covering all key states and transitions." },
                { n: "3", title: "UI system & visual patterns", body: "A consistent set of components and patterns aligned to the GreenSwan brand." },
                { n: "4", title: "Marketing website direction", body: "Visual and structural direction for the product's public-facing site." },
                { n: "5", title: "Clickable prototype", body: "Fully navigable prototype for stakeholder review and development handoff." },
                { n: "6", title: "Design assets", body: "Production-ready assets organized for the engineering team." },
              ].map(({ n, title, body }) => (
                <motion.div key={n} variants={cardItem} className="border border-[#4c657e] px-6 py-8 flex flex-col gap-3 text-[#656663]">
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] leading-[1.2] tracking-[-0.04em] uppercase">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[16px] leading-[1.125]">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[1.4]">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Reflection */}
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease }}
              className="flex flex-col gap-11"
            >
              <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#343a3e] leading-[1.5]">
                Reflection
              </h2>
              <div className="flex flex-col gap-4 max-w-3xl">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  This project taught me that speed and quality don't have to be in conflict. When you move quickly with the right research foundation, you can make confident decisions without sacrificing the user experience.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  The strongest AI products don't lead with the technology. They lead with the workflow — making the capability feel structured, familiar, and trustworthy to users who are encountering it for the first time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Separator */}
          <div className="border-t border-[#343a3e]/20" />
        </div>
      </section>

      {/* ── Next case study cards ─────────────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Next case study", title: "Rabanne.com", to: "/work/rabanne" },
              { label: "Next case study", title: "Impossible Foods", to: "/work/impossible-foods" },
            ].map(({ label, title, to }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: i * 0.1 }}
              >
                <button
                  onClick={() => navigate(to)}
                  className="w-full text-left border border-[#343a3e]/20 p-8 flex flex-col gap-6 group hover:border-[#343a3e]/40 transition-colors duration-300"
                >
                  <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#0e5f61]">{label}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase leading-none text-[#151515]">{title}</p>
                  <div className="flex items-center gap-2 text-[#343a3e] group-hover:gap-4 transition-all duration-300">
                    <span className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase">Go to case study</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#343a3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
