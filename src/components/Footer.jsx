import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink-500 font-mono">
          Designed &amp; Built by <span className="text-ink-300">Abi Malar R</span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-500 hover:text-accent-cyan transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-500 hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:abimalar.r@example.com"
            aria-label="Email"
            className="text-ink-500 hover:text-accent-cyan transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center"
        >
          <ArrowUp size={16} className="text-ink-300" />
        </button>
      </div>
    </footer>
  );
}
