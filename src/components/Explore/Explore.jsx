import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [data, setData] = useState({ categories: { exploreCategories: [] }, medicines: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  const getSizeClasses = (size) => {
    switch(size) {
      case 'small': return 'w-64 h-20';
      case 'medium': return 'w-80 h-20';
      case 'large': return 'w-96 h-20';
      default: return 'w-64 h-20';
    }
  };

  const MedicineCard = ({ name, rating, price, image }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg"/>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className={`w-3 h-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="text-xs font-semibold text-gray-00">{price} EGP</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center items-center h-32">
            <div className="text-gray-600">جاري التحميل...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/*  Top Categories */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">Top Categories</h1>
          <div className="flex flex-wrap gap-6 justify-center"> 
            {data.categories.exploreCategories.map((category) => (
              <div 
                key={category.id} 
                className={`${getSizeClasses(category.size)} bg-gray-200  rounded-full flex items-center justify-between text-gray-800 cursor-pointer px-6  `}
              >
                <h3 className="font-semibold text-sm whitespace-nowrap">{category.name}</h3>
                <div className="text-2xl">💊</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacy departments*/}
        {data.categories.exploreCategories.map(category => {
          const categoryMedicines = data.medicines.filter(medicine => 
            medicine.categoryId === category.id
          );
          
          //Only the first 6 drugs per category
          const displayedMedicines = categoryMedicines.slice(0, 6);
          
          if (displayedMedicines.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {displayedMedicines.map(medicine => (
                  <MedicineCard 
                    key={medicine.id}
                    name={medicine.name} 
                    rating={medicine.rating} 
                    price={medicine.price} 
                    image={medicine.image}
                  />
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Explore;