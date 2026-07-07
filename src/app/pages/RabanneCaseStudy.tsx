import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { FadeIn } from "@/app/components/FadeIn";

import imgHeroPerfume      from "@/imports/RabanneCaseStudy-1/hero-perfume-bottle.png";
import imgBgImage11        from "@/imports/RabanneCaseStudy-1/546240953078fa93ba80c93c962140564896d099.png";
import imgBgImage12        from "@/imports/RabanneCaseStudy-1/6b032040bd20a4efc1863f95a026c61365f6b758.png";
import imgApproachBottle   from "@/imports/RabanneCaseStudy-1/approach-perfume-bottle.png";
import imgCASplitScreen       from "@/imports/RabanneCaseStudy-1/ca-split-screen.png";
import imgCAScrollBehavior    from "@/imports/RabanneCaseStudy-1/ca-scroll-behavior.png";
import imgCAFullBleed         from "@/imports/RabanneCaseStudy-1/ca-full-bleed.png";
import imgCAPlayful           from "@/imports/RabanneCaseStudy-1/ca-playful-interactions.png";
import imgCSFrame080       from "@/imports/RabanneCaseStudy-1/8cffbdddfbacf177c61272bec19de3d3d086ac47.png";
import imgCSFrame081       from "@/imports/RabanneCaseStudy-1/5c4cff87082fdbb08d2091b86856a7d50d02f149.png";
import imgCSFrame082       from "@/imports/RabanneCaseStudy-1/d8d56e32224f0d250ec2d3eb7d25a213616f95c9.png";
import imgCSProto          from "@/imports/RabanneCaseStudy-1/7cfff702d6d84c90baed3bf70b77aa24968567cf.png";
import imgCS1440           from "@/imports/RabanneCaseStudy-1/a00f357fe9226ca38a98b039cb6559b4e302543e.png";
import imgCS1441           from "@/imports/RabanneCaseStudy-1/550d2cf30d6351ddd1c18e3c24e957652d580d93.png";
import imgCSImage20        from "@/imports/RabanneCaseStudy-1/6423dad5b41857a5797ff17172d5b5a71d3b9729.png";
import imgCSImage25        from "@/imports/RabanneCaseStudy-1/457292327ac368e9cadc43ed4914b485aa44abc9.png";
import imgCS1117           from "@/imports/RabanneCaseStudy-1/7953439d76b19e75653ee7d6e127494e66f389aa.png";
import imgCSDeodorant      from "@/imports/RabanneCaseStudy-1/ad366e3cc2fc4f54d8de9086747b14e8298bf69c.png";
import imgCSScreenshotPm1  from "@/imports/RabanneCaseStudy-1/f0f05ed2926473531af3c45b06624e8bca9951ed.png";
import imgCS1439           from "@/imports/RabanneCaseStudy-1/55900a17788a7acce2fa311142cd0f162be44688.png";
import imgCS1435           from "@/imports/RabanneCaseStudy-1/143729eedc1616f92b17a7eff926ad7ef5bbe6e0.png";
import imgCS1436           from "@/imports/RabanneCaseStudy-1/8bc828e68f81d84174252f84c159e642c8705318.png";
import imgCS1437           from "@/imports/RabanneCaseStudy-1/5d5f37675508e1f9344a15feb784c455d2f93fe1.png";
import imgHdWireframeMakeup from "@/imports/RabanneCaseStudy-1/hd-wireframe-makeup.gif";
import imgCheckout1        from "@/imports/RabanneCaseStudy-1/checkout-screen-1.png";
import imgCheckout2        from "@/imports/RabanneCaseStudy-1/checkout-screen-2.png";
import imgCheckout3        from "@/imports/RabanneCaseStudy-1/checkout-screen-3.png";
import imgCheckout4        from "@/imports/RabanneCaseStudy-1/checkout-screen-4.png";
import imgOcMacbookFrame   from "@/imports/RabanneCaseStudy-1/oc-macbook-frame.png";
import imgOcMacbookGif     from "@/imports/RabanneCaseStudy-1/oc-macbook-screen.gif";
import imgOcIphoneFrame    from "@/imports/RabanneCaseStudy-1/oc-iphone-frame.png";
import imgOcIphoneGif      from "@/imports/RabanneCaseStudy-1/oc-iphone-screen.gif";
import imgOcAccessibility  from "@/imports/RabanneCaseStudy-1/oc-accessibility.png";
import imgNavOptionA       from "@/imports/RabanneCaseStudy-1/nav-option-a.png";
import imgNavOptionB       from "@/imports/RabanneCaseStudy-1/nav-option-b.png";
import imgDfgWireframes    from "@/imports/RabanneCaseStudy-1/dfg-wireframes.png";
import imgProtoDetail      from "@/imports/RabanneCaseStudy-1/proto-detail.png";
import imgProtoWireframe   from "@/imports/RabanneCaseStudy-1/proto-wireframe.png";

/* ─────────────────────────────────────────────────────────────
   Shared easing — expressive ease-out, feels premium
───────────────────────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

/* Slide-in variants for staggered lists */
const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const listItem = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

/* Card grid stagger */
const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/* ─────────────────────────────────────────────────────────────
   SectionLabel — overline label that slides in from the left
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

/* ─────────────────────────────────────────────────────────────
   SectionH2 — heading that rises into place
───────────────────────────────────────────────────────────── */
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

export default function RabanneCaseStudy() {
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

  /* Parallax on hero image */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-[#fcfbf4]">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative bg-[#f3f3f3] overflow-hidden" style={{ height: 540 }}>
        {/* Left — text, pinned to bottom */}
        <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end px-10 pb-14 w-[52%]">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-['Mulish',sans-serif] font-bold text-[12px] tracking-[1.8px] uppercase text-[#ac4e76] mb-5"
          >
            Case Study — Luxury E-Commerce
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
            >
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#6b7885]">Rabanne.com</p>
              <p className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] text-[#343a3e]">Redesign</p>
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
                className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase border border-[#ac4e76] text-[#ac4e76] px-[17px] py-[9px]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right — perfume bottle with parallax */}
        <motion.div
          className="absolute right-0 top-0 h-full w-[52%] flex items-end justify-center overflow-hidden"
          style={{ y: heroImgY }}
        >
          <motion.img
            src={imgHeroPerfume}
            alt="Rabanne Fame perfume"
            className="h-[115%] w-auto object-contain object-bottom"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
          />
        </motion.div>
      </section>

      {/* ── Process phases bar ────────────────────────────────────────── */}
      <div className="bg-[#f0ece2] border-b border-[#343a3e]/10 sticky top-24 z-30 overflow-x-auto">
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
                  } ${isActive ? "bg-[#ac4e76]/8" : "hover:bg-[#343a3e]/5"}`}
                >
                  <span className={`absolute inset-x-0 bottom-0 h-[2px] transition-all duration-500 ${isActive ? "bg-[#ac4e76]" : isPast ? "bg-[#ac4e76]/25" : "bg-transparent"}`} />
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? "bg-[#ac4e76] scale-125" : isPast ? "bg-[#ac4e76]/40" : "bg-[#343a3e]/20 group-hover:bg-[#343a3e]/40"}`} />
                  <span className={`font-['Mulish',sans-serif] text-[10px] tracking-[2px] transition-colors duration-300 ${isActive ? "text-[#ac4e76]" : "text-[#343a3e]/35"}`}>{phase}</span>
                  <span className={`font-['Mulish',sans-serif] text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isActive ? "text-[#151515]" : isPast ? "text-[#343a3e]/50" : "text-[#343a3e]/35 group-hover:text-[#343a3e]/60"}`}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 01 — Background ──────────────────────────────────────────── */}
      <section id="work-background" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col gap-2 mb-16">
            <SectionLabel>01 — Background</SectionLabel>
            <SectionH2>Background</SectionH2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease }}
            >
              <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[444px]">
                Rabanne is a Parisian luxury fashion house best known for its bold, avant-garde aesthetic. As the brand expanded its direct-to-consumer strategy — including a new loyalty program — the digital experience needed to evolve. The redesign had to balance brand prestige with practical e-commerce performance across fragrance, fashion, and beauty categories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.75, ease, delay: 0.12 }}
              className="relative"
            >
              <img src={imgBgImage12} alt="Rabanne product" className="w-[288px] h-[360px] object-cover" />
              <motion.img
                src={imgBgImage11}
                alt="Rabanne campaign"
                className="absolute top-[90px] left-[189px] w-[308px] h-[257px] object-cover"
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.95, ease, delay: 0.28 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Brief / Central Task ──────────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-[70px] items-start">

            {/* Left — label + heading + intro */}
            <div className="flex flex-col gap-4 lg:w-[470px] flex-shrink-0">
              <SectionLabel>The Brief</SectionLabel>
              <SectionH2>The central task</SectionH2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease, delay: 0.12 }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]"
              >
                {"Rabanne's digital experience had to serve two roles at once:"}
              </motion.p>
            </div>

            {/* Right — numbered cards + highlight box */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex flex-col gap-5 flex-1"
            >
              {[
                { n: "1", title: "A premium brand destination",       sub: "Inspire desire, express the brand world, create a luxury experience" },
                { n: "2", title: "A high-performing e-commerce platform.", sub: "Support browsing, product discovery, loyalty, and checkout" },
              ].map(({ n, title, sub }) => (
                <motion.div key={n} variants={cardItem}>
                  <div className="border border-[#4c657e] flex flex-col gap-3 px-6 py-8">
                    <p className="font-['Mulish',sans-serif] font-bold text-[16px] tracking-[-0.64px] uppercase leading-[1.2] text-[#656663]">{n}</p>
                    <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[18px] text-[#656663]">{title}</p>
                    <p className="font-['Mulish',sans-serif] font-medium text-[11px] leading-[14px] text-[#656663]">{sub}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={cardItem}>
                <div className="bg-[#4c657e] flex flex-col gap-6 p-8">
                  <p className="font-['Mulish',sans-serif] text-[12px] tracking-[2.4px] uppercase text-[#fabdb9]">My Core Challenge</p>
                  <p className="font-['Mulish',sans-serif] text-[16px] leading-[26px] text-white">
                    {"The challenge was not choosing between inspiration and conversion. It was designing an experience where both could "}
                    <span className="font-bold">work together.</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 02 — Goals ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-2 mb-16">
            <SectionLabel>02 — Goals</SectionLabel>
            <SectionH2>Goals</SectionH2>
          </div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { bg: "#dc9660", title: "Maintain Brand integrity",   desc: "Create a premium experience without slowing down shopping." },
              { bg: "#c1d5cf", title: "Optimize Product discovery", desc: "Allow users to browse Rabanne's worlds while still finding products quickly." },
              { bg: "#e6e4de", title: "Support conversion",         desc: "Make checkout easy while creating thoughtful opportunities for account creation and loyalty." },
              { bg: "#dde9f8", title: "Design for personalization", desc: "Make users feel recognized and catered to across the journey, especially through loyalty and custom shopping moments." },
            ].map(({ bg, title, desc }) => (
              <motion.div key={title} variants={cardItem}>
                <div className="flex flex-col gap-8 p-6 h-[234px]" style={{ backgroundColor: bg }}>
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] leading-none uppercase text-black">{title}</p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[18px] text-[#151515]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── My Approach ───────────────────────────────────────────────── */}
      <section className="bg-[#f3f3f3] border-b border-[#343a3e]/10 py-16 flex flex-col items-center gap-8 px-10">
        {/* Bottle floats in from above */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.95, ease }}
          className="w-[200px] h-[260px] flex items-end justify-center overflow-hidden"
        >
          <img
            src={imgApproachBottle}
            alt="Rabanne perfume"
            className="h-full w-auto object-contain object-bottom"
          />
        </motion.div>

        {/* Heading + body centred beneath */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.85, ease, delay: 0.12 }}
          className="flex flex-col gap-4 items-center text-center max-w-[504px]"
        >
          <p className="font-['Mulish',sans-serif] font-bold text-[48px] leading-[1.2] uppercase text-[#1c1f23]">
            My approach:
          </p>
          <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[#151515]">
            I prioritized understanding what makes luxury e-commerce different, balancing brand prestige with usability, and designing for sophisticated customers who expect both beauty and ease.
          </p>
        </motion.div>
      </section>

      {/* ── 02 — Research / Competitive Analysis ──────────────────────── */}
      <section id="work-research" className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="flex items-start px-10 py-16 gap-16 max-w-7xl mx-auto">

          {/* Left — sticky text panel */}
          <div className="w-[38%] flex-shrink-0 sticky top-24 self-start flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <SectionLabel>02 — Research</SectionLabel>
              <SectionH2>Competitive Analysis</SectionH2>
            </div>

            <div className="flex flex-col gap-11">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]"
              >
                I started with exploring how luxury beauty, fashion, and lifestyle brands balance immersive brand storytelling with practical shopping journeys. I especially focused on how they executed:
              </motion.p>

              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                className="flex flex-col gap-9"
              >
                {["Brand storytelling", "Product discovery", "Editorial commerce"].map((item) => (
                  <motion.div key={item} variants={listItem} className="flex items-center gap-4">
                    <span className="w-[6px] h-[6px] bg-[#ac4e76] rounded-full flex-shrink-0" />
                    <span className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: 0.1 }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]"
              >
                This helped me understand which patterns felt premium, which patterns helped users shop faster, and where luxury sites often create friction by prioritizing aesthetics over usability.
              </motion.p>
            </div>
          </div>

          {/* Right — scrolling image collage */}
          <div className="flex-1 flex flex-col gap-8 py-16">
            {/* Image 1 — split screen, wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease }}
              className="flex flex-col gap-2"
            >
              <img src={imgCASplitScreen} alt="Split screen scroll UI" className="w-full object-cover" style={{ aspectRatio: "2040/1127" }} />
              <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">Split screen scroll behavior were popular to balance beautiful imagery and informative content</p>
            </motion.div>

            {/* Images 2 + 3 — side by side */}
            <div className="grid grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: 0.1 }}
                className="flex flex-col gap-2"
              >
                <img src={imgCAPlayful} alt="Playful interactions" className="w-full object-cover" style={{ aspectRatio: "2404/1688" }} />
                <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">Playful interactions keep make distinct impressions</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease, delay: 0.18 }}
                className="flex flex-col gap-2"
              >
                <img src={imgCAFullBleed} alt="Full-bleed imagery" className="w-full object-cover" style={{ aspectRatio: "3/2" }} />
                <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">Full-bleed images gave visual breadth</p>
              </motion.div>
            </div>

            {/* Image 4 — scroll behavior, portrait-ish, centred */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease, delay: 0.12 }}
              className="flex flex-col gap-2 w-[57%]"
            >
              <img src={imgCAScrollBehavior} alt="Unique scroll behavior" className="w-full object-cover" style={{ aspectRatio: "292/309" }} />
              <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">Moments of unique scroll behavior catches attention</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Key Insights ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-2 mb-8">
            <SectionLabel>02 — Insights</SectionLabel>
            <SectionH2>Key Insights</SectionH2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-3xl mb-10"
          >
            Across the luxury e-commerce space, I saw a few patterns that supported the same goals Rabanne was trying to achieve.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease }}
            >
              <div className="border border-[#343a3e]/40 p-8 h-full">
                <p className="font-['Mulish',sans-serif] font-bold text-base uppercase text-[#1c1f23] mb-4">Patterns that worked:</p>
                <ul className="space-y-2">
                  {[
                    "Product imagery carried the first impression",
                    "Navigation stayed minimal and focused",
                    "Micro-interactions added polish without getting in the way",
                    "Trust signals appeared close to decision points",
                    "Service benefits were visible before and during checkout",
                  ].map((item) => (
                    <li key={item} className="font-['Helvetica_Neue',sans-serif] font-medium text-base text-[#343a3e]/70 leading-relaxed list-disc list-outside ml-5">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.08 }}
            >
              <div className="border border-[#343a3e]/40 p-8 h-full">
                <p className="font-['Mulish',sans-serif] font-bold text-base uppercase text-[#1c1f23] mb-4">Identified challenge</p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-base text-[#343a3e]/70 leading-relaxed mb-4">
                  Many luxury sites leaned too far in one direction. Some prioritised storytelling and became harder to shop. Others prioritised conversion and started to feel generic.
                </p>
                <p className="font-['Mulish',sans-serif] font-bold text-base text-[#1c1f23]">Rabanne needed both.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03 — Ideation / HD Wireframes ────────────────────────────── */}
      <section id="work-ideation" className="bg-[#f3f3f3] border-b border-[#343a3e]/10 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-16 lg:w-[42%] flex-shrink-0">
            <div className="flex flex-col gap-3">
              <SectionLabel>03 — Ideation</SectionLabel>
              <SectionH2>High-Definition wireframes</SectionH2>
            </div>

            <div className="flex flex-col gap-6 w-[448px] max-w-full">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.85, ease }}
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]"
              >
                Because the client was less familiar with digital production processes, I used high-fidelity wireframes instead of loose sketches. This helped stakeholders understand the proposed experience more quickly while still leaving room to iterate on structure, hierarchy, and flow. High-fidelity wireframes helped us:
              </motion.p>

              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                className="flex flex-col gap-4"
              >
                {[
                  "Make page layouts and interactions easier to understand",
                  "Get faster stakeholder buy-in",
                  "Reduce confusion around structure and intent",
                  "Keep the process moving without jumping straight into final visuals",
                ].map((item) => (
                  <motion.div key={item} variants={listItem} className="flex items-center gap-3">
                    <span className="w-[4px] h-[4px] rounded-full bg-[#ac4e76] flex-shrink-0" />
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right — wireframe image */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
            className="flex-1 flex flex-col gap-3"
          >
            <img
              src={imgHdWireframeMakeup}
              alt="High-definition wireframe for the makeup homepage"
              className="w-full object-cover"
              style={{ aspectRatio: "1564/1172" }}
            />
            <p className="font-['Mulish',sans-serif] font-medium text-[10px] text-black">A high-definition wireframe for the makeup homepage</p>
          </motion.div>

        </div>
      </section>

      {/* ── Category Representation Ideas ────────────────────────────── */}
      <section className="py-24 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Heading + body */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-16"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2] mb-6">
              Category Representation Ideas
            </h2>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.6)]">
                {"Rabanne's product ecosystem needed to be easy to scan while still feeling distinctive. I explored multiple ways of representing categories, from simple tile systems to more editorial and image-led interactions."}
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.6)]">
                The goal was to compare how each pattern supported different user needs: quick scanning, visual inspiration, category comprehension, and a more memorable brand experience.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.6)]">
                Conclusion: choose patterns that balance clarity, luxury, and scalability.
              </p>
            </div>
          </motion.div>

          {/* Comparison table — labels column + 4 concept columns */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex gap-4 items-stretch"
          >
            {/* Row labels */}
            <motion.div variants={cardItem} className="flex flex-col justify-between w-16 flex-shrink-0 pb-1">
              {/* spacer for image row */}
              <div className="flex-1" />
              <div className="flex flex-col gap-0" style={{ paddingBottom: "0px" }}>
                {["Concept", "Strength", "Risk"].map((label) => (
                  <p key={label} className="font-['Helvetica_Neue',sans-serif] font-medium text-[11px] leading-[14px] text-[#ac4e76] py-2 border-t border-[#ac4e76]/20">
                    {label}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Concept columns */}
            {[
              { img: imgCS1439, concept: "Tiles",           strength: "Fast to scan",       risk: "Less distinctive" },
              { img: imgCS1435, concept: "Scroll-in cards", strength: "Memorable, dynamic", risk: "Could slow browsing" },
              { img: imgCS1437, concept: "Stacked list",    strength: "Compact, efficient", risk: "Less visual impact" },
              { img: imgCS1436, concept: "Image + tabs",    strength: "Premium, brand-led", risk: "Needs strong imagery" },
            ].map(({ img, concept, strength, risk }) => (
              <motion.div key={concept} variants={cardItem} className="flex flex-col flex-1 min-w-0">
                <div className="w-full overflow-hidden mb-4" style={{ aspectRatio: "2/1" }}>
                  <img src={img} alt={concept} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  {[concept, strength, risk].map((val) => (
                    <p key={val} className="font-['Helvetica_Neue',sans-serif] font-medium text-[11px] leading-[14px] text-[#151515] py-2 border-t border-[#343a3e]/10">
                      {val}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Mapping Checkout Complexity ───────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <SectionLabel>03 — Wireframing</SectionLabel>
            <div className="mt-3"><SectionH2>Mapping Checkout Complexity</SectionH2></div>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="flex flex-col gap-6 mb-10 max-w-3xl"
          >
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
              Checkout had to support more than a simple happy path. It needed to account for guest checkout, login, account creation, saved details, regional address requirements, payment methods, gift cards, packaging options, promo codes, shipping choices, error states, and confirmation screens.
            </p>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.6)] max-w-md">
              I mapped these scenarios to make sure the flow could support real shopping behavior while still feeling smooth, premium, and reassuring.
            </p>
          </motion.div>

          {/* 4 checkout wireframe screens */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="flex gap-8 h-[263px] overflow-hidden"
          >
            {[
              { src: imgCheckout1, alt: "Checkout step 1 — login" },
              { src: imgCheckout2, alt: "Checkout step 2 — shipping" },
              { src: imgCheckout3, alt: "Checkout step 3 — payment" },
              { src: imgCheckout4, alt: "Checkout confirmation" },
            ].map(({ src, alt }) => (
              <motion.div
                key={alt}
                variants={cardItem}
                className="flex-1 bg-white overflow-hidden flex items-start"
              >
                <img src={src} alt={alt} className="w-full object-cover object-top" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Other Considerations ──────────────────────────────────────── */}
      <section className="py-24 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-16"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2] mb-4">
              Other Considerations
            </h2>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
              Throughout wireframing, I kept two practical constraints in mind.
            </p>
          </motion.div>

          {/* Row 1 — Responsive design */}
          <div className="flex items-end gap-5 mb-[120px]">

            {/* MacBook mockup with animated GIF screen */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease }}
              className="flex flex-col gap-4 flex-shrink-0 w-[52%]"
            >
              <div className="relative" style={{ aspectRatio: "520/299" }}>
                {/* GIF fills screen area, clipped */}
                <div className="absolute overflow-hidden" style={{ top: "5.7%", left: "11.59%", right: "11.59%", bottom: "10.88%" }}>
                  <img src={imgOcMacbookGif} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Device frame with screen punched out via SVG mask */}
                <img
                  src={imgOcMacbookFrame}
                  alt="MacBook frame"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    maskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><rect width='100' height='100' fill='white'/><rect x='11.59' y='5.7' width='76.82' height='83.42' fill='black'/></svg>\")",
                    WebkitMaskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><rect width='100' height='100' fill='white'/><rect x='11.59' y='5.7' width='76.82' height='83.42' fill='black'/></svg>\")",
                  }}
                />
              </div>
              <p className="font-['Mulish',sans-serif] font-medium text-[10px] text-black">
                Desktop version of the fragrance homepage
              </p>
            </motion.div>

            {/* Text + iPhone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="flex flex-col gap-5 items-end flex-1"
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)] self-stretch">
                <span className="block font-semibold text-[rgba(52,58,62,0.9)] mb-1">Responsive design</span>
                The experience needed to work across desktop, tablet, and mobile, especially for shopping, navigation, mini bag, and checkout flows.
              </p>

              {/* iPhone mockup with animated GIF screen */}
              <div className="flex flex-col gap-3 items-start">
                <div className="relative w-[110px]" style={{ aspectRatio: "110/222" }}>
                  {/* GIF fills screen area, clipped */}
                  <div className="absolute overflow-hidden" style={{ top: "2.68%", left: "6.09%", right: "6.09%", bottom: "2.68%" }}>
                    <img src={imgOcIphoneGif} alt="" className="w-full h-full object-cover" />
                  </div>
                  {/* Device frame with screen punched out via SVG mask */}
                  <img
                    src={imgOcIphoneFrame}
                    alt="iPhone frame"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                      maskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><rect width='100' height='100' fill='white'/><rect x='6.09' y='2.68' width='87.82' height='94.64' fill='black'/></svg>\")",
                      WebkitMaskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><rect width='100' height='100' fill='white'/><rect x='6.09' y='2.68' width='87.82' height='94.64' fill='black'/></svg>\")",
                    }}
                  />
                </div>
                <p className="font-['Mulish',sans-serif] font-medium text-[10px] text-black w-[152px]">
                  Mobile version of the fragrance homepage
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2 — Accessibility */}
          <div className="flex gap-24 items-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)] w-[263px] flex-shrink-0"
            >
              <span className="block font-semibold text-[rgba(52,58,62,0.9)] mb-1">Accessibility</span>
              Layouts, interactions, contrast, form states, and navigation patterns needed to support accessibility expectations, including AA-level considerations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="flex flex-col gap-5 flex-1"
            >
              <img src={imgOcAccessibility} alt="Accessibility controls on hero video" className="w-full" />
              <p className="font-['Mulish',sans-serif] font-normal text-[20px] leading-none text-black">
                example: placing pause and mute buttons in the hero video to be mindful of cognitive sensitivities
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Designing for Growth ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] uppercase text-[#151515] leading-[1.2] mb-6">
              Designing for Growth
            </h2>
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                I also stress-tested components against future product scenarios. Rabanne's product line could expand across different category structures, so components needed to work for small and large sets of products. This helped the team design flexible patterns instead of one-off layouts.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.7)]">
                For example, I explored how the same category component would behave with different numbers and tabs:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <img src={imgDfgWireframes} alt="Category component at 2–6 categories" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* ── 04 — Production / Prototyping ────────────────────────────── */}
      <section id="work-production" className="py-24 bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="flex flex-col gap-3 mb-8">
              <SectionLabel>04 — Production</SectionLabel>
              <div className="mt-1"><SectionH2>Prototyping</SectionH2></div>
            </div>
            <div className="max-w-[638px] flex flex-col gap-4">
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                For complex journeys, I prototyped key parts of the experience so the team could evaluate flow logic, transitions, and edge cases before development.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                The prototypes helped make abstract flow decisions easier to discuss and gave the team a clearer sense of how users would move through the shopping journey.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease }}
              className="relative z-10"
            >
              <img src={imgProtoWireframe} alt="Shopping bag and checkout prototype wireframe" className="w-[82%] shadow-md" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.15 }}
              className="absolute top-0 right-0 w-[36%] shadow-lg z-20"
            >
              <img src={imgProtoDetail} alt="Figma prototype flow detail" className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05 — Testing / Header Usability Test ──────────────────────── */}
      <section className="bg-[#f3f3f3] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-start">

            {/* Sticky left column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, ease }}
              className="sticky top-24 py-16 w-[45%] flex-shrink-0 flex flex-col gap-10"
            >
              <div className="flex flex-col gap-3">
                <SectionLabel>05 — Testing</SectionLabel>
                <div className="mt-1"><SectionH2>Header Usability Test</SectionH2></div>
              </div>
              <div className="flex flex-col gap-5 max-w-[526px]">
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  Navigation was critical because Rabanne spans fragrance, makeup, fashion, gift inspiration, online offers, and editorial worlds. I explored header and mega-menu structures to reduce overwhelm and support product discovery.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  The header had to do more than organize links. It had to guide users through Rabanne's commercial and brand universe.
                </p>
                <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[1.4] text-[rgba(52,58,62,0.8)]">
                  To validate our design decisions, we conducted a user test that asked participants to find a specific product using the new layouts, as well as asked them for their impression of what they see.
                </p>
              </div>
            </motion.div>

            {/* Scrolling right column */}
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="flex-1 py-16 flex flex-col gap-8"
            >
              <motion.div variants={cardItem} className="flex flex-col gap-4">
                <img src={imgNavOptionA} alt="Navigation option A — outliers in a row on top" className="w-full" style={{ aspectRatio: "2/1", objectFit: "cover" }} />
                <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[1.2] text-[#343a3e]">Outliers in a row on top</p>
              </motion.div>

              <motion.div variants={cardItem}>
                <p className="font-['Mulish',sans-serif] font-bold text-[18px] leading-[1.625] text-[rgba(52,58,62,0.8)]">vs</p>
              </motion.div>

              <motion.div variants={cardItem} className="flex flex-col gap-4">
                <img src={imgNavOptionB} alt="Navigation option B — outliers in columns" className="w-full" style={{ aspectRatio: "2/1", objectFit: "cover" }} />
                <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[1.2] text-[#343a3e]">Outliers in columns</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Design System & Handover ──────────────────────────────────── */}
      <section id="work-delivery" className="py-24 border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-2 mb-12">
            <SectionLabel>05 — Delivery</SectionLabel>
            <SectionH2>Design System & Handover</SectionH2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.9, ease }}
              >
                <img src={imgCSDeodorant} alt="Design system components" className="w-full shadow-sm" />
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {[imgCS1117, imgCSImage20].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.85, ease, delay: 0.1 + i * 0.08 }}
                  >
                    <img src={src} alt="Component" className="w-full h-48 object-cover shadow-sm" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.95, ease, delay: 0.12 }}
              className="flex flex-col gap-6"
            >
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)]">
                A well-documented design system was essential to the success of this project. Every component, spacing token, color variable, and typography style was annotated for developer handover — ensuring the design intent survived implementation intact.
              </p>
              <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(52,58,62,0.6)]">
                Because the redesign covered a large e-commerce ecosystem, reusable patterns were essential. A modular component library ensured every page type — homepage, PDP, PLP, checkout, editorial — could be assembled consistently and handed to development with confidence.
              </p>
              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                className="grid grid-cols-2 gap-4"
              >
                {["Colour tokens", "Type scale", "Component variants", "Motion specs"].map((item) => (
                  <motion.div key={item} variants={cardItem} className="border border-[#343a3e]/15 p-4">
                    <p className="font-['Mulish',sans-serif] font-bold text-sm tracking-[0.1em] uppercase text-[#343a3e]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.9, ease }}
            >
              <img src={imgCSImage25} alt="Design handover documentation" className="w-full shadow-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Takeaway ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-2 mb-6">
            <SectionLabel>Outcome</SectionLabel>
            <SectionH2>Key Takeaway</SectionH2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease, delay: 0.06 }}
            className="font-['Helvetica_Neue',sans-serif] font-medium text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[561px] mb-12"
          >
            Luxury e-commerce is a delicate balance. This project reinforced four things I'll carry into every future engagement.
          </motion.p>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              { n: "1", title: "Luxury needs emotion and efficiency",       body: "Prestige without usability frustrates high-value customers. Both must be true simultaneously — not sequentially." },
              { n: "2", title: "Navigation is part of conversion",          body: "How a user moves through a site shapes how they feel about the brand. A confused navigation is a brand problem, not just a UX problem." },
              { n: "3", title: "Checkout is where brand trust becomes practical", body: "Users are most attentive — and most vulnerable — at checkout. Every decision point here carries brand weight." },
              { n: "4", title: "Scalable components protect quality",       body: "A strong design system is the difference between a coherent redesign and a fragmented one. Consistency at scale is only possible through shared components." },
            ].map(({ n, title, body }) => (
              <motion.div key={n} variants={cardItem}>
                <div className="border border-[#343a3e]/30 p-8 h-full flex flex-col gap-4">
                  <p className="font-['Mulish',sans-serif] font-bold text-[48px] leading-none text-[#ac4e76]/30">{n}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] uppercase leading-[1.3] text-[#151515]">{title}</p>
                  <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[14px] leading-[22px] text-[rgba(52,58,62,0.7)]">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Reflection ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#343a3e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.85, ease }}
            className="flex flex-col gap-3 mb-16"
          >
            <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#ac4e76]">Reflection</p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] leading-[48px] uppercase text-white">
              What I learned
            </h2>
            <p className="font-['Helvetica_Neue',sans-serif] font-medium text-[16px] leading-[26px] text-[rgba(238,229,212,0.7)] max-w-[561px] mt-4">
              This project reinforced how important it is to hold brand and commercial goals together without compromise — and how much early documentation, thorough wireframing, and a well-structured design system determines the quality of what gets built.
            </p>
          </motion.div>

          {/* Next case study cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Next case study", title: "Greenswan AI", href: "#" },
              { label: "Next case study", title: "Impossible Foods", href: "#" },
            ].map(({ label, title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
              >
                <div className="bg-[#2a2f32] p-8 flex flex-col gap-6 group cursor-pointer hover:bg-[#252a2d] transition-colors duration-300">
                  <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#ac4e76]">{label}</p>
                  <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase leading-none text-white">{title}</p>
                  <div className="flex items-center gap-2 text-[#ac4e76] group-hover:gap-4 transition-all duration-300">
                    <span className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase">Go to case study</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#ac4e76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
