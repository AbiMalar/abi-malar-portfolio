import {
  Coffee,
  FileCode2,
  Braces,
  LayoutTemplate,
  Palette,
  Atom,
  Blocks,
  Wind,
  Server,
  Leaf,
  Database,
  GitBranch,
  Github,
  TerminalSquare,
  Send,
  BarChart3,
} from "lucide-react";

// Note: skill categories map directly to the tech Abi actually works with —
// no invented percentages, just grouped, honest capability.
export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "Python", icon: FileCode2 },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML", icon: LayoutTemplate },
      { name: "CSS", icon: Palette },
      { name: "React.js", icon: Atom },
      { name: "Redux", icon: Blocks },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Spring Boot", icon: Leaf },
      { name: "Spring Data JPA", icon: Database },
    ],
  },
  {
    id: "database",
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: Leaf },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: TerminalSquare },
      { name: "Postman", icon: Send },
      { name: "Power BI", icon: BarChart3 },
    ],
  },
];
