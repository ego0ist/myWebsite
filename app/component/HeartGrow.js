"use client";

import { useState, useRef, useEffect } from "react";

export default function HeartGrow() {
  const [size, setSize] = useState(48);
  const heartRef = useRef(null);

  function handleClick() {
    setSize((prevSize) => prevSize + 10);
  }

  function handleOutsideClick(event) {
    if (heartRef.current && !heartRef.current.contains(event.target)) {
      setSize((prevSize) => Math.max(48, prevSize - 10));
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        ref={heartRef}
        onClick={handleClick}
        className="transition-transform duration-200 ease-in-out focus:outline-none bg-transparent border-none select-none"
        style={{ fontSize: `${size}px`, userSelect: "none" }}
      >
        ❤️
      </button>
    </div>
  );
}