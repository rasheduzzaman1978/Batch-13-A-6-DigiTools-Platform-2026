import React from 'react';

const ProductCard = ({ product, handleAddToCart, carts }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  const isAdded = carts.some((item) => item.id === product.id);

  const getBadgeStyle = () => {
    if (tagType === 'popular') {
      return 'bg-violet-100 text-violet-600';
    }

    if (tagType === 'new') {
      return 'bg-green-100 text-green-600';
    }

    if (tagType === 'best-seller') {
      return 'bg-orange-100 text-orange-500';
    }

    return 'bg-gray-100 text-gray-600';
  };

  const getPeriodText = () => {
    if (period === 'monthly') return '/Mo';
    if (period === 'yearly') return '/Year';
    return '/One-Time';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
          {icon}
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle()}`}>
          {tag}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-[#1d2433] mb-3">{name}</h2>

      <p className="text-gray-500 text-sm leading-6 mb-6 min-h-[70px]">
        {description}
      </p>

      <div className="mb-5">
        <span className="text-3xl font-bold text-[#1d2433]">${price}</span>
        <span className="text-gray-400 text-sm ml-1">{getPeriodText()}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        disabled={isAdded}
        className={`w-full py-3 rounded-full font-medium transition duration-300 ${
          isAdded
            ? 'bg-green-500 text-white cursor-not-allowed'
            : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white'
        }`}
      >
        {isAdded ? 'Added To Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;