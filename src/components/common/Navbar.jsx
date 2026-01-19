import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logimage from "../../assets/images/vertexlogokalyan.webp";
import navlogo from "../../assets/images/navlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full  font-serif border-b border-[#052041] shadow-sm lg:pr-10">
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Logo */}
            <div className="flex items-center">
              <img
                src={logimage}
                alt="Vertex Logo"
                className="h-20 w-25 object-contain bg-white"
              />

              <p className="hidden md:block text-blue-800 font-bold text-2xl">
                Vertex Kalyan Cooperative Society.Ltd
              </p>
            </div>

            {/* Center Text */}
            <div className="text-center font-serif">
              <p className="text-red-500 font-bold text-lg">
                भारत सरकार द्वारा मान्यता प्राप्त |  ISO CERTIFIED
              </p>
            </div>

            {/* Right Logo */}
            <div>
              <img
                src={navlogo}
                alt="Nav Logo"
                className="h-20 w-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <hr className="border-0 h-0.5 bg-orange-400" />
      <nav className="w-full font-serif bg-[#203557] shadow sticky top-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 flex-1 font-bold text-white  text-xl justify-center">
              {(
                [
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/AboutUs" },
                  {
                    label: "Services",
                    sub: [
                      { label: "Member ship", to: "/membership" },
                      { label: "Deposit", to: "/deposits" },
                      { label: "Loan", to: "/loans" },
                    ],
                  },
                  { label: "Calculator", to: "/calculator" },
                  {
                    label: "Extras",
                    sub: [
                      { label: "SHG", to: "/shg" },
                      { label: "GIFTS", to: "/gifts" },
                      { label: "GALLERY", to: "/gallery" },
                      { label: "TESTIMONIALS", to: "/testimonials" },
                    ],
                  },
                  { label: "Sahyog Card", to: "/Sahyog" },
                  { label: "Skill Udaan", to: "/skilludaan" },
                  { label: "Contact Us", to: "/contact" },
                ]
              ).map((item) => (
                <li key={item.label} className="relative group">
                  {item.sub ? (
                    <>
                      <a
                        href="#"
                        className="text-white px-4 py-2 hover:text-yellow-300 transition-all duration-200 font-medium text-sm"
                      >
                        {item.label}
                      </a>

                      <div className="absolute left-0 mt-2 w-48 bg-[#011A41] rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
                        {item.sub.map((s) => (
                          <Link
                            key={s.label}
                            to={s.to}
                            className="block px-4 py-2 text-white text-sm hover:bg-white/5"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    item.to ? (
                      <Link
                        to={item.to}
                        className="text-white px-4 py-2 hover:text-yellow-300 transition-all duration-200 font-medium text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-white px-4 py-2 hover:text-yellow-300 transition-all duration-200 font-medium text-sm"
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-gray-800 border border-white/20 px-5 py-2 rounded  font-medium text-lg  bg-white hover:to-orange-500 transition-all duration-300 font-semibold text-sm shadow-lg">
                Login
              </button>
              <button className="bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] px-6 py-2 rounded hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-semibold text-sm shadow-lg">
                Register
              </button>
            </div>

            {/* Mobile Brand & Toggle */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="text-white font-bold text-lg"> Vertex Kalyan Cooperative Society.Ltd </span>
              <button
                className="text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setOpen(!open)}
              >
                {open ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu: left-side sliding panel covering half the screen */}
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`${open ? 'fixed inset-0 bg-black/40 z-40' : 'hidden'}`}
          />

          {/* Panel */}
          <aside
            className={`fixed top-0 left-0 h-full w-1/2 bg-[#011A41] z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
            aria-hidden={!open}
          >
            <div className="px-4 py-6 h-full overflow-auto text-white relative">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white p-2 rounded-md hover:bg-white/10 transition"
              >
                <FaTimes />
              </button>
              {(
                [
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/AboutUs" },
                  {
                    label: "Services",
                    sub: [
                      { label: "Member ship", to: "/membership" },
                      { label: "Deposit", to: "/deposits" },
                      { label: "Loan", to: "/loans" },
                    ],
                  },
                  { label: "Calculator", to: "/calculator" },
                  {
                    label: "Extras",
                    sub: [
                      { label: "SHG", to: "/shg" },
                      { label: "GIFTS", to: "/gifts" },
                      { label: "GALLERY", to: "/gallery" },
                      { label: "TESTIMONIALS", to: "/testimonials" },
                    ],
                  },
                  { label: "Sahyog Card", to: "/Sahyog" },
                  { label: "Skill Udaan", to: "/skilludaan" },
                  { label: "Contact Us", to: "/contact" },
                ]
              ).map((item) => (
                item.sub ? (
                  <div key={item.label} className="border-b border-white/10">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between text-white py-3 px-4 font-medium hover:bg-white/5 transition-all duration-200"
                    >
                      <span>{item.label}</span>
                      {openDropdowns[item.label] ? (
                        <FaChevronUp className="text-sm" />
                      ) : (
                        <FaChevronDown className="text-sm" />
                      )}
                    </button>
                    {openDropdowns[item.label] && (
                      <div className="bg-[#011A41]/50">
                        {item.sub.map((s) => (
                          <Link
                            key={s.label}
                            to={s.to}
                            className="block text-white pl-8 py-2 text-sm hover:text-yellow-300 hover:bg-white/5 transition-all duration-200"
                            onClick={() => setOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to || '#'}
                    className="block text-white py-3 px-4 hover:text-yellow-300 hover:bg-white/5 transition-all duration-200 border-b border-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <div className="pt-6 px-4 space-y-3 border-t border-white/20 mt-6">
                <Link 
                  to="http://54.206.47.196/account/login" 
                  className="block w-full text-center text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="http://54.206.47.196/account/signup" 
                  className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-400 text-[#011A41] px-4 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </aside>
        </div>
        {/* Golden Line Below Navigation */}
        <div className="w-full h-1 bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
      </nav>
    </>
  );
};

export default Navbar;