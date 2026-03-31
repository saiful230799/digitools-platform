import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-end">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-[40px] p-10 relative flex flex-col transition-all duration-500 ${
                plan.isPopular 
                ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white shadow-2xl shadow-purple-300 lg:scale-105 z-10' 
                : 'bg-gray-50 text-gray-900 shadow-sm border border-gray-100 hover:shadow-xl'
              }`}
            >
              
              {/* Most Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-[10px] font-black uppercase px-4 py-3 rounded-full tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="flex-grow">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.isPopular ? 'text-purple-100' : 'text-gray-500'} text-sm mb-8 font-medium`}>
                  {plan.description}
                </p>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-10">
                  <span className={`text-6xl font-black ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`${plan.isPopular ? 'text-purple-200' : 'text-gray-400'} font-bold text-xl`}>
                    /Month
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4 text-sm font-medium">
                      <FiCheck 
                        size={20} 
                        className={`${plan.isPopular ? 'text-white' : 'text-[#7C3AED]'} shrink-0`} 
                      />
                      <span className={plan.isPopular ? 'text-purple-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className={`w-full font-extrabold py-5 px-8 rounded-full text-md transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg ${
                plan.isPopular 
                ? 'bg-white text-[#7C3AED] hover:bg-gray-50' 
                : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
              }`}>
                {plan.buttonText}
                <FiArrowRight size={20} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;