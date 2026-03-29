import React from 'react';
import playImg from '../../assets/products/Play.png';
import bannerImg from '../../assets/products/banner.png';

const Banner = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 items-center gap-3 lg:gap-5">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm md:text-base font-medium text-violet-700">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full border border-violet-300"></span>
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"></span>
              </span>
              New: AI-Powered Tools Available
            </div>

            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] text-center font-extrabold leading-[1.05] text-[#101727]">
                Supercharge Your <br />
                Digital Workflow
              </h1>

              <p className="max-w-lg text-base md:text-lg leading-8 text-[#627382] text-justify">
                Access premium AI tools, design assets, templates, and
                productivity software — all in one place. Start creating faster
                today.
              </p>
            </div>

            <div className="flex flex-wrap flex-col lg:block gap-4 text-sm md:text-base font-semibold ">
              <button className="btn rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Products
              </button>

              <button className="btn btn-outline rounded-full border-violet-300 px-7 hover:bg-violet-50 transition-all duration-300">
                <img src={playImg} alt="Play Icon" className="w-4 h-4" />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative rounded-4xl bg-white/60 p-2 shadow-xl backdrop-blur-sm">
              <img
                src={bannerImg}
                alt="Digital Workflow"
                className="w-[320px] md:w-[380px] lg:w-[430px] h-auto rounded-[28px]"
              />
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-tr from-white/40 via-transparent to-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;