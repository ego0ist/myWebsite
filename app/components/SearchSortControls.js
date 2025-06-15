// Similar to SortControls, but adds unit price sorting
"use client";

export default function SearchSortControls({ sortOption, setSortOption }) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sortieren nach:</span>
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="select select-bordered select-sm" // daisyUI select
        >
          <option value="discount">Höchster Rabatt</option>
          <option value="priceAsc">Preis aufsteigend</option>
          <option value="priceDesc">Preis absteigend</option>
          <option value="unitPriceAsc">Grundpreis aufsteigend</option> {/* New */}
          <option value="unitPriceDesc">Grundpreis absteigend</option> {/* New */}
        </select>
      </div>
    );
}