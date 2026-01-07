import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import homepage from "../assets/images/homepage.jpeg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider_3.jpg";
import slider4 from "../assets/images/slider_4.jpg";

import {
  FaUserPlus,
  FaArrowRight,
  FaShieldAlt,
  FaPercentage,
  FaBolt,
  FaCalculator,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full bg-[#011a41]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        loop={false} // ✅ prevents duplicate slides
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <HeroSlide
            bgImage={homepage}
            titlePrimary="Trusted Savings"
            titleSecondary="Secure Returns"
            description="Grow your savings with flexible deposit plans and competitive rates crafted for long-term security."
            stats={[
              { value: "19M+", label: "Members" },
              { value: "25+", label: "Years" },
            ]}
            primary={{ text: "Open Account", icon: <FaUserPlus /> }}
            secondary={{ text: "Explore Plans", icon: <FaArrowRight /> }}
          />
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <HeroSlide
            bgImage={slider2}
            titlePrimary="Smart Loans"
            titleSecondary="Fast Approval"
            description="Affordable loan options with quick processing to help you move forward when opportunity knocks."
            features={[
              { icon: <FaShieldAlt />, text: "Guaranteed" },
              { icon: <FaPercentage />, text: "Low Rates" },
              { icon: <FaBolt />, text: "Quick Disbursal" },
            ]}
            primary={{ text: "Apply Now", icon: <FaShieldAlt /> }}
            secondary={{ text: "Calculate EMI", icon: <FaCalculator /> }}
          />
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <HeroSlide
            bgImage={slider3}
            titlePrimary="Local Branches"
            titleSecondary="Near You"
            description="A wide network of branches and friendly staff ready to support your financial goals."
            stats={[
              { value: "50+", label: "Branches" },
              { value: "500+", label: "Employees" },
            ]}
            primary={{ text: "Find Branch", icon: <FaMapMarkerAlt /> }}
            secondary={{ text: "Contact Us", icon: <FaComments /> }}
          />
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <HeroSlide
            bgImage={slider4}
            titlePrimary="Rewards & Offers"
            titleSecondary="Exclusive Members"
            description="Enjoy member-only benefits, cashback, and special programs designed to reward your loyalty."
            features={[
              { icon: <FaPercentage />, text: "Cashback" },
              { icon: <FaShieldAlt />, text: "Insurance" },
            ]}
            primary={{ text: "Join Now", icon: <FaUserPlus /> }}
            secondary={{ text: "Learn More", icon: <FaArrowRight /> }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* ---------------- REUSABLE SLIDE ---------------- */

function HeroSlide({
  titlePrimary,
  titleSecondary,
  description,
  stats,
  features,
  primary,
  secondary,
  bgImage,
}) {
  return (
    <div
      className="relative h-full flex items-center text-white bg-cover bg-center"
      style={{
        backgroundColor: "#011a41", // ✅ base background
        backgroundImage: bgImage
          ? `linear-gradient(
              90deg,
              rgba(1,26,65,0.85) 0%,
              rgba(1,26,65,0.65) 40%,
              rgba(1,26,65,0.35) 100%
            ),
            url(${bgImage})`
          : "none",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full md:w-2/3 lg:w-1/2 py-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="block">{titlePrimary}</span>
            <span className="block text-yellow-400">{titleSecondary}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {description}
          </p>

          {/* Stats */}
          {stats && (
            <div className="flex gap-8 mb-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          {features && (
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-md"
                >
                  <span className="text-yellow-300">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md">
              {primary.icon}
              {primary.text}
            </button>

            <button className="flex items-center gap-3 border border-white/40 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              {secondary.text}
              {secondary.icon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
