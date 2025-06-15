import { NextResponse } from 'next/server';
// Import the *enriched* data getter from our new mock data file
import { getOffersForMarketEnriched } from '@/app/data/mockOffers';

export async function GET(request, { params }) {
  const { marketId } = params;

  try {
    if (!marketId) {
      return NextResponse.json(
        { error: 'Market ID is required' },
        { status: 400 }
      );
    }

    // Use the new function to get enriched offers for the specific market
    const offers = getOffersForMarketEnriched(marketId);

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

// The old helper function getOffersForMarket is removed as logic is now in mockOffers.js