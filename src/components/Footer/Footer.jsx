import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-[200px]"> {/* هنا التعديل */}
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between pb-6 mb-6">
          
          <div className="mb-6 md:mb-0 md:w-1/2">
            <div className="flex items-baseline gap-2 mb-4">
              <h2 className="text-4xl font-black tracking-tight">CuraTrack</h2>
              <sup className="text-xl font-light -mt-2">©</sup>
            </div>
            <p className="text-gray-500 mb-4 leading-relaxed max-w-[375px]">
              Your trusted digital companion for discovering medicines, comparing prices, and finding nearby pharmacies — all in one place.
            </p>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">For Inquires: </h5>
              <p className="text-gray-500 underline decoration-gray-500 decoration-1 hover:decoration-white transition-all">
                support@medicinefinder.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-1/2">
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer">Home</li>
                <li className="underline decoration-gray-500 cursor-pointer">Explore</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer">FAQ</li>
                <li className="underline decoration-gray-500 cursor-pointer">Privacy Policy</li>
                <li className="underline decoration-gray-500 cursor-pointer">Terms Of Use</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Top Categories</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="underline decoration-gray-500 cursor-pointer">Pain Relief & Fever</li>
                <li className="underline decoration-gray-500 cursor-pointer">Antibiotics</li>
                <li className="underline decoration-gray-500 cursor-pointer">Digestive Health</li>
                <li className="underline decoration-gray-500 cursor-pointer">Diabetes Care</li>
                <li className="underline decoration-gray-500 cursor-pointer">Heart & Cholesterol</li>
                <li className="underline decoration-gray-500 cursor-pointer">Respiratory Health</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;