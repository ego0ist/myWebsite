export default function SortControls({ sortOption, setSortOption }) {
    return (
      <div className="flex items-center gap-2 ">
        <span className="text-sm dark:font-medium">Sort by:</span>
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="dark:select select-bordered select-sm"
        >
          <option value="discount">Highest Discount</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>
    );
  }