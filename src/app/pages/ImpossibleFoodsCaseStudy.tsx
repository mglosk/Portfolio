import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import imgHeroFood         from "@/imports/ImpossibleFoodsCaseStudy-1/hero-food.png";
import imgBgProduct        from "@/imports/ImpossibleFoodsCaseStudy-1/bg-product.png";
import imgBgIllusBurgerL   from "@/imports/ImpossibleFoodsCaseStudy-1/bg-illus-burger-left.svg";
import imgBgIllusBurgerR   from "@/imports/ImpossibleFoodsCaseStudy-1/bg-illus-burger-right.svg";
import imgBgIllusFlower    from "@/imports/ImpossibleFoodsCaseStudy-1/bg-illus-flower.svg";
import imgBgIllusFork      from "@/imports/ImpossibleFoodsCaseStudy-1/bg-illus-fork.svg";
import imgBgIllusPig       from "@/imports/ImpossibleFoodsCaseStudy-1/bg-illus-pig.svg";
import imgChallengeIconStar   from "@/imports/ImpossibleFoodsCaseStudy-1/challenge-icon-star.svg";
import imgChallengeIconCircle from "@/imports/ImpossibleFoodsCaseStudy-1/challenge-icon-circle.svg";
import imgWorkshop         from "@/imports/ImpossibleFoodsCaseStudy-1/workshop.png";
import imgCompetitorBM     from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-beyondmeat.png";
import imgCompetitorNutella from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-nutella.png";
import imgCompetitorOatly  from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-oatly.gif";
import imgIaDiagram1       from "@/imports/ImpossibleFoodsCaseStudy-1/ia-diagram-1.png";
import imgIaDiagram2       from "@/imports/ImpossibleFoodsCaseStudy-1/ia-diagram-2.png";
import imgWireframe1       from "@/imports/ImpossibleFoodsCaseStudy-1/wireframe-1.png";
import imgWireframe2       from "@/imports/ImpossibleFoodsCaseStudy-1/wireframe-2.png";
import imgInteractionScenario1     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-1.png";
import imgInteractionScenario2     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-2.png";
import imgInteractionScenario3     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-3.png";
import imgInteractionScenario4     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-4.png";
import imgInteractionScenario5     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-5.png";
import imgInteractionScenario6     from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-6.png";
import imgAccessibility    from "@/imports/ImpossibleFoodsCaseStudy-1/accessibility.gif";
import imgCollabGif1       from "@/imports/ImpossibleFoodsCaseStudy-1/collab-gif-1.gif";
import imgCollabGif2       from "@/imports/ImpossibleFoodsCaseStudy-1/collab-gif-2.gif";
import imgComponentLib     from "@/imports/ImpossibleFoodsCaseStudy-1/component-library.png";
import imgAtomAtoms        from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-atoms.png";
import imgAtomMolecules    from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-molecules.png";
import imgAtomOrganisms    from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-organisms.png";
import imgAtomComponents   from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-components.png";
import imgGodzilla         from "@/imports/ImpossibleFoodsCaseStudy-1/godzilla-prototype.gif";
import imgWireframeDesktop1    from "@/imports/ImpossibleFoodsCaseStudy-1/wireframe-desktop-1.png";
import imgWireframeDesktop2    from "@/imports/ImpossibleFoodsCaseStudy-1/wireframe-desktop-2.png";
import imgInteractionScenario1 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-1.png";
import imgInteractionScenario2 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-2.png";
import imgInteractionScenario3 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-3.png";
import imgInteractionScenario4 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-4.png";
import imgInteractionScenario5 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-5.png";
import imgInteractionScenario6 from "@/imports/ImpossibleFoodsCaseStudy-1/interaction-scenario-6.png";
import imgReflectionNugget     from "@/imports/ImpossibleFoodsCaseStudy-1/reflection-nugget.png";
import imgAccessibilityNew     from "@/imports/ImpossibleFoodsCaseStudy-1/accessibility-new.gif";
import imgCollabGif1New        from "@/imports/ImpossibleFoodsCaseStudy-1/collab-gif-1-new.gif";
import imgCollabGif2New        from "@/imports/ImpossibleFoodsCaseStudy-1/collab-gif-2-new.gif";
import imgAtomAtomsNew         from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-atoms-new.png";
import imgAtomMoleculesNew     from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-molecules-new.png";
import imgAtomOrganismsNew     from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-organisms-new.png";
import imgAtomComponentsNew    from "@/imports/ImpossibleFoodsCaseStudy-1/atomic-components-new.png";
import imgCompetitorBMNew      from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-beyondmeat-new.png";
import imgCompetitorOatlyNew   from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-oatly-new.gif";
import imgCompetitorNutellaNew from "@/imports/ImpossibleFoodsCaseStudy-1/competitor-nutella-new.png";

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

/* ─────────────────────────────────────────────────────────────
   Shared label / heading helpers
───────────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.9, ease }}
      className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#ac4e76]"
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
      className={`font-['Mulish',sans-serif] font-bold text-[32px] leading-[34px] sm:text-[40px] sm:leading-[42px] md:text-[48px] md:leading-[48px] uppercase ${light ? "text-white" : "text-[#151515]"}`}
    >
      {children}
    </motion.h2>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────── */
export default function ImpossibleFoodsCaseStudy() {
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
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  const RED = "#e10600";

  return (
    <div className="min-h-screen bg-[#fcfbf4]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative bg-[#fcfbf4] overflow-hidden flex flex-col lg:block" style={{ height: 540 }}>
        {/* Left — text pinned to bottom */}
        <div className="relative lg:absolute lg:left-0 lg:bottom-0 z-10 flex flex-col justify-end px-6 md:px-10 pt-28 pb-10 lg:pt-0 lg:pb-14 w-full lg:w-[52%]">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-['Mulish',sans-serif] font-bold text-[12px] tracking-[1.8px] uppercase mb-5"
            style={{ color: RED }}
          >
            Case Study — Brand Redesign
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
            >
              <p className="font-['Mulish',sans-serif] font-black text-[40px] leading-[40px] sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[72px] uppercase text-[#6b7885]">Impossible foods</p>
              <p className="font-['Mulish',sans-serif] font-black text-[40px] leading-[40px] sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[72px] uppercase text-[#343a3e]">Redesign</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
            className="flex flex-wrap gap-3"
          >
            {["Research", "Wireframing", "Prototyping", "Design System"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease }}
                className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase border px-[17px] py-[9px]"
                style={{ borderColor: RED, color: RED }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right — food image bursting out of bottom */}
        <motion.div
          className="relative lg:absolute lg:right-0 lg:top-0 h-[280px] sm:h-[360px] lg:h-full w-full lg:w-[55%]"
          style={{ y: heroImgY }}
        >
          <motion.img
            src={imgHeroFood}
            alt="Impossible Foods burger"
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          />
        </motion.div>
      </section>

      {/* ── Process phases bar ────────────────────────────────────────── */}
      <div className="bg-[#fcfbf4] border-b border-[#343a3e]/10 sticky top-20 z-30 overflow-x-auto">
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
              const phaseIds  = arr.map(p => p.id);
              const activeIdx = phaseIds.indexOf(activePhase as typeof phaseIds[number]);
              const isActive  = activePhase === id;
              const isPast    = activeIdx > i;
              return (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 128, behavior: "smooth" });
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-4 transition-colors duration-300 focus-visible:outline-none ${
                    i < arr.length - 1 ? "border-r border-[#343a3e]/10" : ""
                  }`}
                  style={{ backgroundColor: isActive ? "rgba(52,58,62,0.08)" : undefined }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(52,58,62,0.04)"; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = ""; }}
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] transition-all duration-500" style={{ backgroundColor: isActive ? "#e10600" : isPast ? "rgba(225,6,0,0.25)" : "transparent" }} />
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? "scale-125" : ""}`} style={{ backgroundColor: isActive ? "#e10600" : "rgba(52,58,62,0.2)" }} />
                  <span className="font-['Mulish',sans-serif] font-medium text-[14px] tracking-[2px] transition-colors duration-300" style={{ color: isActive ? "#e10600" : "rgba(225,6,0,0.35)" }}>{phase}</span>
                  <span className="font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.13em] uppercase transition-colors duration-300" style={{ color: isActive ? "#343a3e" : "rgba(21,21,21,0.3)" }}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 01 — Background ───────────────────────────────────────────── */}
      <section id="work-background" className="bg-[#fcfbf4] border-b border-[#343a3e]/10 relative overflow-hidden" style={{ minHeight: 440 }}>
        {/* Scattered brand illustrations — positioned to mirror Figma layout */}
        {/* Top-center-left: fork/utensils sunburst */}
        <motion.img
          src={imgBgIllusFork}
          alt=""
          aria-hidden
          className="hidden lg:block absolute w-[130px] pointer-events-none select-none"
          style={{ top: "10%", left: "16%" }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
        />
        {/* Left center: large burger illustration */}
        <motion.img
          src={imgBgIllusBurgerL}
          alt=""
          aria-hidden
          className="hidden lg:block absolute w-[160px] pointer-events-none select-none"
          style={{ top: "42%", left: "1%" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
        />
        {/* Center-left: flower (flipped) */}
        <motion.img
          src={imgBgIllusFlower}
          alt=""
          aria-hidden
          className="hidden lg:block absolute w-[110px] pointer-events-none select-none"
          style={{ top: "58%", left: "23%", transform: "scaleY(-1) rotate(180deg)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.18 }}
        />
        {/* Top right: burger on bun, slightly rotated */}
        <motion.img
          src={imgBgIllusBurgerR}
          alt=""
          aria-hidden
          className="hidden lg:block absolute w-[150px] pointer-events-none select-none"
          style={{ top: "8%", right: "4%", transform: "rotate(6deg)" }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.12 }}
        />
        {/* Bottom right: pig character, rotated -10deg */}
        <motion.img
          src={imgBgIllusPig}
          alt=""
          aria-hidden
          className="hidden lg:block absolute w-[160px] pointer-events-none select-none"
          style={{ bottom: "12%", right: "2%", transform: "rotate(-10deg)" }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.2 }}
        />

        {/* Text block offset to center-right, matching Figma ~35% from left */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-start">
            <div className="hidden lg:block w-[32%] flex-shrink-0" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="flex-1 py-16 flex flex-col gap-10"
            >
              <div className="flex flex-col gap-3">
                <SectionLabel>01 — Background</SectionLabel>
                <div className="mt-1"><SectionH2>Background</SectionH2></div>
              </div>
              <div className="flex flex-col gap-4 max-w-[500px]">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(21,21,21,0.8)]">
                  Impossible Foods was in the middle of a significant rebrand, both visually and in messaging. The website needed to become the digital expression of that shift.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(21,21,21,0.8)]">
                  The challenge was not only to make the site feel more current. The experience needed to help users understand the brand, trust the product, discover recipes, find where to buy, and move through different audience pathways without confusion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#151515] leading-[1.2] mb-4">
              The challenge
            </h2>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)] max-w-3xl">
              The redesign had to balance brand transformation with practical UX needs. Impossible Foods needed a site that felt bold, playful, and memorable, while still making it easy for users to find products, recipes, nutrition information, sustainability content, and purchase pathways. The old experience created several challenges:
            </p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { n: "1", body: "The site felt dated and did not fully capture the playful, colorful, and bold personality of the new brand.",       icon: imgChallengeIconCircle },
              { n: "3", body: "The system needed to be scalable enough for the client team to maintain and expand after launch.",                   icon: imgChallengeIconStar },
              { n: "2", body: "Navigation and information architecture made it difficult to find products, recipes, and audience-specific content.", icon: imgChallengeIconStar },
              { n: "4", body: "The site had to balance brand storytelling with functional product discovery.",                                      icon: imgChallengeIconStar },
              { n: "5", body: "Had to serve three distinct audiences with different needs.",                                                        icon: imgChallengeIconStar },
              { n: "6", body: "Plant-based meat still required trust-building, education, and clear product information before trial.",             icon: imgChallengeIconStar },
            ].map(({ n, body, icon }) => (
              <motion.div key={n} variants={cardItem}>
                <div className="flex gap-5 items-center border border-[#343a3e]/15 px-6 py-7 h-full">
                  <div className="w-[46px] h-[46px] flex-shrink-0 relative">
                    <img src={icon} alt="" aria-hidden className="w-full h-full" />
                    <span className="absolute inset-0 flex items-center justify-center font-['Mulish',sans-serif] font-bold text-[18px] uppercase" style={{ color: "#4f0423" }}>{n}</span>
                  </div>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[#151515]">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Goals ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex flex-col gap-3"
          >
            <SectionLabel>02 — Goals</SectionLabel>
            <div className="mt-1">
              <SectionH2>The redesign had to solve for three connected goals</SectionH2>
            </div>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[234px]"
          >
            {[
              { bg: "#dc9660", title: "Build trust in the category",     desc: "Build a narrative that establishes trust in plant-based meat and explains why Impossible matters." },
              { bg: "#c1d5cf", title: "Make product discovery easier",   desc: "Create intuitive pathways for all three audiences to find what they need." },
              { bg: "#e6e4de", title: "Create a scalable system",        desc: "Build and integrate a scalable design system in a CMS so the client can maintain and expand it independently." },
            ].map(({ bg, title, desc }) => (
              <motion.div key={title} variants={cardItem} className="h-full">
                <div className="flex flex-col gap-6 p-6 h-auto min-h-[180px] md:h-full justify-between" style={{ backgroundColor: bg }}>
                  <p className="font-['Mulish',sans-serif] font-bold text-[18px] uppercase leading-none text-black">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[18px] text-[#151515]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 02 — Research / Stakeholder Workshop ──────────────────────── */}
      <section id="work-research" className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10 flex flex-col gap-3"
          >
            <SectionLabel>02 — Research</SectionLabel>
            <div className="mt-1"><SectionH2>Stakeholder Workshop</SectionH2></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-start">

            <div className="flex-1 w-full flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[1.4] text-[rgba(52,58,62,0.8)]"
              >
                The project began with a collaborative workshop involving product, marketing, leadership, UX, design, and technical stakeholders. The goal was to align on what the new website needed to achieve beyond a visual refresh. The workshop helped define:
              </motion.p>

              <motion.div
                variants={listContainer}
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
                  <motion.div key={item} variants={listItem} className="flex items-center gap-4">
                    <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ backgroundColor: RED }} />
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: 0.1 }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[1.4] text-[rgba(52,58,62,0.6)] max-w-[480px]"
              >
                A key theme emerged early: the team wanted a distinctive, personalized, brand-led experience — but did not want new features or AI opportunities to distract from the core user journey.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="w-full lg:w-[44%] flex-shrink-0"
            >
              {/* Tilted workshop image */}
              <div className="flex items-center justify-center py-8">
                <div className="w-[85%]" style={{ transform: "rotate(-7deg)" }}>
                  <img src={imgWorkshop} alt="Stakeholder workshop" className="w-full" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Audience Needs ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex flex-col gap-3"
          >
            <SectionLabel>02 — Insights</SectionLabel>
            <div className="mt-1"><SectionH2>Audience needs</SectionH2></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)] mb-10"
          >
            The website needed to serve different audiences with different expectations.
          </motion.p>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              {
                n: "B2C",
                title: "Conscious foodie",
                body: "Needs confidence, recipes, product facts, taste cues, reviews, environmental impact, and a clear path to trial. The design opportunity was to make products feel real, approachable, and part of everyday food choices.",
              },
              {
                n: "B2B",
                title: "Food-service operators",
                body: "Needs product details, operational confidence, menu ideas, case studies, marketing resources, and clear support pathways. The design opportunity was to separate operator journeys from consumer inspiration without isolating them from the brand.",
              },
            ].map(({ n, title, body }) => (
              <motion.div key={n} variants={cardItem}>
                <div className="border border-[#4c657e] p-8 flex flex-col gap-4 h-full text-[#656663]">
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] leading-[1.2] tracking-[-0.04em] uppercase">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[16px] leading-[1.125]">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[1.4]">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Strategic Insights ────────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-12"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#151515] leading-[1.2]">
              Strategic Insights
            </h2>
          </motion.div>

          {/* 4 scattered sticky notes — stacked on mobile, scattered/absolute at lg+ */}
          <div className="flex flex-col gap-8 lg:block lg:relative lg:min-h-[640px]">
            {[
              {
                n: "1", title: "Trust before trial",
                body: "Plant-based meat faced skepticism. The website needed to educate users without overwhelming them.",
                rotate: "-7deg", top: "0%", left: "0%",
              },
              {
                n: "2", title: "Discovery before conversion",
                body: "Important decision-making content — taste, ingredients, nutrition, recipes, reviews, and store access — was hard to scan.",
                rotate: "9deg", top: "3%", left: "40%",
              },
              {
                n: "3", title: "Different audiences, different journeys",
                body: "Consumers and food-service operators had different goals, but the existing structure blurred the line between consumer inspiration and B2B conversion.",
                rotate: "-5deg", top: "44%", left: "6%",
              },
              {
                n: "4", title: "Scale beyond launch",
                body: "The rebrand required reusable patterns, content structure, and documentation for future pages and personalization.",
                rotate: "4deg", top: "46%", left: "47%",
              },
            ].map(({ n, title, body, rotate, top, left }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.15 }}
                className="w-full lg:absolute lg:w-[42%] lg:max-w-[380px]"
                style={{ top, left }}
              >
                <div className="bg-[#ffbaf5] shadow-[0px_5px_15px_rgba(0,0,0,0.18)] flex flex-col gap-4 pt-16 pb-12 px-8 relative">
                  {/* Tape strip at top */}
                  <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-[60px] h-[18px] bg-[#f5a8e6]/60" />
                  <p className="font-['Mulish',sans-serif] font-bold text-[28px] uppercase text-black">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[20px] uppercase text-black leading-tight">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-normal text-[14px] leading-[1.4] text-black">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Competitor Analysis ───────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#343a3e] leading-[1.2] mb-6">
              Competitor analysis
            </h2>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The rebrand created an important UX tension. Impossible's new identity was bold, expressive, and playful — but the website still needed enough structure to help users find what they needed quickly.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                I used competitor and category research to understand how food, lifestyle, and mission-driven brands balance appetite appeal, education, product information, and conversion. The key takeaway: many brands led with emotional storytelling, while others leaned heavily on product specs. Impossible had an opportunity to combine both.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex flex-col sm:flex-row gap-8 sm:items-end mt-10"
          >
            {[
              { src: imgCompetitorBMNew,      label: "Beyond Meat" },
              { src: imgCompetitorOatlyNew,   label: "Oatly" },
              { src: imgCompetitorNutellaNew, label: "Nutella" },
            ].map(({ src, label }) => (
              <motion.div key={label} variants={cardItem} className="flex flex-col gap-3 flex-1">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[#232a27]">{label}</p>
                <div className="overflow-hidden" style={{ maxHeight: "320px" }}>
                  <img src={src} alt={`${label} website`} className="w-full object-cover object-top" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 03 — Information Architecture ────────────────────────────── */}
      <section id="work-ideation" className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-start">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="w-full lg:w-[42%] flex-shrink-0 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-3">
                <SectionLabel>03 — Ideation</SectionLabel>
                <div className="mt-1"><SectionH2>Information architecture</SectionH2></div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  One of the biggest UX challenges was restructuring the site around user intent. Discovery showed that mission content, product education, recipes, and conversion pathways needed stronger connections.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  I explored how the site map could better separate B2C and B2B needs while still allowing users to move naturally between brand story, product discovery, recipes, and purchase actions.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  The goal was to create a structure that answered two questions:
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "What does each audience need first?",
                    "How can the site guide users from curiosity to confidence to action?",
                  ].map((q, i) => (
                    <div key={q} className="flex gap-3 items-start">
                      <span className="font-['Mulish',sans-serif] font-bold text-[14px] flex-shrink-0 pt-0.5" style={{ color: RED }}>{i + 1}.</span>
                      <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — IA diagram on beige background */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
              className="flex-1 w-full bg-[#fcfbf4] relative overflow-hidden min-h-[320px] md:min-h-[500px]"
            >
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                {/* Two overlapping IA diagrams */}
                <div className="relative w-full h-full">
                  <img
                    src={imgIaDiagram1}
                    alt="Information architecture diagram"
                    className="absolute top-4 right-4 w-[58%] shadow-md"
                  />
                  <img
                    src={imgIaDiagram2}
                    alt="Information architecture mobile diagram"
                    className="absolute bottom-4 left-4 w-[44%] shadow-md"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Low-Fidelity Exploration ──────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#343a3e] leading-[1.2] mb-6">
              Low-fidelity exploration
            </h2>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                I created wireframes to test how the new brand system could support different types of content, from bold campaign storytelling to practical product information.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                The challenge was finding the right balance between emotional appetite appeal and decision-making content. Product pages needed to feel exciting and branded, but they also had to make flavor, nutrition, ingredients, recipes, reviews, and store access easy to understand.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          >
            {[imgWireframeDesktop1, imgWireframeDesktop2].map((src, i) => (
              <motion.div key={i} variants={cardItem}>
                <img src={src} alt={`Wireframe exploration ${i + 1}`} className="w-full shadow-sm" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 04 — Interaction Scenarios ───────────────────────────────── */}
      <section id="work-production" className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex flex-col gap-3"
          >
            <SectionLabel>04 — Production</SectionLabel>
            <div className="mt-1"><SectionH2>Interaction scenarios</SectionH2></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.85, ease }}
            className="flex flex-col gap-4 max-w-3xl mb-10"
          >
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
              For especially important content moments, I focused on memorable interaction and storytelling to leave an impression. For example, nutrition and ingredients were especially important because they played a direct role in user trust.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
              I explored different ways to present this content — tabs, accordions, side-by-side layouts, expandable sections, and contextual explanations. The goal was to help users scan high-level facts quickly, while still giving them access to deeper information when they needed it.
            </p>
          </motion.div>

          {/* Annotated flow on beige background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.95, ease }}
            className="bg-[#eee5d4] p-6 md:p-10"
          >
            {/* Top row */}
            <div className="flex gap-6 items-end mb-4 overflow-x-auto">
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario1} alt="User scrolls" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User scrolls</p>
              </div>
              <div className="text-[#343a3e]/40 text-[20px] flex-shrink-0 pb-6">→</div>
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario2} alt="Opens nutrition accordion" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User opens nutrition accordion</p>
              </div>
              <div className="text-[#343a3e]/40 text-[20px] flex-shrink-0 pb-6">→</div>
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario3} alt="User changes tabs" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User changes tabs</p>
              </div>
            </div>
            {/* Bottom row */}
            <div className="flex gap-6 items-start mt-8 overflow-x-auto">
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario4} alt="User changes tabs again" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User changes tabs</p>
              </div>
              <div className="text-[#343a3e]/40 text-[20px] flex-shrink-0 pt-6">→</div>
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario5} alt="User hovers bullet point" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User hovers over bullet point</p>
              </div>
              <div className="text-[#343a3e]/40 text-[20px] flex-shrink-0 pt-6">→</div>
              <div className="flex flex-col gap-2 flex-1 min-w-[110px] md:min-w-0">
                <img src={imgInteractionScenario6} alt="User changes tabs again" className="w-full shadow-sm" />
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[10px] text-[#343a3e] text-center tracking-[-0.02em]">User changes tabs</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Accessibility Considerations ──────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="flex flex-col gap-6 w-full lg:w-[38%] flex-shrink-0"
            >
              <div className="flex flex-col gap-3">
                <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#343a3e] leading-[1.2]">
                  Accessibility considerations
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  Accessibility needed to be considered throughout the process. It affected decisions around card structure, hover behavior, contrast, content hierarchy, and interaction states. Because the visual direction was expressive, it was important to make sure playful brand moments did not make the experience harder to use.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  For example, in a graph showing ingredients, we needed to consider colorblind users. We tackled this with patterns rather than color alone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="flex-1"
            >
              <img src={imgAccessibilityNew} alt="Accessibility color-blind pattern example" className="w-full" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Collaboration with Visual Design ─────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex flex-col gap-3"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#1c1b1f] leading-[1.2]">
              Collaboration with visual design
            </h2>
            <div className="flex flex-col gap-4 max-w-3xl">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                I worked closely with visual designers to translate wireframes into a bold branded experience while preserving navigation clarity, CTAs, product discovery, and supporting information.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                This collaboration became a balancing act between brand impact and user clarity. Large visual moments created appetite and emotion, while the UX structure kept the experience usable, scannable, and actionable.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
          >
            {[imgCollabGif1New, imgCollabGif2New].map((src, i) => (
              <motion.div key={i} variants={cardItem}>
                <img src={src} alt={`Visual collaboration example ${i + 1}`} className="w-full" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 05 — Component Library ────────────────────────────────────── */}
      <section id="work-delivery" className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-start">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-3">
                <SectionLabel>05 — Delivery</SectionLabel>
                <div className="mt-1"><SectionH2>Component library</SectionH2></div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  I supported the organization and documentation of a 120+ component library with a systematic naming and numbering convention:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "100–149: Basic UI elements",
                    "150–199: Product-related components",
                    "200–249: Content and narrative components",
                    "250+: Page templates",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: RED }} />
                      <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[15px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  This helped the client team understand the system and gave future designers a clear logic for adding new components.
                </p>
              </div>
            </motion.div>

            {/* Right — component library screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="flex-1"
            >
              <img src={imgComponentLib} alt="Component library" className="w-full shadow-sm" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Atomic Design ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-start">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-6"
            >
              <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-black leading-[1.2]">
                Atomic design
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  The design system helped turn a rebrand into a maintainable product experience.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  Rather than treating each page as a one-off layout, the team broke the experience into reusable modules: product heroes, content cards, expandable nutrition sections, recipe links, CTA blocks, carousels, campaign modules, and page templates.
                </p>
              </div>
            </motion.div>

            {/* Right — 4 atomic levels */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex-1 flex flex-col gap-8"
            >
              {[
                { label: "Atoms",      src: imgAtomAtomsNew      },
                { label: "Molecules",  src: imgAtomMoleculesNew  },
                { label: "Organisms",  src: imgAtomOrganismsNew  },
                { label: "Components", src: imgAtomComponentsNew },
              ].map(({ label, src }) => (
                <motion.div key={label} variants={cardItem} className="flex flex-col gap-3">
                  <p className="font-['Mulish',sans-serif] font-normal text-[16px] text-black">{label}</p>
                  <img src={src} alt={`${label} in the design system`} className="w-full" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Example: "Godzilla" ───────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch lg:items-start">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-6"
            >
              <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-black leading-[1.2]">
                Example: "Godzilla"
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  Some components required especially detailed thinking. One hero component had flexible image placement, optional CTAs, optional badges, editable CMS content, responsive behavior, and linked prototypes for development.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                  Internally, we affectionately called this component "Godzilla" because of its complexity — a complex hero component that required close collaboration with developers to make the intended behavior clear.
                </p>
              </div>
            </motion.div>

            {/* Right — prototype placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="flex-1 w-full"
            >
              <img src={imgGodzilla} alt="Godzilla component prototype" className="w-full h-auto block" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Reflection + Next case studies ───────────────────────────── */}
      <section className="bg-[#fcfbf4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Reflection */}
          <div className="py-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease }}
                className="flex flex-col gap-8 w-full lg:w-[45%] flex-shrink-0"
              >
                <h2 className="font-['Mulish',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[48px] uppercase text-[#343a3e] leading-[1.2]">
                  Reflection
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[#151515]">
                    This project taught me how to balance expressive brand storytelling with practical UX needs when one website has to support education, inspiration, conversion, and platform growth.
                  </p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[#151515]">
                    The biggest lesson was that strong brand expression needs strong structure. For a product like plant-based meat, storytelling matters as much as product specs — but the experience only works when users can easily find what they need, understand why it matters, and take the next step.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.95, ease, delay: 0.1 }}
                className="flex-1 w-full"
              >
                <img src={imgReflectionNugget} alt="Impossible Foods chicken nugget" className="w-full h-auto block object-contain" />
              </motion.div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-[#343a3e]/20" />

        </div>
      </section>

      {/* ── Next case study cards ─────────────────────────────────────── */}
      <section className="py-16 bg-[#fcfbf4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Next case study", title: "Greenswan AI",  href: "#" },
              { label: "Next case study", title: "Rabanne.com",   href: "/work/rabanne" },
            ].map(({ label, title, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: i * 0.1 }}
              >
                <a href={href} className="block">
                  <div className="border border-[#343a3e]/20 p-8 flex flex-col gap-6 group cursor-pointer hover:border-[#343a3e]/40 transition-colors duration-300">
                    <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#e10600]">{label}</p>
                    <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase leading-none text-[#151515]">{title}</p>
                    <div className="flex items-center gap-2 text-[#343a3e] group-hover:gap-4 transition-all duration-300">
                      <span className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase">Go to case study</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#343a3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
