import { useState } from "react";
import Cart from "../Cart/Cart";
import ProductsCard from "../ProductsCard/ProductsCard";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

const PremiumDigitalToolsSection = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <section className="bg-[#f5f5f7] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h2>

        <p className="mt-4 text-sm md:text-base text-[#627382] max-w-xl mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`rounded-full w-40 px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md hover:shadow-lg"
                : "text-[#25065D] hover:text-violet-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full w-40 px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md hover:shadow-lg"
                : "text-[#25065D] hover:text-violet-600"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>

        <div className="mt-10">
          {activeTab === "products" && (
            <ProductsCard
              productsPromise={productsPromise}
              carts={carts}
              setCarts={setCarts}
            />
          )}

          {activeTab === "cart" && (
            <Cart carts={carts} setCarts={setCarts} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PremiumDigitalToolsSection;