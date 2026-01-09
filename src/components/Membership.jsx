import React from 'react';
import bank from "../assets/images/digital-banking/deposits.jpg";
import loan from "../assets/images/digital-banking/loan.jpg";
import card  from "../assets/images/digital-banking/ccard.jpg";

const VertexMembershipPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 relative overflow-hidden">
        {/* <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24"> */}
          <div className="grid lg:grid-cols-2 gap-12 items-center px-5 ">
            <div>
              <p className="text-teal-700 font-medium mb-4">Membership</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Join Our Trusted Community
              </h1>
            </div>
            
            {/* Image with geometric design */}
            <div className="relative">
              <div className="relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 45%, 85% 100%, 0 100%, 0 55%)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" 
                  alt="Professional woman working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        {/* </div> */}
        
        {/* Navigation Tabs */}
        <div className=" mx-auto px-6">
          <div className="flex flex-wrap gap-4 pb-8">
            <button className="px-6 py-3 bg-teal-900 text-white rounded-full font-medium">
              Benefits
            </button>
            <button className="px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-full font-medium transition">
              How to Join
            </button>
            <button className="px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-full font-medium transition">
              Eligibility
            </button>
            <button className="px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-full font-medium transition">
              Membership Fee
            </button>
            <button className="px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-full font-medium transition">
              Resignation
            </button>
          </div>
        </div>
        
        {/* Description */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Vertex Kalyan Cooperative Society has developed an excellent reputation in taking care of the financial needs for a wide variety of businesses and individuals. You can count on us for professional service and a wealth of information.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Your Cash Management Accounts<br />
            Unlock More than Vertex Co-operative<br />
            society
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Deposits Card */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={bank} 
                  alt="Cash deposits"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deposits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure your savings and earn steady returns with flexible deposit plans tailored for members.
                </p>
              </div>
            </div>

            {/* Loan Card */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={loan} 
                  alt="Calculator and cash"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Loan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get fast, affordable loans with transparent terms to meet your personal or business needs.
                </p>
              </div>
            </div>

            {/* Credits Card */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={card} 
                  alt="Credit card"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Credits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy easy access to funds with our low-interest credit card — designed for co-operative trust and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VertexMembershipPage;