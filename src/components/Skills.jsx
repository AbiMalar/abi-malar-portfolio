import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description: "Clean, responsive interfaces and modern web experiences.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    icon: Code2,
    size: "large",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description: "APIs, business logic and full-stack application development.",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js"],
    icon: Layers3,
    size: "large",
  },
  {
    id: "ai",
    number: "03",
    title: "Agentic AI",
    description: "Exploring intelligent systems, RAG and AI-powered workflows.",
    skills: ["Agentic AI", "RAG", "LangChain", "AI / ML"],
    icon: BrainCircuit,
    size: "wide",
  },
  {
    id: "automation",
    number: "04",
    title: "Automation",
    description: "Workflow automation and enterprise process solutions.",
    skills: ["UiPath RPA", "Salesforce", "Salesforce CRM", "Field Service"],
    icon: Workflow,
    size: "wide",
  },
  {
    id: "database",
    number: "05",
    title: "Data",
    description: "Structured and NoSQL databases for application development.",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    icon: Database,
    size: "small",
  },
  {
    id: "tools",
    number: "06",
    title: "Developer Tools",
    description: "Tools I use to build, test and manage projects.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    icon: GitBranch,
    size: "small",
  },
];

const exploring = [
  "Advanced DSA",
  "Cloud Technologies",
  "Agentic AI",
];

function SkillCard({ group, index }) {
  const Icon = group.icon;

  return (
    <motion.article
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -7,
      }}
      className={`group relative overflow-hidden rounded-[28px] border border-purple-200/10 bg-white/[0.035] p-6 sm:p-7 ${
        group.size === "wide"
          ? "md:col-span-2"
          : group.size === "large"
          ? ""
          : ""
      }`}
    >
      {/* Glow */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]"
      />

      {/* Giant number */}

      <span className="pointer-events-none absolute -right-3 -top-7 font-display text-8xl font-bold text-purple-200/[0.025]">
        {group.number}
      </span>

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-200/15 bg-purple-300/[0.07]"
            >
              <Icon
                size={21}
                className="text-purple-200"
              />
            </motion.div>

            <div>

              <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
                {group.number}
              </p>

              <h3 className="mt-1 font-display text-xl font-semibold text-ink-100 sm:text-2xl">
                {group.title}
              </h3>

            </div>

          </div>

          <ArrowUpRight
            size={17}
            className="text-ink-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
          />

        </div>

        {/* Description */}

        <p className="mt-5 max-w-xl text-sm leading-6 text-ink-500">
          {group.description}
        </p>

        {/* Skills */}

        <div className="mt-6 flex flex-wrap gap-2">

          {group.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
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
                delay:
                  index * 0.05 +
                  skillIndex * 0.06,
              }}
              whileHover={{
                y: -3,
              }}
              className="rounded-xl border border-purple-200/10 bg-purple-300/[0.035] px-3 py-2 text-[10px] font-mono text-ink-400 transition-all duration-300 hover:border-purple-300/30 hover:bg-purple-300/[0.08] hover:text-purple-100"
            >
              {skill}
            </motion.span>
          ))}

        </div>

      </div>

      {/* Animated bottom line */}

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
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 via-lavender-300 to-transparent"
      />

    </motion.article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-300/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <SectionHeading
          eyebrow="TECH STACK"
          title="Tools I build with."
          description="A practical mix of development, AI, automation and enterprise technologies."
        />

        {/* ================= SKILL GRID ================= */}

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.id}
              group={group}
              index={index}
            />
          ))}

        </div>

        {/* ================= EXPLORING ================= */}

        <motion.div
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
            duration: 0.7,
          }}
          className="mt-5 overflow-hidden rounded-[28px] border border-purple-200/10 bg-purple-300/[0.035] p-6 sm:p-7"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-200/15 bg-purple-300/[0.07]"
              >
                <Sparkles
                  size={19}
                  className="text-purple-200"
                />
              </motion.div>

              <div>

                <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
                  CURRENTLY EXPLORING
                </p>

                <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">
                  Always learning.
                </h3>

              </div>

            </div>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2">

              {exploring.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="rounded-xl border border-purple-200/10 bg-white/[0.035] px-4 py-2.5"
                >

                  <span className="mr-2 text-[8px] font-mono text-purple-300">
                    0{index + 1}
                  </span>

                  <span className="text-xs text-ink-400">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* Bottom statement */}

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
          className="mt-8 flex items-center justify-center gap-3"
        >

          <span className="h-px w-12 bg-purple-200/10" />

          <span className="text-[8px] font-mono tracking-[0.3em] text-ink-700">
            LEARN • BUILD • EXPERIMENT
          </span>

          <span className="h-px w-12 bg-purple-200/10" />

        </motion.div>

      </div>
    </section>
  );
}