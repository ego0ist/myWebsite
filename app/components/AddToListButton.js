"use client";

import { useShoppingList } from '@/app/hooks/useShoppingList';
import { Plus, Check } from 'lucide-react';

export default function AddToListButton({ offer }) {
  const { addItem, isItemInList, isLoaded } = useShoppingList();
  const isInList = isItemInList(offer.offerId);

  // Don't render button until list is loaded to show correct state
  if (!isLoaded) {
      // Placeholder with similar size
      return <div className="w-8 h-8"></div>;
  }

  const handleClick = (e) => {
    // Prevent card click when clicking the button
    e.preventDefault();
    e.stopPropagation();
    if (!isInList) {
      addItem(offer);
    }
     // Maybe remove item if clicked again? For now, just adds.
     // If removal is desired, add logic here using removeItem.
  };

  return (
    <button
      onClick={handleClick}
      disabled={isInList} // Disable if already in list
      className={`btn btn-circle btn-sm ${
        isInList ? 'btn-success btn-disabled opacity-70' : 'btn-primary' // Change style if added
      } shadow-md`}
      aria-label={isInList ? 'Artikel ist in der Liste' : 'Zur Einkaufsliste hinzufügen'}
      title={isInList ? 'Bereits in der Liste' : 'Zur Einkaufsliste hinzufügen'}
    >
      {isInList ? <Check size={16} /> : <Plus size={16} />}
    </button>
  );
}