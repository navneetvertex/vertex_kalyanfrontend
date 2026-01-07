import star from  '../assets/images/shapes/star.png';

const items = [
  "Easy Payment",
  "Reliable Platform",
  "Vertex Kalyan",
  "Co-operative Trust",
];

export default function TextMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#FFD15C] h-[83px] lg:h-[97.45px] py-4 -ml-5 -mr-5 relative z-10">
      
      {/* Marquee Track */}
      <div className="inline-flex animate-marquee">
        {[...items, ...items].map((text, index) => (
          <span
            key={index}
            className="flex items-center ml-10"
          >
            <strong className="text-[30px] md:text-[38px] lg:text-[48px] font-bold leading-tight tracking-tight text-black">
              {text}
            </strong>

            <img
              src={star}
              alt="star"
              className="inline-block ml-[35px] w-6 md:w-8 lg:w-10"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
