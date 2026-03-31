import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const PlansPage = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners getting started with premium tools.",
      price: 0,
      period: "Month",
      features: [
        "Access to basic AI tools",
        "Limited templates",
        "Standard support",
        "1 GB cloud sync"
      ],
      buttonText: "Get Started Free",
      isPopular: false
    },
    {
      name: "Pro",
      description: "Best for professionals needing advanced features.",
      price: 29,
      period: "Month",
      features: [
        "Everything in Starter",
        "AI Resume Builder",
        "SEO Analyzer Pro",
        "50 GB cloud sync",
        "Priority Support"
      ],
      buttonText: "Start Pro Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "Ideal for teams and large-scale projects.",
      price: 99,
      period: "Month",
      features: [
        "Everything in Pro",
        "Full Design Toolkit",
        "Project Manager Plus",
        "Unlimited cloud sync",
        "24/7 Dedicated Support",
        "Custom Integrations"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  const getButtonClass = (isPopular) => {
    return isPopular 
      ? "bg-white text-[#7C3AED] hover:bg-gray-100" 
      : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]";
  };

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Simple, Transparent <br className="hidden sm:block" /> 
            <span className="text-[#7C3AED]">Pricing</span> Plans
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-[32px] p-10 relative flex flex-col transition-all duration-300 ${
                plan.isPopular 
                ? 'bg-[#7C3AED] text-white shadow-2xl shadow-purple-200 lg:scale-105' 
                : 'bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-8 right-10 bg-white text-[#7C3AED] text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="flex-grow">
                <h3 className={`text-2xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.isPopular ? 'text-purple-100' : 'text-gray-500'} text-sm leading-relaxed mb-8`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-6xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`${plan.isPopular ? 'text-purple-200' : 'text-gray-400'} font-medium text-lg`}>
                    /{plan.period}
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-4 mb-10 text-sm">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-center gap-3 ${plan.isPopular ? 'text-purple-100' : 'text-gray-700'}`}>
                      <FiCheck size={18} className={plan.isPopular ? 'text-purple-100' : 'text-purple-600'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Button */}
              <button className={`${getButtonClass(plan.isPopular)} w-full font-bold py-4 px-8 rounded-full text-md transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-md`}>
                {plan.buttonText}
                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlansPage;