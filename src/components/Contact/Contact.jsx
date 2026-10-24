import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoChatbubblesOutline,
  IoCheckmarkCircle,
  IoChevronForward,
  IoSendOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

const CONTACT_METHODS = [
  {
    icon: <IoCallOutline className="text-2xl text-orange-600" />,
    iconBg: "bg-orange-100",
    title: "Call Us Directly",
    subtitle: "Toll-Free Customer Care",
    value: "+1 (800) 476-2439",
    href: "tel:+18004762439",
    detail: "Available Mon – Sun, 7:00 AM – 10:00 PM",
  },
  {
    icon: <IoMailOutline className="text-2xl text-emerald-600" />,
    iconBg: "bg-emerald-100",
    title: "Email Support",
    subtitle: "Inquiries & Order Assistance",
    value: "support@grocify.com",
    href: "mailto:support@grocify.com",
    detail: "Typical response in under 60 minutes",
  },
  {
    icon: <IoLocationOutline className="text-2xl text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Main Distribution Hub",
    subtitle: "Farm Reception & Pick-up",
    value: "108 Organic Valley Road",
    href: "https://maps.google.com",
    detail: "Springfield, OR 97477, United States",
  },
  {
    icon: <IoChatbubblesOutline className="text-2xl text-amber-600" />,
    iconBg: "bg-amber-100",
    title: "Live Chat Assistance",
    subtitle: "Instant Help on Active Orders",
    value: "Chat With An Organic Advisor",
    href: "#",
    detail: "Available 24/7 on website & mobile",
  },
];

const HUBS = [
  {
    city: "Springfield Main Hub",
    address: "108 Organic Valley Rd, Springfield, OR",
    phone: "+1 (800) 476-2439",
    hours: "Open Daily: 6:00 AM – 10:00 PM",
  },
  {
    city: "Portland Distribution Terminal",
    address: "420 Hawthorne Blvd, Portland, OR",
    phone: "+1 (503) 555-0192",
    hours: "Open Daily: 7:00 AM – 9:00 PM",
  },
  {
    city: "Eugene Regional Center",
    address: "880 Willamette St, Eugene, OR",
    phone: "+1 (541) 555-0144",
    hours: "Open Daily: 7:00 AM – 9:00 PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry / Delivery Status",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Order Inquiry / Delivery Status",
        message: "",
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
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
          <span className="text-orange-500 font-medium">Contact Us</span>
        </div>

        {/* 2. Hero Header */}
        <div className="max-w-3xl mb-16">
          <span className="bg-amber-100 text-orange-500 text-sm font-semibold rounded-full px-4 py-1.5 inline-block mb-3">
            Always Here To Help
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 leading-tight">
            We&apos;d Love To <span className="text-orange-500">Connect</span> With You
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
            Have questions about our harvest schedules, delivery times, or partner farms?
            Send us a message or reach out through our customer service team.
          </p>
        </div>

        {/* 3. Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTACT_METHODS.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-50/70 border border-zinc-200/70 rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <h3 className="font-bold text-zinc-900 text-lg mt-1 mb-2">
                  {item.title}
                </h3>
              </div>
              <div className="pt-3 border-t border-zinc-200/60 mt-3">
                <a
                  href={item.href}
                  className="font-bold text-orange-600 hover:text-orange-700 text-sm break-all transition-colors"
                >
                  {item.value}
                </a>
                <p className="text-xs text-zinc-500 mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Form and Office Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-7 sm:p-10 shadow-xs">
            <span className="bg-amber-100 text-orange-500 text-xs font-semibold rounded-full px-3 py-1 inline-block mb-3">
              Direct Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
              Send Our Team A Message
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mb-8">
              Fill out the form below and an organic specialist will respond to your email
              within a few hours.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-2xl">
                  <IoCheckmarkCircle />
                </div>
                <h3 className="text-lg font-bold text-emerald-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-emerald-700 text-sm mt-1">
                  Thank you for reaching out. One of our specialists is reviewing your message
                  and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2"
                    >
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2"
                    >
                      Inquiry Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Order Inquiry / Delivery Status">
                        Order Inquiry / Delivery Status
                      </option>
                      <option value="Product Quality & Freshness">
                        Product Quality & Freshness
                      </option>
                      <option value="Farmer & Supplier Partnership">
                        Farmer & Supplier Partnership
                      </option>
                      <option value="Bulk / Corporate Orders">
                        Bulk / Corporate Orders
                      </option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-linear-to-b from-orange-400 to-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20 cursor-pointer hover:scale-102"
                >
                  <IoSendOutline className="text-lg" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Operational Info & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Delivery Hours & Schedule Card */}
            <div className="bg-zinc-50/80 border border-zinc-200/80 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-xl">
                  <IoTimeOutline />
                </div>
                <h3 className="font-bold text-zinc-900 text-lg">Delivery Schedules</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                To guarantee morning harvest freshness, our dispatch runs on strict
                temperature-controlled timeframes:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-center justify-between pb-2 border-b border-zinc-200/70">
                  <span className="font-medium">Order Cutoff Time</span>
                  <span className="font-bold text-orange-600">8:00 PM Daily</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-zinc-200/70">
                  <span className="font-medium">Morning Delivery Slot</span>
                  <span className="font-bold text-zinc-900">7:00 AM – 11:00 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">Evening Delivery Slot</span>
                  <span className="font-bold text-zinc-900">4:00 PM – 8:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Regional Hubs Card */}
            <div className="bg-zinc-50/80 border border-zinc-200/80 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
                  <IoLocationOutline />
                </div>
                <h3 className="font-bold text-zinc-900 text-lg">Regional Food Hubs</h3>
              </div>

              <div className="space-y-4">
                {HUBS.map((hub) => (
                  <div key={hub.city} className="pb-3 border-b border-zinc-200/60 last:border-0 last:pb-0">
                    <h4 className="font-bold text-zinc-900 text-sm">{hub.city}</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">{hub.address}</p>
                    <div className="flex items-center justify-between text-xs text-zinc-600 mt-1.5">
                      <span>{hub.phone}</span>
                      <span className="text-emerald-600 font-medium">{hub.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ helper card */}
            <div className="bg-amber-50/60 border border-amber-200/70 rounded-3xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-orange-600 text-xl shrink-0 mt-0.5">
                <IoHelpCircleOutline />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">Need Rapid Answers?</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Looking for how we pack cold dairy, vetting local farms, or return policies?
                  Check our step-by-step process guide.
                </p>
                <Link
                  to="/process"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 mt-2"
                >
                  <span>Explore Process & FAQs</span>
                  <IoChevronForward className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
