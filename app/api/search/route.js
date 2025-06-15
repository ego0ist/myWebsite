import { NextResponse } from 'next/server';
// Import the enriched search function
import { searchOffersEnriched } from '@/app/data/mockOffers';

export async function GET(request) {
  // Get search query from URL parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
  }

  try {
    // Use the search function from mockOffers
    const results = searchOffersEnriched(query);
    return NextResponse.json(results);

  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json(
      { error: 'Failed to search offers' },
      { status: 500 }
    );
  }
}