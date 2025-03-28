export default function SortControls({ sortOption, setSortOption }) {
    return (
      <div className="absolute bottom-0 flex items-center gap-2">
        <span className=" text-sm font-medium">Filtern nach:</span>
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="select select-bordered select-sm"
        >
          <option value="discount">Höchster Rabatt</option>
          <option value="priceAsc">Preis aufsteigend</option>
          <option value="priceDesc">Preis absteigend</option>
        </select>
      </div>
    );
  }