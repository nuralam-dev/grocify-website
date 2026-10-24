import { Link } from "react-router-dom";
import aboutImg from "../../assets/basket-full-vegetables.png";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import {
  IoLeafOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoStar,
  IoChevronForward,
  IoCheckmarkCircle,
  IoHeartOutline,
  IoSparklesOutline,
  IoArrowForward,
} from "react-icons/io5";

const stats = [
  { value: "150+", label: "Certified Partner Farms" },
  { value: "25k+", label: "Happy Families Served" },
  { value: "99.8%", label: "Satisfaction Rate" },
  { value: "100%", label: "Organic Guarantee" },
];

const values = [
  {
    id: 1,
    icon: <IoLeafOutline className="text-3xl text-emerald-600" />,
    iconBg: "bg-emerald-100",
    title: "100% Certified Organic",
    description:
      "We partner only with certified organic growers who strictly reject chemical pesticides, synthetic fertilizers, and GMO seeds.",
  },
  {
    id: 2,
    icon: <IoFlashOutline className="text-3xl text-orange-600" />,
    iconBg: "bg-orange-100",
    title: "Harvested & Delivered in 24h",
    description:
      "Our direct farm-to-door logistics minimize transit time, ensuring fruits and vegetables arrive brimming with vitamins and crisp flavor.",
  },
  {
    id: 3,
    icon: <IoShieldCheckmarkOutline className="text-3xl text-amber-600" />,
    iconBg: "bg-amber-100",
    title: "Sustainable & Eco-Friendly",
    description:
      "We champion regenerative farming methods that enrich the soil, protect local pollinators, and utilize 100% recyclable packaging.",
  },
  {
    id: 4,
    icon: <IoHeartOutline className="text-3xl text-rose-600" />,
    iconBg: "bg-rose-100",
    title: "Customer-First Freshness",
    description:
      "Every single item is hand-inspected before dispatch. If any produce fails to exceed your expectations, we replace or refund it instantly.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Health Coach & Mom",
    image: customer1,
    quote:
      "Grocify has completely transformed how our family eats. The strawberries and greens taste like they were plucked straight from an orchard this morning!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Miller",
    role: "Culinary Enthusiast",
    image: customer2,
    quote:
      "As someone who loves cooking, the freshness of their salmon and crisp broccoli is unmatched by any supermarket in town. Incredible service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Eco-living Advocate",
    image: customer3,
    quote:
      "Knowing exactly which local farms produce my eggs and milk makes all the difference. Plus, their sustainable packaging is a huge bonus.",
    rating: 5,
  },
];

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-20">
      {/* 1. Page Header & Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <IoChevronForward className="text-xs text-zinc-400" />
          <span className="text-orange-500 font-medium">About Us</span>
        </div>

        <div className="max-w-3xl">
          <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
            Our Journey & Purpose
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 mt-4 leading-tight">
            Nourishing Families With{" "}
            <span className="text-orange-500">Pure, Fresh</span> & Organic Groceries
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl mt-5 leading-relaxed">
            Founded with a passion for natural wellness, Grocify connects conscious
            eaters directly with local certified organic growers—eliminating unnecessary
            middlemen and chemical cold storage.
          </p>
        </div>
      </section>

      {/* 2. Story & Visual Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual with Badges */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] bg-orange-100/70 rounded-full blur-3xl -z-10" />

            <div className="relative max-w-md sm:max-w-lg lg:max-w-full">
              <img
                src={aboutImg}
                alt="Basket loaded with fresh organic produce"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
              />

              {/* Floating Badge 1: 100% Organic */}
              <div className="absolute -top-4 -left-2 sm:top-2 sm:left-0 bg-white/95 backdrop-blur-md border border-zinc-100 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <IoLeafOutline className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">100% Certified</p>
                  <p className="text-sm font-bold text-zinc-900">Organic & Safe</p>
                </div>
              </div>

              {/* Floating Badge 2: Community trust */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:right-2 bg-white/95 backdrop-blur-md border border-zinc-100 shadow-xl rounded-2xl p-3 sm:p-4">
                <div className="flex items-center -space-x-2 mb-2">
                  <img
                    src={customer4}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={customer5}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={customer1}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    +25k
                  </span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-0.5">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <span className="text-zinc-700 font-bold ml-1">5.0</span>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Loved across 25,000+ homes
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm">
              <IoSparklesOutline className="text-lg" />
              <span>The Grocify Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 mt-2 leading-snug">
              Fresh Food Shouldn&apos;t Spend Weeks In Warehouses
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
              Standard commercial supply chains keep produce in cold chemical storage
              for weeks before it ever reaches grocery shelves, stripping away natural
              taste and vital nutrients.
            </p>
            <p className="text-zinc-600 text-base sm:text-lg mt-3 leading-relaxed">
              We started Grocify with a radical yet simple premise: harvest to order.
              When our farmers pick your strawberries, greens, or apples, they are
              packed and driven directly to your doorstep within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Zero chemical preservatives",
                "Non-GMO certified seeds only",
                "Fair prices paid to local farmers",
                "Eco-friendly cold packaging",
                "Daily harvested farm produce",
                "Same-day doorstep delivery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-emerald-500 text-lg shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section className="bg-zinc-50 py-16 mb-24 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="text-4xl sm:text-5xl font-extrabold text-orange-500">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-zinc-600 font-medium mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
            Our Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
            Why Thousands Choose <span className="text-orange-500">Grocify</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-2">
            Every decision we make centers around quality, sustainability, and your
            peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.id}
              className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${v.iconBg} flex items-center justify-center mb-5`}
              >
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{v.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Community Testimonials */}
      <section className="bg-zinc-50/70 py-16 md:py-24 mb-24 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
              Community Love
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
              Stories From Our <span className="text-orange-500">Happy Families</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <IoStar key={i} />
                    ))}
                  </div>
                  <p className="text-zinc-700 italic text-sm sm:text-base leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-orange-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{t.name}</h4>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 to-amber-500 text-white p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-4">
              Taste The Difference
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Ready To Enjoy Truly Fresh Organic Groceries?
            </h2>
            <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg">
              Explore our best-selling fruits, veggies, dairy, and farm meats. Delivered
              fresh to your home today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300"
              >
                <span>Shop Fresh Produce</span>
                <IoArrowForward className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
