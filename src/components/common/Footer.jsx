import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import vertexLogo from "../../assets/images/whiteVERTIXLOGO.png";

const Footer = () => {
  return (
    <footer className="bg-[#031D3B] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

        {/* LOGO */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={vertexLogo}
            alt="Vertex Logo"
            className="w-44 h-44 object-contain"
          />
        </div>

        {/* COMPANY & TEAM */}
        <div>
          <h3 className="text-[#FFD24D] font-semibold mb-4 text-lg">
            Company and Team
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>Awards and Recognition</li>
            <li>News and Events</li>
            <li>Testimonials</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div>
          <h3 className="text-[#FFD24D] font-semibold mb-4 text-lg">
            Get Help
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* ADDRESS + MAP */}
        <div>
          <h3 className="text-[#FFD24D] font-semibold mb-4 text-lg">
            Address
          </h3>

          <p className="text-[15px] leading-relaxed mb-3">
            Plot no - 53, 3rd floor, <br />
            Main road, Pandav Nagar, East Delhi <br />
            PIN code - 110092
          </p>

          <p className="flex items-center gap-2 text-[15px] mb-1">
            <FaPhoneAlt className="text-[#FFD24D]" />
            +91-9319208666
          </p>

          <p className="flex items-center gap-2 text-[15px] mb-4">
            <FaEnvelope className="text-[#FFD24D]" />
            care@vertexsociety.com
          </p>

          {/* MAP */}
          <div className="w-full h-36 rounded-md overflow-hidden border border-white/30">
            <iframe
              title="Vertex Location"
              src="https://www.google.com/maps?q=Pandav%20Nagar%20Delhi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#02162D] border-t border-[#FFD24D]/40 text-center py-3 text-sm">
        All Rights Reserved @ Vertex Kalyan Cooperative Society
      </div>
    </footer>
  );
};

export default Footer;
