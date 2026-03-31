import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] w-full py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-4 text-white">

          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
            <p className="text-purple-100 text-lg">Active Users</p>
          </div>
          <div className="hidden md:block w-[1px] h-16 bg-purple-400 opacity-50"></div>

          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
            <p className="text-purple-100 text-lg">Premium Tools</p>
          </div>
          <div className="hidden md:block w-[1px] h-16 bg-purple-400 opacity-50"></div>
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
            <p className="text-purple-100 text-lg">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;