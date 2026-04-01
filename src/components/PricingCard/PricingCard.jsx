import React, { useEffect, useState } from 'react';

const PricingCard = () => {
  // Pricing plan data store করার জন্য state
  const [plans, setPlans] = useState([]);

  // products.json থেকে প্রথম ৩টি data fetch করা
  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setPlans(data.slice(0, 3)));
  }, []);

  // কোন period হলে কোন text দেখাবে
  const getPeriodText = (period) => {
    if (period === 'monthly') return '/Month';
    if (period === 'yearly') return '/Year';
    return '/One-Time';
  };

  // Card background style tagType অনুযায়ী change হবে
  const getCardStyle = (tagType) => {
    if (tagType === 'best-seller') {
      return 'bg-[#101727] text-white border-none';
    }

    return 'bg-[#F2F2F2] border border-gray-200 text-[#1d2433]';
  };

  // Button style tagType অনুযায়ী change হবে
  const getButtonStyle = (tagType) => {
    if (tagType === 'best-seller') {
      return 'bg-white text-violet-600 hover:bg-gray-100';
    }

    return 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90';
  };

  return (
    <section className="bg-white py-6 md:py-12 lg:py-16 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] lg:text-5xl font-extrabold text-[#1d2433] mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 shadow-sm ${getCardStyle(
                plan.tagType
              )}`}
            >
              {/* Best seller হলে badge show করবে */}
              {plan.tagType === 'best-seller' && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffd67c] text-[#1d2433] text-base font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Card top section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center p-2">
                  <img
                    src={plan.icon}
                    alt={plan.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.tagType === 'best-seller'
                    ? 'text-violet-100'
                    : 'text-gray-400'
                }`}
              >
                {plan.description}
              </p>

              {/* Price section */}
              <div className="mb-8">
                <span className="text-3xl md:text-5xl font-bold">
                  ${plan.price}
                </span>

                <span
                  className={`text-lg ml-1 ${
                    plan.tagType === 'best-seller'
                      ? 'text-violet-100'
                      : 'text-gray-400'
                  }`}
                >
                  {getPeriodText(plan.period)}
                </span>
              </div>

              {/* Features list */}
              <ul
                className={`space-y-4 mb-10 ${
                  plan.tagType === 'best-seller'
                    ? 'text-white'
                    : 'text-gray-500'
                }`}
              >
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Card button */}
              <button
                className={`w-full py-4 rounded-full font-medium transition ${getButtonStyle(
                  plan.tagType
                )}`}
              >
                {plan.tagType === 'best-seller'
                  ? 'Start Pro Trial'
                  : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;