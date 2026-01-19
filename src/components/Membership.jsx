import React, { useState } from "react";
import bank from "../assets/images/digital-banking/deposits.jpg";
import loan from "../assets/images/digital-banking/loan.jpg";
import card from "../assets/images/digital-banking/ccard.jpg";
import member from "../assets/images/Membershipimg02.png";

const TABS = [
  "Benefits",
  "How to Join",
  "Eligibility",
  "Membership Fee",
  "Resignation",
];

const VertexMembershipPage = () => {
  const [activeTab, setActiveTab] = useState("Benefits");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Benefits":
        return (
          <p className="text-gray-700 text-lg leading-relaxed">
            Vertex Kalyan Cooperative Society has developed an excellent
            reputation in taking care of the financial needs for a wide variety
            of businesses and individuals. You can count on us for professional
            service and a wealth of information.
          </p>
        );

      case "How to Join":
        return (
          <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5 space-y-1">
            <li>Photo ID: Voter ID, Aadhar, PAN</li>
            <li>Address Proof: Electricity/Water bill</li>
            <li>Rent Agreement: With landlord's utility bill if tenant</li>
            <li>Photos: 3 recent passport-size photos</li>
          </ul>
        );

      case "Eligibility":
        return (
          <p className="text-gray-700 text-lg leading-relaxed">
            Vertex Kalyan Cooperative Society has developed an excellent
            reputation in taking care of the financial needs for a wide variety
            of businesses and individuals.
          </p>
        );

      case "Membership Fee":
        return (
          <div className="overflow-x-auto border-2 border-gray-500 p-2">
            <table className="min-w-full text-left text-gray-700 text-lg">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-6">Share Money</td>
                  <td className="py-2 font-semibold">₹ 500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-6">Compulsory Deposit</td>
                  <td className="py-2 font-semibold">₹ 200</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-6">Miscellaneous</td>
                  <td className="py-2 font-semibold">₹ 300</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 font-bold">Total</td>
                  <td className="py-2 font-bold">₹ 1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Resignation":
        return (
          <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6 space-y-1">
            <li>Submit resignation with Photo ID</li>
            <li>1-year minimum account age required</li>
            <li>Processing time: 1–3 months</li>
            <li>Non-refundable closure fee applies</li>
            <li>Refunds issued via cheque or online</li>
          </ul>
        );

      default:
        return null;
    }
  };

 const renderModalContent = () => {
  switch (modalType) {
    case "deposit":
      return (
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900 text-white text-lg font-bold">
              ₹
            </div>
            <h2 className="text-2xl font-bold text-teal-900">
              Deposit Schemes
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Our deposit schemes offer <span className="font-semibold">secure savings</span>,
            attractive returns, and flexible tenure options — ensuring
            long-term financial stability for members.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-900 p-4 rounded">
            <p className="text-sm text-teal-900 font-medium">
              ✔ Safe & reliable investment<br />
              ✔ Competitive interest rates<br />
              ✔ Member-first policies
            </p>
          </div>
        </div>
      );

    case "loan":
      return (
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900 text-white text-lg font-bold">
              💼
            </div>
            <h2 className="text-2xl font-bold text-teal-900">
              Loan Facilities
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Get quick and affordable loans for personal or business needs with
            <span className="font-semibold"> transparent interest rates</span> and
            flexible repayment plans.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-900 p-4 rounded">
            <p className="text-sm text-teal-900 font-medium">
              ✔ Fast approvals<br />
              ✔ Low interest rates<br />
              ✔ Flexible repayment options
            </p>
          </div>
        </div>
      );

    case "credit":
      return (
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900 text-white text-lg font-bold">
              💳
            </div>
            <h2 className="text-2xl font-bold text-teal-900">
              Credit Services
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Enjoy easy access to funds through our low-interest credit
            facilities designed exclusively for cooperative members.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-900 p-4 rounded">
            <p className="text-sm text-teal-900 font-medium">
              ✔ Instant credit access<br />
              ✔ Minimal documentation<br />
              ✔ Trusted cooperative support
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-5">
          <div>
            <p className="text-teal-700 font-medium mb-4">Membership</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Join Our Trusted Community
            </h1>
          </div>

          <div className="relative h-[300px] lg:h-[400px]">
            <div
              className="relative h-full"
              style={{
                clipPath:
                  "polygon(15% 0, 100% 0, 100% 45%, 85% 100%, 0 100%, 0 55%)",
              }}
            >
              <img
                src={member}
                alt="Professional woman working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto px-6 mt-5">
          <div className="flex flex-wrap gap-4 pb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  "px-6 py-3 rounded-full font-medium transition " +
                  (activeTab === tab
                    ? "bg-teal-900 text-white"
                    : "text-gray-700 bg-gray-300 hover:bg-gray-200")
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-16">
          {renderTabContent()}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Your Cash Management Accounts
            <br />
            Unlock More than Vertex Co-operative
            <br />
            society
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Deposits */}
            <div
              onClick={() => openModal("deposit")}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={bank} alt="Deposits" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Deposits</h3>
                <p className="text-gray-600">
                  Secure your savings and earn steady returns with flexible plans.
                </p>
              </div>
            </div>

            {/* Loan */}
            <div
              onClick={() => openModal("loan")}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={loan} alt="Loan" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Loan</h3>
                <p className="text-gray-600">
                  Fast and affordable loans with transparent terms.
                </p>
              </div>
            </div>

            {/* Credits */}
            <div
              onClick={() => openModal("credit")}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={card} alt="Credit" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Credits</h3>
                <p className="text-gray-600">
                  Low-interest credit facilities for members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-teal-900 text-2xl font-bold rounded-full border-2 border-teal-900/20 hover:border-teal-900 hover:bg-teal-50 hover:scale-110 hover:rotate-90 transition-all duration-300 z-10"
              aria-label="Close modal"
            >
              ✕
            </button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default VertexMembershipPage;
