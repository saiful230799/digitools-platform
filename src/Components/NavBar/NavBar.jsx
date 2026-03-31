import React, { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-1 text-gray-700 hover:bg-gray-100 rounded-md transition-all"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
          
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] cursor-pointer">
            DigiTools
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
          <a href="#products" className="hover:text-[#7C3AED] transition-colors font-semibold">Products</a>
          <a href="#features" className="hover:text-[#7C3AED] transition-colors font-semibold">Features</a>
          <a href="#pricing" className="hover:text-[#7C3AED] transition-colors font-semibold">Pricing</a>
          <a href="#testimonials" className="hover:text-[#7C3AED] transition-colors font-semibold">Testimonials</a>
          <a href="#faq" className="hover:text-[#7C3AED] transition-colors font-semibold">FAQ</a>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          {/* Cart Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-all text-gray-700">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Login Button - Visible on Desktop */}
          <button className="font-semibold text-gray-700 hover:text-[#7C3AED] transition-colors hidden lg:block cursor-pointer">
            Login
          </button>

          {/* Action Button */}
          <button className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium hover:opacity-90 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 font-medium text-gray-600 shadow-lg">
          <a href="#products" onClick={() => setIsOpen(false)} className="hover:text-[#7C3AED] py-2 border-b border-gray-50">Products</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-[#7C3AED] py-2 border-b border-gray-50">Features</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-[#7C3AED] py-2 border-b border-gray-50">Pricing</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-[#7C3AED] py-2 border-b border-gray-50">Testimonials</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-[#7C3AED] py-2">FAQ</a>
          <button onClick={() => setIsOpen(false)} className="text-left font-bold text-[#7C3AED] pt-2">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;