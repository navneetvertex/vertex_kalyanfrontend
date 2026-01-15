// import React, { useRef, useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const galleryImages = [
//   new URL("../assets/images/gallry/gallry.png", import.meta.url).href,
//   new URL("../assets/images/gallry/gallry2.png", import.meta.url).href,
//   new URL("../assets/images/gallry/gallry3.png", import.meta.url).href,
//   new URL("../assets/images/gallry/gallry4.png", import.meta.url).href,
//   new URL("../assets/images/gallry/Gifts.png", import.meta.url).href,
//   new URL("../assets/images/gallry/SahayoG_Card.png", import.meta.url).href,
//   new URL("../assets/images/gallry/SELFHELPGROUP.jpg", import.meta.url).href,
//   new URL("../assets/images/gallry/SelfHelpGroup2.jpg", import.meta.url).href,
//   new URL("../assets/images/gallry/gallry2.png", import.meta.url).href,
//   new URL("../assets/images/WhyChooseUs.png", import.meta.url).href,
//   new URL("../assets/images/WhyChooseUs1.png", import.meta.url).href,
//   new URL("../assets/images/WhyChooseUs.png", import.meta.url).href,
// ];

// export default function VertexGallerySlider() {
//   const sliderRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const autoScroll = () => {
//       if (isPaused || !sliderRef.current) return;
//       const el = sliderRef.current;
//       const visibleWidth = el.clientWidth;
//       const maxScrollLeft = el.scrollWidth - el.clientWidth;
//       const nextLeft = el.scrollLeft + Math.round(visibleWidth * 0.6);

//       if (nextLeft >= maxScrollLeft - 5) {
//         // if next step reaches the end, jump back to start after briefly scrolling to end
//         el.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
//         setTimeout(() => {
//           // jump to start (instant) to create a looping effect
//           if (el) el.scrollTo({ left: 0, behavior: 'auto' });
//         }, 600);
//       } else {
//         el.scrollBy({ left: Math.round(visibleWidth * 0.6), behavior: 'smooth' });
//       }
//     };

//     const id = setInterval(autoScroll, 3500);
//     return () => clearInterval(id);
//   }, [isPaused]);

//   const scroll = (direction) => {
//     if (!sliderRef.current) return;
//     const el = sliderRef.current;
//     const scrollAmount = Math.round(el.clientWidth * 0.6);
//     const maxScrollLeft = el.scrollWidth - el.clientWidth;

//     if (direction === "left") {
//       if (el.scrollLeft <= 0) {
//         // wrap to end
//         el.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
//       } else {
//         el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//       }
//     } else {
//       if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
//         // wrap to start
//         el.scrollTo({ left: 0, behavior: 'smooth' });
//       } else {
//         el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <section className="w-full bg-[#f6f7fb] py-16 md:py-20 relative">
//       <div className=" mx-auto px-4">

//         {/* ===== Heading ===== */}
//         <h3 className="text-center text-2xl md:text-4xl font-bold text-[#0a2540] mb-10 md:mb-14">
//           We look forward to serving you
//         </h3>

//         {/* ===== Slider Wrapper ===== */}
//         <div className="relative">

//           {/* Left Arrow */}
//           <button
//             onClick={() => scroll("left")}
//             className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-10
//                        bg-white shadow-lg w-12 h-12 rounded-full
//                        hover:bg-[#0a2540] hover:text-white transition"
//           >
//             <FaChevronLeft />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={() => scroll("right")}
//             className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-10
//                        bg-white shadow-lg w-12 h-12 rounded-full
//                        hover:bg-[#0a2540] hover:text-white transition"
//           >
//             <FaChevronRight />
//           </button>

//           {/* Slider */}
//           <div
//             ref={sliderRef}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
//           >
//             {galleryImages.map((img, index) => (
//                 <div
//                   key={index}
//                   className="relative min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
//                              h-[240px] sm:h-[260px] md:h-[300px]
//                              rounded-2xl overflow-hidden shadow-lg group"
//                 >
//                   <img
//                     src={img}
//                     alt={`Vertex Gallery ${index + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Overlay (centered text) */}
//                   <div
//                     className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center"
//                   >
//                     <h3 className="text-white text-base md:text-lg font-semibold leading-snug">
//                       Vertex Kalyan Cooperative Urban Thrift and Credit Society Limited.
//                     </h3>
//                   </div>
//                 </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  new URL("../assets/images/gallry/gallry.png", import.meta.url).href,
  new URL("../assets/images/gallry/gallry2.png", import.meta.url).href,
  new URL("../assets/images/gallry/gallry3.png", import.meta.url).href,
  new URL("../assets/images/gallry/gallry4.png", import.meta.url).href,
  new URL("../assets/images/gallry/Gifts.png", import.meta.url).href,
  new URL("../assets/images/gallry/SahayoG_Card.png", import.meta.url).href,
  new URL("../assets/images/gallry/SELFHELPGROUP.jpg", import.meta.url).href,
  new URL("../assets/images/gallry/SelfHelpGroup2.jpg", import.meta.url).href,
  new URL("../assets/images/gallry/gallry2.png", import.meta.url).href,
  new URL("../assets/images/WhyChooseUs.png", import.meta.url).href,
  new URL("../assets/images/WhyChooseUs1.png", import.meta.url).href,
  new URL("../assets/images/WhyChooseUs.png", import.meta.url).href,
];

export default function VertexGallerySlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [cardBasis, setCardBasis] = useState(0);

  /* ===== Calculate responsive card basis and scroll step ===== */
  useEffect(() => {
    const calc = () => {
      const el = sliderRef.current;
      if (!el) return;
      const gap = 24; // gap-6
      const w = el.clientWidth;
      let per = 4;
      if (w < 640) per = 1;          // mobile: 1 card
      else if (w < 1024) per = 2;    // tablet: 2 cards
      else if (w < 1280) per = 3;    // medium: 3 cards
      else per = 4;                  // large+: 4 cards
      const basis = Math.max(0, Math.floor((w - gap * (per - 1)) / per));
      setCardsPerView(per);
      setCardBasis(basis);
      setCardWidth(basis + gap); // step to next card start
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  /* ===== Auto scroll one full card ===== */
  useEffect(() => {
    if (!sliderRef.current || !cardWidth) return;

    const el = sliderRef.current;

    const autoScroll = () => {
      if (isPaused) return;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft + cardWidth >= maxScrollLeft - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    const id = setInterval(autoScroll, 3000);
    return () => clearInterval(id);
  }, [isPaused, cardWidth]);

  /* ===== Arrow scroll ===== */
  const scroll = (direction) => {
    if (!sliderRef.current || !cardWidth) return;
    const el = sliderRef.current;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    if (direction === "left") {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft + cardWidth >= maxScrollLeft - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full bg-[#f6f7fb] py-2 md:py-2 relative">
      <div className="mx-auto px-4">

        <h3 className="text-center text-2xl md:text-4xl font-bold text-[#0a2540] mb-10 md:mb-14">
          We look forward to serving you
        </h3>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-lg w-12 h-12 rounded-full
                       hover:bg-[#0a2540] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-lg w-12 h-12 rounded-full
                       hover:bg-[#0a2540] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-hidden pb-4"
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="gallery-card relative shrink-0
                           h_[240px] sm:h_[260px] md:h_[300px]
                           rounded-2xl overflow-hidden shadow-lg group"
                style={{ flex: `0 0 ${cardBasis}px` }}
              >
                <img
                  src={img}
                  alt={`Vertex Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <h3 className="text-white text-base md:text-lg font-semibold leading-snug">
                    Vertex Kalyan Cooperative Urban Thrift and Credit Society Limited.
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

