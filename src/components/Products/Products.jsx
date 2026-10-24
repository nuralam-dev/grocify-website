import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { CATEGORIES, PRODUCTS_DATA } from "./productsData";

const INITIAL_DISPLAY_COUNT = 8;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return PRODUCTS_DATA;
    }
    return PRODUCTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_DISPLAY_COUNT);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="products" className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-3">
              Explore Our <span className="text-orange-500">Popular</span> Items
            </h2>
            <p className="text-zinc-600 text-base md:text-lg mt-2 max-w-xl">
              Fresh, healthy, and organic produce sourced directly from trusted
              farms to your doorstep.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More / View Less Button */}
        {filteredProducts.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer shadow-md shadow-orange-500/20"
            >
              {showAll ? "Show Less" : `View All (${filteredProducts.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
