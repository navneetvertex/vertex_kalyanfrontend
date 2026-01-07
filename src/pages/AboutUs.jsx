import React from "react";
import aboutImg from "../assets/images/about_usimg.png"; 
// ⬆️ replace with your actual illustration path

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#f4f4f6] py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-black">
            About <span className="text-[#f5b21b]">Us</span>
          </h2>
          <div className="w-24 h-[2px] bg-black mx-auto mt-3" />
        </div>

        {/* ===== Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-gray-800 leading-relaxed text-[15px] md:text-[16px] space-y-6">

            <p>
              <span className="text-pink-600 font-semibold">
                Vertex Kalyan Cooperative
              </span>{" "}
              Urban Thrift and Credit Society Limited, government registered
              organization is a membership based financial cooperative
              establishment. It is dedicated to promote financial well-being,
              self-reliance, and community development.
            </p>

            <p>
              Registered under the Cooperative Societies Act, we offer secure
              and ethical financial services created according to the needs of
              our members across India. Vertex Kalyan Cooperative Urban Thrift
              and Credit Society Ltd. is multi faceted business organization
              serving society in various forms.
            </p>

            <p>
              Through our principles of mutual help, responsibility, and
              transparency, the society offers all tailored to meet the diverse
              needs of our members to achieve their and their families’
              financial goals.
            </p>

            <p>
              As a future oriented thrift and credit society, we combine
              traditional cooperative values with modern technology. Our
              members can manage savings, loans and financial records easily
              through our dedicated website and mobile app with real-time
              access, faster processing, and full transparency.
            </p>

            {/* Button */}
            <div>
              <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#011A41] to-[#f5b21b] text-white font-medium shadow-lg hover:scale-105 transition-transform duration-200">
                Read More
              </button>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden hover: transition-shadow duration-300">
              <img
                src={aboutImg}
                alt="About Us Illustration"
                className="w-full max-w-[520px] object-contain transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
