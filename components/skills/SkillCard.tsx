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