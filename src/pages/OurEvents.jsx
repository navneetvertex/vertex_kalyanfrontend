import React from "react";
import FirstImage from "../../src/assets/images/Vertex.jpg";
import SecondImage from "../../src/assets/images/mapbranch.jpg";
import ThirdImage from "../../src/assets/images/hand-shake.jpg";

const OurEvents = () => {
  return (
    <section className="w-full py-5 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text
               bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-700
               animate-gradient">
  Our Events & Certificate
</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our memorable events and celebrations that bring our community together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* YouTube Video */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-slate-800">
            <iframe
              className="w-full h-[280px] md:h-[360px] lg:h-[420px]"
              src="https://www.youtube.com/embed/q2AVNmT8ERE?rel=0"
              title="Our Event Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Event Images */}
          <div className="grid grid-cols-2 gap-6">
            
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={SecondImage}
                alt="Event 1"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={ThirdImage}
                alt="Event 2"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={FirstImage}
                alt="Event 3"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
