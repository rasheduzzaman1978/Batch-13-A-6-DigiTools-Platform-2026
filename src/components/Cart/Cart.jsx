import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png';
import { BsCart2 } from "react-icons/bs";

const Cart = ({ carts, setCarts, toast }) => {
  const handleRemove = (id) => {
  const remainingCart = carts.filter((item) => item.id !== id);
  setCarts(remainingCart);

  toast.info('Product removed from cart', {
    position: 'top-right',
  });
};

const handleCheckout = () => {
  setCarts([]);

  toast.success('Proceed to checkout successful', {
    position: 'top-right',
  });
};

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl font-bold p-6 md:p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-[#1d2433] mb-8">
        Your Cart
      </h2>

      {carts.length === 0 ? (
        <div className="text-center py-16 flex flex-col items-center justify-center">
  <BsCart2 size={80} className="text-gray-300 mb-4" />

  <h3 className="text-2xl font-semibold text-[#627382]">
    Your Cart is Empty
  </h3>
</div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="bg-[#F9FAFC] rounded-2xl px-2 md:px-5 py-8 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className=" w-12 h-12 md:w-15 md:h-15 rounded-full bg-white flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base md:text-xl font-semibold text-[#101727]">
                      {item.name}
                    </h3>
                    <p className="text-base font-semibold text-[#627382]">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-pink-500 text-base font-medium hover:text-pink-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm text-gray-400">Total:</p>
            <h3 className="text-3xl font-bold text-[#1d2433]">
              ${totalPrice}
            </h3>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-8 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;