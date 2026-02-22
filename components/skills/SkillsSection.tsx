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
