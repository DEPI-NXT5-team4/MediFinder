import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-[200px]">
      <div className="container mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between pb-6 mb-6 gap-8">
          
          <div className="lg:w-1/2">
            <div className="flex items-baseline gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">CuraTrack</h2>
              <sup className="text-lg sm:text-xl font-light -mt-1 sm:-mt-2">©</sup>
            </div>
            <p className="text-gray-500 mb-4 leading-relaxed max-w-full lg:max-w-[375px]">
              Your trusted digital companion for discovering medicines, comparing prices, and finding nearby pharmacies — all in one place.
            </p>
            <div className="mt-4 sm:mt-6">
              <h5 className="font-semibold mb-2">For Inquires: </h5>
              <p className="text-gray-500 underline decoration-gray-500 decoration-1 hover:decoration-white transition-all">
                support@medicinefinder.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:w-1/2">
            
            <div>
              <h3 className="font-bold text-lg mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Home</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Explore</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">FAQ</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Privacy Policy</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Terms Of Use</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 sm:mb-4">Top Categories</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Pain Relief & Fever</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Antibiotics</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Digestive Health</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Diabetes Care</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Heart & Cholesterol</li>
                <li className="underline decoration-gray-500 cursor-pointer hover:text-white transition-colors">Respiratory Health</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;