import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-300/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ================= HEADING ================= */}

        <SectionHeading
          eyebrow="CONTACT"
          title="Let&apos;s build something together."
          description="Have an idea, opportunity or project in mind? I&apos;d love to hear from you."
        />

        {/* ================= MAIN CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-12 overflow-hidden rounded-[32px] border border-purple-200/15 bg-white/[0.035] p-7 shadow-[0_30px_100px_-45px_rgba(124,58,237,.5)] sm:p-10"
        >

          {/* Decorative rings */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-dashed border-purple-300/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-purple-200/10"
          />

          {/* Small glow */}

          <div className="pointer-events-none absolute right-20 top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* ================= LEFT ================= */}

            <div>

              {/* Status */}

              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.05] px-3 py-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                <span className="text-[8px] font-mono tracking-[0.2em] text-green-300">
                  OPEN TO OPPORTUNITIES
                </span>

              </div>

              {/* Main text */}

              <h3 className="mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink-100 sm:text-5xl">

                Let&apos;s turn an idea into
                <span className="gradient-text">
                  {" "}something real.
                </span>

              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-ink-500 sm:text-base">
                I&apos;m interested in software engineering opportunities,
                freelance projects and meaningful collaborations where I can
                learn, build and contribute.
              </p>

              {/* Email button */}

              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href="mailto:abimalarramesh@gmail.com"
                  className="btn-primary group"
                >
                  <Mail size={16} />

                  Let&apos;s Talk

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative">

              {/* Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-6 rounded-full border border-dashed border-purple-300/10"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-2 rounded-full border border-purple-200/10"
              />

              {/* Center */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-purple-200/15 bg-[#29243a]/90 shadow-[0_20px_70px_-25px_rgba(139,92,246,.6)] backdrop-blur-xl"
              >

                <Sparkles
                  size={21}
                  className="text-purple-200"
                />

                <p className="mt-3 font-display text-lg font-semibold text-white">
                  Let&apos;s
                </p>

                <p className="text-[9px] font-mono tracking-[0.25em] text-purple-300">
                  CONNECT
                </p>

              </motion.div>

            </div>

          </div>

          {/* ================= SOCIAL ROW ================= */}

          <div className="relative z-10 mt-9 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[8px] font-mono tracking-[0.25em] text-ink-700">
                FIND ME ONLINE
              </p>

              <p className="mt-1 text-xs text-ink-500">
                Let&apos;s connect and build something interesting.
              </p>

            </div>

            <div className="flex gap-2">

              <a
                href="https://github.com/AbiMalar/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-300/[0.06] hover:text-white"
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/abimalar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-300/[0.06] hover:text-white"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:abimalarramesh@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-300/[0.06] hover:text-white"
              >
                <Mail size={17} />
              </a>

            </div>

          </div>

        </motion.div>

        {/* ================= FOOTER ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center"
        >

          <p className="font-display text-sm text-ink-600">
            Designed & built with curiosity.
          </p>

          <div className="flex items-center gap-2">

            <span className="text-[8px] font-mono tracking-[0.25em] text-ink-700">
              ABI MALAR RA
            </span>

            <span className="h-1 w-1 rounded-full bg-purple-300" />

            <span className="text-[8px] font-mono tracking-[0.25em] text-ink-700">
              2026
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}