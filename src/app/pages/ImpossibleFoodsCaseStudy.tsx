import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import imgHero from "@/imports/ImpossibleFoods/hero-bg-screenshot.png";
import imgBackground from "@/imports/ImpossibleFoods/background-image.png";
import imgWorkshop from "@/imports/ImpossibleFoods/workshop-photo.png";

/* ─────────────────────────────────────────────────────────────
   Brand tokens
───────────────────────────────────────────────────────────── */
const RED   = "#e10600";
const DARK  = "#260212";
const CREAM = "#fcfbf4";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────
   Stagger variants
───────────────────────────────────────────────────────────── */
const listWrap = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const listRow  = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const cardWrap = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardRow  = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/* ─────────────────────────────────────────────────────────────
   Shared label / heading helpers
───────────────────────────────────────────────────────────── */
function Label({ children }: { children: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.65, ease }}
      className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase"
      style={{ color: RED }}
    >
      {children}
    </motion.p>
  );
}

function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
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
export default function ImpossibleFoodsCaseStudy() {
  const [activePhase, setActivePhase] = useState("work-background");

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
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const phases = [
    { id: "work-background", phase: "01", label: "Background" },
    { id: "work-research",   phase: "02", label: "Research"   },
    { id: "work-ideation",   phase: "03", label: "Ideation"   },
    { id: "work-production", phase: "04", label: "Production" },
    { id: "work-delivery",   phase: "05", label: "Delivery"   },
  ] as const;

  return (
    <div className="min-h-screen bg-[#fcfbf4]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ backgroundColor: DARK, height: 480 }}>
        {/* website screenshot bleeds from right */}
        <motion.div
          style={{ y: heroY }}
          className="absolute right-0 top-0 h-full w-[58%] overflow-hidden"
        >
          <img src={imgHero} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#260212] via-[#260212]/65 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end px-10 pb-10 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-['Mulish',sans-serif] text-[12px] tracking-[1.8px] uppercase mb-5"
            style={{ color: RED }}
          >
            Case Study — Brand & Digital Redesign
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
            >
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#6b4455]">
                Impossible
              </p>
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#3d1a22]">
                Foods
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
            className="flex flex-wrap gap-3"
          >
            {["Wireframing", "Information Architecture", "Prototyping", "UX Writing", "Design System"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease }}
                className="font-['Mulish',sans-serif] text-[12px] tracking-[2.4px] uppercase border px-[17px] py-[9px]"
                style={{ borderColor: RED, color: RED }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sub-nav ───────────────────────────────────────────────── */}
      <div className="bg-[#f0ece2] border-b border-[#343a3e]/10 sticky top-16 z-30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex min-w-max">
            {phases.map(({ id, phase, label }, i) => {
              const phaseIds = phases.map(p => p.id);
              const activeIdx = phaseIds.indexOf(activePhase as typeof phaseIds[number]);
              const isActive = activePhase === id;
              const isPast = activeIdx > i;
              return (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 128, behavior: "smooth" });
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-4 transition-colors duration-300 focus-visible:outline-none ${
                    i < phases.length - 1 ? "border-r border-[#343a3e]/10" : ""
                  } ${isActive ? "bg-[#e10600]/8" : "hover:bg-[#343a3e]/5"}`}
                >
                  <span className={`absolute inset-x-0 bottom-0 h-[2px] transition-all duration-500 ${isActive ? "bg-[#e10600]" : isPast ? "bg-[#e10600]/25" : "bg-transparent"}`} />
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? "bg-[#e10600] scale-125" : isPast ? "bg-[#e10600]/40" : "bg-[#343a3e]/20 group-hover:bg-[#343a3e]/40"}`} />
                  <span className={`font-['Mulish',sans-serif] text-[10px] tracking-[2px] transition-colors duration-300 ${isActive ? "text-[#e10600]" : "text-[#343a3e]/35"}`}>{phase}</span>
                  <span className={`font-['Mulish',sans-serif] text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isActive ? "text-[#151515]" : isPast ? "text-[#343a3e]/50" : "text-[#343a3e]/35 group-hover:text-[#343a3e]/60"}`}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 01 — Background ──────────────────────────────────────── */}
      <section id="work-background" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-16">
            <Label>01 — Introduction</Label>
            <H2>Project Overview</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Metadata table */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease }}
              className="flex flex-col divide-y divide-[#343a3e]/10"
            >
              {[
                { label: "Client",  value: "Impossible Foods" },
                { label: "Project", value: "Website redesign" },
                { label: "Role",    value: "User Experience Designer" },
                { label: "Length",  value: "6 months (2024)" },
                { label: "Team",    value: "UX, visual design, art direction, front-end development, content strategy" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-8 py-5">
                  <p className="font-['Mulish',sans-serif] font-normal text-[14px] text-[#343a3e]/50 w-[120px] flex-shrink-0">{label}</p>
                  <p className="font-['Mulish',sans-serif] font-semibold text-[16px] text-[#151515] leading-snug">{value}</p>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease, delay: 0.12 }}
                className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)]"
              >
                Impossible Foods was undergoing a major rebrand and needed a website that could do more than look fresh. The new experience had to communicate the brand's evolved mission, help users understand and trust plant-based meat, support product and recipe discovery, and create a scalable foundation for future content.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: 0.2 }}
                className="overflow-hidden"
              >
                <img src={imgBackground} alt="Impossible Foods rebrand visual" className="w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-10">
            <Label>01 — The Brief</Label>
            <H2>The challenge</H2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[700px] mb-12"
          >
            The redesign had to balance brand transformation with practical UX needs. Impossible Foods needed a site that felt bold, playful, and memorable — while still making it easy for users to find products, recipes, nutrition information, sustainability content, and purchase pathways.
          </motion.p>

          <motion.div
            variants={cardWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              { n: "1", body: "The site felt dated and did not fully capture the playful, colorful, and bold personality of the new brand." },
              { n: "2", body: "Navigation and information architecture made it difficult to find products, recipes, and audience-specific content." },
              { n: "3", body: "The system needed to be scalable enough for the client team to maintain and expand after launch." },
              { n: "4", body: "The site had to balance brand storytelling with functional product discovery." },
              { n: "5", body: "Had to serve three distinct audiences with different needs." },
              { n: "6", body: "Plant-based meat still required trust-building, education, and clear product information before trial." },
            ].map(({ n, body }) => (
              <motion.div key={n} variants={cardRow}>
                <div className="border border-[#343a3e]/20 p-7 h-full flex gap-5">
                  <span className="font-['Mulish',sans-serif] font-black text-[40px] leading-none flex-shrink-0" style={{ color: "#f8dddd" }}>{n}</span>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.8)] pt-2">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Goals ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-6">
            <Label>01 — Goals</Label>
            <H2>The redesign had to solve for three connected goals</H2>
          </div>

          <motion.div
            variants={cardWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { bg: "#ff6c02", title: "Build trust in the category",       desc: "Build a narrative that establishes trust in plant-based meat and explains why Impossible matters." },
              { bg: "#c1d5cf", title: "Make product discovery easier",     desc: "Create intuitive pathways for all three audiences to find what they need." },
              { bg: "#e6e4de", title: "Create a scalable system",          desc: "Build and integrate a scalable design system in a CMS so the client can maintain and expand it independently." },
            ].map(({ bg, title, desc }) => (
              <motion.div key={title} variants={cardRow}>
                <div className="flex flex-col justify-between gap-8 p-8 h-[260px]" style={{ backgroundColor: bg }}>
                  <p className="font-['Mulish',sans-serif] font-bold text-[18px] uppercase leading-tight text-black">{title}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[15px] leading-[24px] text-[#151515]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── My Role ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease }}
                className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase leading-none text-[#1c1f23] mb-6"
              >
                My role
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease, delay: 0.08 }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)]"
              >
                I joined the project after discovery and worked across UX, content, and production — translating strategy into usable structures and design-ready artifacts.
              </motion.p>
            </div>

            <motion.div
              variants={listWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex flex-col"
            >
              {[
                "Turning discovery insights into page priorities and UX requirements",
                "Mapping user journeys and site structure across B2C and B2B needs",
                "Creating wireframes for key pages, product content, recipes, and conversion moments",
                "Exploring interaction patterns for nutrition, ingredients, flavor, and supporting product information",
                "Collaborating with visual designers to balance usability with the new brand expression",
                "Considering accessibility in card layouts, hover states, navigation, and content hierarchy",
                "Writing UX annotations and supporting reusable component documentation for development handoff",
                "Supporting the creation of a component library and design documentation",
              ].map((item) => (
                <motion.div key={item} variants={listRow} className="flex items-start gap-4 py-4 border-b border-[rgba(52,58,62,0.1)]">
                  <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: RED }} />
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.8)]">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Research ──────────────────────────────────────────────── */}
      <section id="work-research" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>02 — Research</Label>
            <H2>Stakeholder Workshop</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-10"
              >
                The project began with a collaborative workshop involving product, marketing, leadership, UX, design, and technical stakeholders. The goal was to align on what the new website needed to achieve beyond a visual refresh. The workshop helped define:
              </motion.p>

              <motion.div
                variants={listWrap}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                className="flex flex-col gap-4"
              >
                {[
                  "Business goals and KPIs",
                  "User needs and pain points",
                  "Audience expectations",
                  "Brand personality — \"playful, fresh, memorable\"",
                  "Technical constraints",
                  "Feature priorities",
                  "Future personalization opportunities",
                ].map((item) => (
                  <motion.div key={item} variants={listRow} className="flex items-center gap-4">
                    <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ backgroundColor: RED }} />
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.8)]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.6)] mt-8 max-w-[480px]"
              >
                A key theme emerged early: the team wanted a distinctive, personalized, brand-led experience — but did not want new features or AI opportunities to distract from the core user journey.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
            >
              <img src={imgWorkshop} alt="Stakeholder workshop" className="w-full object-cover shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Audience Needs ────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-6">
            <Label>02 — Research</Label>
            <H2>Audience needs</H2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[660px] mb-12"
          >
            The website needed to serve different audiences with different expectations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                accent: "#4b7b44",
                label: "B2C — Conscious foodie",
                body: "Needs confidence, recipes, product facts, taste cues, reviews, environmental impact, and a clear path to trial. The design opportunity was to make products feel real, approachable, and part of everyday food choices.",
              },
              {
                accent: "#a7c58c",
                label: "B2B — Food-service operators",
                body: "Needs product details, operational confidence, menu ideas, case studies, marketing resources, and clear support pathways. The design opportunity was to separate operator journeys from consumer inspiration without isolating them from the brand.",
              },
            ].map(({ accent, label, body }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: i === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.9, ease }}
              >
                <div className="border border-[#343a3e]/20 rounded-sm overflow-hidden h-full flex">
                  <div className="w-[6px] flex-shrink-0" style={{ backgroundColor: accent }} />
                  <div className="p-8 flex flex-col gap-4">
                    <p className="font-['Mulish',sans-serif] font-bold text-[18px] uppercase text-[#151515]">{label}</p>
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)]">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Insights ────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>02 — Research</Label>
            <H2>Strategic Insights</H2>
          </div>

          <motion.div
            variants={cardWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              { n: "1", title: "Trust before trial",                    body: "Plant-based meat faced skepticism. The website needed to educate users without overwhelming them." },
              { n: "2", title: "Discovery before conversion",           body: "Important decision-making content — taste, ingredients, nutrition, recipes, reviews, and store access — was hard to scan." },
              { n: "3", title: "Different audiences, different journeys", body: "Consumers and food-service operators had different goals, but the existing structure blurred the line between consumer inspiration and B2B conversion." },
              { n: "4", title: "Scale beyond launch",                   body: "The rebrand required reusable patterns, content structure, and documentation for future pages and personalization." },
            ].map(({ n, title, body }) => (
              <motion.div key={n} variants={cardRow}>
                <div className="border border-[#343a3e]/20 p-8 h-full flex flex-col gap-4">
                  <p className="font-['Mulish',sans-serif] font-black text-[48px] leading-none" style={{ color: "#f8dddd" }}>{n}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] uppercase leading-tight text-[#151515]">{title}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[15px] leading-[24px] text-[rgba(52,58,62,0.7)]">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Competitive Research ──────────────────────────────────── */}
      <section id="work-ideation" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>03 — Ideation</Label>
            <H2>Competitive Research</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-8">
                The rebrand created an important UX tension. Impossible's new identity was bold, expressive, and playful — but the website still needed enough structure to help users find what they needed quickly.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)] mb-8">
                I used competitor and category research to understand how food, lifestyle, and mission-driven brands balance appetite appeal, education, product information, and conversion. Brands studied included Beyond Meat, Aura Bora, Mate Libre, Fitbit, and others in the premium food and wellness space.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)]">
                The key takeaway: many brands led with emotional storytelling, while others leaned heavily on product specs. Impossible had an opportunity to combine both — a confident brand story supported by clear, credible product information.
              </p>
            </motion.div>

            <motion.div
              variants={listWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex flex-col"
            >
              <p className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase tracking-[2px] text-[#151515] mb-6">Key patterns observed</p>
              {[
                "Playful tone and strong brand voice",
                "Appetite appeal through photography",
                "Trust building through clear information",
                "Product-forward nutrition content",
                "Conversion pathways close to inspiration",
              ].map((item, i) => (
                <motion.div key={item} variants={listRow} className="flex items-center gap-4 py-4 border-b border-[rgba(52,58,62,0.1)]">
                  <span className="font-['Mulish',sans-serif] font-bold text-[12px]" style={{ color: RED }}>0{i + 1}</span>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.8)]">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Information Architecture ──────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>03 — Ideation</Label>
            <H2>Information Architecture</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-6">
                One of the biggest UX challenges was restructuring the site around user intent. Discovery showed that mission content, product education, recipes, and conversion pathways needed stronger connections.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)] mb-6">
                I explored how the site map could better separate B2C and B2B needs while still allowing users to move naturally between brand story, product discovery, recipes, and purchase actions.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)] mb-8">
                The goal was to create a structure that answered two questions:
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "What does each audience need first?",
                  "How can the site guide users from curiosity to confidence to action?",
                ].map((q, i) => (
                  <div key={q} className="flex gap-4">
                    <span className="font-['Mulish',sans-serif] font-bold text-[14px] flex-shrink-0 pt-1" style={{ color: RED }}>{i + 1}.</span>
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.8)]">{q}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {[
                { label: "Homepage", desc: "Brand story → product categories → recipes → where to buy" },
                { label: "Products", desc: "Filterable by format, audience, and use case — B2C and B2B paths" },
                { label: "Recipes",  desc: "Inspiration-first, linked to product discovery and purchase" },
                { label: "Mission",  desc: "Environmental story, science, and trust-building content" },
                { label: "For Business", desc: "Operator resources, marketing assets, and support" },
              ].map(({ label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.85, ease, delay: i * 0.08 }}
                >
                  <div className="border border-[#343a3e]/15 p-5 flex gap-5 items-start">
                    <span className="font-['Mulish',sans-serif] font-black text-[11px] tracking-[2px] uppercase pt-1" style={{ color: RED }}>0{i + 1}</span>
                    <div>
                      <p className="font-['Mulish',sans-serif] font-bold text-[15px] uppercase text-[#151515] mb-1">{label}</p>
                      <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[22px] text-[rgba(52,58,62,0.65)]">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Wireframing ───────────────────────────────────────────── */}
      <section id="work-production" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>04 — Production</Label>
            <H2>Wireframing & Interaction Design</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-6">
                Wireframes focused on the moments where users needed to make decisions — product pages, recipe hubs, the homepage, and the mission narrative.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)]">
                Nutrition and ingredients were especially important because they played a direct role in user trust. I explored different ways to present this content, including tabs, accordions, side-by-side layouts, expandable sections, and contextual explanations.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)] mt-4">
                The goal was to help users scan high-level facts quickly, while still giving them access to deeper information when they needed it.
              </p>
            </motion.div>

            <motion.div
              variants={cardWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex flex-col gap-4"
            >
              {[
                { label: "Accordion layout",           desc: "Collapsed sections for Ingredients, Flavor, and Nutrition — lets users choose what to explore without being overwhelmed." },
                { label: "Tab / pill navigation",      desc: "Horizontal progress tabs switching between content types, keeping the product image always in view." },
                { label: "Icon + ingredient grid",     desc: "Visual icons paired with ingredient names for quick scanability and brand personality." },
                { label: "Side-by-side card layout",   desc: "Flavor cards presented alongside the product — connecting sensory appeal to product identity." },
              ].map(({ label, desc }) => (
                <motion.div key={label} variants={cardRow} className="border border-[#343a3e]/15 p-6">
                  <p className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase text-[#151515] mb-2">{label}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[22px] text-[rgba(52,58,62,0.65)]">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Design System ─────────────────────────────────────────── */}
      <section id="work-delivery" className="py-24 bg-white border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-12">
            <Label>05 — Delivery</Label>
            <H2>Design System & Handover</H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-6">
                Because the site needed to be handed over to the client team for ongoing management, scalability was built into the design process from the start.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.7)]">
                Components were designed to be modular and reusable across product pages, recipe listings, editorial content, and campaign moments — so the team could assemble new pages without needing a designer in the room.
              </p>
            </motion.div>

            <motion.div
              variants={cardWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Colour & typography tokens",
                "Component variants",
                "Motion specifications",
                "CMS content model",
                "UX annotations",
                "Handover documentation",
              ].map((item) => (
                <motion.div key={item} variants={cardRow} className="border border-[#343a3e]/15 p-5">
                  <p className="font-['Mulish',sans-serif] font-bold text-[13px] tracking-[0.08em] uppercase text-[#343a3e]">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Reflection ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#260212]">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.85, ease }}
            className="flex flex-col gap-3 mb-12"
          >
            <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase" style={{ color: RED }}>Reflection</p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] leading-[48px] uppercase text-white">What I learned</h2>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(238,229,212,0.7)] max-w-[640px] mt-4">
              This project taught me how to balance expressive brand storytelling with practical UX needs when one website has to support education, inspiration, conversion, and platform growth.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(238,229,212,0.6)] max-w-[640px]">
              The biggest lesson: strong brand expression needs strong structure. For a product like plant-based meat, storytelling matters as much as product specs — but the experience only works when users can easily find what they need, understand why it matters, and take the next step.
            </p>
          </motion.div>

          {/* Next case study cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Next case study", title: "Rabanne.com", href: "/work/rabanne" },
              { label: "Next case study", title: "Greenswan AI",  href: "#" },
            ].map(({ label, title, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: i * 0.1 }}
              >
                <a
                  href={href}
                  className="bg-[#3d1a22] p-8 flex flex-col gap-6 group hover:bg-[#4a2030] transition-colors duration-300 block"
                >
                  <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase" style={{ color: RED }}>{label}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase leading-none text-white">{title}</p>
                  <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300" style={{ color: RED }}>
                    <span className="font-['Mulish',sans-serif] text-[12px] tracking-[2.4px] uppercase">Go to case study</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke={RED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
