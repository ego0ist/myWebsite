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
        category: 'Pflanzenkost',
        imageUrl: '/bananas.png',
        originalPrice: 1.99,
        discountPrice: 0.99,
        quantity: '1kg',
        validUntil: '2025-04-15'
      },
      {
        id: '2',
        name: 'Hähnchenbrust',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/600x400/orange/white.png',
        originalPrice: 5.99,
        discountPrice: 3.99,
        quantity: '500g',
        validUntil: '2025-04-10'
      },
      {
        id: '3',
        name: 'Bio-Vollmilch',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.59,
        discountPrice: 1.29,
        quantity: '1L',
        validUntil: '2025-04-12'
      },
      {
        id: '4',
        name: 'Kartoffeln',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.99,
        discountPrice: 1.49,
        quantity: '2kg',
        validUntil: '2025-04-18'
      },
      {
        id: '5',
        name: 'Joghurt Natur',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 0.89,
        discountPrice: 0.59,
        quantity: '500g',
        validUntil: '2025-04-14'
      },
      {
        id: '6',
        name: 'Schweineschnitzel',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 6.99,
        discountPrice: 4.29,
        quantity: '400g',
        validUntil: '2025-04-11'
      },
      {
        id: '7',
        name: 'Bio-Eier',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.99,
        discountPrice: 1.99,
        quantity: '6 Stück',
        validUntil: '2025-04-16'
      },
      {
        id: '8',
        name: 'Tomaten',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.79,
        discountPrice: 0.99,
        quantity: '500g',
        validUntil: '2025-04-13'
      },
      {
        id: '9',
        name: 'Lachsfilet',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 8.99,
        discountPrice: 5.99,
        quantity: '250g',
        validUntil: '2025-04-09'
      },
      {
        id: '10',
        name: 'Käsemischung',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 3.29,
        discountPrice: 2.49,
        quantity: '200g',
        validUntil: '2025-04-17'
      },
      {
        id: '11',
        name: 'Rote Beete',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.29,
        discountPrice: 0.89,
        quantity: '500g',
        validUntil: '2025-04-19'
      },
      {
        id: '12',
        name: 'Putenbrust',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 4.99,
        discountPrice: 3.49,
        quantity: '300g',
        validUntil: '2025-04-11'
      }
    ],
    'lidl': [
      {
        id: '1',
        name: 'Äpfel Royal Gala',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.49,
        discountPrice: 1.79,
        quantity: '1kg',
        validUntil: '2025-04-15'
      },
      {
        id: '2',
        name: 'Rinderhackfleisch',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 4.99,
        discountPrice: 2.99,
        quantity: '500g',
        validUntil: '2025-04-10'
      },
      {
        id: '3',
        name: 'Gouda Jung',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.99,
        discountPrice: 1.99,
        quantity: '300g',
        validUntil: '2025-04-16'
      },
      {
        id: '4',
        name: 'Brokkoli',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.69,
        discountPrice: 0.99,
        quantity: 'Stück',
        validUntil: '2025-04-14'
      },
      {
        id: '5',
        name: 'Frische Butter',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.29,
        discountPrice: 1.79,
        quantity: '250g',
        validUntil: '2025-04-17'
      },
      {
        id: '6',
        name: 'Schweinenacken',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 5.49,
        discountPrice: 3.49,
        quantity: '500g',
        validUntil: '2025-04-12'
      },
      {
        id: '7',
        name: 'Paprika Mix',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.99,
        discountPrice: 1.49,
        quantity: '500g',
        validUntil: '2025-04-15'
      },
      {
        id: '8',
        name: 'Sahne',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.19,
        discountPrice: 0.79,
        quantity: '200ml',
        validUntil: '2025-04-13'
      },
      {
        id: '9',
        name: 'Lammkotelett',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 9.99,
        discountPrice: 6.99,
        quantity: '350g',
        validUntil: '2025-04-10'
      },
      {
        id: '10',
        name: 'Avocados',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 2.79,
        discountPrice: 1.99,
        quantity: '2 Stück',
        validUntil: '2025-04-11'
      },
      {
        id: '11',
        name: 'Quark',
        category: 'Molke-Eier',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 0.99,
        discountPrice: 0.69,
        quantity: '250g',
        validUntil: '2025-04-14'
      },
      {
        id: '12',
        name: 'Rinderfilet',
        category: 'fleisch',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 12.99,
        discountPrice: 9.99,
        quantity: '300g',
        validUntil: '2025-04-09'
      },
      {
        id: '13',
        name: 'Zwiebeln',
        category: 'Pflanzenkost',
        imageUrl: 'https://placehold.co/400x400.png',
        originalPrice: 1.29,
        discountPrice: 0.79,
        quantity: '1kg',
        validUntil: '2025-04-20'
      }
    ]
  };
  
  // Return the data for the requested market, or an empty array if not found
  return mockData[marketId] || [];
}