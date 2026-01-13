'use client';
import { MapPin, Mail, Github, Linkedin, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroWatch from "@/components/watch/HeroWatch";
import AboutRunStats from "@/components/about/AboutRunStats";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  const EMAIL = "cohen200521@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-zinc-900 transition-colors pt-16 md:pt-0 md:pl-24">
      <Navbar />

      {/* Main Section With Information */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 bg-stone-100 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Watch Half */}
          <div className="flex justify-center md:justify-end mb-4 md:mb-0">
            <HeroWatch imageSrc="/profile.jpg" />
          </div>
          {/* Personal Half */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Cohen <span className="text-blue-600 dark:text-blue-400">Reiland</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Science Sophomore @ NDSU | Software Engineer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md">
              Motivated computer science student with a strong interest in software engineering and artificial intelligence.
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400">
              <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
              <span>Fargo, ND</span>
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-200 dark:to-zinc-900" />
        {!scrolled && (
          <div className="absolute bottom-10 text-4xl font-bold animate-bounce text-zinc-500/80 dark:text-zinc-400/80">
            ↓
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 pt-24 pb-60 bg-stone-200 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a Computer Science sophomore at NDSU with a passion for software engineering and AI.
              I enjoy building projects that challenge my problem-solving skills and continuously learning new technologies.
            </p>
            <AboutRunStats />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-100 dark:to-zinc-800" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 pt-24 pb-60 bg-stone-100 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Java
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  C#
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  SQL
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  HTML/CSS
                </span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  ASP.NET Core
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Blazor
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  GitHub
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Microsoft Azure
                </span>
              </div>
            </div>

            {/* Concepts */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  Data Structures
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  Algorithms
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  OOP
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  Data Modeling
                </span>
              </div>
            </div>

            {/* Current Learning */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Current Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  React
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-200 dark:to-zinc-900" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 pt-24 pb-60 bg-stone-200 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg overflow-hidden">
              <a
                href="https://github.com/CohenReiland/Fargo-Spa-Wellness-Application"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <img src="/fargo-spa.png"
                  alt="Fargo Spa & Wellness Application Screenshot"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Fargo Spa & Wellness Application
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                  Team-built web app enabling appointment booking and role-based management.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    ASP.NET Core
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Blazor
                  </span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Azure DevOps
                  </span>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg overflow-hidden">
              <a
                href="https://github.com/CohenReiland/Online-Store-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <img src="/online-store.png"
                  alt="Online Store Management System Screenshot"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Online Store Management System
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                  Database-driven system for inventory, orders, and business reporting.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-100 dark:to-zinc-800" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 pt-24 pb-60 bg-stone-100 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Contact Me
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to learn, grow, and contribute.
            Whether you want to discuss a project, collaborate on something new, or just connect, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Email Button */}
            <button onClick={handleEmailClick}
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              {copied ? <Check size={22} /> : <Mail size={22} />}
              <span>{copied ? "Email Copied" : "Email"}</span>
            </button>

            {/* GitHub Button */}
            <a href="https://github.com/CohenReiland" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              <Github size={22} />
              <span className="font-medium">GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/cohen-reiland" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              <Linkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-stone-100 dark:to-zinc-900" />
      </section>

      <div className="mt-16 text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Cohen Reiland. Built with Next.js and Tailwind CSS.</p>
      </div>
    </div>
  );
}