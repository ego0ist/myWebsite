"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput"; // Import SearchInput
import ShoppingListDropdown from "./ShoppingListDropdown"; // Import ShoppingListDropdown (kommt in Schritt 5)

export default function Header() {

  return (
        <header className="w-full border-b">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-2 gap-4">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-10 h-10 md:w-12 md:h-12"> {/* Adjusted size */}
            <Image
              src="/vSave.png"
              alt="Logo"
              fill
              className="object-contain"
              priority // Prioritize logo loading
            />
          </div>
        </Link>

        {/* Search Input - Takes available space */}
        <div className="flex-grow order-3 md:order-2 w-full md:w-auto">
             <SearchInput />
        </div>

         {/* Right Aligned Icons */}
         <div className="flex items-center gap-2 order-2 md:order-3 flex-shrink-0">
            <ShoppingListDropdown /> {/* Add Shopping List Icon */}
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}