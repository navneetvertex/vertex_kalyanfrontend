import React from "react";
import skill from "../assets/images/skilludyanb.jpg";

const SkillUdaan = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[320px] md:h-[380px]">
        <img
          src={skill}
          alt="Skill Udaan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Skill Udaan</h1>
          <p className="text-sm text-gray-200 mt-2">Home &gt; Skill Udaan</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">Skill Udaan</h2>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">
          Skill Udaan vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-8">
          Vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service.
        </p>

        <h3 className="text-xl font-semibold mb-3">Leadership and Guidance</h3>
        <p className="text-gray-700 text-sm mb-10">vertexsociety vertexsociety, vertexsociety</p>

        {/* Project Objectives */}
        <h3 className="text-xl font-semibold mb-4">Project Objectives</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-10 text-sm">
          <li><strong>Employment Generation:</strong> Vertex kalyan cooperative society supports wide employment opportunities.</li>
          <li><strong>Skill Development:</strong> Training and certification to improve workforce skills.</li>
          <li><strong>Youth Empowerment:</strong> Empowering youth with professional skills.</li>
          <li><strong>Education:</strong> Providing transparent and accessible education.</li>
        </ul>

        {/* How It Works */}
        <h3 className="text-xl font-semibold mb-4">How It Works</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-10 text-sm">
          <li>Skill Assessment</li>
          <li>Training and Certification</li>
          <li>Recruitment and Placement</li>
          <li>Pre-departure Assistance</li>
          <li>Ongoing Support</li>
        </ol>

        {/* Benefits */}
        <h3 className="text-xl font-semibold mb-4">Benefits of Skill Udaan</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
          <li><strong>For Workers:</strong> High-paying jobs, skill exposure</li>
          <li><strong>For Employers:</strong> Skilled and reliable workforce</li>
          <li><strong>For India:</strong> Remittances and skill recognition</li>
          <li><strong>For Students:</strong> Transparent skill education options</li>
        </ul>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold text-green-700">Join us and take flight with Skill Udaan!</h4>
        </div>
      </div>
    </section>
  );
};

export default SkillUdaan;