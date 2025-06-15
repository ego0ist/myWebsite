// app/components/ClientHeaderLoader.js
"use client"; // Markiert diese Komponente als Client Component

import dynamic from "next/dynamic";

// Lade den Header hier dynamisch ohne SSR
const Header = dynamic(() => import("./Header"), { ssr: false });

// Diese Komponente rendert einfach den dynamisch geladenen Header
export default function ClientHeaderLoader() {
  // Du könntest hier ggf. Props durchreichen, falls der Header welche benötigt
  return <Header />;
}