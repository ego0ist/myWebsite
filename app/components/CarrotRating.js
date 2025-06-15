"use client";

import { useState, useEffect } from 'react';

// Helper functions for local storage
const getStoredRating = (offerId) => {
  if (typeof window === 'undefined') return 0; // Guard for SSR
  const stored = localStorage.getItem(`rating_offer_${offerId}`);
  return stored ? parseInt(stored, 10) : 0; // Return 0 if not rated yet
};

const setStoredRating = (offerId, rating) => {
   if (typeof window === 'undefined') return;
  localStorage.setItem(`rating_offer_${offerId}`, rating.toString());
};

export default function CarrotRating({ offerId }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setIsMounted(true);
    setRating(getStoredRating(offerId));
  }, [offerId]); // Load rating when component mounts or offerId changes

  const handleRating = (newRating) => {
    if (!isMounted) return; // Don't interact until mounted
    setRating(newRating);
    setStoredRating(offerId, newRating);
  };

  // Render empty div or placeholder during SSR / before mount
  if (!isMounted) {
     // Placeholder with same height to prevent layout shift
    return <div className="flex items-center h-6"></div>;
  }

  return (
    <div className="flex items-center" title={`Deine Bewertung: ${rating} von 5 Karotten`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`btn btn-ghost btn-xs p-0 m-0 text-xl transition-colors duration-150 ease-in-out ${
            (hoverRating || rating) >= star ? 'text-orange-400' : 'text-gray-300 dark:text-gray-600'
          }`}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          aria-label={`Bewerte mit ${star} Karotten`}
        >
          🥕
        </button>
      ))}
       {rating > 0 && (
          <button
             className="btn btn-ghost btn-xs ml-1 text-gray-400 hover:text-error"
             onClick={() => handleRating(0)} // Set rating to 0 to clear
             title="Bewertung löschen"
             aria-label="Bewertung löschen"
          >
             &times; {/* Clear button */}
          </button>
       )}
    </div>
  );
}