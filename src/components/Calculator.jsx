import React from "react";
import cardimg from "../assets/images/girl-with-card.png";
import LookForward from "../pages/LookForward";

const Calculator = () => {
  return (
    <section className="w-full bg-[#f3f4ef] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase mb-3">
            EMI Calculator
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Know your EMI <br /> before you borrow.
          </h1>
        </div>

        {/* Right Image with angled cuts */}
        <div className="relative w-full h-[320px] flex justify-center items-center">
          {/* Top Image */}
          <div className="absolute right-0 top-0 w-[85%] h-[90%] overflow-hidden clip-top">
            <img
              src={cardimg}
              alt="EMI Calculator"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          {/* <div className="absolute right-0 bottom-0 w-[85%] h-[45%] overflow-hidden clip-bottom">
            <img
              src={cardimg}
              alt="EMI Calculator"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>

      <LookForward/>

      {/* Custom clip styles */}
      <style jsx>{`
        .clip-top {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        }
        .clip-bottom {
          clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
        }
      `}</style>
    </section>
  );
};

export default Calculator;