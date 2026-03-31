import React from 'react';

const Stats = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-6 py-4 ${
              index !== stats.length - 1
                ? 'sm:border-r sm:border-white/20'
                : ''
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
              {stat.value}
            </h2>
            <p className="mt-2 text-base md:text-xl lg:text-2xl text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;