import React from 'react';

// Icons import
import { FiUser } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';
import { LuPackage } from 'react-icons/lu';

const StepsSection = () => {
  return (
    // পুরো steps section
    <section className="bg-[#F9FAFC] py-6 md:py-12 lg:py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section heading */}
        <h2 className="text-3xl md:text-[40px] lg:text-5xl font-extrabold text-[#1d2433] mb-4">
          Get Started In 3 Steps
        </h2>

        {/* Section description */}
        <p className="text-gray-500 text-base mb-16">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Step 1 card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-md transition duration-300">
            
            {/* Step number */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold flex items-center justify-center">
              01
            </div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-8">
              <FiUser size={36} />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#1d2433] mb-4">
              Create Account
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-7">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-md transition duration-300">
            
            {/* Step number */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold flex items-center justify-center">
              02
            </div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-8">
              <LuPackage size={36} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#1d2433] mb-4">
              Choose Products
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-7">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-md transition duration-300">
            
            {/* Step number */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold flex items-center justify-center">
              03
            </div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-8">
              <LuRocket size={34} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#1d2433] mb-4">
              Start Creating
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-7">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;