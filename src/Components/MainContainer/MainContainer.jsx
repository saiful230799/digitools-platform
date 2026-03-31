import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const MainContainer = ({ cart, handleAddToCart, handleRemove, handleCheckout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-100">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-10 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${activeTab === 'products' ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white shadow-lg' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${activeTab === 'cart' ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white shadow-lg' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>
      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
            
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50/50 p-6 rounded-3xl border border-gray-50">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                        <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                        <p className="text-gray-400 font-bold">${item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="text-red-400 hover:text-red-600 font-bold px-4 cursor-pointer">Remove</button>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-10">
                  <span className="text-gray-400 font-bold text-xl">Total:</span>
                  <span className="text-4xl font-black text-gray-900">${totalPrice}</span>
                </div>
                <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white py-6 rounded-full font-black text-xl mt-10 shadow-2xl shadow-purple-200 cursor-pointer">
                  Proceed To Checkout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 bg-[#F5EFFF] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A855F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-gray-900 font-bold text-2xl mb-2">Your cart is empty</div>
                <p className="text-gray-400 font-medium text-[12px] sm:text-sm whitespace-nowrap">
                Click Cart any time to review the products you select.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;