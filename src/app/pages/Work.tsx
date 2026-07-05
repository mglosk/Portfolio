import { useNavigate } from "react-router";
import { motion } from "motion/react";

import { FadeIn } from "@/app/components/FadeIn";

import imgImpossibleFoods from "@/imports/Homepage-1/1a68ff5c11842af2a73d7befffb28d5613499aac.png";
import imgGreenswan from "@/imports/Homepage-1/e682f7e923d81b41e3541a21d9ea8b21aa701164.png";
import imgImage7 from "@/imports/Rabanne/c9f568503f2e6cc411908b2e6e5f6542def23f8b.png";
import imgImage6 from "@/imports/Rabanne/fa56e89f1bf1038d17164892a4fb54db40666cb0.png";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    slug: "/work/rabanne",
    title: "Rabanne",
    subtitle: "E-commerce redesign",
    tags: ["UX Design", "Wireframing", "Prototyping", "Design System"],
    year: "2024",
    bg: "#f3f3f3",
    available: true,
    render: (hovered: boolean) => (
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imgImage7}
          alt=""
          className="absolute object-cover transition-transform duration-700"
          style={{
            left: "58%", top: "-15%", bottom: "-15%", width: "42%", height: "130%",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <img
          src={imgImage6}
          alt=""
          className="absolute object-cover transition-transform duration-700"
          style={{
            left: "0", top: "10%", bottom: "8%", width: "68%",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>
    ),
  },
  {
    slug: "/work/impossible-foods",
    title: "Impossible Foods",
    subtitle: "Website redesign",
    tags: ["Information Architecture", "Wireframing", "UX Writing", "Design System"],
    year: "2024",
    bg: "#260212",
    available: true,
    render: (hovered: boolean) => (
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imgImpossibleFoods}
          alt=""
          className="absolute object-cover w-full transition-transform duration-700"
          style={{
            top: "30%", bottom: "0", left: 0,
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
    ),
  },
  {
    slug: null,
    title: "Greenswan AI",
    subtitle: "AI platform design",
    tags: ["Product Design", "AI UX", "Prototyping"],
    year: "2023",
    bg: "#092626",
    available: false,
    render: (_hovered: boolean) => (
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={imgGreenswan} alt="" className="w-2/5 h-2/5 object-contain opacity-80" />
      </div>
    ),
  },
] as const;

export default function Work() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfbf4] pt-24">

      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="px-10 py-20 border-b border-[#343a3e]/10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-[3px] text-[#343a3e]/50 mb-6"
        >
          Selected work
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="font-['Mulish',sans-serif] font-bold text-[clamp(3rem,7vw,5rem)] uppercase text-[#151515] leading-none"
          >
            Work
          </motion.h1>
        </div>
      </section>

      {/* ── Project list ──────────────────────────────────────────── */}
      <section className="px-10 py-16 flex flex-col gap-6">
        {projects.map(({ slug, title, subtitle, tags, year, bg, available, render }, i) => (
          <ProjectCard
            key={title}
            index={i}
            slug={slug}
            title={title}
            subtitle={subtitle}
            tags={tags}
            year={year}
            bg={bg}
            available={available}
            render={render}
            onNavigate={navigate}
          />
        ))}
      </section>

    </div>
  );
}

/* ── Card ─────────────────────────────────────────────────────── */
function ProjectCard({
  index,
  slug,
  title,
  subtitle,
  tags,
  year,
  bg,
  available,
  render,
  onNavigate,
}: {
  index: number;
  slug: string | null;
  title: string;
  subtitle: string;
  tags: readonly string[];
  year: string;
  bg: string;
  available: boolean;
  render: (hovered: boolean) => React.ReactNode;
  onNavigate: (path: string) => void;
}) {
  const isLight = bg === "#f3f3f3";

  return (
    <FadeIn delay={index * 0.1}>
      <div
        role={available ? "button" : undefined}
        tabIndex={available ? 0 : undefined}
        onClick={() => available && slug && onNavigate(slug)}
        onKeyDown={(e) => e.key === "Enter" && available && slug && onNavigate(slug)}
        className={`group flex flex-col lg:flex-row items-stretch border border-[#343a3e]/10 overflow-hidden ${available ? "cursor-pointer" : "cursor-default"}`}
      >
        {/* Thumbnail */}
        <div
          className="relative w-full lg:w-[480px] flex-shrink-0"
          style={{ aspectRatio: "16/9", backgroundColor: bg }}
        >
          {render(false /* hover state handled via CSS group */)}
          {!available && (
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-['Mulish',sans-serif] text-[11px] tracking-[2px] uppercase text-white/40">
                Coming soon
              </span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div
          className={`flex flex-col justify-between px-10 py-10 flex-1 transition-colors duration-300 ${
            available
              ? isLight
                ? "bg-white group-hover:bg-[#f7f3ea]"
                : "bg-[#fcfbf4] group-hover:bg-[#f7f3ea]"
              : "bg-[#fcfbf4]"
          }`}
        >
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-['Mulish',sans-serif] font-bold text-[28px] uppercase text-[#151515] leading-none mb-2">
                  {title}
                </p>
                <p className="font-['Mulish',sans-serif] font-normal text-[15px] text-[#343a3e]/55 uppercase tracking-wide">
                  {subtitle}
                </p>
              </div>
              <span className="font-['Mulish',sans-serif] text-[13px] text-[#343a3e]/35 flex-shrink-0 pt-1">
                {year}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-['Mulish',sans-serif] text-[11px] tracking-[1.8px] uppercase border border-[#343a3e]/20 px-3 py-1.5 text-[#343a3e]/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {available && (
              <div className="flex items-center gap-2 text-[#343a3e]/40 group-hover:text-[#151515] group-hover:gap-4 transition-all duration-300">
                <span className="font-['Mulish',sans-serif] text-[12px] tracking-[2px] uppercase">
                  View case study
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
