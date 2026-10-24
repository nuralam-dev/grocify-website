import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCallOutline,
  IoCheckmark,
  IoLocationOutline,
  IoMailOutline,
  IoShieldCheckmarkOutline,
  IoTimeOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { TbTruckDelivery, TbHeadset, TbPlant } from "react-icons/tb";

const serviceHighlights = [
  {
    id: 1,
    icon: <TbTruckDelivery className="text-3xl text-orange-500" />,
    title: "Free & Fast Delivery",
    desc: "For all orders over $35",
  },
  {
    id: 2,
    icon: <TbPlant className="text-3xl text-emerald-500" />,
    title: "100% Organic & Fresh",
    desc: "Directly from certified local farms",
  },
  {
    id: 3,
    icon: <IoShieldCheckmarkOutline className="text-3xl text-amber-500" />,
    title: "Secure Payments",
    desc: "100% protected SSL checkout",
  },
  {
    id: 4,
    icon: <TbHeadset className="text-3xl text-orange-500" />,
    title: "24/7 Support",
    desc: "Dedicated customer service team",
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Products", to: "/#products" },
  { label: "Process & Quality", to: "/#process" },
  { label: "Contact Us", to: "/#contact" },
];

const categories = [
  { label: "Fresh Fruits & Veggies", to: "/#products" },
  { label: "Dairy & Farm Eggs", to: "/#products" },
  { label: "Fresh Meat & Seafood", to: "/#products" },
  { label: "Organic Pantry", to: "/#products" },
  { label: "Bakery & Breads", to: "/#products" },
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* 1. Value Props Strip */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-800/40 border border-zinc-800"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold text-white inline-block">
              Gr<span className="text-orange-500 uppercase">o</span>cify
            </Link>
            <p className="text-zinc-400 text-sm sm:text-base mt-4 max-w-sm leading-relaxed">
              Your trusted partner for 100% certified organic fruits, farm-fresh
              vegetables, dairy, and sustainably sourced meats harvested to order.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <IoLogoFacebook />, label: "Facebook", href: "#" },
                { icon: <IoLogoInstagram />, label: "Instagram", href: "#" },
                { icon: <IoLogoTwitter />, label: "Twitter", href: "#" },
                { icon: <IoLogoYoutube />, label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500 text-zinc-300 hover:text-white flex items-center justify-center text-lg transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-zinc-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={cat.to}
                    className="text-zinc-400 hover:text-orange-400 transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <IoLocationOutline className="text-lg text-orange-500 shrink-0 mt-0.5" />
                <span>108 Organic Valley Road, Springfield, OR 97477</span>
              </li>
              <li className="flex items-center gap-2.5">
                <IoCallOutline className="text-lg text-orange-500 shrink-0" />
                <a
                  href="tel:+18004762439"
                  className="hover:text-orange-400 transition-colors"
                >
                  +1 (800) 476-2439
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IoMailOutline className="text-lg text-orange-500 shrink-0" />
                <a
                  href="mailto:support@grocify.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  support@grocify.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <IoTimeOutline className="text-lg text-orange-500 shrink-0" />
                <span>Mon - Sun: 7:00 AM - 10:00 PM</span>
              </li>
            </ul>

            {/* Newsletter input inside column */}
            <div className="mt-6 pt-5 border-t border-zinc-800">
              <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Get 15% Off Your 1st Order
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-b from-orange-400 to-orange-500 hover:to-orange-600 text-white font-semibold py-2 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <IoCheckmark className="text-sm" />
                      <span>Subscribed! Check your inbox</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-zinc-800 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {CURRENT_YEAR} Grocify Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
