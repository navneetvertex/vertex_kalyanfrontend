import React from "react";
import heroImg from "../assets/images/SavingDeposit.jpg";
import sliderImg from "../assets/images/slider2.jpg";
import missionImg from "../assets/images/missinv.jpg";
import whyImg from "../assets/images/Whychooseus.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-2 text-sm md:text-base">
            <span className="text-pink-400">Home</span> / About
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={sliderImg}
          alt="Vertex Kalyan"
          className="rounded-xl shadow-lg"
        />
        <div>
          <p className="text-pink-500 font-semibold mb-2">Welcome To</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vertex Kalyan Cooperative Society
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Vertex Kalyan Cooperative Urban Thrift and Credit Society Limited
            focuses on empowering its members and promoting collective
            well-being through self-help and mutual aid, while contributing to
            the broader social community.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-pink-500 mb-3">Vision</h3>
            <p className="text-gray-600 mb-8">
              To empower members by providing financial support, fostering
              economic development, and ensuring social equality.
            </p>

            <h3 className="text-2xl font-bold text-pink-500 mb-3">Mission</h3>
            <p className="text-gray-600">
              To promote collective well-being through transparent financial
              services, mutual aid, and community-driven growth.
            </p>
          </div>

          <img
            src={missionImg}
            alt="Vision Mission"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Services Highlight */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={whyImg}
          alt="Services"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-bold mb-6">
            We’re here to help you manage money smarter
          </h3>
          <ul className="space-y-4">
            <li>
              <span className="bg-yellow-300 px-2 py-1 rounded font-semibold">
                Quick & hassle-free loan approvals
              </span>
              <p className="text-gray-600 mt-1">
                Instant approvals with minimal paperwork.
              </p>
            </li>
            <li>
              <span className="bg-yellow-300 px-2 py-1 rounded font-semibold">
                Transparent charges — no hidden fees
              </span>
              <p className="text-gray-600 mt-1">
                Clear, fair, and honest banking.
              </p>
            </li>
            <li>
              <span className="bg-yellow-300 px-2 py-1 rounded font-semibold">
                Banking at your doorstep
              </span>
              <p className="text-gray-600 mt-1">
                Convenient doorstep services with digital support.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
