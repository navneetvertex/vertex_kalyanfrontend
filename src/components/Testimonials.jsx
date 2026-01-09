import React from "react";
import TestimonialImg from "../assets/images/testimonials.png"

const testimonials = [
  {
    title: "Moving from Banking Money Transfer",
    text: "My website is on wordpress, I'm moving from wordpress to Arad. I've a new project now, I'm Working on with Arad.",
  },
  {
    title: "The Most Wonderful System in Online Banking",
    text: "I can say it's the best eCommerce platform, looks so professional even in its early development.",
  },
  {
    title: "Good Support, Some Room for Improvement",
    text: "Arad has a lot of potential, but I found some of the features very useful like sending link over WhatsApp.",
  },
  {
    title: "It Was Just What I Needed",
    text: "I must say, Arad has been very helpful since I started using the platform for my clients. It's a lifesaver in case of time and money.",
  },
  {
    title: "Great Project and Soft UX",
    text: "I researched a bit about the product and team. The team is experienced. These guys know what they're doing. And the product is well designed.",
  },
  {
    title: "Great Team, Promising Project",
    text: "I must say this project has a huge potential! I'm working with a couple of merchants.",
  },
  {
    title: "Great Project and Soft UX",
    text: "I researched a bit about the product and team. The team is experienced. These guys know what they're doing. And the product is well designed.",
  },
  {
    title: "Great Team, Promising Project",
    text: "I must say this project has a huge potential! I'm working with a couple of merchants.",
  },
];

const Testimonials = () => {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-[#f3f4ef] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            
            {/* Left Text */}
            <div>
              <p className="text-sm text-blue-700 mb-4">
                Testimonials
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What Our Client Say <br />
                and Feedback
              </h1>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={TestimonialImg}
                alt="Testimonials"
                className="max-w-xs md:max-w-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIAL CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#00364d] rounded-lg p-6 text-white min-h-[220px] flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                  {item.text}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-2 text-sm text-yellow-400 font-medium">
                  <span className="text-base">●</span>
                  Google
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
