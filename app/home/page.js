"use client";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

export default function HomePage() {
  const { darkMode } = useDarkMode();

  return (
    <section className={`w-full flex flex-col items-center justify-center ${
      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    } px-3 py-4 md:py-5`}>
      {/* Removed min-h-screen to prevent excess vertical space */}
      
      {/* Removed Head component (use metadata exports instead) */}
      
      <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-center">Welcome to</h1>
      
      <div className="relative w-24 h-24 md:w-32 md:h-32"> 
        <Image 
          src="/vSave.png" 
          alt="Logo" 
          fill
          sizes="(max-width: 768px) 96px, 128px"
          priority
          className="object-contain"
        />
      </div>
      
      <p className="text-base md:text-lg mt-2 md:mt-3 max-w-xs md:max-w-lg text-center">
        Keine Gedanken mehr übers Sparen machen.
      </p>

      {/* Tighter spacing on CTA button */}
      <Link href="/choose" className="mt-4 md:mt-5 w-full max-w-xs flex justify-center">
        <button className="w-full md:w-auto px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-lg transition duration-300">
          let&rsquo;s go 
        </button>
      </Link>
    </section>
  );
}

 
