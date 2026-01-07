import React from "react";
import {
  FaUser,
  FaHandHoldingUsd,
  FaPiggyBank,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import discussionImg from "../assets/images/new_tryimg/discuss.png";

export default function WeOfferSection() {
  const offers = [
    { icon: <FaUser />, title: "Member Ship." },
    { icon: <FaHandHoldingUsd />, title: "Loan Scheme" },
    { icon: <FaPiggyBank />, title: "Deposit Scheme" },
    { icon: <FaUsers />, title: "SHG Scheme" },
    { icon: <FaBriefcase />, title: "livelihood Scheme" },
  ];

  return (
    <section className="w-full bg-[#243b5a] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ===== Title ===== */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl md:text-5xl font-serif tracking-wide">
            We Offer
          </h2>
          <div className="w-28 h-[2px] bg-white mx-auto mt-3" />
        </div>

        {/* ===== Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={discussionImg}
              alt="Discussion"
              className="w-full max-w-[560px] rounded-[40px] object-cover shadow-xl"
            />
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6">
            {offers.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 shadow-md"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-black rounded-md text-white text-lg">
                  {item.icon}
                </div>
                <span className="text-black text-lg font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
