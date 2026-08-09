import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  Target,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    value: "8.4",
    label: "CGPA",
    sub: "B.E. CSE",
  },
  {
    icon: Code2,
    value: "Full Stack",
    label: "Development",
    sub: "JAVA • REACT • SPRING",
  },
  {
    icon: BriefcaseBusiness,
    value: "Open",
    label: "Freelance",
    sub: "Opportunities",
  },
];

const interests = [
  "Java",
  "React",
  "Spring Boot",
  "AI",
  "RPA",
  "Salesforce",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-300/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="ABOUT ME"
          title="A developer who likes to build."
          description="Computer Science student focused on turning ideas into practical digital products."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">

          {/* ================= LEFT ================= */}

          <motion.div
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
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[30px] border border-purple-200/10 bg-white/[0.035] p-7 sm:p-9"
          >

            {/* Big background number */}

            <span className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[10rem] font-bold leading-none text-purple-200/[0.025]">
              01
            </span>

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200/15 bg-purple-300/[0.07]">
                  <Code2
                    size={18}
                    className="text-purple-200"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-mono tracking-[0.25em] text-purple-300">
                    WHO I AM
                  </p>

                  <p className="text-xs text-ink-600">
                    Developer • Learner • Builder
                  </p>
                </div>

              </div>

              <h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink-100 sm:text-4xl">
                I enjoy turning
                <span className="gradient-text">
                  {" "}ideas into experiences.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-400 sm:text-base">
                I&apos;m a Computer Science and Engineering student who enjoys
                building full-stack applications, exploring emerging
                technologies and solving practical problems through software.
              </p>

              {/* Career objective */}

              <div className="mt-8 rounded-2xl border border-purple-200/10 bg-purple-300/[0.035] p-5">

                <div className="flex items-center gap-3">

                  <Target
                    size={17}
                    className="text-purple-300"
                  />

                  <span className="text-[9px] font-mono tracking-[0.2em] text-purple-300">
                    CURRENT DIRECTION
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-ink-400">
                  Growing toward software engineering roles while
                  strengthening full-stack development, DSA and modern
                  technologies.
                </p>

              </div>

              {/* Interests */}

              <div className="mt-8">

                <p className="mb-4 text-[9px] font-mono tracking-[0.25em] text-ink-700">
                  AREAS I ENJOY
                </p>

                <div className="flex flex-wrap gap-2">

                  {interests.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-xl border border-purple-200/10 bg-white/[0.035] px-3 py-2 text-[10px] font-mono text-ink-400 transition hover:border-purple-300/30 hover:text-purple-200"
                    >
                      {item}
                    </motion.span>
                  ))}

                </div>

              </div>

            </div>

            {/* Accent */}

            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 via-purple-200 to-transparent"
            />

          </motion.div>


          {/* ================= RIGHT ================= */}

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden rounded-[25px] border border-purple-200/10 bg-white/[0.035] p-6"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-200/10 bg-purple-300/[0.06]">
                      <Icon
                        size={19}
                        className="text-purple-200"
                      />
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-ink-700 transition group-hover:text-purple-300"
                    />

                  </div>

                  <p className="mt-7 font-display text-4xl font-semibold text-ink-100">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm font-medium text-purple-200">
                    {item.label}
                  </p>

                  <p className="mt-1 text-[9px] font-mono uppercase tracking-wider text-ink-600">
                    {item.sub}
                  </p>

                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute bottom-0 left-0 h-[2px] bg-purple-400"
                  />

                </motion.div>
              );
            })}

            {/* Mini statement */}

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
                duration: 0.7,
              }}
              className="relative hidden overflow-hidden rounded-[25px] border border-purple-200/10 bg-purple-300/[0.04] p-6 lg:block"
            >

              <Sparkles
                size={18}
                className="text-purple-300"
              />

              <p className="mt-5 font-display text-xl font-semibold text-ink-100">
                Learn Build Repeat.
              </p>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}