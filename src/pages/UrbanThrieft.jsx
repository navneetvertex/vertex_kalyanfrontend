import React from "react";
import contactImg from "../assets/images/contactcall.jpg";

const UrbanThrieft = () => {
  return (
    <section className="w-full py-12 px-4">
      <div
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-10 md:p-14">
          
          {/* Left Content */}
          <div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Vertex Kalyan Cooperative Urban Thrift and Credit Society <br />
              Limited.
            </h1>

            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
              Contact Us
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default UrbanThrieft;
