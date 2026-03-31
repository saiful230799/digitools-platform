import React from 'react';
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const Steps = () => {
  const stepsData = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <img src={userImg} alt="" />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: <img src={packageImg} alt="" />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <img src={rocketImg} alt="" />,
    }
  ];

  return (
    <section className="py-24 bg-white px-6 cursor-pointer">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Get Started In 3 Steps</h2>
          <p className="text-gray-500 font-medium">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div key={step.id} className="relative bg-white p-12 rounded-[40px] border border-gray-50 shadow-sm text-center group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-8 right-8 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-black">
                {step.id}
              </div>
              <div className="w-24 h-24 bg-purple-50 text-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;