"use client";

import SkillCard, { Skill } from "./SkillCard";
import {
  Coffee,
  Hash,
  Database,
  Code,
  Palette,
  Globe,
  Braces,
  Atom,
  Triangle,
  Wind,
  GitBranch,
  Terminal,
  Layers,
  Network,
  BookOpen,
  FlaskConical,
  Sparkles,
  Server,
} from "lucide-react";

const languagesSkills: Skill[] = [
  { name: "Java", icon: Coffee, years: 2 },
  { name: "C#", icon: Hash, years: 1 },
  { name: "SQL", icon: Database, years: 1 },
  { name: "HTML", icon: Code, years: 1 },
  { name: "CSS", icon: Palette, years: 1 },
];

const frameworksSkills: Skill[] = [
  { name: "React", icon: Atom, years: 1 },
  { name: "Next.js", icon: Triangle, years: 1 },
  { name: "Tailwind CSS", icon: Wind, years: 1 },
  { name: "Node.js", icon: Server, years: 1, yearLabel: "< 1 yr" },
  { name: "Git", icon: GitBranch, years: 1 },
];

const conceptsSkills: Skill[] = [
  { name: "OOP", icon: Layers, years: 2 },
  { name: "Data Structures", icon: Network, years: 2 },
  { name: "Algorithms", icon: BookOpen, years: 1 },
  { name: "Data Modeling", icon: Database, years: 1 },
  { name: "CLI / Bash", icon: Terminal, years: 1 },
];

const learningSkills: Skill[] = [
  { name: "JavaScript", icon: Globe, years: 1, yearLabel: "< 1 yr" },
  { name: "TypeScript", icon: Braces, years: 1, yearLabel: "< 1 yr" },
  { name: "AI / ML", icon: Sparkles, years: 1, yearLabel: "< 1 yr" },
  { name: "Flask", icon: FlaskConical, years: 1, yearLabel: "< 1 yr" },
];

const cards = [
  { title: "Languages", skills: languagesSkills, accentColor: "bg-blue-500" },
  {
    title: "Frameworks",
    skills: frameworksSkills,
    accentColor: "bg-violet-500",
  },
  { title: "Concepts", skills: conceptsSkills, accentColor: "bg-emerald-500" },
  { title: "Learning", skills: learningSkills, accentColor: "bg-amber-500" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-6 pt-24 pb-60 bg-stone-100 dark:bg-zinc-800"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Skills
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-sm">
          Hover over a skill to see how long I have been working with it
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <SkillCard
              key={card.title}
              title={card.title}
              skills={card.skills}
              accentColor={card.accentColor}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-200 dark:to-zinc-900" />
    </section>
  );
}
