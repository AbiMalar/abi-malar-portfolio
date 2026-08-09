import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const projectData = [
  {
    id: "roadfix",
    number: "01",
    title: "ROADFIX",
    category: "AI • COMPUTER VISION",
    tagline: "AI-Powered Smart Road Health Analyzer",
    description:
      "A smart road-maintenance platform that detects road damage from road imagery and converts visual data into actionable maintenance workflows.",
    features: [
      "Pothole & road damage detection",
      "Automated work-order generation",
      "SLA & repair tracking",
    ],
    tech: ["AI", "Computer Vision", "YOLO", "React"],
    github: "#",
    demo: "#",
    type: "road",
  },

  {
    id: "job-search",
    number: "02",
    title: "JOB SEARCHING SYSTEM",
    category: "FULL STACK",
    tagline: "Job discovery & application platform",
    description:
      "A full-stack platform where users can discover opportunities, filter jobs and manage applications through a clean workflow.",
    features: [
      "Job search & filtering",
      "Application tracking",
      "REST API architecture",
    ],
    tech: ["Java", "React", "Spring Boot", "MongoDB"],
    github: "#",
    demo: "#",
    type: "jobs",
  },

  {
    id: "healthcare",
    number: "03",
    title: "HEALTHCARE DASHBOARD",
    category: "POWER BI • ANALYTICS",
    tagline: "Patient & operational analytics",
    description:
      "An interactive healthcare analytics dashboard that transforms patient, doctor and visit data into decision-ready insights.",
    features: [
      "Patient trend analysis",
      "Doctor & visit insights",
      "Interactive Power BI visuals",
    ],
    tech: ["Power BI", "Power Query", "DAX", "Excel"],
    github: "#",
    demo: "#",
    type: "health",
  },
];


/* =========================================================
   ROADFIX VISUAL
========================================================= */

function RoadfixVisual() {
  return (
    <div className="relative h-[270px] overflow-hidden rounded-[24px] border border-purple-200/10 bg-[#171522]">

      {/* Glow */}

      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-600/15 blur-[80px]" />

      <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-violet-400/10 blur-[80px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-4">

        <div>
          <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
            ROAD HEALTH ANALYZER
          </p>

          <p className="mt-1 text-xs font-semibold text-white">
            Live Detection
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.05] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          <span className="text-[8px] font-mono text-green-300">
            ACTIVE
          </span>
        </div>

      </div>

      {/* Main */}

      <div className="relative z-10 grid grid-cols-[1.35fr_.65fr] gap-4 p-5">

        {/* Road image simulation */}

        <div className="relative h-[165px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f0e16]">

          {/* Road */}

          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-b from-[#302c38] to-[#15131c]" />

          {/* Road markings */}

          <div className="absolute bottom-6 left-1/2 h-16 w-1 -translate-x-1/2 border-l-2 border-dashed border-purple-200/40" />

          {/* Potholes */}

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-[32%] h-10 w-16 rounded-[50%] bg-black/70 blur-[2px]"
          />

          <div className="absolute bottom-7 right-[24%] h-7 w-12 rounded-[50%] bg-black/60" />

          {/* Detection boxes */}

          <div className="absolute bottom-7 left-[25%] h-14 w-28 rounded border border-purple-300/70">

            <span className="absolute -top-4 left-0 rounded bg-purple-400 px-2 py-0.5 text-[7px] font-mono text-white">
              POTHOLE 94%
            </span>

          </div>

          <div className="absolute bottom-5 right-[18%] h-12 w-20 rounded border border-violet-300/50">

            <span className="absolute -top-4 right-0 rounded bg-violet-400 px-2 py-0.5 text-[7px] font-mono text-white">
              DAMAGE 87%
            </span>

          </div>

        </div>

        {/* Stats */}

        <div className="space-y-3">

          <div className="rounded-xl border border-purple-200/10 bg-purple-300/[0.04] p-3">
            <p className="text-[8px] font-mono text-ink-600">
              DETECTED
            </p>
            <p className="mt-1 text-xl font-semibold text-white">
              24
            </p>
            <p className="text-[7px] text-purple-300">
              damaged areas
            </p>
          </div>

          <div className="rounded-xl border border-purple-200/10 bg-purple-300/[0.04] p-3">
            <p className="text-[8px] font-mono text-ink-600">
              ACCURACY
            </p>
            <p className="mt-1 text-xl font-semibold text-white">
              94%
            </p>
            <div className="mt-2 h-1 rounded-full bg-white/10">
              <div className="h-full w-[94%] rounded-full bg-purple-400" />
            </div>
          </div>

          <div className="rounded-xl border border-purple-200/10 bg-purple-300/[0.04] p-3">
            <p className="text-[8px] font-mono text-ink-600">
              WORK ORDERS
            </p>
            <p className="mt-1 text-xl font-semibold text-white">
              12
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   JOB SEARCH VISUAL
========================================================= */

function JobsVisual() {
  return (
    <div className="relative h-[270px] overflow-hidden rounded-[24px] border border-purple-200/10 bg-[#171522]">

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/15 blur-[80px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-4">

        <div>
          <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
            JOB DISCOVERY
          </p>

          <p className="mt-1 text-xs font-semibold text-white">
            Find your next opportunity
          </p>
        </div>

        <div className="rounded-lg bg-purple-400/10 px-3 py-1.5 text-[8px] text-purple-200">
          128 Jobs
        </div>

      </div>

      {/* Search */}

      <div className="relative z-10 px-5 pt-4">

        <div className="flex gap-2">

          <div className="flex-1 rounded-xl border border-purple-200/10 bg-white/[0.04] px-4 py-2.5 text-[9px] text-ink-500">
            Search software jobs...
          </div>

          <div className="rounded-xl bg-purple-500 px-4 py-2.5 text-[9px] font-medium text-white">
            Search
          </div>

        </div>

      </div>

      {/* Job cards */}

      <div className="relative z-10 grid grid-cols-2 gap-3 px-5 pt-4">

        {[
          ["Software Engineer", "Google", "Bangalore"],
          ["Java Developer", "TechCorp", "Chennai"],
        ].map(([role, company, location], index) => (
          <motion.div
            key={role}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-4"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-400/10 text-[9px] font-bold text-purple-300">
                {index === 0 ? "G" : "T"}
              </div>

              <span className="text-[7px] text-green-300">
                NEW
              </span>

            </div>

            <p className="mt-3 text-[10px] font-semibold text-white">
              {role}
            </p>

            <p className="mt-1 text-[8px] text-purple-300">
              {company}
            </p>

            <p className="mt-2 text-[7px] text-ink-600">
              {location} • Full Time
            </p>

          </motion.div>
        ))}

      </div>

      {/* Bottom */}

      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">

        <span className="text-[7px] font-mono text-ink-700">
          APPLICATIONS TRACKED
        </span>

        <span className="text-xs font-semibold text-purple-200">
          18
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   HEALTHCARE VISUAL
========================================================= */

function HealthcareVisual() {
  return (
    <div className="relative h-[270px] overflow-hidden rounded-[24px] border border-purple-200/10 bg-[#171522]">

      <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/15 blur-[90px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-4">

        <div>
          <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
            HEALTHCARE ANALYTICS
          </p>

          <p className="mt-1 text-xs font-semibold text-white">
            Patient Management Dashboard
          </p>
        </div>

        <span className="rounded-lg border border-purple-200/10 bg-purple-300/[0.05] px-2.5 py-1 text-[7px] text-purple-200">
          POWER BI
        </span>

      </div>

      {/* Dashboard */}

      <div className="relative z-10 grid grid-cols-[.8fr_1.2fr] gap-4 p-5">

        {/* KPI */}

        <div className="space-y-3">

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] p-3">
            <p className="text-[7px] font-mono text-ink-600">
              PATIENTS
            </p>
            <p className="mt-1 text-xl font-semibold text-white">
              2,480
            </p>
            <p className="text-[7px] text-green-300">
              +12.4%
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] p-3">
            <p className="text-[7px] font-mono text-ink-600">
              DOCTORS
            </p>
            <p className="mt-1 text-xl font-semibold text-white">
              84
            </p>
            <p className="text-[7px] text-purple-300">
              Active
            </p>
          </div>

        </div>

        {/* Chart */}

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] p-4">

          <div className="flex items-center justify-between">

            <p className="text-[8px] font-mono text-ink-500">
              PATIENT TREND
            </p>

            <span className="text-[7px] text-purple-300">
              2026
            </span>

          </div>

          <div className="relative mt-5 h-[115px]">

            {/* Horizontal lines */}

            {[0, 1, 2, 3].map((line) => (
              <div
                key={line}
                className="absolute left-0 right-0 border-t border-white/[0.04]"
                style={{
                  top: `${line * 33}%`,
                }}
              />
            ))}

            {/* Bars */}

            <div className="absolute inset-0 flex items-end justify-around gap-2 px-2">

              {[35, 48, 42, 65, 58, 78, 92].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    className="w-4 rounded-t-md bg-gradient-to-t from-purple-600/60 to-purple-300/70"
                  />
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   VISUAL SELECTOR
========================================================= */

function ProjectVisual({ type }) {
  if (type === "road") {
    return <RoadfixVisual />;
  }

  if (type === "jobs") {
    return <JobsVisual />;
  }

  return <HealthcareVisual />;
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-purple-200/10 bg-white/[0.025] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-purple-200/25 hover:bg-white/[0.04]"
    >

      {/* Glow */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px] transition-all duration-500 group-hover:bg-purple-500/15" />

      {/* Visual */}

      <div className="relative z-10 overflow-hidden rounded-[25px]">

        <div className="transition-transform duration-700 group-hover:scale-[1.015]">
          <ProjectVisual type={project.type} />
        </div>

      </div>

      {/* Content */}

      <div className="relative z-10 p-5 sm:p-7">

        {/* Top row */}

        <div className="flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[9px] text-purple-300">
              {project.number}
            </span>

            <span className="h-px w-7 bg-purple-200/15" />

            <span className="text-[8px] font-mono tracking-[0.2em] text-ink-600">
              {project.category}
            </span>

          </div>

          <Sparkles
            size={15}
            className="text-purple-300/60"
          />

        </div>

        {/* Title */}

        <div className="mt-4">

          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-1 text-sm font-medium text-purple-200">
            {project.tagline}
          </p>

        </div>

        {/* Description */}

        <p className="mt-4 max-w-3xl text-sm leading-6 text-ink-500">
          {project.description}
        </p>

        {/* Features */}

        <div className="mt-5 grid gap-2 sm:grid-cols-3">

          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5"
            >

              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />

              <span className="text-[10px] leading-4 text-ink-400">
                {feature}
              </span>

            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Tech */}

          <div className="flex flex-wrap gap-2">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-purple-200/10 bg-purple-300/[0.035] px-2.5 py-1.5 text-[9px] font-mono text-ink-500 transition hover:border-purple-300/25 hover:text-purple-200"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Links */}

          <div className="flex shrink-0 gap-2">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2 text-[10px] font-medium text-ink-300 transition hover:-translate-y-1 hover:border-purple-300/30 hover:text-white"
            >
              <Github size={13} />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-500 px-3.5 py-2 text-[10px] font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-400"
            >
              Live Demo
              <ExternalLink size={13} />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom glow */}

      <motion.div
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.6,
        }}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-300 to-transparent"
      />

    </motion.article>
  );
}


/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      {/* Background glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-32 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Things I&apos;ve built."
          description="A collection of projects where I turn ideas into practical software experiences."
        />

        {/* Projects */}

        <div className="mt-12 space-y-7">

          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

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
          className="mt-10 flex items-center justify-center gap-3"
        >

          <span className="h-px w-10 bg-purple-200/10" />

          <span className="text-[8px] font-mono tracking-[0.3em] text-ink-700">
            BUILDING WITH PURPOSE
          </span>

          <span className="h-px w-10 bg-purple-200/10" />

        </motion.div>

      </div>
    </section>
  );
}