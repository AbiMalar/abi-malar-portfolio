import { motion } from "framer-motion";
import { Code2, BrainCircuit, BarChart3, Rocket, Users, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";

const AREAS = [
  { icon: Code2, title: "Full-Stack Development", text: "Building responsive interfaces and connecting them with reliable backend APIs and databases." },
  { icon: BrainCircuit, title: "Problem Solving", text: "Strengthening DSA, logical thinking and clean coding through hands-on practice." },
  { icon: BarChart3, title: "Data & Analytics", text: "Creating useful dashboards and turning structured data into clear insights." },
  { icon: Rocket, title: "Project Building", text: "Taking ideas from requirements to a working prototype with practical features." },
  { icon: Users, title: "Team Collaboration", text: "Working with peers, sharing responsibilities and contributing to technical activities." },
  { icon: Lightbulb, title: "Continuous Learning", text: "Exploring modern development tools, cloud concepts and emerging technologies." },
];

export default function Focus() {
  return (
    <section id="focus" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="What I Do" title="Areas I'm actively building in" align="center" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-indigo/25 to-accent-cyan/25 flex items-center justify-center">
                <item.icon size={20} className="text-accent-cyan" strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-100 mt-5">{item.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed mt-2">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
