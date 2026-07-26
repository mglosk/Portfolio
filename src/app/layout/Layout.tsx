import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

import svgHomepagePaths from "@/imports/Homepage/svg-9svjyik9ii";

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function LogoMark() {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="relative size-[40px] flex-shrink-0 text-[#343a3e]">
        <div className="absolute inset-[-1.88%]">
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
      <div className="flex gap-[2px] font-['Mulish',sans-serif] font-bold text-[12px] text-[#343a3e]">
        <span>M</span><span>G</span><span>L</span>
      </div>
    </div>
  );
}

function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f3f3f3]/95 backdrop-blur-md border-b border-[#343a3e]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-[20px] md:px-[32px] lg:px-[64px] h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <LogoMark />
          </Link>

          {/* Desktop + Tablet Nav */}
          <nav className="hidden md:flex items-center gap-[24px] lg:gap-[32px]">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-['Noto_Sans',sans-serif] font-bold text-[16px] uppercase text-[#212528] transition-colors duration-200 ${
                    isActive ? "border-b border-[#212528]" : "border-b border-transparent hover:border-[#212528]/40"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#343a3e] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#f3f3f3] flex flex-col pt-20 px-[20px]"
          >
            <nav className="flex flex-col gap-8 pt-8">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-['Noto_Sans',sans-serif] text-4xl font-bold uppercase text-left transition-colors duration-200 ${
                      isActive ? "text-[#212528]" : "text-[#212528]/40"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto pb-12 border-t border-[#343a3e]/10 pt-8">
              <p className="font-['Mulish',sans-serif] text-sm text-[#343a3e]/50 tracking-wide">
                UX Design Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#343a3e] text-[#eee5d4] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-xl tracking-[0.25em] uppercase text-[#d4af37] mb-4">
            Mandy Losk
          </p>
        </div>
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.2em] uppercase text-[#eee5d4]/40 mb-5">
            Navigation
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", to: "/" },
              { label: "Work", to: "/work" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200 text-left"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.2em] uppercase text-[#eee5d4]/40 mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:mglosk100@gmail.com"
              className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200"
            >
              mglosk100@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mandylosk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/70 hover:text-[#d4af37] transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#eee5d4]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter',sans-serif] text-xs text-[#eee5d4]/30">
            © 2026 Mandy Losk. All rights reserved.
          </p>
          <p className="font-['Barlow_Condensed',sans-serif] text-xs tracking-[0.15em] uppercase text-[#eee5d4]/20">
            UX/UI Design Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
