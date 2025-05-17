export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-amber-300 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Über Uns</h1>
        <p className="text-lg text-gray-700 mb-4">
          Willkommen bei unserem Blog! Wir sind ein kleines Team von Webentwicklern, Designer:innen und
          Tech-Enthusiasten, die ihre Leidenschaft für moderne Webtechnologien mit der Welt teilen möchten.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Unser Ziel ist es, einfach verständliche Inhalte zu Next.js, React, Tailwind CSS und anderen
          Frontend-Technologien bereitzustellen – sowohl für Anfänger als auch für Fortgeschrittene.
        </p>
        <p className="text-lg text-gray-700">
          Dieser Blog wurde mit ❤️ und modernsten Tools wie Next.js 14, App Router, Server Actions und Tailwind
          CSS entwickelt.
        </p>
      </main>
    </div>
  );
}

