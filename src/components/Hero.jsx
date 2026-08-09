import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

const floatingTech = [
  { name: "JAVA", x: "3%", y: "18%", delay: 0 },
  { name: "REACT", x: "78%", y: "8%", delay: 0.5 },
  { name: "SPRING", x: "84%", y: "63%", delay: 1 },
  { name: "AI", x: "2%", y: "68%", delay: 1.5 },
];

function FloatingTech({ name, x, y, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -9, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute z-30 hidden rounded-2xl border border-purple-200/20 bg-[#29243a]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:block"
      style={{ left: x, top: y }}
    >
      <span className="text-[9px] font-mono tracking-[0.2em] text-purple-200">
        {name}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-purple-300/10 blur-[140px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,210,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,210,255,.8) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_1fr]">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/15 bg-purple-300/[0.06] px-4 py-2 text-[9px] font-mono tracking-wider text-purple-200">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-300" />

              AVAILABLE FOR SOFTWARE OPPORTUNITIES

            </div>

            {/* Heading */}

            <h1 className="mt-7 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.2rem]">

              Hi, I&apos;m

              <br />

              <span className="gradient-text">
                ABI MALAR RA.
              </span>

            </h1>

            {/* Role */}

            <div className="mt-7 flex items-center gap-3">

              <span className="h-px w-10 bg-purple-300" />

              <p className="font-display text-xl font-medium text-ink-300 sm:text-2xl">
                Full Stack Developer
              </p>

            </div>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-ink-400 sm:text-lg">
              Computer Science Engineering student passionate about
              building modern web applications, solving real-world
              problems and turning ideas into useful digital experiences.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="btn-primary"
              >
                Explore My Work
                <ArrowRight size={16} />
              </button>

              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                <Download size={15} />
                Resume
              </a>

            </div>

            {/* Social */}

            <div className="mt-8 flex items-center gap-3">

              <a
                href="https://github.com/AbiMalar/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition hover:-translate-y-1 hover:border-purple-300/30 hover:text-white"
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/abimalar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition hover:-translate-y-1 hover:border-purple-300/30 hover:text-white"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:abimalarramesh@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-ink-400 transition hover:-translate-y-1 hover:border-purple-300/30 hover:text-white"
              >
                <Mail size={17} />
              </a>

            </div>

          </motion.div>

          {/* ================= RIGHT / PHOTO ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              x: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >

            {/* Big glow */}

            <div className="absolute inset-10 rounded-full bg-purple-500/20 blur-[100px]" />

            {/* Rotating outer ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-7 rounded-[45%] border border-dashed border-purple-200/15"
            />

            {/* Second ring */}

            <div className="absolute -inset-3 rounded-[44%] border border-purple-300/10" />

            {/* Floating technology labels */}

            {floatingTech.map((tech) => (
              <FloatingTech
                key={tech.name}
                {...tech}
              />
            ))}

            {/* ================= PROFILE IMAGE ================= */}

            <div className="relative mx-auto h-[430px] w-[310px] overflow-hidden rounded-[45%] border border-purple-200/20 bg-[#29243a] p-2 shadow-[0_30px_100px_-25px_rgba(124,58,237,.55)] sm:h-[520px] sm:w-[370px]">

              <div className="relative h-full w-full overflow-hidden rounded-[43%]">

                <img
                  src="/profile.jpeg"
                  alt="Abi Malar R"
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    console.error(
                      "Profile image not found. Make sure profile.jpeg is inside the public folder."
                    );
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Photo overlay */}

                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#171321] via-[#171321]/40 to-transparent" />

                {/* Name on image */}

                <div className="absolute bottom-9 left-0 right-0 text-center">

                  <p className="font-display text-xl font-semibold text-white">
                    ABI MALAR RA
                  </p>

                  <p className="mt-1 text-[9px] font-mono tracking-[0.18em] text-purple-200/70">
                    COMPUTER SCIENCE ENGINEERING
                  </p>

                </div>

              </div>

            </div>

            {/* ================= CGPA CARD ================= */}

            <motion.div
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-purple-200/15 bg-[#29243a]/95 px-5 py-3 shadow-2xl backdrop-blur-xl sm:-left-8"
            >

              <p className="font-display text-2xl font-semibold text-white">
                8.4
                <span className="ml-1 text-sm text-purple-300">
                  CGPA
                </span>
              </p>

              <p className="mt-1 text-[8px] font-mono text-ink-600">
                B.E. COMPUTER SCIENCE
              </p>

            </motion.div>

            {/* ================= FULL STACK CARD ================= */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-1/3 rounded-2xl border border-purple-200/15 bg-[#29243a]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-8"
            >

              <div className="flex items-center gap-2">

                <Sparkles
                  size={14}
                  className="text-purple-300"
                />

                <span className="text-[10px] font-medium text-white">
                  FULL STACK
                </span>

              </div>

              <p className="mt-1 text-[8px] font-mono text-purple-200/60">
                JAVA • REACT • SPRING
              </p>

            </motion.div>

            {/* ================= AVAILABLE CARD ================= */}

            <div className="absolute -right-2 bottom-16 hidden rounded-xl border border-green-400/15 bg-green-400/[0.05] px-3 py-2 backdrop-blur-xl sm:block">

              <div className="flex items-center gap-2 text-[8px] font-mono text-green-300">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                OPEN TO OPPORTUNITIES

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[8px] font-mono tracking-[0.3em] text-ink-700 sm:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={12} />
      </motion.div>

    </section>
  );
}