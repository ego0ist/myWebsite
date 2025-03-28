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
    <div className="w-full max-w-7xl mx-auto py-2 relative">
      <h1 className="text-3xl font-bold absolute top-6">
        Aktuelle Angebote
      </h1>
      
      <div className="flex flex-col gap-6">
        <div className="relative h-50 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <CategoryFilter 
            categories={groceryCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <SortControls 
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>
        
        {loading ? (
          <div className="flex justify-center my-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <OffersList offers={sortedOffers} />
        )}
      </div>
    </div>
  );
}