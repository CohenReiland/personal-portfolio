'use client'

import { useTheme } from "./ThemeProvider"
import { useState, useEffect } from "react"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav
            className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            {/*Navbar Icons and Links*/}
            <div className="h-full px-4 py-8 flex flex-col items-center justify-between">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    CR
                </div>

                <div className="flex flex-col items-center gap-8 flex-1 justify-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Home"
                    >
                        <span className="text-2xl">🏠</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
                    </button>
                    <button onClick={() => scrollToSection('about')}
                        className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title = "About"
                    >
                        <span className="text-2xl">👤</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">About</span>
                    </button>
                    <button onClick={() => scrollToSection('skills')}
                        className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Skills"
                    >
                        <span className="text-2xl">⚡</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Skills</span>
                    </button>
                    <button onClick={() => scrollToSection('projects')}
                        className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Projects"
                    >
                        <span className="text-2xl">💼</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
                    </button>
                    <button onClick={() => scrollToSection('contact')}
                        className="group flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Contact"
                    >
                        <span className="text-2xl">📧</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
                    </button>
                </div>

                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                    </button>
                </div>
        </nav>
    )
}