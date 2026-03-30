import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#07122b] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-b border-white/10 pb-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-7 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a className="hover:text-white cursor-pointer">Features</a></li>
              <li><a className="hover:text-white cursor-pointer">Pricing</a></li>
              <li><a className="hover:text-white cursor-pointer">Templates</a></li>
              <li><a className="hover:text-white cursor-pointer">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a className="hover:text-white cursor-pointer">About</a></li>
              <li><a className="hover:text-white cursor-pointer">Blog</a></li>
              <li><a className="hover:text-white cursor-pointer">Careers</a></li>
              <li><a className="hover:text-white cursor-pointer">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a className="hover:text-white cursor-pointer">Documentation</a></li>
              <li><a className="hover:text-white cursor-pointer">Help Center</a></li>
              <li><a className="hover:text-white cursor-pointer">Community</a></li>
              <li><a className="hover:text-white cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Social Links</h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white text-[#07122b] flex items-center justify-center hover:scale-105 transition">
                <FaYoutube size={16} />
              </button>

              <button className="w-10 h-10 rounded-full bg-white text-[#07122b] flex items-center justify-center hover:scale-105 transition">
                <FaFacebookF size={14} />
              </button>

              <button className="w-10 h-10 rounded-full bg-white text-[#07122b] flex items-center justify-center hover:scale-105 transition">
                <FaXTwitter size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-6 text-sm text-gray-500 gap-4">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <a className="hover:text-white cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white cursor-pointer">Terms of Service</a>
            <a className="hover:text-white cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;