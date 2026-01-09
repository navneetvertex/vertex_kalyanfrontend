import React from "react";
import SHGIcon from "../assets/images/shg.png";
import SHGPhoto from "../assets/images/shg.jpg";

const SHGSection = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#eaf3fb] to-[#f7fafc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-[#203557] font-semibold mb-2">Community Program</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#011A41] leading-tight mb-4">Self-Help Groups (SHG)</h1>
              <p className="text-gray-700 max-w-xl mb-6">Group-based savings and microcredit solutions that empower members, especially women and rural households, to access finance, build assets, and start small enterprises.</p>

              <div className="flex gap-3">
                <a href="/shg" className="inline-flex items-center px-5 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded-md font-semibold shadow">Join a Group</a>
                <a href="#learn" className="inline-flex items-center px-5 py-2 border border-[#203557] text-[#203557] rounded-md">Learn More</a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img src={SHGIcon} alt="SHG" className="w-44 h-44 md:w-85 md:h-85 object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Content + Photo */}
      <section id="learn" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={SHGPhoto} alt="SHG Community" className="w-full rounded-xl shadow-md" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#011A41] mb-4">Empowerment Through Collective Savings</h2>
              <p className="text-gray-700 mb-4">Self-Help Groups (SHGs) are voluntary groups that save together, provide microloans internally, and access larger loans through cooperative partnerships. They encourage financial discipline, mutual support, and entrepreneurship.</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#fff4d9] text-[#b36b00] font-bold">✓</span>
                  <span className="text-gray-700">Regular group savings and internal lending.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#fff4d9] text-[#b36b00] font-bold">✓</span>
                  <span className="text-gray-700">Access to affordable microcredit and training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#fff4d9] text-[#b36b00] font-bold">✓</span>
                  <span className="text-gray-700">Improved financial inclusion and entrepreneurship.</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#011A41] text-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">1.2K+</div>
                  <div className="text-sm">Members</div>
                </div>
                <div className="bg-[#011A41] text-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">350+</div>
                  <div className="text-sm">Active Groups</div>
                </div>
                <div className="bg-[#011A41] text-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">₹8M+</div>
                  <div className="text-sm">Loans Disbursed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SHGSection;
