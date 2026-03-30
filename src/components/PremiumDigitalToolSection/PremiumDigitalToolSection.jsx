import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductsCard/ProductsCard';
import Cart from '../Cart/Cart';

const PremiumDigitalToolsSection = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = carts.find((item) => item.id === product.id);

    if (!exists) {
      setCarts([...carts, product]);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Browse our collection of digital products.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveTab('products')}
          className={`rounded-full w-40 px-6 py-3 text-sm font-medium transition-all duration-300 ${
            activeTab === 'products'
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md'
              : 'bg-gray-100 text-[#25065D] hover:text-violet-600'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`rounded-full w-40 px-6 py-3 text-sm font-medium transition-all duration-300 ${
            activeTab === 'cart'
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md'
              : 'bg-gray-100 text-[#25065D] hover:text-violet-600'
          }`}
        >
          Cart ({carts.length})
        </button>
      </div>

      <div className="mt-12">
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <Cart carts={carts} setCarts={setCarts} />
        )}
      </div>
    </section>
  );
};

export default PremiumDigitalToolsSection;