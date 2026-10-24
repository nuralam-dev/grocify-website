import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoSunnyOutline,
  IoShieldCheckmarkOutline,
  IoCubeOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoChevronForward,
  IoChevronDown,
  IoSparklesOutline,
  IoArrowForward,
} from "react-icons/io5";
import {
  TbTruckDelivery,
  TbTemperature,
  TbHeartHandshake,
  TbPlant,
} from "react-icons/tb";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Sunrise Harvest at Local Partner Farms",
    subtitle: "Peak Nutrition & Flavor",
    description:
      "Our certified organic farmers hand-pick fruits and vegetables at daybreak when moisture and sugar levels are optimal. Produce is never picked prematurely or forced with chemical growth hormones.",
    highlights: [
      "Harvested within hours of packing",
      "Vine-ripened for full vitamin content",
      "100% non-GMO and pesticide-free",
    ],
    icon: <IoSunnyOutline className="text-3xl text-amber-500" />,
    badgeBg: "bg-amber-100 text-amber-700",
  },
  {
    step: "02",
    title: "Rigorous 7-Point Quality Inspection",
    subtitle: "Triple-Checked Freshness",
    description:
      "Every harvest crate is transported to our hygienic regional hubs where quality specialists inspect firmness, natural aroma, coloration, and leaf integrity. Only prime grade-A produce makes the cut.",
    highlights: [
      "Strict zero-blemish criteria",
      "Digital core temperature validation",
      "Certified organic batch tracking",
    ],
    icon: <IoShieldCheckmarkOutline className="text-3xl text-emerald-500" />,
    badgeBg: "bg-emerald-100 text-emerald-700",
  },
  {
    step: "03",
    title: "Eco-Friendly Temperature Packing",
    subtitle: "Sustainable Cold-Chain Protection",
    description:
      "Orders are packed into 100% recyclable, biodegradable cartons fitted with reusable non-toxic thermal gel packs. Separate microclimates keep delicate berries, chilled dairy, and crisp greens in peak condition.",
    highlights: [
      "Biodegradable insulated packaging",
      "Separated chilled compartments",
      "Zero plastic filler or non-recyclable wraps",
    ],
    icon: <IoCubeOutline className="text-3xl text-orange-500" />,
    badgeBg: "bg-orange-100 text-orange-700",
  },
  {
    step: "04",
    title: "Fast Chilled Doorstep Delivery",
    subtitle: "Under 24 Hours From Soil To Table",
    description:
      "Our specialized temperature-regulated delivery fleet drives straight to your neighborhood. Your food arrives cold, crisp, and ready for your kitchen counter without sitting in stale warehouse depots.",
    highlights: [
      "Real-time SMS dispatch alerts",
      "Safe contactless drop-off options",
      "Guaranteed fresh or immediate refund",
    ],
    icon: <TbTruckDelivery className="text-3xl text-orange-600" />,
    badgeBg: "bg-rose-100 text-rose-700",
  },
];

const COMPARISONS = [
  {
    feature: "Harvest Timing",
    conventional: "Picked weeks early before ripening to endure long transit",
    grocify: "Hand-picked ripe at natural maturity for peak nutrients",
  },
  {
    feature: "Storage & Preservation",
    conventional: "Stored in chemical gas depots & waxed for 15–30 days",
    grocify: "Zero gas or wax. Delivered directly within 24 hours",
  },
  {
    feature: "Supply Chain",
    conventional: "3 to 5 middlemen, brokers, distributors & central depots",
    grocify: "Direct farm-to-table with zero unnecessary handling",
  },
  {
    feature: "Farm Transparency",
    conventional: "Mixed international sourcing with vague origin labels",
    grocify: "100% traceable to verified local organic family farms",
  },
  {
    feature: "Freshness Guarantee",
    conventional: "In-store returns require paper receipts and long queues",
    grocify: "Instant 1-click replacement or 100% refund guarantee",
  },
];

const QUALITY_PILLARS = [
  {
    icon: <TbTemperature className="text-3xl text-blue-500" />,
    iconBg: "bg-blue-50",
    title: "Cold-Chain Integrity",
    desc: "Maintained strictly between 2°C and 4°C throughout transit to lock in crispness and food safety.",
  },
  {
    icon: <TbPlant className="text-3xl text-emerald-500" />,
    iconBg: "bg-emerald-50",
    title: "Zero Artificial Ripening",
    desc: "We never expose food to ethylene gas or synthetic wax coatings. What you taste is 100% natural.",
  },
  {
    icon: <TbHeartHandshake className="text-3xl text-orange-500" />,
    iconBg: "bg-orange-50",
    title: "Fair Local Partnerships",
    desc: "We pay our farmers guaranteed above-market fair rates, supporting sustainable rural livelihoods.",
  },
  {
    icon: <IoShieldCheckmarkOutline className="text-3xl text-amber-500" />,
    iconBg: "bg-amber-50",
    title: "100% Freshness Guarantee",
    desc: "If an item does not meet your high expectations, we replace or refund it immediately with no hassle.",
  },
];

const FAQS = [
  {
    question: "How do you keep sensitive items like milk and seafood cold?",
    answer:
      "All chilled products are packed inside custom insulated thermal pouches with food-safe frozen gel packs. Our delivery vehicles are also temperature-controlled, guaranteeing your dairy and meats remain safely between 2°C and 4°C until you unpack them.",
  },
  {
    question: "What if I'm not home when my delivery arrives?",
    answer:
      "You can choose contactless delivery during checkout. Our thermal boxes keep contents cold and protected on your porch for up to 6 hours after drop-off. You'll receive an instant photo confirmation when your box arrives.",
  },
  {
    question: "How do you vet and select partner farms?",
    answer:
      "Every farm in our network undergoes an on-site audit of their organic certification, soil testing, irrigation water quality, and ethical worker practices. We only collaborate with farms practicing regenerative, pesticide-free agriculture.",
  },
  {
    question: "What is your refund policy if an item is bruised or damaged?",
    answer:
      "We stand by our direct-to-kitchen guarantee. If any item is less than perfect, simply notify us through the website or support hotline within 48 hours for an immediate refund or replacement credit.",
  },
];

const Process = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* 1. Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <IoChevronForward className="text-xs text-zinc-400" />
          <span className="text-orange-500 font-medium">Our Process & Quality</span>
        </div>

        {/* 2. Hero Header */}
        <div className="max-w-3xl mb-16">
          <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-3">
            Farm-To-Table Journey
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 leading-tight">
            How We Guarantee <span className="text-orange-500">Peak Freshness</span> In Every Box
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
            From sunrise harvest in local organic soils to your dining table in under 24
            hours. Discover the meticulous 4-stage process that sets Grocify apart.
          </p>
        </div>

        {/* 3. The 4 Process Steps */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="relative bg-zinc-50/70 border border-zinc-200/70 rounded-3xl p-7 sm:p-9 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-orange-500/30">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 shadow-xs flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Header */}
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeBg}`}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Checklist Points */}
                <div className="mt-6 pt-5 border-t border-zinc-200/60 space-y-2.5">
                  {item.highlights.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <IoCheckmarkCircle className="text-emerald-500 text-base shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Quality Assurance Pillars */}
        <section className="mb-24 bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
              The 4 Pillars of <span className="text-orange-500">Grocify Quality</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Every single product we ship conforms to strict health and safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-xs flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-4`}>
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">{pillar.title}</h4>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed flex-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Grocify vs Conventional Comparison Table */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
              The Freshness Gap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
              Grocify vs. <span className="text-orange-500">Traditional Supermarkets</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              See why direct farm-to-table delivery yields superior taste and higher nutrition.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200/80 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-100/70 border-b border-zinc-200 text-xs sm:text-sm font-bold text-zinc-700">
                  <th className="p-4 sm:p-5">Process Factor</th>
                  <th className="p-4 sm:p-5 text-zinc-500">Conventional Supermarkets</th>
                  <th className="p-4 sm:p-5 text-orange-600 bg-orange-50/70">Grocify Direct Fresh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 text-xs sm:text-sm">
                {COMPARISONS.map((comp) => (
                  <tr key={comp.feature} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-zinc-900">
                      {comp.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600 flex-1">
                      <div className="flex items-start gap-2">
                        <IoCloseCircle className="text-rose-500 text-base shrink-0 mt-0.5" />
                        <span>{comp.conventional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-900 bg-orange-50/40 font-medium">
                      <div className="flex items-start gap-2">
                        <IoCheckmarkCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
                        <span>{comp.grocify}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Frequently Asked Questions */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="border border-zinc-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <IoChevronDown
                      className={`text-zinc-500 text-lg shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. Call To Action Banner */}
        <section>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 to-amber-500 text-white p-8 sm:p-12 md:p-16 text-center shadow-lg shadow-orange-500/15">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-4">
                Taste The Pure Difference
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Ready For Farm-Fresh Produce At Home?
              </h2>
              <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg">
                Taste the crispness that only true 24-hour harvest-to-door delivery can
                provide. 100% money-back guarantee on every order.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300"
                >
                  <IoSparklesOutline className="text-lg" />
                  <span>Shop Organic Harvest</span>
                  <IoArrowForward className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
