"use client";
// filepath: app/components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ThemeToggle({ initialTheme = 'system' }) {
  const [theme, setTheme] = useState(initialTheme);
  const router = useRouter();
  
  useEffect(() => {
    // Apply theme class to document
    const root = document.documentElement;
    if (theme === 'dark' || 
       (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Set cookie
    document.cookie = `theme=${theme};path=/;max-age=31536000`;
  }, [theme]);
  
  function cycleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(nextTheme);
    router.refresh(); // Refresh server components to reflect new cookie value
  }

  return (
    <button onClick={cycleTheme} className="p-2 rounded-md">
      {theme === 'light' && <Sun size={20} />}
      {theme === 'dark' && <Moon size={20} />}
      {theme === 'system' && <Monitor size={20} />}
    </button>
  );
}