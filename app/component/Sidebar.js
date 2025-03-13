"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="bg-base-200 h-full min-h-screen shadow-lg">
      {/* Brand/Logo Area */}
      <div className="p-4 border-b border-base-300">
        <h2 className="font-bold text-xl text-primary flex items-center gap-2">
          <span className="w-2 h-6 bg-primary rounded-sm inline-block"></span>
          Verdant
        </h2>
      </div>
      
      {/* Navigation Menu */}
      <div className="p-4">
        <ul className="menu menu-md gap-2">
          <li>
            <Link 
              href="/" 
              className={`flex items-center ${pathname === '/' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-base-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`flex items-center ${pathname === '/about' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-base-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`flex items-center ${pathname === '/contact' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-base-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {/* User Section/Footer */}
      <div className="mt-auto p-4 border-t border-base-300 absolute bottom-0 w-full">
        <div className="flex items-center gap-3">
          <div className="avatar placeholder">
            <div className="bg-primary/10 text-primary rounded-full w-8">
              <span>VC</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Verdant Client</p>
            <p className="text-xs text-base-content/70">Premium Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}