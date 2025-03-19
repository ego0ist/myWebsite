"use client";
import Image from "next/image";
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
          <h1 className="text-5xl font-bold mb-6 ">Welcome to </h1>
          <div className="relative w-36 h-36"> {/* Container for the image */}
                      <Image 
                        src="/Aldi_Süd_2017_logo.svg.png" 
                        alt="Logo" 
                        fill
                        className="object-contain "
                      />
                    </div>
          <p className="text-lg mt-4 max-w-2xl text-center">
            Keine Gedanken mehr übers Sparen machen.
          </p>

          {/* Call-to-Action Button */}
          <Link href="/choose">
            <button className="mt-6 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg transition duration-300">
              let&rsquo;s go 
            </button>
          </Link>
        </>
      </section>
    </DarkModeProvider>
  );
}
