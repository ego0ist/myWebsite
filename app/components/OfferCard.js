import Image from 'next/image';

export default function OfferCard({ offer }) {
  const discountPercentage = Math.round(
    ((offer.originalPrice - offer.discountPrice) / offer.originalPrice) * 100
  );

  return (
    <div className="card bg-base-100  shadow-md hover:shadow-lg transition-shadow">
      {/* Image container with fixed aspect ratio */}
      <figure className="relative pt-[100%] w-full h-full bg-gray-100">
        <Image
          src={offer.imageUrl}
          alt={offer.name}
          fill
          className="w-full h-full object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 badge badge-primary text-sm font-semibold">
            -{discountPercentage}%
          </div>
        )}
      </figure>
      
      <div className="card-body p-4">
        <h3 className="card-title text-base font-medium line-clamp-2">{offer.name}</h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {offer.quantity}
        </p>
        
        <div className="flex items-baseline mt-2">
          <span className="text-lg font-bold">€{offer.discountPrice.toFixed(2)}</span>
          
          {offer.originalPrice > offer.discountPrice && (
            <span className="ml-2 text-sm line-through text-gray-500 dark:text-gray-400">
              €{offer.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {offer.validUntil && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            gültig bis {new Date(offer.validUntil).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}