

import {
  FaUsers,
  FaHandHoldingUsd,
  FaPiggyBank,
  FaSeedling,
  FaTree,
} from "react-icons/fa";
import weOfferImg from "../assets/images/new_tryimg/discuss.png";

export default function WeOffer() {
  return (
    <section className="relative overflow-hidden py-5 ">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Green section - Bottom left (below diagonal line) */}
        {/* Green base (full background) */}
        <div className="absolute inset-0 bg-[#c9a24f]">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <HexBackground />
          </div>
        </div>

        {/* Gold wedge from bottom-left to top-right */}
        <div
          className="absolute inset-0   bg-[#143c33]"
          style={{ clipPath: "polygon(0 100%, 0 0, 100% 0)" }}
        >
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <HexBackground />
          </div>
        </div>


        {/* 🔥 DIAGONAL DIVIDER LINE - Professional styling */}
        <DiagonalDivider />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6">
        <style>{`
.weoffer-underline{position:relative;display:block;margin:0 auto;margin-top:0.75rem;width:8rem;height:4px;border-radius:9999px;background:linear-gradient(90deg,rgba(201,162,79,0.25),rgba(255,255,255,0.9),rgba(201,162,79,0.25));background-size:200% 100%;box-shadow:0 0 6px rgba(201,162,79,0.35)}
.weoffer-underline::after{content:"";position:absolute;left:-20%;top:0;height:100%;width:20%;background:linear-gradient(90deg,transparent,#ffffff,transparent);filter:blur(1px);animation:underline-shine 1.8s ease-in-out infinite}
@keyframes underline-move{0%{background-position:0 0}50%{background-position:100% 0}100%{background-position:0 0}}
@keyframes underline-shine{0%{transform:translateX(0);opacity:0}25%{opacity:1}50%{transform:translateX(500%);opacity:0}100%{opacity:0}}
`}</style>
        {/* Heading */}
        <h2 className="relative text-center text-4xl font-semibold text-white mb-14">
          We Offer
          <span className="weoffer-underline" style={{ animation: 'underline-move 2.4s ease-in-out infinite' }}></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT IMAGE ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl max-w-md">
              <img
                src={weOfferImg}
                alt="We Offer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= RIGHT CIRCLES ================= */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <CircleConnections />

              {/* Center */}
              <Circle
                icon={<FaTree />}
                iconSize="text-2xl sm:text-3xl lg:text-4xl"
                title="Livelihood Scheme"
                desc="Tools For A Brighter Tomorrow"
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-300"
              />

              {/* Top */}
              <Circle
                icon={<FaUsers />}
                iconSize="text-2xl sm:text-3xl lg:text-4xl"
                title="Member Ship"
                desc="Join Our Growing Community"
                className="top-0 left-1/2 -translate-x-1/2 bg-cyan-400"
              />

              {/* Right */}
              <Circle
                icon={<FaPiggyBank />}
                iconSize="text-2xl sm:text-3xl lg:text-4xl"
                title="Deposit Scheme"
                desc="Secure Your Future Savings"
                className="top-1/2 right-0 -translate-y-1/2 bg-yellow-300"
              />

              {/* Bottom */}
              <Circle
                icon={<FaSeedling />}
                iconSize="text-2xl sm:text-3xl lg:text-4xl"
                title="SHG Scheme"
                desc="Empowering Self-Help Groups"
                className="bottom-0 left-1/2 -translate-x-1/2 bg-purple-300"
              />

              {/* Left */}
              <Circle
                icon={<FaHandHoldingUsd />}
                iconSize="text-2xl sm:text-3xl lg:text-4xl"
                title="Loan Scheme"
                desc="Flexible Credit For Your Needs"
                className="top-1/2 left-0 -translate-y-1/2 bg-green-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CIRCLE ================= */
function Circle({ icon, iconSize, title, desc, className }) {
  return (
    <div className={`absolute z-20 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center text-center shadow-xl transition-transform duration-300 ease-out hover:scale-110 hover:shadow-2xl ${className}`}>
      <div className={`text-white mb-1 ${iconSize}`}>{icon}</div>
      <h4 className="text-[10px] sm:text-xs font-semibold text-white">{title}</h4>
      <p className="text-[8px] sm:text-[10px] text-white/90 px-2">{desc}</p>
    </div>
  );
}

/* ================= HEX SPIDER BACKGROUND ================= */
function HexBackground() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <pattern id="hexPattern" width="70" height="60" patternUnits="userSpaceOnUse">
          <path d="M35 0 L70 18 L70 42 L35 60 L0 42 L0 18 Z" stroke="#ffffff" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexPattern)" />
    </svg>
  );
}

/* ================= CIRCULAR CONNECTORS ================= */
function CircleConnections() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-10"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="210 "
        cy="210"
        r="150"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M210 60 C310 100, 350 160, 360 210"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M360 210 C350 280, 300 330, 210 360"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M210 360 C120 330, 70 280, 60 210"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M60 210 C70 160, 120 100, 210 60"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}


// function DiagonalDivider() {
//   return (
//     <svg
//       className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient id="dividerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
//           <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
//           <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
//         </linearGradient>

//         <filter id="glow">
//           <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
//           <feMerge>
//             <feMergeNode in="coloredBlur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//       </defs>

//       {/* Shadow */}
//       <line
//         x1="0"
//         y1="100"
//         x2="100"
//         y2="0"
//         stroke="rgba(0,0,0,0.25)"
//         strokeWidth="0.4"
//         transform="translate(0.15,-0.15)"
//       />

//       {/* Main Divider */}
//       <line
//         x1="0"
//         y1="100"
//         x2="100"
//         y2="0"
//         stroke="url(#dividerGradient)"
//         strokeWidth="0.25"
//         strokeLinecap="round"
//         filter="url(#glow)"
//       />

//       {/* Highlight */}
//       <line
//         x1="0"
//         y1="100"
//         x2="100"
//         y2="0"
//         stroke="rgba(255,255,255,0.4)"
//         strokeWidth="0.08"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }


function DiagonalDivider() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dividerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <line
        x1="0"
        y1="100"
        x2="100"
        y2="0"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="0.4"
        transform="translate(0.15, -0.15)"
      />

      {/* Main glowing line */}
      <line
        x1="0"
        y1="100"
        x2="100"
        y2="0"
        stroke="url(#dividerGradient)"
        strokeWidth="0.25"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Thin highlight */}
      <line
        x1="0"
        y1="100"
        x2="100"
        y2="0"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.08"
        strokeLinecap="round"
      />
    </svg>
  );
}


