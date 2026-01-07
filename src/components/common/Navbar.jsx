import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logimage from "../../assets/images/vertexlogokalyan.webp";
import navlogo from "../../assets/images/navlogo.png"  ;

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
                className="h-20 w-30 object-contain"
              />
            </div>

            {/* Center Text */}
            <div className="text-center font-serif">
              <p className="text-red-500 font-bold text-lg">
                ISO CERTIFIED | भारत सरकार मान्यता प्राप्त
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
      <nav className="w-full font-serif bg-[#203557] shadow sticky top-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 flex-1 font-bold text-white  text-xl justify-center">
              {[
                "Home",
                "About Us",
                "Services",
                "Calculator",
                "Extras",
                "Sahyog Card",
                "Skill Udaan",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white px-4 py-2 hover:text-yellow-300 transition-all duration-200 font-medium text-sm relative group"
                  >
                    {item}
                  </a>
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
              <span className="text-white font-bold text-lg">Vertex Kalyan</span>
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
              {[
                "Home",
                "About Us",
                "Services",
                "Calculator",
                "Extras",
                "Sahyog Card",
                "Skill Udaan",
                "Contact Us",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white py-3 px-4 hover:text-yellow-300 transition-all duration-200 relative group"
                  onClick={() => setOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                </a>
              ))}

              <div className="pt-6 space-y-3 border-t border-[#052041] mt-6">
                <button className="w-full text-white border border-white/20 py-2 rounded-full hover:bg-white/5 transition-all duration-300">
                  Login
                </button>
                <button className="w-full bg-linear-to-r from-yellow-400 to-orange-400 text-[#011A41] py-2 rounded-full font-semibold">
                  Register
                </button>
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