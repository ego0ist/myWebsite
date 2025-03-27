"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function StoreButton({ imagePath, alt, href, width = 200, height = 80, className = "" }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button 
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      aria-label={`Navigate to ${alt}`}
    >
      <Image
        src={imagePath}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </button>
  );
}