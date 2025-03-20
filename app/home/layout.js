"use client";
import HomeBanner from "../components/HomeBanner";
import { useDarkMode } from "../context/DarkModeContext";

export default function HomeLayout({ children }) {
  // Retrieve dark mode value for the banner
  const { darkMode } = useDarkMode();
  
  return (
    <>
      <HomeBanner darkMode={darkMode} />
      {children}
    </>
  );
}