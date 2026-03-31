import React from 'react';
import bannerImg from "../../assets/banner.png"
import playImg from "../../assets/Play.png"

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 lg:py-20 gap-10">
      
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-1.5 rounded-full text-sm font-semibold">
          <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your <br className="hidden md:block" /> 
          <span className="text-gray-800">Digital Workflow</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-lg mx-auto lg:mx-0">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <button className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white px-8 py-3.5 rounded-full font-bold cursor-pointer hover:bg-[#6D28D9] transition-all shadow-lg active:scale-95">
            Explore Products
          </button>
          <button className="h-[52px] flex items-center justify-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-8 rounded-full font-bold hover:bg-[#F3E8FF] transition-all active:scale-95 cursor-pointer">
            <span className="w-5 h-5 flex items-center justify-center text-[8px] pl-0.5 "><img src={playImg} alt="" /></span>Watch Demo
        </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <div className="relative">
          <img 
            src={bannerImg} alt=""/>
          <div className="absolute -z-10 top-10 right-10 w-full h-full bg-[#7C3AED]/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;