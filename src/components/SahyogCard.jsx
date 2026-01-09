import React from "react";
import SahyogCard from "../assets/images/vertxsayog.png"
import sahayog from "../assets/images/sahayoGcard.png";

const SahyogComponent = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Hero Image */}
      <div className="w-full h-[320px]">
        <img
          src={SahyogCard}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Sahyog Card – Together We Can Change Lives
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Join our mission to empower communities, provide essential services, and create a lasting impact. Your support matters!
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
          Become a Sahyog Card Holder
        </button>

        {/* What is Sahyog */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">What is Sahyog Card?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            The Sahyog Card is our way of building a network of compassionate supporters who believe in giving back to society. As a card holder, you directly contribute to education, healthcare, and livelihood initiatives for underprivileged communities.
          </p>
        </div>

        {/* Why Join */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-10">Why Join Sahyog Card?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Support Education", "Healthcare Access", "Empower Communities"].map((title, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={sahayog}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">
                    {title === "Support Education" && "Help children access quality education and bright futures."}
                    {title === "Healthcare Access" && "Provide essential medical care for those in need."}
                    {title === "Empower Communities" && "Enable sustainable livelihood and skill development programs."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Our Supporters Say</h2>
          <blockquote className="italic text-gray-600">
            “Becoming a Sahyog Card holder has been one of the most fulfilling decisions of my life. Knowing that my small contribution is changing lives is priceless.”
          </blockquote>
          <p className="mt-4 text-red-600 font-semibold">– Me Sharma</p>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Your Support Can Change Lives</h2>
          <p className="text-gray-600 mt-2">
            Every Sahyog Card brings hope, opportunity, and transformation. Join us in making the world a better place.
          </p>
          <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SahyogComponent;