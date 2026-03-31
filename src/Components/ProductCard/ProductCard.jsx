import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon, tagColor } = product;
  console.log(product);

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-[32px] p-8 relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColor} ${tagType}`}>
        {tag}
      </div>
      <div className="text-4xl mb-6 bg-[#F3E8FF] w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>   
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm font-medium">/{period}</span>
      </div>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <svg className="w-5 h-5 text-[#7C3AED] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </div>
        ))}
      </div>
      <button 
        onClick={() => handleAddToCart(product)}
        className="w-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] hover:bg-[#6D28D9] text-white py-4 rounded-full font-bold text-md transition-all active:scale-95 shadow-lg shadow-purple-100 cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;