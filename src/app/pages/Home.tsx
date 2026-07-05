import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/app/components/FadeIn";

import imgMandy from "@/imports/Homepage/mandy-photo-new.png";
import imgImpossibleFoods from "@/imports/Homepage-1/1a68ff5c11842af2a73d7befffb28d5613499aac.png";
import imgGreenswan from "@/imports/Homepage-1/e682f7e923d81b41e3541a21d9ea8b21aa701164.png";
import imgImage7 from "@/imports/Rabanne/c9f568503f2e6cc411908b2e6e5f6542def23f8b.png";
import imgImage6 from "@/imports/Rabanne/fa56e89f1bf1038d17164892a4fb54db40666cb0.png";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfbf4]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="h-screen flex flex-col justify-end px-10 pb-16 pt-0">
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase text-black leading-none"
          >
            Hi! I'm
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="font-['Mulish',sans-serif] font-normal text-[clamp(4rem,8vw,6rem)] text-[#232a27] leading-none"
            >
              Mandy Losk
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#232a27]/40 to-transparent"
          />
          <span className="font-['Mulish',sans-serif] text-xs tracking-[0.3em] uppercase text-[#232a27]/35">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── About — sticky image ───────────────────────────────────── */}
      {/*
        The right column (photo) is sticky: it stays pinned while the left
        text scrolls within the shared container. The container must be tall
        enough for the sticky effect to be visible — min-height: 100vh ensures
        that. On mobile the photo stacks above the text normally.
      */}
      <section className="relative flex flex-col lg:flex-row items-start px-10 gap-16 lg:gap-24 min-h-screen">
        {/* Left — text scrolls normally */}
        <div className="w-full lg:w-[38%] flex-shrink-0 py-24 lg:py-32 flex flex-col gap-8">
          <FadeIn>
            <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase text-black leading-none mb-6">
              About me
            </p>
            <p
              className="font-['Mulish',sans-serif] font-normal text-[#232a27] leading-[1.2]"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)" }}
            >
              {"I'm a UX/UI Designer and storyteller who cares most about the little things."}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 mt-4 font-['Mulish',sans-serif] font-bold text-sm tracking-[0.2em] uppercase text-[#232a27] border-b border-[#232a27]/30 pb-1 hover:border-[#232a27] transition-colors duration-200"
            >
              Get in touch <ArrowRight size={14} />
            </button>
          </FadeIn>
        </div>

        {/* Right — sticky photo */}
        <div className="hidden lg:block flex-1 sticky top-16 h-[calc(100vh-4rem)] self-start overflow-hidden">
          <motion.img
            src={imgMandy}
            alt="Mandy Losk"
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease }}
          />
        </div>

        {/* Mobile — photo stacks below text */}
        <div className="lg:hidden w-full overflow-hidden mb-8">
          <img src={imgMandy} alt="Mandy Losk" className="w-full aspect-[3/4] object-cover object-center" />
        </div>
      </section>

      {/* ── Experience in a nutshell ───────────────────────────────── */}
      <section className="py-20 px-10">
        <FadeIn>
          <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase text-black leading-none mb-8">
            Experience in a nutshell
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-6 items-stretch">
          {[
            {
              bg: "#ff6c02",
              category: "AI Softwares",
              body: "A lot of AI products ask users to trust something they can't fully see. I've spent time figuring out how the interface can make that easier, without pretending the complexity isn't there.",
              clients: "Greenswan.ai · Copydesk · Monks.Flow",
            },
            {
              bg: "#c1d5cf",
              category: "E-commerce",
              body: "Luxury commerce is less about the purchase and more about what leads up to it. I've worked on the quieter parts of that journey, where the design either earns confidence or quietly loses it.",
              clients: "Rabanne · Studio Ehlén · Boutique Group",
            },
            {
              bg: "#e6e4de",
              category: "Brand awareness",
              body: "Some products need the website to do a lot of convincing before anyone reaches for their wallet. I find that work interesting. Getting the structure right so the story can actually land.",
              clients: "Impossible Foods · Resmed",
            },
          ].map(({ bg, category, body, clients }, i) => (
            <FadeIn key={category} delay={i * 0.08} className="flex-1">
              <div
                className="flex flex-col justify-between px-6 py-7 text-black h-full min-h-[320px]"
                style={{ backgroundColor: bg }}
              >
                <div className="flex flex-col gap-5">
                  <p className="font-['Mulish',sans-serif] font-bold text-[22px] uppercase leading-tight">{category}</p>
                  <p className="font-['Mulish',sans-serif] font-normal text-[15px] leading-[1.55] text-black/70">{body}</p>
                </div>
                <p className="font-['Mulish',sans-serif] font-normal text-[13px] leading-[1.4] text-black/50 mt-8 tracking-wide">{clients}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Work grid ─────────────────────────────────────────────── */}
      <section className="py-20 px-10">
        <FadeIn className="mb-8">
          <p className="font-['Mulish',sans-serif] font-bold text-[32px] uppercase text-black leading-none">
            Work
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Rabanne */}
          <FadeIn delay={0.05}>
            <button
              onClick={() => navigate("/work/rabanne")}
              className="group block w-full text-left overflow-hidden"
              style={{ aspectRatio: "520/292.5", background: "#f3f3f3", position: "relative" }}
            >
              <img
                src={imgImage7}
                alt="Rabanne"
                className="absolute object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ left: "60%", top: "-12.5%", bottom: "-12.5%", width: "40%", height: "125%" }}
              />
              <img
                src={imgImage6}
                alt="Rabanne site"
                className="absolute object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ left: "0%", top: "11.4%", bottom: "8.6%", width: "75%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </button>
          </FadeIn>

          {/* Impossible Foods */}
          <FadeIn delay={0.1}>
            <button
              onClick={() => navigate("/work/impossible-foods")}
              className="overflow-hidden relative w-full block cursor-pointer group focus-visible:outline-none"
              style={{ aspectRatio: "520/292.5", background: "#260212" }}
            >
              <img
                src={imgImpossibleFoods}
                alt="Impossible Foods"
                className="absolute object-cover w-full transition-transform duration-700 group-hover:scale-105"
                style={{ top: "35%", bottom: "0.2%", left: 0 }}
              />
              <div className="absolute inset-0 bg-[#260212]/0 group-hover:bg-[#260212]/20 transition-colors duration-500" />
            </button>
          </FadeIn>

          {/* Greenswan */}
          <FadeIn delay={0.15}>
            <div
              className="overflow-hidden relative flex items-center justify-center"
              style={{ aspectRatio: "520/292.5", background: "#092626" }}
            >
              <img
                src={imgGreenswan}
                alt="Greenswan.ai"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#36413d] text-center px-6">
        <FadeIn>
          <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-6xl uppercase text-[#eee5d4] mb-8 leading-none">
            {"Let's work\ntogether."}
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-3 bg-[#eee5d4] text-[#36413d] px-10 py-4 font-['Mulish',sans-serif] font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 rounded-[4px]"
          >
            Reach Out
            <ArrowRight size={16} />
          </button>
        </FadeIn>
      </section>

    </div>
  );
}
