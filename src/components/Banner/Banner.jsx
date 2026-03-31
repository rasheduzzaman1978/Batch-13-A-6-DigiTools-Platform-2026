import React from 'react';
import playImg from '../../assets/products/Play.png';
import bannerImg from '../../assets/products/banner.png';

const Banner = () => {
  return (
    <div className="bg-white py-8 lg:py-12">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
        <div className="grid md:grid-cols-2 items-center gap-3 lg:gap-5">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-80 md:max-w-90 lg:max-w-160 ">
            <div className="flex justify-center md:justify-start">
  <div className="inline-flex items-center justify-center gap-3 rounded-full bg-violet-100 px-4 py-2 text-sm md:text-base font-medium text-violet-700 text-center">
    <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full shadow-[0_0_0_3px_rgba(139,92,246,0.35),0_0_0_7px_rgba(217,70,239,0.15)]"></span>
    <span>New: AI-Powered Tools Available</span>
  </div>
</div>

            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] xl:text-[60px] text-center md:text-left font-extrabold leading-[1.05] text-[#101727]">
                Supercharge Your <br />
                Digital Workflow
              </h1>

              <p className="max-w-lg text-base md:text-lg leading-8 text-[#627382] text-justify">
                Access premium AI tools, design assets, templates, and
                productivity software — all in one place. Start creating faster
                today.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base font-semibold">
  <button className="btn rounded-full border-0 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-7 text-white shadow-lg hover:shadow-xl transition-all duration-300">
    Explore Products
  </button>

  <button className="group btn btn-outline rounded-full border-violet-300 px-7 hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white transition-all duration-300">
  <img
    src={playImg}
    alt="Play Icon"
    className="w-4 h-4 transition duration-300 brightness-100 group-hover:brightness-0 group-hover:invert"
  />

  <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none transition duration-300">
    Watch Demo
  </span>
</button>
</div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-2xl bg-white/60 shadow-xl backdrop-blur-sm">
              <img
                src={bannerImg}
                alt="Digital Workflow"
                className="w-[300px] md:w-[350px] lg:w-[480px] h-auto rounded-2xl"
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