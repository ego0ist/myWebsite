// app/components/OffersList.js

import { useMemo } from 'react';
import OfferCard from './OfferCard.js'; // Stellt sicher, dass der Pfad korrekt ist

export default function OffersList({ offers }) {
  // Gruppiere Angebote nach Kategorie für die Anzeige
  const offersByCategory = useMemo(() => {
    const grouped = {};

    // Stellt sicher, dass 'offers' ein Array ist, bevor forEach aufgerufen wird
    if (!Array.isArray(offers)) {
        console.warn("OffersList received non-array offers prop:", offers);
        return {}; // Gib ein leeres Objekt zurück oder handle den Fehler anders
    }
    
    offers.forEach(offer => {
      // Verwende eine Standardkategorie, falls offer.category nicht existiert
      const category = offer.category || 'Unkategorisiert'; 
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(offer);
    });
    
    return grouped;
  }, [offers]); // Abhängigkeit von 'offers'
  
  // Wenn keine Angebote verfügbar sind (oder 'offers' kein Array war)
  if (!Array.isArray(offers) || offers.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Keine Angebote verfügbar</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Überprüfe deine Filter oder versuche es später erneut.
        </p>
      </div>
    );
  }

  // Rendere die gruppierten Angebote
  return (
    <div className="space-y-8">
      {Object.entries(offersByCategory).map(([category, categoryOffers]) => (
        // Der Key für die äußere Schleife (Kategorien) ist korrekt
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold capitalize border-b pb-2">
            {category === 'Unkategorisiert' ? 'Weitere Angebote' : category} {/* Handle den Namen der Standardkategorie */}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Innere Schleife für Angebote innerhalb einer Kategorie */}
            {categoryOffers.map(offer => (
              // Stelle sicher, dass offer ein Objekt ist und offerId hat
              // **KORRIGIERTER KEY HIER:** Verwende offer.offerId
              offer && offer.offerId ? (
                <OfferCard key={offer.offerId} offer={offer} />
              ) : null // Rendere nichts, falls offer oder offerId ungültig ist
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}