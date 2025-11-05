import React from 'react';

const Home = () => {
  return (
    <div className="relative h-[500px] w-full">
      {/* background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/assets/Marque.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        
        <div className="text-center mb-8">
          <div className="text-xl font-light mb-2">
            Welcome to
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <h1 className="text-6xl font-black tracking-tight">
              CuraTrack
            </h1>
            <sup className="text-2xl font-light -mt-4">©</sup>
          </div>
        </div>

        {/* Search for your medicines*/}
        <div className="w-[650px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for your medicines.."
              className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;