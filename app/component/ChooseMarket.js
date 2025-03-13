"use client";
import { useState } from "react";

function SquareEmoji({ emoji }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <div
      className={`w-24 h-24 border-4 rounded-lg flex items-center justify-center cursor-pointer transition-all
        ${
          isActive
            ? "bg-blue-500 border-blue-700"
            : "bg-gray-200 border-gray-400"
        }
      `}
      onClick={handleClick}
    >
      <span className="text-4xl">{emoji}</span>
    </div>
  );
}

export default function HighlightSquares() {
  return (
    <div className="flex gap-4 justify-center mt-10">
      <SquareEmoji emoji="😀" />
    </div>
  );
}
