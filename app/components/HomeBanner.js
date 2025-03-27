import Image from "next/image"; 
import Link from "next/link";

export default function HomeBanner({ darkMode }) {
  return (
    <section className="prose prose-lg w-full flex flex-col items-center">
      
      <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-center">Welcome to</h1>
      
      <div className="relative w-24 h-24 md:w-32 md:h-32"> 
        <Image 
          src="/vSave.png" 
          alt="Logo" 
          fill
          sizes="(max-width: 69px) 100vw, 50vw" 
          priority
          className="object-contain"
        />
      </div>
      
      <p className="text-base md:text-lg mt-2 md:mt-3 max-w-xs md:max-w-lg text-center">
        Keine Gedanken mehr übers Sparen machen.
      </p>

      <Link href="/choose" className="mt-4 md:mt-5 mb-16 md:mb-20 w-full max-w-xs flex justify-center">
        <button className="w-full md:w-auto px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-lg transition duration-300">
          let&rsquo;s go 
        </button>
      </Link>
    </section>    
  );
}