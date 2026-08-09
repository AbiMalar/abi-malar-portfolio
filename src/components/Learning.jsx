import { motion } from "framer-motion";
import { BookOpen, Cloud, Database, Code2, Brain, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TOPICS = [
  { icon: Code2, title: "Advanced Java", text: "Deepening Java, backend development and application architecture." },
  { icon: Brain, title: "DSA & Problem Solving", text: "Practising algorithms, data structures and coding patterns for placements." },
  { icon: Cloud, title: "Cloud & Deployment", text: "Learning cloud fundamentals and how modern applications are deployed." },
  { icon: Database, title: "Backend & APIs", text: "Improving REST API design, database integration and application structure." },
  { icon: BookOpen, title: "AI & RAG Concepts", text: "Exploring AI-assisted applications, retrieval workflows and practical use cases." },
  { icon: Target, title: "Placement Preparation", text: "Building consistency across aptitude, coding, CS fundamentals and interviews." },
];

export default function Learning() {
  return (
    <section id="learning" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Currently Learning" title="Growing one skill at a time" align="center" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 border-dashed border-white/[0.12]"
            >
              <topic.icon size={20} className="text-accent-cyan" />
              <h3 className="font-display text-base font-semibold text-ink-100 mt-4">{topic.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed mt-2">{topic.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
