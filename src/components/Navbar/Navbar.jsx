import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch, IoClose, IoChevronForward } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navSearch, setNavSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  // Close mobile menu when navigating to a new path
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMenuOpen(false);
  }

  const handleNavSearch = (e) => {
    e.preventDefault();
    if (navSearch.trim()) {
      navigate(`/products?search=${encodeURIComponent(navSearch.trim())}`);
      setIsMenuOpen(false);
    } else {
      navigate("/products");
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-zinc-100 shadow-xs">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900"
          onClick={() => setIsMenuOpen(false)}
        >
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-8 lg:gap-x-12">
          <li>
            <Link
              to="/"
              className={`font-semibold tracking-wider transition-colors text-sm lg:text-base ${
                location.pathname === "/"
                  ? "text-orange-500"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-semibold tracking-wider transition-colors text-sm lg:text-base ${
                location.pathname === "/about"
                  ? "text-orange-500"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`font-semibold tracking-wider transition-colors text-sm lg:text-base ${
                location.pathname === "/products"
                  ? "text-orange-500"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={`font-semibold tracking-wider transition-colors text-sm lg:text-base ${
                location.pathname === "/process"
                  ? "text-orange-500"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-semibold tracking-wider transition-colors text-sm lg:text-base ${
                location.pathname === "/contact"
                  ? "text-orange-500"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Actions: Search + Icons + Hamburger */}
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          {/* Desktop Search input field */}
          <form
            onSubmit={handleNavSearch}
            className="hidden md:flex items-center p-1 border-2 border-orange-500 rounded-full"
          >
            <input
              className="w-36 lg:w-48 h-9 px-3 text-sm focus:outline-none"
              type="text"
              name="text"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              placeholder="Search..."
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-linear-to-b from-red-600 to-orange-500 w-8 h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full text-white text-base lg:text-lg cursor-pointer hover:opacity-95 transition-opacity"
              aria-label="Search products"
            >
              <IoSearch />
            </button>
          </form>

          {/* Wishlist Icon */}
          <Link
            to="/products"
            className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-700 hover:text-orange-500 hover:bg-orange-50 transition-colors text-xl"
            aria-label="Wishlist"
          >
            <GoHeartFill />
          </Link>

          {/* Shopping Bag Icon */}
          <Link
            to="/products"
            className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-700 hover:text-orange-500 hover:bg-orange-50 transition-colors text-xl"
            aria-label="Shopping Cart"
          >
            <HiShoppingBag />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-zinc-800 hover:text-orange-500 hover:bg-zinc-100 transition-colors text-2xl cursor-pointer"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* Mobile Collapsible Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 shadow-xl px-5 py-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Mobile Search Bar */}
          <form
            onSubmit={handleNavSearch}
            className="flex items-center p-1 border-2 border-orange-500 rounded-full mb-4"
          >
            <input
              className="flex-1 h-9 px-3 text-sm focus:outline-none"
              type="text"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              placeholder="Search organic groceries..."
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-linear-to-b from-red-600 to-orange-500 w-8 h-8 flex justify-center items-center rounded-full text-white text-base cursor-pointer shrink-0"
              aria-label="Search"
            >
              <IoSearch />
            </button>
          </form>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-1.5">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  location.pathname === "/"
                    ? "bg-orange-50 text-orange-500"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                <span>Home</span>
                <IoChevronForward className="text-zinc-400 text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  location.pathname === "/about"
                    ? "bg-orange-50 text-orange-500"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                <span>About Us</span>
                <IoChevronForward className="text-zinc-400 text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  location.pathname === "/products"
                    ? "bg-orange-50 text-orange-500"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                <span>Products Catalog</span>
                <IoChevronForward className="text-zinc-400 text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  location.pathname === "/process"
                    ? "bg-orange-50 text-orange-500"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                <span>Process & Quality</span>
                <IoChevronForward className="text-zinc-400 text-xs" />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-orange-50 text-orange-500"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-orange-500"
                }`}
              >
                <span>Contact Us</span>
                <IoChevronForward className="text-zinc-400 text-xs" />
              </Link>
            </li>
          </ul>

          {/* Mobile Footer Info */}
          <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 px-1">
            <span>Customer Support</span>
            <a
              href="tel:+18004762439"
              className="text-orange-500 font-semibold hover:underline"
            >
              +1 (800) 476-2439
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
