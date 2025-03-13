"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <footer className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-lg`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        <Link href="/" className="text-2xl font-bold">🚀 Maxi lernt coden</Link>

        {/* Navigation */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Social Media */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="hover:text-blue-600"><Facebook size={20} /></a>
          <a href="https://twitter.com" className="hover:text-blue-400"><Twitter size={20} /></a>
          <a href="https://instagram.com" className="hover:text-pink-500"><Instagram size={20} /></a>
          <a href="https://github.com" className="hover:text-gray-600"><Github size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className={`text-center ${darkMode ? "bg-gray-800" : "bg-gray-100"} p-2`}>
        <p>© {new Date().getFullYear()} Maxi lernt coden | All Rights Reserved</p>
      </div>
    </footer>
  );
}
