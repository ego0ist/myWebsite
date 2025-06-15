"use client";

import { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import OffersList from './OffersList';
import SortControls from './SortControls';
import { groceryCategories } from '@/app/data/categories';

export default function GroceryOffersContainer({ marketId }) {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('discount');

  useEffect(() => {
    async function fetchOffers() {
      setLoading(true);
      try {
        const response = await fetch(`/api/offers/${marketId}`);
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }
        
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setOffers([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    }
    
    fetchOffers();
  }, [marketId]);

  // Filter offers by category
  const filteredOffers = activeCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeCategory);

  // Sort offers based on selected option
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch(sortOption) {
      case 'priceAsc':
        return a.discountPrice - b.discountPrice;
      case 'priceDesc':
        return b.discountPrice - a.discountPrice;
      case 'discount':
        return (b.originalPrice - b.discountPrice) / b.originalPrice - 
               (a.originalPrice - a.discountPrice) / a.originalPrice;
      default:
        return 0;
    }
  });

  return (
    <div className="w-full mx-auto relative p-4">
  <h1 className="text-2xl md:text-3xl font-bold mb-4">
    Aktuelle Angebote
  </h1>
  
  {/* Make this a flex container for proper layout */}
  <div className="bg-base-100 bg-opacity-95 backdrop-blur-sm flex flex-col gap-4 rounded-lg mb-6">
    <div className="w-full">
      <CategoryFilter 
        categories={groceryCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
    <div className="w-full mt-8"> {/* The parent's gap-4 will handle spacing */}
      <SortControls 
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
    </div>
  </div>
  
  {loading ? (
    <div className="flex justify-center my-12">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  ) : (
    <OffersList offers={sortedOffers} />
  )}
</div>
  
  );
}