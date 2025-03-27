import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
 
  return (
        <header className="w-full">  
        <div className="container mx-auto flex justify-between items-center p-2">
        <Link href="/home" className="flex items-center gap-3">
          <div className="relative w-12 h-12"> {/* Container for the image */}
            <Image 
              src="/vSave.png" 
              alt="Logo" 
              sizes="(max-width: 69px) 100vw, 50vw"
              fill
              className="object-contain"
            />
          </div> 
        </Link>
 
        <ThemeToggle />
      </div>
    </header>
  );
}
