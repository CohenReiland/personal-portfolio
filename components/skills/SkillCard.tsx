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
    
}