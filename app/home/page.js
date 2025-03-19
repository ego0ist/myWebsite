"use client";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

export default function HomePage() {
  const { darkMode } = useDarkMode();

  return (
    <section className={`prose prose-lg w-full flex flex-col items-center ${
      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    } px-3 py-12 md:py-16`}>
      {/* Added specific vertical padding instead of justify-center */}
      
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

      {/* Added bottom margin to create space before footer */}
      <Link href="/choose" className="mt-4 md:mt-5 mb-16 md:mb-20 w-full max-w-xs flex justify-center">
        <button className="w-full md:w-auto px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-lg transition duration-300">
          let&rsquo;s go 
        </button>
      </Link>
    </section>
  );
}


