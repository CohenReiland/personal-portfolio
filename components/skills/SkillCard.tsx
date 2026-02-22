"use client"

import { LucideIcon } from "lucide-react"

export type Skill = {
    name: string
    icon: LucideIcon
    years: number
    yearLabel?: string
};

type SkillCardProps = {
    title: string
    accentColor: string
    skills: Skill[]
}

export default function SkillCard({ title, accentColor, skills }: SkillCardProps) {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-700/50 flex flex-col">
            <div className={`h-1 w-full ${accentColor}`} />
            <div className="p-5 flex flex-col gap-4 flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                    {title}
                </h3>
                <div className="flex flex-col gap-2">
                    {skills.map((skill) => (
                        <SkillRow key={skill.name} skill={skill} accentColor={accentColor} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillRow({ skill, accentColor }: { skill: Skill, accentColor: string }) {
    const Icon = skill.icon;
    const label = skill.yearLabel ?? (skill.years === 1 ? "1 year" : `${skill.years} years`);
    return (
        <div className="group relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-default overflow-hidden">
      <div
        className={`
          absolute inset-0 ${accentColor} opacity-0
          translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-10
          transition-all duration-500 ease-out
        `}
      />

      {/* Icon */}
      <Icon
        size={18}
        className="relative z-10 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 shrink-0"
      />

      {/* Skill name */}
      <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 flex-1">
        {skill.name}
      </span>

      {/* Years label - fades in from the right on hover */}
      <span
        className="
          relative z-10 text-xs font-semibold
          text-gray-400 dark:text-gray-500
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-400 ease-out
          shrink-0
        "
      >
        {label}
      </span>
    </div>
    );
}