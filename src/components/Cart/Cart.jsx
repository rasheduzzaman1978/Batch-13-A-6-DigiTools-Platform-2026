import React from 'react';

const Cart = ({ carts, setCarts, toast }) => {
  const handleRemove = (id) => {
    const remainingCart = carts.filter((item) => item.id !== id);
    setCarts(remainingCart);
    toast.info('Product removed from cart');
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success('Proceeding to checkout');
  };

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-[#1d2433] mb-8">
        Your Cart
      </h2>

      {carts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold text-gray-400">
            Cart is Empty
          </h3>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="bg-[#f8f8fc] rounded-2xl px-5 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1d2433]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-pink-500 text-sm font-medium hover:text-pink-600"
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
            className="w-full mt-8 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;