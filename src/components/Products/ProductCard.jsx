import { useState } from "react";
import { Link } from "react-router-dom";
import { IoStar, IoHeart, IoHeartOutline, IoCheckmark } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import { getBadgeStyle } from "./badgeStyles";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const currentBadgeStyle = getBadgeStyle(product.badgeType);

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-3xl p-5 border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {/* Top Header: Badge & Favorite Button */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${currentBadgeStyle}`}
        >
          {product.badge}
        </span>
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            isFavorite
              ? "bg-rose-50 text-rose-500"
              : "bg-zinc-100/80 text-zinc-400 hover:text-rose-500 hover:bg-rose-50"
          }`}
          aria-label={
            isFavorite ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          {isFavorite ? (
            <IoHeart className="text-xl" />
          ) : (
            <IoHeartOutline className="text-xl" />
          )}
        </button>
      </div>

      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        aria-label={`View details for ${product.name}`}
        className="group/image relative w-full h-44 sm:h-48 flex items-center justify-center bg-zinc-50/70 rounded-2xl p-4 overflow-hidden group-hover:bg-amber-50/40 transition-colors duration-300"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          loading="lazy"
        />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-orange-500 shadow-sm opacity-0 group-hover:opacity-100 group-hover/image:opacity-100 transition-opacity duration-300">
          View details
        </span>
      </Link>

      {/* Product Details */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Unit */}
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
            <span className="font-semibold text-orange-500 uppercase tracking-wider">
              {product.category}
            </span>
            <span className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-600 font-medium">
              {product.unit}
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/products/${product.id}`}
            className="block text-base sm:text-lg font-bold text-zinc-800 line-clamp-1 group-hover:text-orange-500 transition-colors"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-400 text-sm">
              <IoStar />
            </div>
            <span className="text-sm font-semibold text-zinc-800">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-xs text-zinc-400">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100">
          <div>
            <span className="text-xl font-bold text-zinc-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-400 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
              isAdded
                ? "bg-emerald-500 text-white shadow-emerald-500/25"
                : "bg-linear-to-b from-orange-400 to-orange-500 text-white hover:to-orange-600 hover:shadow-orange-500/30 hover:scale-105 active:scale-95"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <IoCheckmark className="text-base" />
                <span>Added</span>
              </>
            ) : (
              <>
                <HiShoppingBag className="text-base" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
