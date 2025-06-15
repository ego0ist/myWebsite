"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import OfferCard from '@/app/components/OfferCard';
import SearchSortControls from '@/app/components/SearchSortControls'; // Import new sort controls

// Helper function to group offers by marketId
function groupOffersByMarket(offers) {
  return offers.reduce((acc, offer) => {
    const marketKey = offer.marketId;
    if (!acc[marketKey]) {
      acc[marketKey] = { marketName: offer.marketName || marketKey, offers: [] };
    }
    acc[marketKey].offers.push(offer);
    return acc;
  }, {});
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('discount'); // Default sort

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    async function fetchResults() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error('Error fetching search results:', err);
        setError('Suche fehlgeschlagen. Bitte versuchen Sie es erneut.');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]); // Re-fetch when query changes

  // Group and Sort Logic
  const groupedAndSortedResults = useMemo(() => {
    // 1. Sort the flat results array first
    const sortedFlatResults = [...results].sort((a, b) => {
       switch(sortOption) {
        case 'priceAsc':
            return a.discountPrice - b.discountPrice;
        case 'priceDesc':
            return b.discountPrice - a.discountPrice;
         case 'unitPriceAsc':
            // Handle nulls (items without unit price) by pushing them to the end
            if (a.unitPrice === null) return 1;
            if (b.unitPrice === null) return -1;
            return a.unitPrice - b.unitPrice;
        case 'unitPriceDesc':
             if (a.unitPrice === null) return 1;
             if (b.unitPrice === null) return -1;
            return b.unitPrice - a.unitPrice;
        case 'discount': // Default
        default:
            // Calculate discount percentage, handle potential division by zero
             const discountA = a.originalPrice > 0 ? (a.originalPrice - a.discountPrice) / a.originalPrice : 0;
             const discountB = b.originalPrice > 0 ? (b.originalPrice - b.discountPrice) / b.originalPrice : 0;
             return discountB - discountA; // Higher discount first
       }
    });

    // 2. Group the already sorted results
     const grouped = groupOffersByMarket(sortedFlatResults);

     // 3. Sort the markets alphabetically by name
     return Object.entries(grouped).sort(([, marketA], [, marketB]) =>
         marketA.marketName.localeCompare(marketB.marketName)
     );

   }, [results, sortOption]);


  // --- Render Logic ---
  if (loading) {
    return (
      <div className="flex justify-center my-12">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-error py-12">{error}</div>;
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold">Keine Ergebnisse für "{query}"</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Versuchen Sie einen anderen Suchbegriff.
        </p>
      </div>
    );
  }
   if (results.length === 0 && !query) {
     return (
        <div className="text-center py-12">
             <p className="text-gray-500 dark:text-gray-400 mt-2">
                Bitte geben Sie einen Suchbegriff ein.
             </p>
        </div>
     );
   }

  return (
    <div className="w-full max-w-7xl mx-auto py-2 relative">
       <h1 className="text-3xl font-bold mb-4">
         Suchergebnisse für "{query}"
       </h1>

       {/* Sort Controls */}
       <div className="mb-6 flex justify-end">
          <SearchSortControls sortOption={sortOption} setSortOption={setSortOption} />
       </div>

       {/* Results Grouped by Market */}
        <div className="space-y-8">
         {groupedAndSortedResults.map(([marketId, marketData]) => (
             <div key={marketId} className="space-y-4">
                 <h2 className="text-2xl font-semibold capitalize border-b pb-2">
                    {marketData.marketName}
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                     {marketData.offers.map(offer => (
                         <OfferCard key={offer.offerId} offer={offer} />
                     ))}
                 </div>
            </div>
         ))}
        </div>
    </div>
  );
}

// Wrap the component in Suspense for useSearchParams
export default function SearchPage() {
    return (
        <Suspense fallback={<div className="flex justify-center my-12"><span className="loading loading-spinner loading-lg text-primary"></span></div>}>
            <SearchResults />
        </Suspense>
    );
}