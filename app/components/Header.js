"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode(); // Get dark mode state globally

  return (
    <header className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/home" className="flex items-center gap-3">
          <div className="relative w-12 h-12"> {/* Container for the image */}
            <Image 
              src="/vSave.png" 
              alt="Logo" 
              fill
              className="object-contain"
            />
          </div> 
        </Link>
 
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
