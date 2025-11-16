import SearchBar from '../../components/layout/Header/SearchBar';
import React from 'react';

const Home = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/Marque.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">

        <div className="text-center mb-8">
          <div className="text-lg sm:text-xl font-light mb-2">
            Welcome to
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
              MediFinder
            </h1>
            <sup className="text-lg sm:text-2xl font-light -mt-2 sm:-mt-4">©</sup>
          </div>
        </div>

        {/* Search for your medicines*/}

        <SearchBar
          value1="w-full max-w-[650px] relative"
          value2="absolute inset-y-0 left-0 pl-4 flex items-center cursor-pointer"
          value3="text-muted-foreground"
          value4="w-full pl-12 pr-6 py-3 sm:py-4 border border-muted-foreground rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg shadow-lg bg-white text-muted-foreground"
        />

      </div>
    </div>
  );
};

export default Home;