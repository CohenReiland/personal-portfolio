import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 transition-colors">
      <Navbar />

      {/* Main Section With Information */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <h1 className="max-w-4xl mx-auto text-center">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Cohen Reiland</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Computer Science Student | Runner | Gamer | Aspiring Developer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Sophomore at NDSU exploring the intersection of technology, endurance, and creativity.
        </p>
        <div />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a sophomore at NDSU studying Computer Science. I've learned Java fundamentals, data structures,
              and I'm currently diving into modern software development, databases, and programming languages.
              I love building things and solving problems.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Programming Skills */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Java
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  HTML
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  CSS
                </span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  React
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Next.js
                </span>
              </div>
            </div>

            {/* Concepts */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
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
              </div>
            </div>

            {/* Current Learning */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Current Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projects
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-12 rounded-lg text-center">
            <div className="text-6xl mb-6">🚧</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Projects Coming Soon!
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              I'm currently working on some exciting projects. Stay tuned!
            </p>
          </div>

          {/* This is what a project card will look like when you add them later */}
          {/* 
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Project Name
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Project description goes here. What does it do? What technologies did you use?
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Contact Section */}
      <section id ="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Contact Me
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and connections. Whether you want to discuss a project, 
            ask a question, or just say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email Button */}
            <a href="mailto:cohen200521@gmail.com" 
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              <span className="text-2xl">📧</span>
              <span className="font-medium">Email</span>
            </a>

            {/* GitHub Button */}
            <a href="https://github.com/CohenReiland" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              <span className="text-2xl">💻</span>
              <span className="font-medium">GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/cohen-reiland" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center">
              <span className="text-2xl">🔗</span>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mt-16 text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Cohen Reiland. Built with Next.js and Tailwind CSS.</p>
          </div>
    </div>
  );
}