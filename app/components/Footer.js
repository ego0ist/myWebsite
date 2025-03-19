"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-lg`}>
      {/* Mobile-optimized footer content */}
      <div className="container mx-auto p-4">
        {/* Top section with logo and slogan */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <Link href="/home" className="flex flex-row items-center gap-3 mb-4 md:mb-0 w-full md:w-auto justify-center md:justify-start">
            <div className="relative w-10 h-10 md:w-12 md:h-12 ">
              <Image 
                src="/vSave.png" 
                alt="Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-semibold">einfach sparen</span>
          </Link>
          
          {/* Social Media Icons - Right aligned on desktop, centered on mobile */}
          <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-blue-600 p-2" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 p-2" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500 p-2" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://github.com" className="hover:text-gray-600 p-2" aria-label="Github">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Navigation - Centered and horizontal on both mobile and desktop */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <Link href="/" className="hover:text-blue-500 py-1">Home</Link>
          <Link href="/about" className="hover:text-blue-500 py-1">About</Link>
          <Link href="/services" className="hover:text-blue-500 py-1">Services</Link>
          <Link href="/contact" className="hover:text-blue-500 py-1">Contact</Link>
        </nav>
      </div>

      {/* Copyright - Same on all screens */}
      <div className={`text-center ${darkMode ? "bg-gray-800" : "bg-gray-100"} p-2`}>
        <p>© {new Date().getFullYear()} Maxi lernt coden | All Rights Reserved</p>
      </div>
    </footer>
  );
}
