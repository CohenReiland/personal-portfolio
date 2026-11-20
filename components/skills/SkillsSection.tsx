"use client";

import SkillCard, { Skill } from "./SkillCard";
import {
  Coffee,
  Hash,
  Database,
  Atom,
  Triangle,
  Wind,
  GitBranch,
  Network,
  Server,
  FileCode,
  Paintbrush,
  Flame,
  Github,
  Cloud,
  Boxes,
  Waypoints,
  TableProperties,
  FileCode2,
  FileType2,
} from "lucide-react";

const languagesSkills: Skill[] = [
  { name: "Java", icon: Coffee, years: 2 },
  { name: "C#", icon: Hash, years: 1, yearLabel: "< 1 yr" },
  { name: "SQL", icon: Database, years: 1, yearLabel: "< 1 yr" },
  { name: "HTML", icon: FileCode, years: 1, yearLabel: "< 1 yr" },
  { name: "CSS", icon: Paintbrush, years: 1, yearLabel: "< 1 yr" },
];

const frameworksSkills: Skill[] = [
  { name: "ASP.NET Core", icon: Server, years: 1, yearLabel: "< 1 yr" },
  { name: "Blazor", icon: Flame, years: 1, yearLabel: "< 1 yr" },
  { name: "Git", icon: GitBranch, years: 1 },
  { name: "GitHub", icon: Github, years: 1 },
  { name: "Microsoft Azure", icon: Cloud, years: 1, yearLabel: "< 1 yr" },
];

const conceptsSkills: Skill[] = [
  { name: "OOP", icon: Boxes, years: 2 },
  { name: "Data Structures", icon: Network, years: 1 },
  { name: "Algorithms", icon: Waypoints, years: 1 },
  {
    name: "Data Modeling",
    icon: TableProperties,
    years: 1,
    yearLabel: "< 1 yr",
  },
];

const learningSkills: Skill[] = [
  { name: "JavaScript", icon: FileCode2, years: 1, yearLabel: "< 1 yr" },
  { name: "TypeScript", icon: FileType2, years: 1, yearLabel: "< 1 yr" },
  { name: "React", icon: Atom, years: 1, yearLabel: "< 1 yr" },
  { name: "Next.js", icon: Triangle, years: 1, yearLabel: "< 1 yr" },
  { name: "Node.js", icon: Server, years: 1, yearLabel: "< 1 yr" },
  { name: "Tailwind CSS", icon: Wind, years: 1, yearLabel: "< 1 yr" },
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
