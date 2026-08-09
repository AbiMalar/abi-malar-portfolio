import { motion } from "framer-motion";
import { Users, CalendarCheck2, Presentation, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  { icon: Users, title: "Department Club Leadership", text: "Contributing in a student leadership role within the department club and supporting technical activities." },
  { icon: CalendarCheck2, title: "Event Coordination", text: "Helping plan and coordinate student-focused technical events, activities and collaborative work." },
  { icon: Presentation, title: "Technical Presentation", text: "Communicating project ideas and technical concepts in a clear, presentation-friendly way." },
  { icon: HeartHandshake, title: "Team Collaboration", text: "Working with teams, dividing tasks and keeping project work organized toward shared outcomes." },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Leadership & Activities" title="Beyond writing code" align="center" />
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6 flex gap-5"
            >
              <div className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <item.icon size={19} className="text-accent-violet" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-100">{item.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
