"use client";
import Image from 'next/image';
import CarrotRating from './CarrotRating.js'; // Import CarrotRating (kommt in Schritt 4)
import AddToListButton from './AddToListButton'; // Import AddToListButton (kommt in Schritt 5)


export default function OfferCard({ offer }) {
  // Calculate discount percentage safely
  const discountPercentage =
    offer.originalPrice && offer.originalPrice > offer.discountPrice
      ? Math.round(((offer.originalPrice - offer.discountPrice) / offer.originalPrice) * 100)
      : 0; // Handle cases where originalPrice might be missing or not higher

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow relative"> {/* Added relative positioning */}
      {/* Image container */}
      <figure className="relative pt-[75%] w-full bg-gray-100"> {/* Adjusted aspect ratio slightly */}
        <Image
          src={offer.imageUrl || 'https://placehold.co/400x300.png'} // Fallback image
          alt={offer.name}
          fill
          className="object-contain p-2" // Add padding inside figure
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 23vw" // Refined sizes
          loading="lazy" // Lazy load images below the fold
        />

        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 badge badge-secondary text-sm font-semibold z-10">
            -{discountPercentage}%
          </div>
        )}

         {/* Add to List Button - Positioned bottom-right corner */}
         <div className="absolute bottom-2 right-2 z-10">
             <AddToListButton offer={offer} />
         </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-3"> {/* Slightly reduced padding */}
        <h3 className="card-title text-base font-medium line-clamp-2 mb-1" title={offer.name}>
            {offer.name}
        </h3>

        {/* Brand (if available) and Quantity */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex justify-between">
           <span>{offer.brand || offer.marketName || ''}</span>
           <span>{offer.quantity}</span>
        </div>


        {/* Prices and Unit Price */}
        <div className="flex flex-wrap items-baseline justify-between mt-1 gap-x-2">
          <div className="flex items-baseline">
             <span className="text-lg font-bold text-primary"> {/* Use primary color */}
                €{offer.discountPrice.toFixed(2)}
             </span>
             {offer.originalPrice > offer.discountPrice && (
                <span className="ml-1.5 text-xs line-through text-gray-500 dark:text-gray-400">
                   €{offer.originalPrice.toFixed(2)}
                </span>
             )}
          </div>
          {/* Display Unit Price if available */}
          {offer.unitPrice && (
             <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                €{offer.unitPrice.toFixed(2)} {offer.unitPriceUnitLabel}
             </span>
           )}
        </div>

         {/* Rating */}
         <div className="mt-2">
            <CarrotRating offerId={offer.offerId} />
         </div>

        {/* Validity */}
        {offer.validUntil && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            gültig bis {new Date(offer.validUntil).toLocaleDateString('de-DE')} {/* Format date */}
          </div>
        )}
      </div>
    </div>
  );
}