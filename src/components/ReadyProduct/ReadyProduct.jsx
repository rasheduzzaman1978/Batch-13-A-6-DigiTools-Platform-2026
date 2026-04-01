import React from 'react';

const ReadyProduct = () => {
  return (
    // পুরো section
    <section className="">
      {/* Gradient background container */}
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 text-center text-white shadow-xl">
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-[40px] font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description text */}
        <p className="text-sm md:text-base text-white max-w-2xl mx-auto mb-10 leading-7">
          Join thousands of professionals who are already using DigiTools
          to work smarter. Start your free trial today.
        </p>

        {/* Buttons section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          
          {/* Explore Products button */}
          <button className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>

          {/* View Pricing button */}
          <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition">
            View Pricing
          </button>
        </div>

        {/* Bottom small text */}
        <p className="text-sm md:text-base text-violet-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default ReadyProduct;