export default function SortControls({ sortOption, setSortOption }) {
    return (
      <div className="relative w-40 h-22 flex items-center gap-2">
        <span className="absolute top-0 right-10 text-sm text-gray-800 font-medium">Filtern nach:</span>
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="dark:select select-bordered select-sm"
        >
          <option value="discount">Höchster Rabatt</option>
          <option value="priceAsc">Preis aufsteigend</option>
          <option value="priceDesc">Preis absteigend</option>
        </select>
      </div>
    );
  }