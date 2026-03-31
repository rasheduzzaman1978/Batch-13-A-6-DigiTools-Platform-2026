import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductCard from '../ProductsCard/ProductsCard';
import Cart from '../Cart/Cart';

const PremiumDigitalToolsSection = ({ carts, setCarts }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = carts.find((item) => item.id === product.id);

    if (exists) {
      toast.error('Product already added!');
      return;
    }

    setCarts([...carts, product]);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#1d2433] mb-4">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Browse our collection of digital products.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 mb-12">
        <button
          onClick={() => setActiveTab('products')}
          className={`rounded-full w-40 px-6 py-3 text-base font-bold transition-all duration-300 ${
            activeTab === 'products'
              ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md'
              : 'bg-gray-100 text-[#25065D] hover:text-violet-600'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`rounded-full w-40 px-6 py-3 text-base font-medium transition-all duration-300 ${
            activeTab === 'cart'
              ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md'
              : 'bg-gray-100 text-[#25065D] hover:text-violet-600'
          }`}
        >
          Cart ({carts.length})
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              carts={carts}
            />
          ))}
        </div>
      )}

      {activeTab === 'cart' && (
        <Cart
          carts={carts}
          setCarts={setCarts}
          toast={toast}
        />
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
};

export default PremiumDigitalToolsSection;