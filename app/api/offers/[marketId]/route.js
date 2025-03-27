import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { marketId } = params;
  
  try {
    // Check if marketId is valid
    if (!marketId) {
      return NextResponse.json(
        { error: 'Market ID is required' },
        { status: 400 }
      );
    }
    
    const offers = await getOffersForMarket(marketId);
    
    // Return success response
    return NextResponse.json(offers);
  } catch (error) {
    console.error('API Error:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to fetch offers' },
      { status: 500 }
    );
  }
}

// Helper function to get offers data
async function getOffersForMarket(marketId) {
  // In a real app, this would fetch from a database
  // For now, we'll use mock data
  
  const mockData = {
    'aldi': [
      {
        id: '1',
        name: 'Bananen',
        category: 'fruits-vegetables',
        imageUrl: '/bananas.png',
        originalPrice: 1.99,
        discountPrice: 0.99,
        quantity: '1kg',
        validUntil: '2025-04-15'
      },
      {
        id: '2',
        name: 'Hähnchenbrust',
        category: 'meat-seafood',
        imageUrl: 'https://placehold.co/300x200?text=Hähnchen',
        originalPrice: 5.99,
        discountPrice: 3.99,
        quantity: '500g',
        validUntil: '2025-04-10'
      },
      {
        id: '3',
        name: 'Bio-Vollmilch',
        category: 'dairy-eggs',
        imageUrl: 'https://placehold.co/300x200?text=Milch',
        originalPrice: 1.59,
        discountPrice: 1.29,
        quantity: '1L',
        validUntil: '2025-04-12'
      }
    ],
    'lidl': [
      {
        id: '1',
        name: 'Äpfel Royal Gala',
        category: 'fruits-vegetables',
        imageUrl: 'https://placehold.co/300x200?text=Äpfel',
        originalPrice: 2.49,
        discountPrice: 1.79,
        quantity: '1kg',
        validUntil: '2025-04-15'
      },
      {
        id: '2',
        name: 'Rinderhackfleisch',
        category: 'meat-seafood',
        imageUrl: 'https://placehold.co/300x200?text=Rinderhack',
        originalPrice: 4.99,
        discountPrice: 2.99,
        quantity: '500g',
        validUntil: '2025-04-10'
      }
    ]
  };
  
  // Return the data for the requested market, or an empty array if not found
  return mockData[marketId] || [];
}