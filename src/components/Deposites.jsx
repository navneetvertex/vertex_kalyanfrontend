// import React from "react";
// import { useLocation, Link } from "react-router-dom";

// import servicesimg from "../assets/images/services.png";

// const Deposits = () => {
//   const location = useLocation();

//   const categories = [
//     { title: "Saving Deposit Account", link: "/savingdeposit", img: "broadband-landline.svg" },
//     { title: "Fixed Deposit", link: "/fixeddeposit", img: "electricity.svg" },
//     { title: "Recurring Deposit", link: "/recurringdeposit", img: "dth.svg" },
//     { title: "Monthly Income Scheme", link: "/monthlyincomescgeme", img: "lpg-gas.svg" },
//   ];

//   const benefits = [
//     { title: "Guaranteed Returns", desc: "Your money grows at a fixed, pre-decided rate.", img: "fd-icon-1.png" },
//     { title: "Power of Compounding", desc: "Interest on interest helps grow faster.", img: "fd-icon-2.png" },
//     { title: "Flexible Tenure", desc: "Choose tenure as per your goals.", img: "fd-icon-3.png" },
//     { title: "No Lock-In Period", desc: "Break FD anytime online.", img: "fd-icon-4.png" },
//     { title: "Tax Benefit", desc: "No TDS up to ₹10,000 interest.", img: "fd-icon-5.png" },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <header className="relative pt-24 pb-12 bg-gradient-to-br from-[#e9f1fb] to-[#f3f7fb]">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//             <div className="md:col-span-2">
//               <span className="inline-block bg-[#fff4d9] text-[#b36b00] px-4 py-2 rounded-full text-md font-semibold mb-4">
//                 Our Services
//               </span>

//               <h1 className="font-extrabold text-[#011A41] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
//                 {location.pathname.includes("loan")
//                   ? "Low-interest loans, hassle-free process"
//                   : "Reliable deposit plans for every member"}
//               </h1>

//               <p className="text-gray-700 max-w-2xl">
//                 Flexible deposit schemes and personalised plans to help you save,
//                 grow, and plan for the future.
//               </p>

            
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <img src={servicesimg} alt="services" className="max-w-sm h-auto drop-shadow-xl" />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Categories */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <h3 className="text-3xl font-bold text-[#011A41]">Select a category</h3>
//             <p className="text-gray-600 mt-2">Choose the product that fits your financial goals</p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {categories.map((item) => (
//               <Link key={item.title} to={item.link} className="group block bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1">
//                 <div className="w-16 h-16 mx-auto rounded-full bg-[#f7fafc] flex items-center justify-center mb-4">
//                   <img src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/svg/${item.img}?ver=1.13`} alt={item.title} className="h-8" />
//                 </div>
//                 <h5 className="font-semibold text-[#011A41]">{item.title}</h5>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-16 bg-[#011A41] text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold">Benefits of Fixed Deposit</h2>
//             <p className="text-white/80 mt-2">Why members choose our deposit plans</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {benefits.map((b) => (
//               <div key={b.title} className="bg-white text-[#011A41] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
//                 <div className="w-16 h-16 mx-auto rounded-full bg-[#fff4d9] flex items-center justify-center mb-4">
//                   <img src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/${b.img}?ver=1.13`} alt={b.title} className="h-8" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
//                 <p className="text-sm text-gray-600">{b.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bank info */}
//       <section className="py-12 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-r from-white to-[#f8fafc] p-6 rounded-xl shadow-sm">
//             <div className="lg:w-1/2">
//               <h2 className="text-2xl lg:text-3xl font-semibold text-[#011A41] mb-4">Which bank is best for Fixed Deposit?</h2>
//               <p className="text-gray-700 mb-4">Compare the latest FD interest rates from trusted institutions and choose the one that matches your goals.</p>
              
//             </div>

//             <div className="lg:w-1/2 text-center">
//               <img src="https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/fd-explore.png?ver=1.13" alt="FD Explore" className="max-w-sm mx-auto" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Deposits;


import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import servicesimg from "../assets/images/services.png";

const Deposits = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
  {
    title: "Saving Deposit Account",
    link: "/savingdeposit",
    img: "broadband-landline.svg",
    popupImg: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=600",
    description:
      "A safe and flexible savings account designed for daily banking needs with attractive interest.",
    points: [
      "Daily interest calculation",
      "Easy withdrawals",
      "Zero-risk savings",
    ],
  },
  {
    title: "Fixed Deposit",
    link: "/fixeddeposit",
    img: "electricity.svg",
    popupImg: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600",
    description:
      "Grow your money securely with guaranteed returns and flexible tenure options.",
    points: [
      "Guaranteed returns",
      "Flexible tenure",
      "Higher interest rates",
    ],
  },
  {
    title: "Recurring Deposit",
    link: "/recurringdeposit",
    img: "dth.svg",
    popupImg: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600",
    description:
      "Save small amounts monthly and build a strong financial habit effortlessly.",
    points: [
      "Low monthly commitment",
      "Disciplined savings",
      "Attractive maturity value",
    ],
  },
  {
    title: "Monthly Income Scheme",
    link: "/monthlyincomescgeme",
    img: "lpg-gas.svg",
    popupImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
    description:
      "Earn a stable monthly income with capital safety and predictable returns.",
    points: [
      "Regular monthly income",
      "Capital protection",
      "Ideal for retirees",
    ],
  },
];



  const benefits = [
    { title: "Guaranteed Returns", desc: "Your money grows at a fixed rate.", img: "fd-icon-1.png" },
    { title: "Power of Compounding", desc: "Interest on interest boosts growth.", img: "fd-icon-2.png" },
    { title: "Flexible Tenure", desc: "Choose tenure as per goals.", img: "fd-icon-3.png" },
    { title: "No Lock-In Period", desc: "Break FD anytime online.", img: "fd-icon-4.png" },
    { title: "Tax Benefit", desc: "No TDS up to ₹10,000.", img: "fd-icon-5.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <header className="relative pt-24 pb-12 bg-gradient-to-br from-[#e9f1fb] to-[#f3f7fb]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <span className="inline-block bg-[#fff4d9] text-[#b36b00] px-4 py-2 rounded-full font-semibold mb-4">
              Our Services
            </span>

            <h1 className="font-extrabold text-[#011A41] text-3xl md:text-4xl lg:text-5xl mb-4">
              Reliable deposit plans for every member
            </h1>

            <p className="text-gray-700 max-w-2xl">
              Flexible deposit schemes to help you save, grow, and plan for the future.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={servicesimg} alt="services" className="max-w-sm drop-shadow-xl" />
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#011A41]">Select a category</h3>
            <p className="text-gray-600 mt-2">Choose the product that fits your goals</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((item) => (
              <button
                key={item.title}
                onClick={() => setActiveCategory(item)}
                className="group bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f7fafc] flex items-center justify-center mb-4">
                  <img
                    src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/svg/${item.img}?ver=1.13`}
                    alt={item.title}
                    className="h-8"
                  />
                </div>
                <h5 className="font-semibold text-[#011A41]">{item.title}</h5>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#011A41] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Benefits of Fixed Deposit</h2>
            <p className="text-white/80 mt-2">Why members choose us</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white text-[#011A41] rounded-xl p-6 text-center shadow-md">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fff4d9] flex items-center justify-center mb-4">
                  <img
                    src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/${b.img}?ver=1.13`}
                    alt={b.title}
                    className="h-8"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
{activeCategory && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden relative animate-fadeIn">
      
      {/* Close button */}
      <button
        onClick={() => setActiveCategory(null)}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#011A41] text-2xl font-bold rounded-full border-2 border-[#011A41]/20 hover:border-[#011A41] hover:bg-gray-50 hover:scale-110 hover:rotate-90 transition-all duration-300 z-10"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT IMAGE */}
       {/* LEFT IMAGE WITH OVERLAY TEXT */}
<div className="relative h-64 md:h-full">
  <img
    src={activeCategory.popupImg}
    alt={activeCategory.title}
    className="w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#011A41]/90 via-[#011A41]/50 to-transparent" />

  {/* Overlay Content */}
  <div className="absolute bottom-6 left-6 right-6 text-white">
    <span className="inline-block bg-[#fff4d9] text-[#b36b00] px-3 py-1 rounded-full text-xs font-semibold mb-2">
      Deposit Plan
    </span>

    <h3 className="text-2xl font-bold leading-tight">
      {activeCategory.title}
    </h3>

    <p className="text-sm text-white/90 mt-2 leading-snug">
      Secure savings designed to grow your money with confidence.
    </p>
  </div>
</div>

        {/* RIGHT CONTENT */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#011A41] mb-4">
              {activeCategory.title}
            </h2>

            <p className="text-gray-700 mb-5 leading-relaxed">
              {activeCategory.description}
            </p>

            <ul className="space-y-2">
              {activeCategory.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#011A41] rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link
            to={activeCategory.link}
            className="mt-6 inline-block w-full text-center bg-[#011A41] !text-white px-6 py-3 rounded-full font-semibold hover:bg-[#022a6b] transition"
          >
            Explore {activeCategory.title}
          </Link>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Deposits;

