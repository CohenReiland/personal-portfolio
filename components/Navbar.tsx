'use client'

import { LayoutDashboard, UserRound, Code2, FolderKanban, Send, SunMedium, MoonStar } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState, useEffect } from "react"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string>("home")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (!element) return

        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementHeight = rect.height
        const viewportHeight = window.innerHeight

        const scrollPosition = elementTop - viewportHeight / 2 + elementHeight / 2

        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })

        setMobileMenuOpen(false)
    }

    return (
        <>
            {/* Desktop Section */}
            <nav
                className={`hidden md:flex fixed left-0 top-0 h-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-stone-100/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                {/*Navbar Icons and Links*/}
                <div className="h-full px-4 py-8 flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center gap-8 flex-1 justify-center">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`group flex flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${activeSection === "home"
                                ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 scale-110"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`} title="Home"
                        >
                            <LayoutDashboard size={22} />
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
                        </button>
                        <button onClick={() => scrollToSection('about')}
                            className={`group flex flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${activeSection === "about"
                                ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 scale-110"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`} title="About"
                        >
                            <UserRound size={22} />
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">About</span>
                        </button>
                        <button onClick={() => scrollToSection('skills')}
                            className={`group flex flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${activeSection === "skills"
                                ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 scale-110"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`} title="Skills"
                        >
                            <Code2 size={22} />
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Skills</span>
                        </button>
                        <button onClick={() => scrollToSection('projects')}
                            className={`group flex flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${activeSection === "projects"
                                ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 scale-110"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`} title="Projects"
                        >
                            <FolderKanban size={22} />
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
                        </button>
                        <button onClick={() => scrollToSection('contact')}
                            className={`group flex flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${activeSection === "contact"
                                ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 scale-110"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`} title="Contact"
                        >
                            <Send size={22} />
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <span className="text-xl">{theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} className="text-gray-500 dark:text-gray-400"/>}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Section */}
            <div className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-stone-100/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg'
                : 'bg-stone-100/50 dark:bg-zinc-900/50 backdrop-blur-sm'
                }`}>
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        {/* Hambergur Menu */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-900 dark:text-white"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-0.5 w-full bg-current transform transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}></span>
                                <span className={`block h-0.5 w-full bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                <span className={`block h-0.5 w-full bg-current transform transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}></span>
                            </div>
                        </button>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            <span className="text-lg">{theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} className="text-gray-500 dark:text-gray-400" />}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-stone-100 dark:bg-zinc-900 shadow-2xl z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-6 flex flex-col gap-6 mt-16">
                    <button onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setMobileMenuOpen(false)
                    }}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${activeSection === "home"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <LayoutDashboard size={22} />
                        <span className="text-lg font-medium">Home</span>
                    </button>
                    <button onClick={() => scrollToSection('about')}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${activeSection === "about"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <UserRound size={22} />
                        <span className="text-lg font-medium">About</span>
                    </button>
                    <button onClick={() => scrollToSection('skills')}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${activeSection === "skills"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <Code2 size={22} />
                        <span className="text-lg font-medium">Skills</span>
                    </button>
                    <button onClick={() => scrollToSection('projects')}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${activeSection === "projects"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <FolderKanban size={22} />
                        <span className="text-lg font-medium">Projects</span>
                    </button>
                    <button onClick={() => scrollToSection('contact')}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${activeSection === "contact"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <Send size={22} />
                        <span className="text-lg font-medium">Contact</span>
                    </button>
                </div>
            </div>
        </>
    )
}