"use client";

import AldiButton from '../components/AldiButton.js';
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext.js';

export default function ChooseMarket() {
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
          Wähle deinen Store
        </h2>
      </div>
      
      {/* Horizontal flex container for buttons */}
      <div className="flex flex-row items-center justify-center gap-8">
        <AldiButton 
          imagePath="/images/Aldi_Süd_2017_logo.svg.png"
          alt="Aldi Store"
          href="/markets/aldi"
          width={240}
          height={100}
          className="shadow-lg"
        />
        
        <AldiButton 
          imagePath="/images/lidl-logo.png"
          alt="Lidl Store"
          href="/markets/lidl"
          width={240}
          height={100}
          className="shadow-lg"
        />
      </div>
    </div>
  );
}