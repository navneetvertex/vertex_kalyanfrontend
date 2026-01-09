import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaGift,
  FaCreditCard,
} from "react-icons/fa";

const galleryItems = [
  {
    title: "Secure Banking",
    description:
      "Enterprise-grade security ensures your savings and transactions are protected at every step.",
    icon: FaShieldAlt,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "Community Growth",
    description:
      "Empowering members through collective savings, support, and transparent financial practices.",
    icon: FaUsers,
    accent: "bg-green-50 text-green-700",
  },
  {
    title: "Rewards & Benefits",
    description:
      "Enjoy exclusive rewards, loyalty benefits, and special offers tailored for long-term members.",
    icon: FaGift,
    accent: "bg-yellow-50 text-yellow-700",
  },
  {
    title: "Smart Credit Access",
    description:
      "Flexible loans and credit options designed to support personal and business goals.",
    icon: FaCreditCard,
    accent: "bg-purple-50 text-purple-700",
  },
];

const ProfessionalGallery = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-blue-700 mb-3">
            Our Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Designed to support your financial journey
          </h2>
          <p className="text-gray-600 mt-4">
            Thoughtfully crafted services that balance trust, innovation,
            and long-term value.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 p-6 bg-white
                           hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.accent}`}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-6 text-sm font-medium text-blue-700">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalGallery;
