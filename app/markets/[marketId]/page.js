import GroceryOffersContainer from '@/app/components/ListingContainer';

export default function MarketOffersPage({ params }) {
  // Extract marketId from params
  const { marketId } = params;
  
  return (
    <main className="container mx-auto px-4 py-8">
      <GroceryOffersContainer marketId={marketId} />
    </main>
  );
}