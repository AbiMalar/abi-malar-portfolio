import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Crown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    id: "internship",
    number: "01",
    title: "Java Full Stack Development",
    subtitle: "Internship",
    organization: "EduSkills",
    period: "INTERNSHIP",
    icon: BriefcaseBusiness,
    description:
      "Gained practical exposure to full-stack development and worked with modern Java-based technologies.",
  },
  {
    id: "leadership",
    number: "02",
    title: "Department Club Leadership",
    subtitle: "Leadership Experience",
    organization: "Computer Science Department",
    period: "LEADERSHIP",
    icon: Crown,
    description:
      "Contributed to department activities while developing leadership, teamwork and communication skills.",
  },
  {
    id: "projects",
    number: "03",
    title: "Hands-on Software Projects",
    subtitle: "Building & Experimenting",
    organization: "Full Stack • AI • Analytics",
    period: "ONGOING",
    icon: Code2,
    description:
      "Built practical projects across full-stack development, AI and data analytics to turn ideas into working solutions.",
  },
];

function AchievementCard({ item, index }) {
  const Icon = item.icon;

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
        margin: "-70px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-purple-200/10 bg-white/[0.035] p-6 transition-all duration-500 hover:border-purple-200/25 hover:bg-white/[0.05] sm:p-7"
    >
      {/* Background number */}

      <span className="pointer-events-none absolute -right-3 -top-8 font-display text-[110px] font-bold leading-none text-purple-200/[0.025]">
        {item.number}
      </span>

      {/* Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Top */}

        <div className="flex items-start justify-between">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-200/15 bg-purple-300/[0.07] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon
              size={21}
              className="text-purple-200"
            />
          </div>

          <div className="flex items-center gap-2">

            <span className="text-[8px] font-mono tracking-[0.2em] text-purple-300">
              {item.period}
            </span>

            <ArrowUpRight
              size={15}
              className="text-ink-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
            />

          </div>

        </div>

        {/* Number */}

        <p className="mt-6 text-[9px] font-mono tracking-[0.25em] text-ink-700">
          MILESTONE {item.number}
        </p>

        {/* Title */}

        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-ink-100 sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-purple-200">
          {item.subtitle}
        </p>

        {/* Organization */}

        <div className="mt-5 flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />

          <span className="text-xs text-ink-400">
            {item.organization}
          </span>

        </div>

        {/* Description */}

        <p className="mt-4 text-sm leading-6 text-ink-500">
          {item.description}
        </p>

        {/* Progress line */}

        <div className="mt-6 h-px w-full bg-white/[0.06]">

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
              delay: index * 0.15 + 0.3,
            }}
            className="h-full bg-gradient-to-r from-purple-500 via-purple-300 to-transparent"
          />

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
          duration: 0.5,
        }}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-300 to-transparent"
      />

    </motion.article>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
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

        {/* Heading */}

        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="Milestones along the way."
          description="Experiences that helped me grow beyond just writing code."
        />

        {/* ================= FEATURE STRIP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-70px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-12 overflow-hidden rounded-[28px] border border-purple-200/10 bg-purple-300/[0.035] p-5 sm:p-6"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

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
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-200/15 bg-purple-300/[0.07]"
              >
                <Award
                  size={19}
                  className="text-purple-200"
                />
              </motion.div>

              <div>

                <p className="text-[8px] font-mono tracking-[0.25em] text-purple-300">
                  GROWTH MINDSET
                </p>

                <p className="mt-1 font-display text-lg font-semibold text-ink-100">
                  Building experience, one milestone at a time.
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

              <div className="text-center">

                <p className="font-display text-2xl font-semibold text-purple-200">
                  03
                </p>

                <p className="text-[7px] font-mono tracking-wider text-ink-700">
                  MILESTONES
                </p>

              </div>

              <span className="h-8 w-px bg-white/[0.08]" />

              <Sparkles
                size={18}
                className="text-purple-300"
              />

            </div>

          </div>

        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {achievements.map((item, index) => (
            <AchievementCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

        {/* ================= BOTTOM ================= */}

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
          className="mt-9 flex items-center justify-center gap-3"
        >

          <span className="h-px w-10 bg-purple-200/10" />

          <span className="text-[8px] font-mono tracking-[0.3em] text-ink-700">
            STILL JUST GETTING STARTED
          </span>

          <span className="h-px w-10 bg-purple-200/10" />

        </motion.div>

      </div>
    </section>
  );
}