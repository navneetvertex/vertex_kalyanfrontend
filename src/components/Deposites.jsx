import React from "react";
import { useLocation, Link } from "react-router-dom";

import servicesimg from "../assets/images/services.png";

const Deposits = () => {
  const location = useLocation();

  const categories = [
    { title: "Saving Deposit Account", link: "/savingdeposit", img: "broadband-landline.svg" },
    { title: "Fixed Deposit", link: "/fixeddeposit", img: "electricity.svg" },
    { title: "Recurring Deposit", link: "/recurringdeposit", img: "dth.svg" },
    { title: "Monthly Income Scheme", link: "/monthlyincomescgeme", img: "lpg-gas.svg" },
  ];

  const benefits = [
    { title: "Guaranteed Returns", desc: "Your money grows at a fixed, pre-decided rate.", img: "fd-icon-1.png" },
    { title: "Power of Compounding", desc: "Interest on interest helps grow faster.", img: "fd-icon-2.png" },
    { title: "Flexible Tenure", desc: "Choose tenure as per your goals.", img: "fd-icon-3.png" },
    { title: "No Lock-In Period", desc: "Break FD anytime online.", img: "fd-icon-4.png" },
    { title: "Tax Benefit", desc: "No TDS up to ₹10,000 interest.", img: "fd-icon-5.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <header className="relative pt-24 pb-12 bg-gradient-to-br from-[#e9f1fb] to-[#f3f7fb]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-block bg-[#fff4d9] text-[#b36b00] px-4 py-2 rounded-full text-md font-semibold mb-4">
                Our Services
              </span>

              <h1 className="font-extrabold text-[#011A41] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                {location.pathname.includes("loan")
                  ? "Low-interest loans, hassle-free process"
                  : "Reliable deposit plans for every member"}
              </h1>

              <p className="text-gray-700 max-w-2xl">
                Flexible deposit schemes and personalised plans to help you save,
                grow, and plan for the future.
              </p>

              {/* <div className="mt-6 flex gap-3">
                <Link to="/savingdeposit" className="px-5 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] rounded font-semibold shadow-md">
                  View Plans
                </Link>
                <Link to="/contact" className="px-5 py-2 border border-[#203557] text-[#203557] rounded font-medium">
                  Get Advice
                </Link>
              </div> */}
            </div>

            <div className="flex justify-center md:justify-end">
              <img src={servicesimg} alt="services" className="max-w-sm h-auto drop-shadow-xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#011A41]">Select a category</h3>
            <p className="text-gray-600 mt-2">Choose the product that fits your financial goals</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((item) => (
              <Link key={item.title} to={item.link} className="group block bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f7fafc] flex items-center justify-center mb-4">
                  <img src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/svg/${item.img}?ver=1.13`} alt={item.title} className="h-8" />
                </div>
                <h5 className="font-semibold text-[#011A41]">{item.title}</h5>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#011A41] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Benefits of Fixed Deposit</h2>
            <p className="text-white/80 mt-2">Why members choose our deposit plans</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white text-[#011A41] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fff4d9] flex items-center justify-center mb-4">
                  <img src={`https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/${b.img}?ver=1.13`} alt={b.title} className="h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank info */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-r from-white to-[#f8fafc] p-6 rounded-xl shadow-sm">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#011A41] mb-4">Which bank is best for Fixed Deposit?</h2>
              <p className="text-gray-700 mb-4">Compare the latest FD interest rates from trusted institutions and choose the one that matches your goals.</p>
              
            </div>

            <div className="lg:w-1/2 text-center">
              <img src="https://investkraft-new.s3.ap-south-1.amazonaws.com/web_app/live/assets/images/fd-explore.png?ver=1.13" alt="FD Explore" className="max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deposits;
