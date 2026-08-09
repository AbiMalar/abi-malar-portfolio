import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Where I've applied it" />

        <div className="mt-14 relative pl-8 border-l border-white/10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full glass flex items-center justify-center">
                <Briefcase size={14} className="text-accent-cyan" />
              </span>

              <span className="font-mono text-xs uppercase tracking-wide text-accent-cyan/80">
                {item.period}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink-100 mt-1.5">
                {item.role}
              </h3>
              <p className="text-ink-500 text-sm font-medium mt-0.5">{item.org}</p>

              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-ink-300">
                    <span className="text-accent-violet mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
