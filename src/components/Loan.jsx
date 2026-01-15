// import React from "react";
// import { Link } from "react-router-dom";
// import LoanImage from "../assets/images/guaranteed_loan.jpg";

// const categories = [
//   {
//     title: "Personal Loan",
//     desc: "Quick personal loans with minimal paperwork and flexible repayment options.",
//     icon: "💳",
//     to: "/personal-loan",
//   },
//   {
//     title: "Self Help Group (SHG)",
//     desc: "Group-focused support and microfinance solutions for SHG members.",
//     icon: "🤝",
//     to: "/shg-loan",
//   },
//   {
//     title: "Loan Against FD",
//     desc: "Secure loans against fixed deposits at attractive rates.",
//     icon: "🪙",
//     to: "/loan-against-fd",
//   },
//   {
//     title: "Business Loan",
//     desc: "Working capital and growth loans for small businesses and entrepreneurs.",
//     icon: "🏢",
//     to: "/business-loan",
//   },
// ];

// const LoanServices = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* HERO */}
//       <header className="relative h-[60vh] md:h-[70vh]">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{ backgroundImage: `url(${LoanImage})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-3">Loans & Financing</h1>
//           <p className="text-white/90 max-w-2xl">Flexible, affordable loan solutions designed for individuals, groups, and small businesses.</p>

//           <div className="mt-6 flex gap-3">
//             <Link to="/contact" className="px-5 py-3 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded-md font-semibold shadow">Get Consultation</Link>
//             <a href="#categories" className="px-5 py-3 border border-white/30 text-white rounded-md font-medium">Explore Options</a>
//           </div>
//         </div>
//       </header>

//       {/* Categories */}
//       <section id="categories" className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-[#011A41]">Loan Categories</h2>
//             <p className="text-gray-600 mt-2">Choose a loan type that fits your needs. Click any card to learn more or apply.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((c) => (
//               <Link
//                 key={c.title}
//                 to={c.to}
//                 className="block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fff4d9] mx-auto mb-4 text-2xl">
//                   <span aria-hidden>{c.icon}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-[#011A41] text-center">{c.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2 text-center">{c.desc}</p>
//                 <div className="mt-4 text-center">
//                   {/* <span className="inline-block px-4 py-2 bg-[#203557] text-white rounded-md text-sm">Apply Now</span> */}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why choose us */}
//       <section className="py-16 bg-[#011A41] text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//             <div>
//               <h3 className="text-2xl font-bold mb-3">Why Choose Our Loans</h3>
//               <p className="text-white/90 mb-6">Transparent terms, quick approvals, and personalized support to help you reach your financial goals.</p>
//               <Link to="/contact" className="inline-block px-5 py-3 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded-md font-semibold">Talk to an Advisor</Link>
//             </div>

//             <ul className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 "Low interest rates",
//                 "Flexible repayment plans",
//                 "Minimal documentation",
//                 "Support for SHGs and small businesses",
//               ].map((t) => (
//                 <li key={t} className="bg-white text-[#011A41] rounded-lg p-4 shadow-sm">
//                   {t}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoanServices;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoanImage from "../assets/images/guaranteed_loan.jpg";

// Popup images (replace with your real images if needed)
import personalImg from "../assets/images/personalLoan.jpg";
import shgImg from "../assets/images/shg.png";
import fdLoanImg from "../assets/images/FD.jpg";
// import businessImg from "./assets/images/faq1.jpg";
import businessImg from "../assets/images/faq1.jpg";

const categories = [
  {
    title: "Personal Loan",
    desc: "Quick personal loans with minimal paperwork and flexible repayment options.",
    icon: "💳",
    to: "/personal-loan",
    img: personalImg,
    details: [
      "Fast approval process",
      "Flexible EMI options",
      "Minimal documentation",
      "Competitive interest rates",
    ],
  },
  {
    title: "Self Help Group (SHG)",
    desc: "Group-focused support and microfinance solutions for SHG members.",
    icon: "🤝",
    to: "/shg-loan",
    img: shgImg,
    details: [
      "Designed for SHG members",
      "Affordable group loans",
      "Community-based support",
      "Easy repayment structure",
    ],
  },
  {
    title: "Loan Against FD",
    desc: "Secure loans against fixed deposits at attractive rates.",
    icon: "🪙",
    to: "/loan-against-fd",
    img: fdLoanImg,
    details: [
      "Lower interest rates",
      "No FD break required",
      "Quick disbursal",
      "High loan eligibility",
    ],
  },
  {
    title: "Business Loan",
    desc: "Working capital and growth loans for small businesses and entrepreneurs.",
    icon: "🏢",
    to: "/business-loan",
    img: businessImg,
    details: [
      "Support business expansion",
      "Flexible repayment plans",
      "Fast processing",
      "Tailored for SMEs",
    ],
  },
];

const LoanServices = () => {
  const [activeLoan, setActiveLoan] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <header className="relative h-[60vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${LoanImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            Loans & Financing
          </h1>
          <p className="text-white/90 max-w-2xl">
            Flexible, affordable loan solutions designed for individuals, groups,
            and small businesses.
          </p>
        </div>
      </header>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#011A41]">
              Loan Categories
            </h2>
            <p className="text-gray-600 mt-2">
              Click any category to explore loan details
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <button
                key={c.title}
                onClick={() => setActiveLoan(c)}
                className="text-left bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fff4d9] mx-auto mb-4 text-2xl">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#011A41] text-center">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {c.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeLoan && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full overflow-hidden relative">
            {/* Close */}
            <button
              onClick={() => setActiveLoan(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold rounded-full bg-black/30 backdrop-blur-sm border-2 border-white/50 hover:bg-black/50 hover:border-white hover:scale-110 hover:rotate-90 transition-all duration-300 z-10 shadow-lg"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">
              {/* LEFT IMAGE */}
              <div className="relative h-64 md:h-full">
                <img
                  src={activeLoan.img}
                  alt={activeLoan.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011A41]/90 via-[#011A41]/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-[#fff4d9] text-[#b36b00] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    Loan Service
                  </span>
                  <h3 className="text-2xl font-bold">
                    {activeLoan.title}
                  </h3>
                  <p className="text-sm text-white/90 mt-2">
                    {activeLoan.desc}
                  </p>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-bold text-[#011A41] mb-4">
                  Key Benefits
                </h4>

                <ul className="space-y-3 mb-6">
                  {activeLoan.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-600">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  to={activeLoan.to}
                  className="inline-block w-full text-center bg-[#011A41]  px-6 py-3 rounded-full font-semibold hover:bg-[#022a6b] transition"
                >
                  <span className="text-white">

                  Explore {activeLoan.title}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanServices;

