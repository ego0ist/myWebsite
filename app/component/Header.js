"use client";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode(); // Get dark mode state globally

  return (
    <header className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/home" className="text-2xl font-bold">🚀 Maxi lernt coden</Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
