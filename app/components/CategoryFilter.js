export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
    return (
      <div className="w-full md:w-auto overflow-x-auto">
        <div className="flex gap-2 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`btn btn-sm ${
              activeCategory === 'all' ? 'btn-primary' : 'btn-outline'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`btn btn-sm whitespace-nowrap ${
                activeCategory === category.id ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }