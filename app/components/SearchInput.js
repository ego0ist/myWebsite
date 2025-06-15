"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to the search results page
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-sm">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Produkt suchen..."
        className="input input-sm w-full rounded-r-none" // daisyUI input
        aria-label="Produkt suchen"
      />
      <div className="ml-4">
      <button
        type="submit"
        className="btn btn-sm btn-primary rounded-l-none" // daisyUI button
        aria-label="Suchen"
      >
        <Search size={18} />
      </button>
      </div>
    </form>
  );
}