import React, { useEffect, useState } from 'react';


const PricingCard = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setPlans(data.slice(0, 3)));
  }, []);

  const getPeriodText = (period) => {
    if (period === 'monthly') return '/Month';
    if (period === 'yearly') return '/Year';
    return '/One-Time';
  };

  const getCardStyle = (tagType) => {
    if (tagType === 'best-seller') {
      return 'bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white border-none';
    }

    return 'bg-white border border-gray-200 text-[#1d2433]';
  };

  const getButtonStyle = (tagType) => {
    if (tagType === 'best-seller') {
      return 'bg-white text-violet-600 hover:bg-gray-100';
    }

    return 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-90';
  };

  return (
    <section className="bg-[#f8f8fb] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#1d2433] mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="text-gray-500 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 shadow-sm ${getCardStyle(plan.tagType)}`}
            >
              {plan.tagType === 'best-seller' && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffd67c] text-[#1d2433] text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{plan.icon}</span>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.tagType === 'best-seller'
                    ? 'text-violet-100'
                    : 'text-gray-400'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span
                  className={`text-lg ${
                    plan.tagType === 'best-seller'
                      ? 'text-violet-100'
                      : 'text-gray-400'
                  }`}
                >
                  {getPeriodText(plan.period)}
                </span>
              </div>

              <ul
                className={`space-y-4 mb-10 ${
                  plan.tagType === 'best-seller'
                    ? 'text-white'
                    : 'text-gray-500'
                }`}
              >
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>

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