import React from "react";
import gifts from "../assets/images/gifts.png";
import giftsicon from "../assets/images/gifts.jpg";

const GiftsRewards = () => {
  return (
    <>
      {/* TOP HERO SECTION */}
      <section className="bg-[#f3f4ef] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            
            {/* Left Text */}
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Gifts & Rewards
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Exclusive gifts for <br />
                loyal members.
              </h1>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center md:justify-end">
              <img
                src={gifts}
                alt="Gifts Illustration"
                className="max-w-xs md:max-w-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* Left Image with Badge */}
            <div className="relative">
              <img
                src={giftsicon}
                alt="Gift Box"
                className="w-full rounded-3xl"
              />

              {/* Reward Badge */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#ffcc4d] rounded-2xl px-6 py-5 shadow-md">
                <p className="text-sm font-medium text-gray-900">
                  Lifetime rewards
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ₹ 10000
                </p>
              </div>
            </div>

            {/* Right Text */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gifts & Rewards
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                Celebrate your journey with us! Earn exciting gifts and rewards
                for your deposits, timely loan repayments, referrals, and active
                participation. Because every loyal member deserves something
                special.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm">
                Whether you're saving regularly, referring friends, or simply
                staying engaged, your loyalty doesn’t go unnoticed. Our rewards
                program is our way of saying thank you — with exclusive offers,
                surprise gifts, and seasonal bonuses that add joy to your
                financial journey.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GiftsRewards;
