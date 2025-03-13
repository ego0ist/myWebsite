"use client"; // Required for stateful components in Next.js App Router
import { createContext, useContext, useState } from "react";

// Create Dark Mode Context
const DarkModeContext = createContext();

// Dark Mode Provider (Wraps the entire app)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

// Custom Hook for Dark Mode Access
export function useDarkMode() {
  return useContext(DarkModeContext);
}
