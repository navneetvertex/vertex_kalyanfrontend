import React from "react";
import mainBg from "../assets/images/main_bg.jpg";
import onlineSaving from "../assets/images/online-saving.gif";

export default function DepositesSchemes() {
  return (
    <>
      {/* ================= PARTNER / MARQUEE SECTION ================= */}
      <section
        className="py-20 bg-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="md:col-span-4 text-start px-5">
              <div className="flex justify-center mb-4">
                <img
                  src={onlineSaving}
                  alt="About"
                  className="w-[125px] h-[125px]"
                />
              </div>

              <h2 className="my-3 text-3xl font-bold leading-snug text-red-500/70 font-serif">
                Deposit and Loan schemes
              </h2>
            </div>

            {/* RIGHT MARQUEE */}
            <div className="md:col-span-8 space-y-4">
              <MarqueeRow direction="left" duration="55s" />
              <MarqueeRow direction="right" duration="65s" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CUSTOM CSS ================= */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: scroll-left var(--duration, 45s) linear infinite;
        }

        .marquee.reverse {
          animation: scroll-right var(--duration, 45s) linear infinite;
        }
      `}</style>
    </>
  );
}

/* ================= SUB COMPONENTS ================= */

function MarqueeRow({ direction = "left", duration = "55s" }) {
  const images = [
    "01", "02", "03", "04", "06", "07", "08", "09", "10", "11", "12", "13"
  ];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`marquee ${direction === "right" ? "reverse" : ""}`}
        style={{ "--duration": duration }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-[209px] h-[106px] flex items-center justify-center mx-3">
            <img
              src={new URL(`../assets/images/marqueimg/${img}.png`, import.meta.url).href}
              alt="Partner"
              className="max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

