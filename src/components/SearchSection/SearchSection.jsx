import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoSearch,
  IoCloseCircle,
  IoSparklesOutline,
  IoArrowForward,
  IoStar,
} from "react-icons/io5";
import { CATEGORIES, PRODUCTS_DATA } from "../Products/productsData";

const TRENDING_KEYWORDS = [
  "Strawberries",
  "Fresh Salmon",
  "Whole Milk",
  "Brown Eggs",
  "Broccoli",
  "Jumbo Shrimp",
  "Cheddar Cheese",
];

const DEPARTMENT_SHORTCUTS = [
  {
    name: "Fruits & Veggies",
    category: "Fruits & Veggies",
    badge: "100% Organic",
    desc: "Crisp greens, fresh berries & seasonal harvest",
    iconBg: "bg-emerald-100 text-emerald-600",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200/60",
  },
  {
    name: "Dairy & Eggs",
    category: "Dairy & Eggs",
    badge: "Pasture Raised",
    desc: "Whole farm milk, churned butter & free-range eggs",
    iconBg: "bg-amber-100 text-amber-600",
    gradient: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-200/60",
  },
  {
    name: "Meat & Seafood",
    category: "Meat & Seafood",
    badge: "Wild & Grass-Fed",
    desc: "Atlantic salmon, prime beef steaks & tender chicken",
    iconBg: "bg-rose-100 text-rose-600",
    gradient: "from-rose-500/10 to-orange-500/5",
    border: "border-rose-200/60",
  },
];

const SearchSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef(null);

  // Close live results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products for instant dropdown suggestions
  const liveResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];

    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesQuery =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    }).slice(0, 5);
  }, [searchTerm, selectedCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    const params = new URLSearchParams();

    if (query) {
      params.set("search", query);
    }
    if (selectedCategory !== "All") {
      params.set("category", selectedCategory);
    }

    const paramStr = params.toString();
    navigate(paramStr ? `/products?${paramStr}` : "/products");
    setIsFocused(false);
  };

  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
    navigate(`/products?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="py-12 md:py-16 bg-linear-to-b from-zinc-50/80 via-white to-zinc-50/40 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-3">
            Instant Grocery Finder
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Find Your Favorite <span className="text-orange-500">Fresh Produce</span> in Seconds
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-3">
            Search across local organic fruits, crisp farm veggies, artisan dairy, and prime cuts.
          </p>
        </div>

        {/* Central Search Bar Box */}
        <div
          ref={searchContainerRef}
          className="relative max-w-4xl mx-auto z-20 mb-10"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-3xl p-2 sm:p-3 border-2 border-orange-500/90 shadow-xl shadow-orange-500/10 flex flex-col md:flex-row items-center gap-2"
          >
            {/* Category Dropdown Selector */}
            <div className="w-full md:w-52 border-b md:border-b-0 md:border-r border-zinc-200 px-3 py-2 flex items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-zinc-700 focus:outline-none cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword Input */}
            <div className="relative flex-1 w-full flex items-center px-3 py-1">
              <IoSearch className="text-zinc-400 text-xl mr-3 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Search strawberries, farm milk, salmon, broccoli..."
                className="w-full h-11 text-sm sm:text-base text-zinc-900 placeholder-zinc-400 focus:outline-none bg-transparent"
                autoComplete="off"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-zinc-400 hover:text-zinc-600 p-1 cursor-pointer"
                  aria-label="Clear search query"
                >
                  <IoCloseCircle className="text-xl" />
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-b from-orange-400 to-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all cursor-pointer shadow-md shadow-orange-500/25 hover:scale-102 active:scale-98 shrink-0"
            >
              <span>Search</span>
              <IoArrowForward className="text-base" />
            </button>
          </form>

          {/* Instant Live Results Floating Dropdown */}
          {isFocused && searchTerm.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl border border-zinc-200 shadow-2xl p-4 animate-in fade-in slide-in-from-top-1 duration-200 z-50">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-100 text-xs text-zinc-500 px-2">
                <span>
                  Quick matches for &ldquo;
                  <strong className="text-zinc-900">{searchTerm}</strong>&rdquo;
                </span>
                <span>{liveResults.length} found</span>
              </div>

              {liveResults.length > 0 ? (
                <div className="space-y-1.5">
                  {liveResults.map((item) => (
                    <Link
                      key={item.id}
                      to={`/products/${item.id}`}
                      onClick={() => setIsFocused(false)}
                      className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-orange-50/60 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-zinc-500">
                            <span className="font-medium text-orange-500">
                              {item.category}
                            </span>
                            <span>•</span>
                            <span>{item.unit}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-zinc-900">
                          ${item.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 text-xs justify-end">
                          <IoStar />
                          <span className="text-zinc-600 font-semibold">
                            {item.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div className="pt-3 mt-2 border-t border-zinc-100 text-center">
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View all matching results in catalog</span>
                      <IoArrowForward className="text-xs" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-zinc-500">
                  <p>No groceries found matching &ldquo;{searchTerm}&rdquo;</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      navigate("/products");
                    }}
                    className="text-xs font-semibold text-orange-500 hover:underline mt-1 cursor-pointer"
                  >
                    Browse all products in catalog
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trending Searches Pills */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mr-2">
            <IoSparklesOutline className="text-orange-500" />
            <span>Trending:</span>
          </div>
          {TRENDING_KEYWORDS.map((keyword) => (
            <button
              key={keyword}
              type="button"
              onClick={() => handleKeywordClick(keyword)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
            >
              {keyword}
            </button>
          ))}
        </div>

        {/* Department Shortcuts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEPARTMENT_SHORTCUTS.map((dept) => {
            const count = PRODUCTS_DATA.filter(
              (p) => p.category === dept.category
            ).length;
            return (
              <Link
                key={dept.name}
                to={`/products?category=${encodeURIComponent(dept.category)}`}
                className={`relative overflow-hidden rounded-3xl p-6 border ${dept.border} bg-linear-to-br ${dept.gradient} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${dept.iconBg}`}
                    >
                      {dept.badge}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">
                      {count} items
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-200/50 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span>Explore Department</span>
                  <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
