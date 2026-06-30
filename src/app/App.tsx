import image_Rabanne from '@/imports/Rabanne.png'
import image_Capture_2026_06_28_143112 from '@/imports/Capture-2026-06-28-143112.png'
import image_Capture_2026_06_28_143059 from '@/imports/Capture-2026-06-28-143059.png'
import image_Capture_2026_06_28_132827 from '@/imports/Capture-2026-06-28-132827.png'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";

// --- Homepage design imports ---
import imgMandy from "@/imports/Homepage/b0e927e3b82eaf44d3e05686143bea40dbec3ef5.png";
import svgHomepagePaths from "@/imports/Homepage/svg-9svjyik9ii";

// --- Homepage-1 work thumbnails ---
import imgImpossibleFoods from "@/imports/Homepage-1/1a68ff5c11842af2a73d7befffb28d5613499aac.png";
import imgGreenswan from "@/imports/Homepage-1/e682f7e923d81b41e3541a21d9ea8b21aa701164.png";

// --- RabanneCaseStudy-1 images ---
import imgCaseStudyHero from "@/imports/RabanneCaseStudy-1/288247995274c7358e07cee74fbaa83ac30ead7a.png";
import imgBgImage11 from "@/imports/RabanneCaseStudy-1/546240953078fa93ba80c93c962140564896d099.png";
import imgBgImage12 from "@/imports/RabanneCaseStudy-1/6b032040bd20a4efc1863f95a026c61365f6b758.png";
import imgCS1425 from "@/imports/RabanneCaseStudy-1/ede5ad2dd15e183b6507e986d591a314da49370c.png";
import imgCS1423 from "@/imports/RabanneCaseStudy-1/422f8ea5f7f2a52dfc8cfb81d4ccb7f6d0c8190a.png";
import imgCS1422 from "@/imports/RabanneCaseStudy-1/ddcc5c15b2558bd0d9e2edf94f5e25968b7d46be.png";
import imgCS1426 from "@/imports/RabanneCaseStudy-1/572c2494955af4e0d05ea35012fafbb2f8325abd.png";
import imgCSFrame080 from "@/imports/RabanneCaseStudy-1/8cffbdddfbacf177c61272bec19de3d3d086ac47.png";
import imgCSFrame081 from "@/imports/RabanneCaseStudy-1/5c4cff87082fdbb08d2091b86856a7d50d02f149.png";
import imgCSFrame082 from "@/imports/RabanneCaseStudy-1/d8d56e32224f0d250ec2d3eb7d25a213616f95c9.png";
import imgCSFrame083 from "@/imports/RabanneCaseStudy-1/aad9e30ff59ecbd9f606fd31b8cfe7d8bebc9858.png";
import imgCSProto from "@/imports/RabanneCaseStudy-1/7cfff702d6d84c90baed3bf70b77aa24968567cf.png";
import imgCS1440 from "@/imports/RabanneCaseStudy-1/a00f357fe9226ca38a98b039cb6559b4e302543e.png";
import imgCS1441 from "@/imports/RabanneCaseStudy-1/550d2cf30d6351ddd1c18e3c24e957652d580d93.png";
import imgCSImage20 from "@/imports/RabanneCaseStudy-1/6423dad5b41857a5797ff17172d5b5a71d3b9729.png";
import imgCSImage25 from "@/imports/RabanneCaseStudy-1/457292327ac368e9cadc43ed4914b485aa44abc9.png";
import imgCS1117 from "@/imports/RabanneCaseStudy-1/7953439d76b19e75653ee7d6e127494e66f389aa.png";
import imgCSRect10062 from "@/imports/RabanneCaseStudy-1/aaa3a1f23088a15fe4223645fdfad12086f75aa2.png";
import imgCSDeodorant from "@/imports/RabanneCaseStudy-1/ad366e3cc2fc4f54d8de9086747b14e8298bf69c.png";
import imgCSImage38 from "@/imports/RabanneCaseStudy-1/ece45c3b2229b6f26eb7a7c2db1660b00e5f90b5.png";
import imgCSScreenshotPm1 from "@/imports/RabanneCaseStudy-1/f0f05ed2926473531af3c45b06624e8bca9951ed.png";
import imgCS1439 from "@/imports/RabanneCaseStudy-1/55900a17788a7acce2fa311142cd0f162be44688.png";
import imgCS1435 from "@/imports/RabanneCaseStudy-1/143729eedc1616f92b17a7eff926ad7ef5bbe6e0.png";
import imgCS1436 from "@/imports/RabanneCaseStudy-1/8bc828e68f81d84174252f84c159e642c8705318.png";
import imgCS1437 from "@/imports/RabanneCaseStudy-1/5d5f37675508e1f9344a15feb784c455d2f93fe1.png";

// --- Image imports from the design ---
import imgImage7 from "@/imports/Rabanne/c9f568503f2e6cc411908b2e6e5f6542def23f8b.png";
import imgImage6 from "@/imports/Rabanne/fa56e89f1bf1038d17164892a4fb54db40666cb0.png";
import imgScreen from "@/imports/Rabanne/040bb482e9cfd81f1e2881188a43a2a9f8d4174a.png";
import imgImage4 from "@/imports/Rabanne/f6ffbace16024e414fd06158e80b941071de88ac.png";
import imgFrame657325080 from "@/imports/Rabanne/4764173cc8c54e0a3201b7892bfd5fe0112537cd.png";
import imgFrame657325162 from "@/imports/Rabanne/864b5d1f7fb0d29976176d9cb476c4e58aa4099e.png";
import imgFrame657325164 from "@/imports/Rabanne/33424e38add76db0de0bf7d8e6e1cb8716433bf8.png";
import imgFrame657325165 from "@/imports/Rabanne/82602982098189f7b630f653c8e445854ca38fa0.png";
import imgFrame657325081 from "@/imports/Rabanne/d8d56e32224f0d250ec2d3eb7d25a213616f95c9.png";
import imgFrame657325082 from "@/imports/Rabanne/aad9e30ff59ecbd9f606fd31b8cfe7d8bebc9858.png";
import imgFrame657325083 from "@/imports/Rabanne/6caafef7a21862a464fc1e5c1a6f15e0b48e08f6.png";
import imgFrame657325084 from "@/imports/Rabanne/af4ff978c7810de56dfa7de8abe7c2cfe609f91a.png";
import imgScreenshot1 from "@/imports/Rabanne/bdacbbde29d0bb5a348137b651bec73ddeca04ac.png";
import imgScreenshot2 from "@/imports/Rabanne/a3638638d6177bd7e317463ead436e25f9444b53.png";
import imgImage1426 from "@/imports/Rabanne/4da5bd8aa03073cc68117c4ad01a95d0ca57c902.png";
import imgImage1427 from "@/imports/Rabanne/651d22d3278c6160a9ec8ca7df7a9d3277222d81.png";
import imgImage from "@/imports/Rabanne/27879cfb48c868c7a1ee91335e210b7308643806.png";
import imgImage1 from "@/imports/Rabanne/f4dd0475aec72ae9ac3c2553b3365b69e16f5362.png";
import imgImage2 from "@/imports/Rabanne/1af27ee79489839dab2f10c6ca30b51db6c47eed.png";
import imgImg from "@/imports/Rabanne/5e7717120c5522b9bb8832cf45a411a2b3fff5b7.png";
import imgImage1118 from "@/imports/Rabanne/a2371597e18d7872689efd4faab61c24411b6b4c.png";
import imgImg1 from "@/imports/Rabanne/0bc3d64dc36a8c0b31d8f695cdd685785c49465e.png";
import imgImage1428 from "@/imports/Rabanne/c2f988974bf75d5fd6c8b0ea95c503b25f677586.png";
import imgImage1429 from "@/imports/Rabanne/138f3cbba608c0611712d286c558913cc6943e94.png";
import img36 from "@/imports/Rabanne/afb5d7dfa2407131b5de395a799d2e95ae3717ce.png";
import img37 from "@/imports/Rabanne/50a69c184d733108a3fca5ee166631a483a79eec.png";
import imgRectangle10062 from "@/imports/Rabanne/19c01f28c6970a442e7684d1bf845ad76096d466.png";
import imgRectangle144433150 from "@/imports/Rabanne/0d4ce592c884c874eaadab40ff6912db128dc378.png";
import imgFrame657325166 from "@/imports/Rabanne/f7d74af725c5346d4a3fe235483f54a685867903.png";
import imgImage1119 from "@/imports/Rabanne/9ea04c52ceb40f3d6e9e9324c620f82618180d6d.png";
import imgImage1120 from "@/imports/Rabanne/d2a005f67615f62636233484a34c900087a915ec.png";
import imgImage1121 from "@/imports/Rabanne/eeaac387751a3854798a9c278c84864f52e5e580.png";
import imgImage3 from "@/imports/Rabanne/cbca0bb27aa75529358286e631fc50c5f376d025.png";
import img106024975401262 from "@/imports/Rabanne/94239f26957bd950233704ddcec982d92e10aa89.png";

type Page = "home" | "work" | "contact";

// ─── Utility ─────────────────────────────────────────────────────────────────

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Work", page: "work" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (p: Page) => {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fcfbf4]/95 backdrop-blur-md border-b border-[#343a3e]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group text-[#232a27] hover:text-[#d4af37] transition-colors duration-300"
          >
            <LogoMark />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-14">
            <button
              onClick={() => handleNav("work")}
              className={`font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-wide transition-colors duration-200 ${page === "work" ? "text-[#232a27]" : "text-[#232a27]/50 hover:text-[#232a27]"}`}
            >
              Work
            </button>
            <button
              onClick={() => handleNav("home")}
              className={`font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-wide transition-colors duration-200 ${page === "home" ? "text-[#232a27]" : "text-[#232a27]/50 hover:text-[#232a27]"}`}
            >
              About
            </button>
            <button
              onClick={() => handleNav("contact")}
              className="bg-[#36413d] text-[#eee5d4] font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-wide px-4 py-3 rounded-[4px] hover:bg-[#232a27] transition-colors duration-200"
            >
              Reach Out
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#343a3e] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#fcfbf4] flex flex-col pt-20 px-8"
          >
            <nav className="flex flex-col gap-8 pt-8">
              {nav.map(({ label, page: p }) => (
                <button
                  key={p}
                  onClick={() => handleNav(p)}
                  className={`font-['Mulish',sans-serif] text-4xl font-bold uppercase tracking-wider text-left transition-colors duration-200 ${
                    page === p ? "text-[#343a3e]" : "text-[#343a3e]/40"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
            <div className="mt-auto pb-12 border-t border-[#343a3e]/10 pt-8">
              <p className="font-['Inter',sans-serif] text-sm text-[#343a3e]/50 tracking-wide">
                UX Design Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const handleNav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#343a3e] text-[#eee5d4] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-xl tracking-[0.25em] uppercase text-[#d4af37] mb-4">
            rabanne
          </p>
          <p className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/60 leading-relaxed max-w-xs">
            A UX case study exploring luxury e-commerce design for Rabanne — balancing brand elegance with conversion-focused shopping journeys.
          </p>
        </div>
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.2em] uppercase text-[#eee5d4]/40 mb-5">
            Navigation
          </p>
          <div className="flex flex-col gap-3">
            {(["home", "work", "contact"] as Page[]).map((p) => (
              <button
                key={p}
                onClick={() => handleNav(p)}
                className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200 text-left capitalize"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.2em] uppercase text-[#eee5d4]/40 mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@example.com"
              className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200"
            >
              hello@designer.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#eee5d4]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter',sans-serif] text-xs text-[#eee5d4]/30">
            © 2026 UX Case Study. All rights reserved.
          </p>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.15em] uppercase text-[#eee5d4]/20">
            Rabanne Redesign Project
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

// ─── Homepage logo mark (from import) ────────────────────────────────────────

function LogoMark() {
  return (
    <div className="relative w-[42px] h-[59px] flex-shrink-0">
      <div className="absolute inset-[1.69%_2.38%_30.51%_2.38%]">
        <div className="absolute inset-[-1.88%_-1.88%_-1.87%_-1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5 41.5">
            <g>
              <path d={svgHomepagePaths.p9b3e700} stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgHomepagePaths.p332b2600} stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgHomepagePaths.p127c7a00} stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgHomepagePaths.p3167d3e0} stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgHomepagePaths.pda11200} fill="currentColor" />
              <path d={svgHomepagePaths.p1cbd6c00} fill="currentColor" />
              <path d={svgHomepagePaths.p3cddd600} fill="currentColor" />
              <path d={svgHomepagePaths.p2a306c00} fill="currentColor" />
              <path d={svgHomepagePaths.p7ad8080} fill="currentColor" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute left-[5px] top-[50px] flex gap-[2px] font-['Inter',sans-serif] font-medium text-[11px] text-black tracking-wider">
        <span>M</span><span>G</span><span>L</span>
      </div>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const navTo = (p: Page) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-[#fcfbf4]">

      {/* ── Hero name ─────────────────────────────────────────── */}
      <section className="h-screen flex flex-col justify-end pb-16 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-['Mulish',sans-serif] font-normal text-[clamp(3rem,9vw,6rem)] text-[#232a27] leading-none"
        >
          Mandy Losk
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-10 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#232a27]/40 to-transparent"
          />
          <span className="font-['Inter',sans-serif] text-xs tracking-[0.3em] uppercase text-[#232a27]/35">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="flex-1 max-w-xl">
            <FadeIn>
              <p className="font-['Mulish',sans-serif] font-bold text-sm uppercase text-[#232a27] tracking-widest mb-8">
                About me
              </p>
              <p className="font-['Mulish',sans-serif] font-normal text-[clamp(1.5rem,3.5vw,3rem)] text-[#232a27] leading-[1.5]">
                {"I'm a UX/UI Designer and storyteller who cares most about the little things."}
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="w-full lg:w-[404px] flex-shrink-0">
            <div className="overflow-hidden">
              <motion.img
                src={imgMandy}
                alt="Mandy Losk"
                className="w-full h-[404px] object-cover"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Experience in a nutshell ───────────────────────────── */}
      <section className="py-20 px-6 md:px-20">
        <FadeIn>
          <p className="font-['Mulish',sans-serif] font-bold text-sm uppercase text-[#232a27] tracking-widest mb-8">
            Experience in a nutshell
          </p>
          <p className="font-['Mulish',sans-serif] font-normal text-[clamp(1.5rem,3.5vw,3rem)] text-[#232a27] leading-[1.5] max-w-4xl mb-12">
            I have extensive experience in creation of AI platforms, e-commerce, and brand awareness.
          </p>
        </FadeIn>

        {/* Row 1: AI Softwares + Brand awareness */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          {[
            { bg: "#ff6c02", category: "AI Softwares",   clients: "Greenswan.ai , Copydesk, Monks.Flow" },
            { bg: "#e6e4de", category: "Brand awareness", clients: "Impossible Foods, Resmed" },
          ].map(({ bg, category, clients }, i) => (
            <FadeIn key={category} delay={i * 0.08} className="flex-1">
              <div
                className="flex flex-col justify-between px-5 py-4 text-black"
                style={{ backgroundColor: bg, height: "135px" }}
              >
                <p className="font-['Mulish',sans-serif] font-semibold text-[24px] leading-[1.5]">{category}</p>
                <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[1.2]">{clients}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Row 2: E-commerce (left-aligned, same width as one card) */}
        <FadeIn delay={0.16} className="sm:w-[calc(50%-12px)]">
          <div
            className="flex flex-col justify-between px-5 py-4 text-black"
            style={{ backgroundColor: "#c1d5cf", height: "135px" }}
          >
            <p className="font-['Mulish',sans-serif] font-semibold text-[24px] leading-[1.5]">E-commerce</p>
            <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[1.2]">{"Rabanne, Studio Ehlén,  Boutique Group"}</p>
          </div>
        </FadeIn>
      </section>

      {/* ── Work grid ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20">
        <FadeIn className="mb-8">
          <p className="font-['Mulish',sans-serif] font-bold text-sm uppercase text-[#232a27] tracking-widest">
            Work
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Rabanne */}
          <FadeIn delay={0.05}>
            <button
              onClick={() => navTo("work")}
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
            <div
              className="overflow-hidden relative"
              style={{ aspectRatio: "520/292.5", background: "#260212" }}
            >
              <img
                src={imgImpossibleFoods}
                alt="Impossible Foods"
                className="absolute object-cover w-full"
                style={{ top: "35%", bottom: "0.2%", left: 0 }}
              />
            </div>
          </FadeIn>

          {/* Greenswan / AI slide */}
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#36413d] text-center px-6">
        <FadeIn>
          <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-6xl uppercase text-[#eee5d4] mb-8 leading-none">
            {"Let's work\ntogether."}
          </h2>
          <button
            onClick={() => navTo("contact")}
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

// ─── Work Page ────────────────────────────────────────────────────────────────

function WorkPage() {
  const [activePhase, setActivePhase] = useState<string>("work-background");

  useEffect(() => {
    const sectionIds = [
      "work-background",
      "work-research",
      "work-ideation",
      "work-production",
      "work-delivery",
    ];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActivePhase(id); },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf4]">
      {/* Hero */}
      <section className="relative bg-[#151515] overflow-hidden" style={{ height: "454px" }}>
        {/* Photo bleeds from right */}
        <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden">
          <img
            src={imgCaseStudyHero}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end px-10 pb-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[1.8px] uppercase text-[#ac4e76] mb-5">
              Case Study — Luxury E-Commerce
            </p>
            <div className="font-['Mulish',sans-serif] font-black text-[72px] uppercase leading-[72px] mb-8">
              <p className="text-[#6b7885]">Rabanne.com</p>
              <p className="text-[#343a3e]">Redesign</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Research", "Wireframing", "Prototyping", "Design System"].map((tag) => (
                <span
                  key={tag}
                  className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[2.4px] uppercase border border-[#ac4e76] text-[#ac4e76] px-[17px] py-[9px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process phases bar — clickable progress tracker */}
      <div className="bg-[#343a3e] sticky top-16 z-30 overflow-x-auto">
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
              const phaseIds = arr.map(p => p.id);
              const activeIdx = phaseIds.indexOf(activePhase as typeof phaseIds[number]);
              const thisIdx   = i;
              const isActive  = activePhase === id;
              const isPast    = activeIdx > thisIdx;
              return (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 128;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-5 transition-colors duration-300 focus-visible:outline-none ${
                    i < arr.length - 1 ? "border-r border-[#eee5d4]/10" : ""
                  } ${isActive ? "bg-[#eee5d4]/10" : "hover:bg-[#eee5d4]/5"}`}
                >
                  {/* gold progress line at top edge */}
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] transition-all duration-500 ${
                      isActive ? "bg-[#d4af37]" : isPast ? "bg-[#d4af37]/35" : "bg-transparent"
                    }`}
                  />
                  {/* state dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-[#d4af37] scale-125"
                        : isPast
                        ? "bg-[#d4af37]/45"
                        : "bg-[#eee5d4]/20 group-hover:bg-[#eee5d4]/50"
                    }`}
                  />
                  <span
                    className={`font-['Barlow_Condensed',sans-serif] text-[10px] transition-colors duration-300 ${
                      isActive ? "text-[#d4af37]" : "text-[#d4af37]/35"
                    }`}
                  >
                    {phase}
                  </span>
                  <span
                    className={`font-['Barlow_Condensed',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-[#eee5d4]"
                        : isPast
                        ? "text-[#eee5d4]/45"
                        : "text-[#eee5d4]/30 group-hover:text-[#eee5d4]/65"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section: Background */}
      <section id="work-background" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <FadeIn className="mb-16">
            <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#ac4e76] mb-3">
              01 — Background
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] leading-[48px] uppercase text-[#151515]">
              Background
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[444px]">
                Rabanne was revamping its e-commerce ecosystem as part of a broader direct-to-consumer push. With a new loyalty program launching, the site needed to do more than showcase products. It had to help users discover products, move through shopping journeys, and feel invited into the Rabanne brand world.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative">
                <img src={imgBgImage12} alt="Rabanne product" className="w-[288px] h-[360px] object-cover" />
                <img src={imgBgImage11} alt="Rabanne campaign" className="absolute top-[90px] left-[189px] w-[308px] h-[257px] object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: The Central Task */}
      <section className="py-10 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">

          {/* Header */}
          <FadeIn className="mb-6">
            <p className="font-[‘Barlow_Condensed’,sans-serif] text-[12px] tracking-[3.6px] uppercase text-[#ac4e76] mb-1">
              The Brief
            </p>
            <h2 className="font-[‘Mulish’,sans-serif] font-bold text-[48px] leading-[48px] uppercase text-[#1c1f23]">
              The central task
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.05}>
            <p className="font-[‘Inter’,sans-serif] text-[16px] leading-[32.5px] text-[#343a3e]/80 mb-10">
              {"Rabanne’s digital experience had to serve two roles at once:"}
            </p>
          </FadeIn>

          {/* Role cards + challenge block */}
          <div className="flex flex-col gap-[18px] max-w-[925px]">

            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="border border-[#e5e7eb] bg-[#f7f3ea]">
                <div className="flex flex-col gap-3 p-6">
                  <p className="font-[‘Mulish’,sans-serif] font-bold text-[16px] tracking-[-0.64px] uppercase leading-[1.2] text-[#616d79]">1</p>
                  <p className="font-[‘Inter’,sans-serif] font-medium text-[14px] leading-[18px] text-[#616d79] whitespace-nowrap">A premium brand destination</p>
                  <p className="font-[‘Inter’,sans-serif] font-medium text-[11px] leading-[14px] text-[#616d79] max-w-[392px]">Inspire desire, express the brand world, create a luxury experience</p>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.15}>
              <div className="border border-[#e5e7eb] bg-[#f7f3ea]">
                <div className="flex flex-col gap-3 p-6">
                  <p className="font-[‘Mulish’,sans-serif] font-bold text-[16px] tracking-[-0.64px] uppercase leading-[1.2] text-[#616d79]">2</p>
                  <p className="font-[‘Inter’,sans-serif] font-medium text-[14px] leading-[18px] text-[#616d79] whitespace-nowrap">A high-performing e-commerce platform.</p>
                  <p className="font-[‘Inter’,sans-serif] font-medium text-[11px] leading-[14px] text-[#616d79] max-w-[264px]">Support browsing, product discovery, loyalty, and checkout</p>
                </div>
              </div>
            </FadeIn>

            {/* My Core Challenge */}
            <FadeIn delay={0.2}>
              <div className="bg-[#343a3e] p-8">
                <p className="font-[‘Barlow_Condensed’,sans-serif] text-[12px] tracking-[2.4px] uppercase text-[#fabdb9] mb-6">
                  My Core Challenge
                </p>
                <p className="font-[‘Inter’,sans-serif] text-[16px] leading-[26px] text-[rgba(238,229,212,0.8)]">
                  {"The challenge was not choosing between inspiration and conversion. It was designing an experience where both could "}
                  <span className="font-[‘Inter’,sans-serif] font-bold text-[rgba(238,229,212,0.8)]">work together.</span>
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Section: Goals */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Mulish',sans-serif] font-normal text-[12px] tracking-[3.6px] uppercase text-[#ac4e76] mb-3">
              02 — Goals
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-[48px] leading-[48px] uppercase text-[#151515]">
              Goals
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { bg: "#dc9660", title: "Maintain Brand integrity",      desc: "Create a premium experience without slowing down shopping." },
              { bg: "#c1d5cf", title: "Optimize Product discovery",    desc: "Allow users to browse Rabanne's worlds while still finding products quickly." },
              { bg: "#e6e4de", title: "Support conversion",            desc: "Make checkout easy while creating thoughtful opportunities for account creation and loyalty." },
              { bg: "#dde9f8", title: "Design for personalization",    desc: "Make users feel recognized and catered to across the journey, especially through loyalty and custom shopping moments." },
            ].map(({ bg, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="flex flex-col gap-8 p-6 h-[234px]" style={{ backgroundColor: bg }}>
                  <p className="font-['Mulish',sans-serif] font-bold text-[16px] leading-none uppercase text-black">
                    {title}
                  </p>
                  <p className="font-['Mulish',sans-serif] font-medium text-[14px] leading-[18px] text-[#151515]">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: My Approach */}
      <section className="py-24 bg-white border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-10">
          <FadeIn>
            <p className="font-['Mulish',sans-serif] font-bold text-[48px] leading-none uppercase text-[#1c1f23] mb-8">
              My approach:
            </p>
            <p className="font-['Mulish',sans-serif] font-normal text-[32px] leading-[1.25] tracking-[-0.704px] text-[#151515] max-w-[921px]">
              I prioritized understanding what makes luxury e-commerce different, balancing brand prestige with usability, and designing for sophisticated customers who expect both beauty and ease.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section: Research */}
      <section id="work-research" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <FadeIn className="mb-10">
            <p className="font-['Barlow_Condensed',sans-serif] text-[12px] tracking-[3.6px] uppercase text-[#ac4e76] mb-2">
              02 — Research
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Competitive Analysis
            </h2>
          </FadeIn>

          {/* Left text + bullets / Right staggered images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">

            {/* Left */}
            <FadeIn>
              <p className="font-['Inter',sans-serif] text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] mb-8 max-w-[444px]">
                I started with exploring how luxury beauty, fashion, and lifestyle brands balance immersive brand storytelling with practical shopping journeys. I especially focused on how they executed:
              </p>
              <div className="flex flex-col">
                {[
                  "Brand storytelling",
                  "Product discovery",
                  "Editorial commerce",
                  "Loyalty entry points",
                  "Checkout friction",
                  "Service reassurance",
                ].map((item, i) => (
                  <FadeIn key={item} delay={i * 0.06}>
                    <div className="flex items-center gap-4 py-3 border-b border-[rgba(52,58,62,0.1)] max-w-[443px]">
                      <span className="w-[6px] h-[6px] bg-[#ac4e76] rounded-full flex-shrink-0" />
                      <span className="font-['Inter',sans-serif] text-[16px] leading-[24px] text-[rgba(52,58,62,0.8)]">
                        {item}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            {/* Right — staggered image mosaic */}
            <div className="flex flex-col gap-4">
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-1.5">
                  <img src={imgCS1425} alt="Split screen scroll behaviour" className="w-full object-cover" style={{ aspectRatio: "2040/1127" }} />
                  <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">
                    Split screen scroll behavior were popular to balance beautiful imagery and informative content
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <FadeIn delay={0.18}>
                  <div className="flex flex-col gap-1.5">
                    <img src={imgCS1426} alt="Playful interactions" className="w-full object-cover" style={{ aspectRatio: "2404/1688" }} />
                    <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">
                      Playful interactions keep make distinct impressions
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.24}>
                  <div className="flex flex-col gap-1.5">
                    <img src={imgCS1422} alt="Full-bleed imagery" className="w-full h-48 object-cover" />
                    <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">
                      Full-bleed images gave visual breadth
                    </p>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-1.5 mt-2">
                  <img src={imgCS1423} alt="Unique scroll behavior" className="w-full h-48 object-cover" />
                  <p className="font-['Mulish',sans-serif] font-normal text-[12px] text-[rgba(52,58,62,0.8)]">
                    Moments of unique scroll behavior catches attention
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Conclusion */}
          <FadeIn delay={0.1}>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[29.25px] text-[rgba(52,58,62,0.8)] max-w-[561px]">
              This helped me understand which patterns felt premium, which patterns helped users shop faster, and where luxury sites often create friction by prioritizing beauty over clarity.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Section: Key Insights */}
      <section className="py-24 border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              02 — Insights
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#d4af37]">
              Key Insights
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Navigation is the brand",
                body: "In luxury e-commerce, how products are organized communicates hierarchy, worldbuilding, and prestige as powerfully as the imagery itself.",
              },
              {
                n: "02",
                title: "Storytelling shouldn't block conversion",
                body: "The best luxury sites layer editorial content alongside product discovery — never instead of it. Users need both modes to be one click apart.",
              },
              {
                n: "03",
                title: "Reassurance drives checkout",
                body: "Service details — shipping, returns, gifting — placed at the right moment in the journey reduce abandonment more than simplifying the UI alone.",
              },
            ].map(({ n, title, body }, i) => (
              <FadeIn key={n} delay={i * 0.1}>
                <div className="border-t-2 border-[#d4af37] pt-8">
                  <p className="font-['Barlow_Condensed',sans-serif] text-4xl font-bold text-[#d4af37]/20 mb-4">
                    {n}
                  </p>
                  <h3 className="font-['Mulish',sans-serif] font-bold text-xl uppercase text-[#1c1f23] mb-4">
                    {title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-[#343a3e]/60 leading-relaxed">
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Ideation / Wireframing */}
      <section id="work-ideation" className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              03 — Ideation
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Wireframing: Exploring<br />Product Discovery
            </h2>
          </FadeIn>

          {/* Why high-fidelity wireframes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <FadeIn>
              <p className="font-['Inter',sans-serif] text-lg text-[#343a3e]/80 leading-relaxed mb-6">
                The client was "less digitally informed," so I created high-fidelity wireframes instead of lo-fi sketches to help them visualise the final experience.
              </p>
              <div className="space-y-4">
                {[
                  "Client could see realistic layouts and interactions",
                  "Faster buy-in because it felt closer to the final product",
                  "Reduced back-and-forth about visual direction",
                  "Still flexible enough to iterate on structure and flow",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full mt-2.5 flex-shrink-0" />
                    <p className="font-['Inter',sans-serif] text-sm text-[#343a3e]/70">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <img src={imgScreen} alt="Wireframe overview" className="w-full shadow-lg" />
            </FadeIn>
          </div>

          {/* Product discovery wireframe concepts */}
          <FadeIn className="mb-8">
            <h3 className="font-['Mulish',sans-serif] font-bold text-2xl uppercase text-[#1c1f23] mb-3">
              Category representation ideas
            </h3>
            <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/60 mb-10">
              Four distinct approaches to presenting Rabanne's product category hierarchy.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: imgCS1439, label: "Idea 1: Tiles" },
              { img: imgCS1435, label: "Idea 2: Cards slide as user scrolls" },
              { img: imgCS1436, label: "Idea 3: Horizontal scroll" },
              { img: imgCS1437, label: "Idea 4: Image + Stacked tabs" },
            ].map(({ img, label }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="group overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt={label}
                      className="w-full object-cover h-72 group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-['Barlow_Condensed',sans-serif] text-sm font-semibold tracking-[0.15em] uppercase text-[#343a3e] mt-4">
                    {label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Checkout Journey */}
      <section className="py-24 border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              03 — Wireframing
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Wireframing:<br />Checkout Journey
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-4">
                <img src={imgImage1428} alt="Checkout wireframe" className="w-full shadow-md" />
                <img src={imgImage1429} alt="Checkout wireframe detail" className="w-full shadow-md" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-['Inter',sans-serif] text-lg text-[#343a3e]/80 leading-relaxed mb-6">
                Checkout flows have infinite variations, and missing even one scenario can break the entire experience. I documented every edge case — guest checkout, loyalty creation, gift messaging, sample selection, and payment fallbacks.
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/60 leading-relaxed">
                The goal was a checkout that felt effortless and exclusive — confirming to the customer that they were being cared for, not processed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Responsive Design */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-6">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              03 — Responsive
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23] mb-4">
              Responsive design
            </h2>
            <p className="font-['Inter',sans-serif] text-xl text-[#343a3e]/70 max-w-2xl leading-relaxed">
              Always keeping mobile and tablet views in mind — Accessibility: Will this meet AA guidelines?
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <FadeIn delay={0}>
              <img src={imgCSFrame080} alt="Mobile wireframe" className="w-full shadow-sm" />
            </FadeIn>
            <FadeIn delay={0.08}>
              <img src={imgCSFrame081} alt="Tablet wireframe" className="w-full shadow-sm" />
            </FadeIn>
            <FadeIn delay={0.16}>
              <img src={imgCSFrame082} alt="Desktop wireframe" className="w-full shadow-sm" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Prototyping */}
      <section id="work-production" className="py-24 border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              04 — Production
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Prototyping
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="space-y-4">
                <img src={imgCSProto} alt="Prototype screen" className="w-full shadow-lg" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-['Inter',sans-serif] text-lg text-[#343a3e]/80 leading-relaxed mb-6">
                High-fidelity interactive prototypes brought the wireframes to life, allowing stakeholders to experience navigation flows, hover states, and micro-interactions before a single line of production code was written.
              </p>
              <img src={imgCS1440} alt="Prototype detail" className="w-full shadow-md" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Header Usability Test */}
      <section className="py-24 bg-[#f7f3ea] border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              04 — Testing
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Header Usability Test
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="font-['Inter',sans-serif] text-lg text-[#343a3e]/80 leading-relaxed mb-6">
                Navigation was critical because Rabanne spans fragrance, makeup, fashion, gift inspiration, online offers, and editorial worlds. I explored header and mega-menu structures to reduce overwhelm and support product discovery.
              </p>
              <blockquote className="border-l-4 border-[#d4af37] pl-6 py-2 my-8">
                <p className="font-['Inter',sans-serif] text-xl italic text-[#1c1f23] leading-relaxed">
                  "The header had to do more than organize links. It had to guide users through Rabanne's commercial and brand universe."
                </p>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.1}>
              <img src={imgCSImage20} alt="Navigation usability test" className="w-full shadow-lg" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Design System */}
      <section id="work-delivery" className="py-24 border-b border-[#343a3e]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              04 — Production
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Building for Scale
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeIn>
              <p className="font-['Inter',sans-serif] text-xl text-[#343a3e]/80 leading-relaxed mb-6">
                Because the redesign covered a large e-commerce ecosystem, reusable patterns were essential.
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/60 leading-relaxed">
                A modular component library ensured every page type — homepage, PDP, PLP, checkout, editorial — could be assembled consistently and handed to development with confidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <img src={imgCS1117} alt="Component library" className="w-full shadow-lg" />
            </FadeIn>
          </div>

          <FadeIn className="mb-16">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">
              05 — Delivery
            </p>
            <h2 className="font-['Mulish',sans-serif] font-bold text-4xl md:text-5xl uppercase text-[#1c1f23]">
              Design System &amp; Handover
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-4">
                <img src={imgCSDeodorant} alt="Design system" className="w-full shadow-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <img src={imgCS1441} alt="Component" className="w-full h-48 object-cover" />
                  <img src={imgCSImage25} alt="Component" className="w-full h-48 object-cover" />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-['Inter',sans-serif] text-xl text-[#343a3e]/80 leading-relaxed mb-6">
                A well documented design system was essential to the success of this project.
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/60 leading-relaxed mb-8">
                Every component, spacing token, color variable, and typography style was annotated for developer handover — ensuring the design intent survived implementation intact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Colour tokens", "Type scale", "Component variants", "Motion specs"].map((item) => (
                  <div key={item} className="border border-[#343a3e]/15 p-4">
                    <p className="font-['Barlow_Condensed',sans-serif] text-sm font-semibold tracking-[0.1em] uppercase text-[#343a3e]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Reflection quote */}
      <section className="py-28 bg-[#1c1f23]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <p className="font-['Inter',sans-serif] text-6xl text-[#d4af37] mb-2">"</p>
            <p className="font-['Inter',sans-serif] text-2xl md:text-3xl text-[#d4af37] leading-relaxed mb-10">
              Luxury e-commerce is a delicate balance. You can't sacrifice elegance for function, but you also can't make it so beautiful that people can't buy.
            </p>
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <p className="font-['Inter',sans-serif] text-base text-[#eee5d4]/60 leading-relaxed">
                High-end customers expect BOTH — they want to feel special AND they want their time respected.
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#eee5d4]/60 leading-relaxed">
                It also reinforced the importance of documenting every edge case in e-commerce. Checkout flows have infinite variations, and missing even one scenario can break the entire experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section: Conclusion */}
      <section className="py-24 bg-[#f7f3ea]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                Outcome
              </p>
              <h2 className="font-['Mulish',sans-serif] font-bold text-3xl md:text-4xl uppercase text-[#1c1f23] leading-tight mb-6">
                The project strengthened my ability to balance luxury storytelling with practical e-commerce needs.
              </h2>
              <p className="font-['Inter',sans-serif] text-base text-[#343a3e]/70 leading-relaxed">
                Product discovery, checkout clarity, loyalty, reassurance, and scalable delivery — all woven into a single, coherent experience worthy of one of fashion's most iconic names.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-3">
                <img src={imgCSRect10062} alt="Final design" className="w-full shadow-md" />
                <div className="grid grid-cols-2 gap-3">
                  <img src={imgCSImage38} alt="Design detail" className="w-full h-40 object-cover" />
                  <img src={imgCSScreenshotPm1} alt="Design detail" className="w-full h-40 object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

function ContactPage() {
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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-[#fcfbf4]">
      <Header page={page} setPage={setPage} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {page === "home" && <HomePage setPage={setPage} />}
            {page === "work" && <WorkPage />}
            {page === "contact" && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
