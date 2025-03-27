"use client";

import StoreButton from '../components/StoreButton.js';


export default function ChooseMarket() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-0">
      <div className="text-center mb-8">
        <h2 className= "text-4xl font-bold text-gray-800>">
          Wähle deinen Store
        </h2>
      </div>
      
      {/* Horizontal flex container for buttons */}
      <div className="flex flex-row items-center justify-center gap-8">
        <StoreButton 
          imagePath="/Aldi_Süd_2017_logo.svg.png"
          alt="Aldi Store"
          href="/markets/aldi"
          width={240}
          height={100}
          className="shadow-lg"
        />
        
        <StoreButton 
          imagePath="/lidl-logo.png"
          alt="Lidl Store"
          href="/markets/lidl"
          width={240}
          height={100}
          className="shadow-lg"
        />
      </div>
      </div>
    </div>
  );
}