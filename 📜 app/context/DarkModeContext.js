"use client"; // Needed for stateful components in Next.js App Router
import { createContext, useContext, useEffect, useState } from "react";

// Create Dark Mode Context
const DarkModeContext = createContext();

// Dark Mode Provider (Wraps the entire app)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage (optional)
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  // Save dark mode preference to localStorage when changed
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

// Custom Hook for easy access to Dark Mode state
export function useDarkMode() {
  return useContext(DarkModeContext);
}
