import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MedicineCard = ({ name, rating, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
        />
        
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-2">
          <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          
          <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg 
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        
        <p className="text-xs font-semibold text-gray-800">{price} EGP</p>
      </div>
    </div>
  );
};

const CategorySection = ({ categoryName, medicines }) => {
  // Only the first 6 drugs per category
  const displayedMedicines = medicines.slice(0, 6);

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{categoryName}</h2>
        <Link 
          to="/explore" 
          className="bg-gray-900 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-xs sm:text-sm w-full sm:w-auto text-center"
        >
          View More
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {displayedMedicines.map((medicine) => (
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
};

const CategoriesPage = () => {
  const [data, setData] = useState({ categories: { homeCategories: [] }, medicines: [] });
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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-600">جاري التحميل...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {data.categories.homeCategories.map((category) => {
        const categoryMedicines = data.medicines.filter(medicine => 
          medicine.categoryId === category.id
        );
        
        return (
          <CategorySection 
            key={category.id}
            categoryName={category.name} 
            medicines={categoryMedicines} 
          />
        );
      })}
    </div>
  );
};

export default CategoriesPage;