"use client";

import { useState, useEffect, useCallback, createContext, useContext } from 'react';

const ShoppingListContext = createContext(null);

const SHOPPING_LIST_STORAGE_KEY = 'vSaveShoppingList';

export function ShoppingListProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Track if loaded from localStorage

  // Load from localStorage on initial mount (client-side only)
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(SHOPPING_LIST_STORAGE_KEY);
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Failed to load shopping list from localStorage:", error);
    } finally {
        setIsLoaded(true); // Mark as loaded
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    // Only save after initial load to prevent overwriting with empty array
    if (isLoaded) {
         try {
             localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(items));
         } catch (error) {
             console.error("Failed to save shopping list to localStorage:", error);
         }
    }
  }, [items, isLoaded]);

  const addItem = useCallback((offer) => {
     if (!offer || !offer.offerId) {
         console.warn("Attempted to add invalid offer to shopping list:", offer);
         return;
     }
    setItems((prevItems) => {
      // Prevent duplicates based on offerId
      if (prevItems.some(item => item.offerId === offer.offerId)) {
        return prevItems;
      }
      // Add necessary info from the offer
      const newItem = {
        offerId: offer.offerId,
        productId: offer.productId,
        name: offer.name,
        quantity: offer.quantity,
        discountPrice: offer.discountPrice,
        marketName: offer.marketName,
        imageUrl: offer.imageUrl, // For potential display in list
        addedAt: Date.now(), // Optional: timestamp
        checked: false, // Default unchecked
      };
      return [...prevItems, newItem];
    });
  }, []);

  const removeItem = useCallback((offerId) => {
    setItems((prevItems) => prevItems.filter(item => item.offerId !== offerId));
  }, []);

  const toggleItem = useCallback((offerId) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.offerId === offerId ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  const clearList = useCallback(() => {
    setItems([]);
  }, []);

   const isItemInList = useCallback((offerId) => {
       return items.some(item => item.offerId === offerId);
   }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    toggleItem,
    clearList,
    isItemInList,
    itemCount: items.length,
    isLoaded, // Expose loaded state if needed elsewhere
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
}

// Custom hook to use the context
export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (context === null) {
    throw new Error('useShoppingList must be used within a ShoppingListProvider');
  }
  return context;
};