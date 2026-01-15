import star from  '../assets/images/shapes/star.png';

const items = [
  "Easy Payment",
  "Reliable Platform",
  "Vertex Kalyan",
  "Co-operative Trust",
];

export default function TextMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-2 bg-[#FFD15C] h-10 lg:h-15  relative z-10 ">
      
      {/* Marquee Track */}
      <div className="inline-flex animate-marquee">
        {[...items, ...items].map((text, index) => (
          <span
            key={index}
            className="flex items-center ml-10"
          >
            <strong className="text-[20px] md:text-[20px] lg:text-[30px] font-bold leading-tight tracking-tight text-black">
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
