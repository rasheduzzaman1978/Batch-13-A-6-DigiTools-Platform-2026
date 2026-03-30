const PremiumDigitalToolsSection = () => {
  return (
    <section className="bg-[#f5f5f7] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>

        <p className="mt-4 text-sm md:text-base text-[#627382] max-w-xl mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium">
          <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-2 text-white shadow-md transition-all duration-300 hover:shadow-lg">
            Products
          </button>

          <button className="text-[#25065D] transition-colors duration-300 hover:text-violet-600">
            Cart (0)
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumDigitalToolsSection;

