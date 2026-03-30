import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png';

const Navbar = ({ carts }) => {
  return (
    <div className="w-full border-b border-base-200 bg-white sticky top-0 z-50">
      <div className="navbar mx-auto max-w-7xl px-6 lg:px-10 h-20">
        <div className="navbar-start">
          <a className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-sm md:text-base font-medium text-[#101727]">
            <li>
              <a className="hover:text-primary transition-colors">Products</a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors">Features</a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors">Pricing</a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors">Testimonials</a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="relative flex items-center">
            <img
              src={cartImg}
              alt="Cart"
              className="w-7 h-7"
            />

            <span className="absolute -top-2 -right-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {carts.length}
            </span>
          </div>

          <button className="btn btn-ghost btn-sm normal-case text-sm md:text-base font-medium text-[#101727] hidden sm:flex">
            Login
          </button>

          <button className="btn btn-primary btn-sm rounded-full px-5 normal-case bg-gradient-to-r from-violet-600 to-fuchsia-500 border-none text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;