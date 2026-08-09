import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "focus", label: "What I Do" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "leadership", label: "Leadership" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-800/80 backdrop-blur-lg border-b border-white/[0.06] shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-xl font-semibold tracking-tight text-ink-100"
        >
          Abi Malar<span className="gradient-text">.R</span>
        </button>

        <ul className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  active === link.id ? "text-ink-100" : "text-ink-500 hover:text-ink-300"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="/resume.pdf" download className="btn-secondary !py-2 !px-5 text-xs">
            <FileDown size={15} />
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink-100 p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-base-800/95 backdrop-blur-lg border-b border-white/[0.06]"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left py-3 text-sm font-medium border-b border-white/[0.04] ${
                      active === link.id ? "text-accent-cyan" : "text-ink-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <a href="/resume.pdf" download className="btn-primary w-full justify-center">
                  <FileDown size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
