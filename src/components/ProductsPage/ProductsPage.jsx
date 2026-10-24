import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  IoSearch,
  IoCloseOutline,
  IoChevronForward,
  IoSwapVertical,
  IoSparklesOutline,
  IoRefresh,
} from "react-icons/io5";
import ProductCard from "../Products/ProductCard";
import { CATEGORIES, PRODUCTS_DATA } from "../Products/productsData";

const BADGE_FILTERS = [
  { id: "all", label: "All Items" },
  { id: "organic", label: "Organic" },
  { id: "fresh", label: "Fresh" },
  { id: "sale", label: "On Sale" },
  { id: "best-seller", label: "Best Sellers" },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
  { id: "name-asc", label: "Name: A to Z" },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Derive category and search directly from URL parameters (single source of truth)
  const urlCategory = searchParams.get("category");
  const selectedCategory =
    urlCategory && CATEGORIES.includes(urlCategory) ? urlCategory : "All";
  const searchQuery = searchParams.get("search") || "";

  const [selectedBadge, setSelectedBadge] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (val.trim()) {
      newParams.set("search", val);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedBadge("all");
    setSortBy("featured");
    setSearchParams({});
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    // 1. Category Filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // 3. Badge Filter
    if (selectedBadge !== "all") {
      result = result.filter((p) => p.badgeType === selectedBadge);
    }

    // 4. Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, selectedBadge, sortBy]);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    searchQuery.trim() !== "" ||
    selectedBadge !== "all" ||
    sortBy !== "featured";

  return (
    <div className="bg-zinc-50/60 min-h-screen pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* 1. Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <IoChevronForward className="text-xs text-zinc-400" />
          <span className="text-orange-500 font-medium">Products Catalog</span>
        </div>

        {/* 2. Page Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-100 shadow-xs mb-10">
          <div className="max-w-3xl">
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-3">
              100% Farm-Fresh Harvest
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Explore Our <span className="text-orange-500">Organic</span> Grocery Catalog
            </h1>
            <p className="text-zinc-600 text-base md:text-lg mt-3 leading-relaxed">
              Carefully harvested produce, wholesome dairy, farm-fresh eggs, and responsibly
              sourced meats delivered chilled directly to your kitchen.
            </p>
          </div>

          {/* Quick Category Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-zinc-100">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? PRODUCTS_DATA.length
                  : PRODUCTS_DATA.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "bg-zinc-50 border-zinc-200/60 text-zinc-700 hover:border-orange-200"
                  }`}
                >
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {cat}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold mt-0.5">
                    {count}{" "}
                    <span className="text-xs font-normal text-zinc-500">items</span>
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-zinc-100 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search products by name or category..."
                className="w-full h-11 pl-11 pr-10 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
              />
              <IoSearch className="absolute left-3.5 top-3.5 text-zinc-400 text-lg" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3.5 top-3 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                  aria-label="Clear search query"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown & Reset */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-2xl px-3.5 py-2">
                <IoSwapVertical className="text-zinc-500 text-base" />
                <span className="text-xs font-semibold text-zinc-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-sm font-medium text-zinc-800 focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <IoRefresh className="text-sm" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Badge Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-zinc-100">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-1">
              Filter:
            </span>
            {BADGE_FILTERS.map((badge) => (
              <button
                key={badge.id}
                type="button"
                onClick={() => setSelectedBadge(badge.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedBadge === badge.id
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {badge.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Results Bar */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm text-zinc-600">
            Showing <span className="font-bold text-zinc-900">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <strong className="text-orange-500">{selectedCategory}</strong>
              </span>
            )}
            {searchQuery && (
              <span>
                {" "}
                matching &ldquo;<strong className="text-zinc-900">{searchQuery}</strong>&rdquo;
              </span>
            )}
          </p>
        </div>

        {/* 5. Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-zinc-100 shadow-xs max-w-xl mx-auto my-12">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-orange-500 flex items-center justify-center mx-auto mb-4 text-2xl">
              <IoSearch />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">No products found</h3>
            <p className="text-zinc-500 text-sm mt-2">
              We couldn&apos;t find any items matching your current filters or search term. Try
              adjusting your criteria.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 bg-linear-to-b from-orange-400 to-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:to-orange-600 transition-all cursor-pointer shadow-sm shadow-orange-500/20"
            >
              <IoRefresh className="text-base" />
              <span>Clear All Filters</span>
            </button>
          </div>
        )}

        {/* 6. Guarantee Banner */}
        <div className="mt-20 bg-linear-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-orange-500/10">
          <div className="max-w-xl">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
              Direct-to-Kitchen Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
              Every item is 100% satisfaction guaranteed.
            </h3>
            <p className="text-white/90 text-sm sm:text-base mt-2">
              Not completely satisfied with the freshness of any item? We will gladly replace it
              or issue a full refund immediately.
            </p>
          </div>
          <Link
            to="/process"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-all shrink-0"
          >
            <IoSparklesOutline className="text-lg" />
            <span>Learn Our Process</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
