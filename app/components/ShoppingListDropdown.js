"use client";

import { useState } from 'react';
import { useShoppingList } from '@/app/hooks/useShoppingList';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import Image from 'next/image';

export default function ShoppingListDropdown() {
  const { items, itemCount, removeItem, toggleItem, clearList, isLoaded } = useShoppingList();
  const [isOpen, setIsOpen] = useState(false);

  // Don't render anything until the list is loaded from localStorage
  if (!isLoaded) {
      // Placeholder to prevent layout shift
      return <div className="w-10 h-10"></div>;
  }

  const toggleDropdown = () => setIsOpen(!isOpen);

  const getTotalPrice = () => {
      return items.reduce((total, item) => total + item.discountPrice, 0).toFixed(2);
  }

  return (
    <div className="dropdown dropdown-end">
      {/* Button to toggle dropdown */}
      <button
        tabIndex={0} // Make focusable
        role="button"
        onClick={toggleDropdown}
        className="btn btn-ghost btn-circle indicator" // daisyUI indicator for badge
        aria-label={`Einkaufsliste öffnen (${itemCount} Artikel)`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <ShoppingCart size={20} />
        {itemCount > 0 && (
          <span className="indicator-item badge badge-secondary badge-xs">
            {itemCount}
          </span>
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
         // Use ul for semantic list, customize tabindex for focus management
         // Close button added inside
        <div
            tabIndex={-1} // Allow focus inside, but not on the div itself initially
            className="dropdown-content card card-compact w-72 sm:w-80 md:w-96 max-h-[70vh] overflow-y-auto bg-base-100 shadow-xl z-50 mt-3 p-4"
        >
            <button
                 onClick={toggleDropdown}
                 className="btn btn-xs btn-circle btn-ghost absolute top-2 right-2"
                 aria-label="Einkaufsliste schließen"
             >
                 <X size={16} />
             </button>

             <h3 className="text-lg font-semibold mb-3">Einkaufsliste</h3>

             {items.length === 0 ? (
                <p className="text-center text-gray-500 py-4">Deine Liste ist leer.</p>
             ) : (
                <ul className="space-y-2">
                     {items.map(item => (
                         <li key={item.offerId} className="flex items-center gap-2 p-1 border-b last:border-b-0">
                             {/* Optional Image */}
                              <div className="flex-shrink-0 w-10 h-10 relative bg-gray-100 rounded overflow-hidden">
                                  <Image
                                      src={item.imageUrl || 'https://placehold.co/40x40.png'}
                                      alt={item.name}
                                      fill
                                      className="object-contain"
                                      sizes="40px"
                                      loading="lazy"
                                  />
                              </div>
                             {/* Item Details */}
                             <div className="flex-grow text-sm">
                                 <p
                                     className={`line-clamp-1 ${item.checked ? 'line-through text-gray-400' : ''}`}
                                     title={item.name}
                                 >
                                     {item.name}
                                 </p>
                                 <p className="text-xs text-gray-500">
                                     {item.marketName} - €{item.discountPrice.toFixed(2)}
                                 </p>
                             </div>
                             {/* Actions */}
                             <div className="flex items-center flex-shrink-0 gap-1">
                                 <input
                                     type="checkbox"
                                     className="checkbox checkbox-xs checkbox-primary" // daisyUI checkbox
                                     checked={item.checked}
                                     onChange={() => toggleItem(item.offerId)}
                                     aria-label={`Artikel ${item.name} abhaken`}
                                 />
                                 <button
                                     onClick={() => removeItem(item.offerId)}
                                     className="btn btn-ghost btn-xs text-error"
                                     aria-label={`Artikel ${item.name} entfernen`}
                                 >
                                     <Trash2 size={14} />
                                 </button>
                             </div>
                         </li>
                     ))}
                </ul>
             )}

             {/* Footer with Total and Clear Button */}
             {items.length > 0 && (
                 <div className="mt-4 pt-3 border-t flex justify-between items-center">
                     <span className="font-semibold">
                         Gesamt: €{getTotalPrice()}
                     </span>
                     <button
                         onClick={clearList}
                         className="btn btn-outline btn-xs btn-error" // daisyUI button
                         aria-label="Ganze Liste löschen"
                     >
                         Liste leeren <Trash2 size={14} className="ml-1"/>
                     </button>
                 </div>
             )}
        </div>
       )}
    </div>
  );
}