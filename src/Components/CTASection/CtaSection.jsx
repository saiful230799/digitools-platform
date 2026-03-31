import React from 'react';

const CtaSection = () => {
    return (
    <section className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg cursor-pointer">
              Explore Products
          </button>
          <button 
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer">
              View Pricing
          </button>
      </div>
        <p className="text-purple-200 text-sm italic">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
    );
};

export default CtaSection;