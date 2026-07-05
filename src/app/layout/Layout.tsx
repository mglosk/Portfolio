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

function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav: { label: string; to: string }[] = [
    { label: "Home", to: "/" },
    { label: "Work", to: "/work" },
    { label: "Contact", to: "/contact" },
  ];

  const navLinkClass = (isActive: boolean) =>
    `font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-wide transition-all duration-200 text-[#232a27] ${
      isActive ? "border-b border-[#232a27]" : "border-b border-transparent hover:border-[#232a27]/30"
    }`;

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
          <Link
            to="/"
            className="flex items-center gap-3 group text-[#232a27] hover:text-[#d4af37] transition-colors duration-300"
          >
            <LogoMark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-14">
            <NavLink to="/" end className={({ isActive }) => navLinkClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => navLinkClass(isActive)}>
              Work
            </NavLink>
            <Link
              to="/contact"
              className="bg-[#36413d] text-[#eee5d4] font-['Mulish',sans-serif] font-bold text-sm uppercase tracking-wide px-4 py-3 rounded-[4px] hover:bg-[#232a27] transition-colors duration-200"
            >
              Reach Out
            </Link>
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
              {nav.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-['Mulish',sans-serif] text-4xl font-bold uppercase tracking-wider text-left transition-colors duration-200 ${
                      isActive ? "text-[#343a3e]" : "text-[#343a3e]/40"
                    }`
                  }
                >
                  {label}
                </NavLink>
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

function Footer() {
  return (
    <footer className="bg-[#343a3e] text-[#eee5d4] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-xl tracking-[0.25em] uppercase text-[#d4af37] mb-4">
            Mandy Losk
          </p>
          <p className="font-['Inter',sans-serif] text-sm text-[#eee5d4]/60 leading-relaxed max-w-xs">
            UX/UI design portfolio featuring case studies in luxury e-commerce, AI platforms, and brand-driven digital experiences.
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
              { label: "Contact", to: "/contact" },
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
    <div className="min-h-screen bg-[#fcfbf4]">
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
