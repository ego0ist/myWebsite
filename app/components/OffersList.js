import { useMemo } from 'react';
import OfferCard from './OfferCard.js';

export default function OffersList({ offers }) {
  // Group offers by category for display
  const offersByCategory = useMemo(() => {
    const grouped = {};
    
    offers.forEach(offer => {
      if (!grouped[offer.category]) {
        grouped[offer.category] = [];
      }
      grouped[offer.category].push(offer);
    });
    
    return grouped;
  }, [offers]);
  
  // If no offers are available
  if (offers.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Keine Angebote verfügbar</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Ändere deine Filtereinstellungen.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(offersByCategory).map(([category, categoryOffers]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold capitalize border-b pb-2">
            {category}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoryOffers.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}