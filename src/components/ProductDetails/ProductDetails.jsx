import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  IoAdd,
  IoArrowBack,
  IoBagHandleOutline,
  IoCheckmark,
  IoChevronForward,
  IoHeart,
  IoHeartOutline,
  IoLeafOutline,
  IoRemove,
  IoShieldCheckmarkOutline,
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoTimeOutline,
} from "react-icons/io5";
import ProductCard from "../Products/ProductCard";
import { getBadgeStyle } from "../Products/badgeStyles";
import { CATEGORY_INFO, PRODUCTS_DATA } from "../Products/productsData";

const RatingStars = ({ rating, className = "text-base" }) =>
  Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;

    if (rating >= value) {
      return <IoStar key={value} className={className} />;
    }
    if (rating >= value - 0.5) {
      return <IoStarHalf key={value} className={className} />;
    }
    return <IoStarOutline key={value} className={className} />;
  });

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCTS_DATA.find((item) => item.id === Number(productId));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS_DATA.filter(
      (item) => item.category === product.category && item.id !== product.id,
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-zinc-50/50 px-6 pt-32 pb-20">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Product not found
          </h1>
          <p className="mt-4 text-zinc-600">
            The product you are looking for may have moved or is no longer
            available.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-linear-to-b from-orange-400 to-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:to-orange-600"
          >
            <IoArrowBack />
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const categoryInfo = CATEGORY_INFO[product.category] ?? {
    storage: "Keep refrigerated and follow the pack instructions.",
    shelfLife: "See pack",
    highlights: [
      "Freshly sourced",
      "Quality checked",
      "Delivered with care",
    ],
  };
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;
  const total = product.price * quantity;
  const currentBadgeStyle = getBadgeStyle(product.badgeType);

  const handleAddToCart = () => {
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section className="min-h-screen bg-zinc-50/50 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500"
        >
          <Link to="/" className="transition-colors hover:text-orange-500">
            Home
          </Link>
          <IoChevronForward className="text-xs text-zinc-400" />
          <Link
            to="/#products"
            className="transition-colors hover:text-orange-500"
          >
            Products
          </Link>
          <IoChevronForward className="text-xs text-zinc-400" />
          <span className="font-medium text-zinc-800">{product.name}</span>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Product image */}
          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm md:min-h-[480px] md:p-10">
            <span
              className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 text-xs font-semibold ${currentBadgeStyle}`}
            >
              {product.badge}
            </span>
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={
                isFavorite ? "Remove from wishlist" : "Add to wishlist"
              }
              className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                isFavorite
                  ? "bg-rose-50 text-rose-500"
                  : "bg-zinc-100/80 text-zinc-400 hover:bg-rose-50 hover:text-rose-500"
              }`}
            >
              {isFavorite ? (
                <IoHeart className="text-2xl" />
              ) : (
                <IoHeartOutline className="text-2xl" />
              )}
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[260px] w-auto object-contain drop-shadow-xl md:max-h-[400px]"
            />
            {discount > 0 && (
              <span className="absolute bottom-5 left-5 rounded-full bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                Save {discount}%
              </span>
            )}
          </div>

          {/* Product summary */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                {product.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              <span className="text-xs text-zinc-500">{product.unit}</span>
            </div>

            <h1 className="mt-3 text-3xl font-bold text-zinc-900 md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                <RatingStars rating={product.rating} />
              </div>
              <span className="font-semibold text-zinc-800">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-zinc-400">
                ({product.reviews} reviews)
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                In stock
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-3xl font-bold text-zinc-900 md:text-4xl">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="mb-1 text-lg text-zinc-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {discount > 0 && (
                <span className="mb-1.5 rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-600">
                  Save {discount}%
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-zinc-600">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {categoryInfo.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-sm text-zinc-700"
                >
                  <IoCheckmark className="mt-0.5 shrink-0 text-emerald-500" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-zinc-200 pt-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-full border border-zinc-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-orange-500 disabled:opacity-40"
                  >
                    <IoRemove />
                  </button>
                  <span
                    aria-live="polite"
                    className="w-10 text-center font-semibold text-zinc-900"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                    disabled={quantity === 20}
                    aria-label="Increase quantity"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-orange-500 disabled:opacity-40"
                  >
                    <IoAdd />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`inline-flex min-w-[200px] flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-sm transition-all duration-300 ${
                    isAdded
                      ? "bg-emerald-500 shadow-emerald-500/25"
                      : "bg-linear-to-b from-orange-400 to-orange-500 hover:to-orange-600 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <IoCheckmark className="text-lg" />
                      Added to cart
                    </>
                  ) : (
                    <>
                      <IoBagHandleOutline className="text-lg" />
                      Add to cart · ${total.toFixed(2)}
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Free delivery on orders over $30. Order before 2pm for same-day
                dispatch.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: IoTimeOutline, label: "Same-day delivery" },
                { icon: IoLeafOutline, label: "Farm fresh" },
                { icon: IoShieldCheckmarkOutline, label: "Quality guarantee" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl border border-zinc-100 bg-white px-4 py-3 text-sm font-medium text-zinc-700"
                >
                  <Icon className="shrink-0 text-lg text-orange-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product information */}
        <div className="mt-16 rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm md:mt-20 md:p-10">
          <div className="flex gap-6 border-b border-zinc-100">
            {[
              { id: "description", label: "Description" },
              { id: "details", label: "Additional information" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                className={`-mb-px border-b-2 pb-4 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "description" ? (
            <div className="max-w-3xl space-y-4 pt-6 leading-relaxed text-zinc-600">
              <p>{product.description}</p>
              <p>{categoryInfo.storage}</p>
            </div>
          ) : (
            <dl className="grid max-w-3xl gap-x-10 gap-y-4 pt-6 sm:grid-cols-2">
              {[
                ["Category", product.category],
                ["Pack size", product.unit],
                ["Best within", categoryInfo.shelfLife],
                ["Storage", categoryInfo.storage],
                ["SKU", `GRC-${String(product.id).padStart(4, "0")}`],
                ["Source", "Grocify partner farms"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-zinc-100 pb-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {label}
                  </dt>
                  <dd className="text-sm text-zinc-700">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-20">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-orange-500">
                  You may also like
                </span>
                <h2 className="mt-3 text-2xl font-bold text-zinc-900 md:text-3xl">
                  More from {product.category}
                </h2>
              </div>
              <Link
                to="/#products"
                className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600 sm:self-auto"
              >
                Browse all products
                <IoChevronForward className="text-xs" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
