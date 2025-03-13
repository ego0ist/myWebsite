"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-8">My Web Development Journey</h1>
      
      <div className="prose prose-lg max-w-3xl text-center md:text-left">
        <p className="text-lg mb-4">
          It all started with a single HTML file. Opening Notepad, I typed those magical words: <span className="font-mono">&lt;html&gt;</span>, not knowing how they would change my life forever.
        </p>
        
        <p className="text-lg mb-4">
          In the beginning, it was just static pages—tables for layouts, inline styles, and the occasional animated GIF. I remember the excitement of seeing my first webpage render in Internet Explorer 6, even with all its quirks and inconsistencies.
        </p>
        
        <p className="text-lg mb-4">
          Then came CSS, JavaScript, and the revelation that websites could be interactive, responsive, and beautiful. Each new technology opened doors I didn&apos;t even know existed.
        </p>
        
        <p className="text-lg mb-6">
          Today, with frameworks like Next.js and tools like Tailwind CSS, what once took weeks can be built in hours. But the thrill of bringing ideas to life through code? That hasn&apos;t changed a bit.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <Link href="/home">
        <button className="mt-8 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg transition duration-300">
          Back to Home
        </button>
      </Link>
    </section>
  );
}