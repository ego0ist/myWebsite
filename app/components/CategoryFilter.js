export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="w-full md:w-auto overflow-x-auto">
      <div>
        <form className="filter flex flex-wrap gap-2">
          {/* Reset button - only show when a filter is active */}
          {activeCategory !== 'all' && (
            <input 
              className="btn btn-square" 
              type="reset" 
              value="×"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('all');
              }}
            />
          )}
          

          {/* Category options - add btn-active when selected */}
          {categories.map(category => (
            <label 
              key={category.id} 
              className={`btn flex items-center gap-2 ${activeCategory === category.id ? 'btn-primary' : 'btn-outline'}`}
            >
              <input
                type="radio"
                name="categories"
                className="hidden"
                checked={activeCategory === category.id}
                onChange={() => setActiveCategory(category.id)}
              />
              {category.icon}
              <span>{category.name}</span>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
}