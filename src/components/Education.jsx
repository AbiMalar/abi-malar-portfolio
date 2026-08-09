import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    id: "college",
    year: "2023 — 2027",
    type: "UNDERGRADUATE",
    title: "B.E. Computer Science & Engineering",
    institution: "K.S. Rangasamy College of Technology",
    detail: "Computer Science & Engineering",
    score: "8.4",
    scoreLabel: "CGPA",
    icon: GraduationCap,
    current: true,
  },
  {
    id: "school",
    year: "2023",
    type: "HIGHER SECONDARY",
    title: "Higher Secondary Education",
    institution: "APJM Matric Higher Secondary School",
    detail: "Tamil Nadu",
    score: "84.25%",
    scoreLabel: "PERCENTAGE",
    icon: School,
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-300/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ================= HEADING ================= */}

        <SectionHeading
          eyebrow="EDUCATION"
          title="Where I&apos;ve learned."
          description="My academic journey in computer science and technology."
        />

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-14">

          {/* Timeline line */}

          <div className="absolute left-[22px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-purple-400/50 via-purple-300/20 to-transparent sm:block" />

          <div className="space-y-6">

            {educationData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative sm:pl-16"
                >

                  {/* Timeline dot */}

                  <div className="absolute left-[9px] top-8 hidden h-7 w-7 items-center justify-center rounded-full border border-purple-300/25 bg-[#1b1826] sm:flex">

                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        item.current
                          ? "animate-pulse bg-purple-300"
                          : "bg-purple-400/50"
                      }`}
                    />

                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-purple-200/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-purple-200/25 hover:bg-white/[0.05] sm:p-7"
                  >

                    {/* Glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                      {/* Left */}

                      <div className="flex gap-4">

                        {/* Icon */}

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-200/15 bg-purple-300/[0.07]">

                          <Icon
                            size={21}
                            className="text-purple-200"
                          />

                        </div>

                        {/* Content */}

                        <div>

                          <div className="flex flex-wrap items-center gap-2">

                            <span className="text-[8px] font-mono tracking-[0.22em] text-purple-300">
                              {item.type}
                            </span>

                            {item.current && (
                              <span className="flex items-center gap-1 rounded-full border border-green-400/15 bg-green-400/[0.05] px-2 py-1 text-[7px] font-mono text-green-300">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                                CURRENT
                              </span>
                            )}

                          </div>

                          <h3 className="mt-2 font-display text-lg font-semibold text-ink-100 sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-purple-200">
                            {item.institution}
                          </p>

                          <p className="mt-1 text-xs text-ink-600">
                            {item.detail}
                          </p>

                        </div>

                      </div>

                      {/* Right */}

                      <div className="flex items-center justify-between gap-8 sm:justify-end">

                        <div>

                          <p className="font-mono text-[8px] tracking-[0.18em] text-ink-700">
                            {item.year}
                          </p>

                          <p className="mt-1 font-display text-2xl font-semibold text-purple-200">
                            {item.score}
                          </p>

                          <p className="text-[7px] font-mono tracking-wider text-ink-600">
                            {item.scoreLabel}
                          </p>

                        </div>

                        <ArrowUpRight
                          size={17}
                          className="text-ink-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                        />

                      </div>

                    </div>

                    {/* Bottom line */}

                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-300 to-transparent"
                    />

                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-8 flex items-center justify-center gap-3"
        >

          <Sparkles
            size={13}
            className="text-purple-300"
          />

          <span className="text-[8px] font-mono tracking-[0.28em] text-ink-700">
            LEARNING NEVER STOPS
          </span>

          <Sparkles
            size={13}
            className="text-purple-300"
          />

        </motion.div>

      </div>
    </section>
  );
}