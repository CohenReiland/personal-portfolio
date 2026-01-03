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
          <div/>
      </section>
    </div>
  );
}