"use client";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import { DarkModeProvider } from "../context/DarkModeContext";
import Head from "next/head";


export default function HomePage() {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <DarkModeProvider>
      <section className={`w-full min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} p-6`}>
        <>
          <Head>
            <title>Meine Website - Startseite</title>
            <meta name="description" content="Das ist meine Next.js-Webseite" />
          </Head>
          <h1 className="text-5xl font-bold">Welcome to 🚀 MyBrand</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">
            Your one-stop destination for learning modern web development with **Next.js & Tailwind CSS**.
          </p>

          {/* Call-to-Action Button */}
          <Link href="/about">
            <button className="mt-6 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg transition duration-300">
              Learn More
            </button>
          </Link>
        </>
      </section>
    </DarkModeProvider>
  );
}
