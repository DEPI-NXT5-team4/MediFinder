import React, { useState, useEffect } from 'react';
import MedicineCard from '../../components/common/MedicineCard';

const Explore = () => {
  const [data, setData] = useState({ categories: { exploreCategories: [], homeCategories: [] }, medicines: [] });
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

  const getCategoryName = (categoryId) => {
    const exploreCat = data.categories.exploreCategories.find(cat => cat.id === categoryId);
    if (exploreCat) return exploreCat.name;
    
    const homeCat = data.categories.homeCategories.find(cat => cat.id === categoryId);
    if (homeCat) return homeCat.name;
    
    return `Category ${categoryId}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center items-center h-32">
            <div className="text-gray-600">Loading ...</div>
          </div>
        </div>
      </div>
    );
  }

  const allCategoryIds = [...new Set(data.medicines.map(med => med.categoryId))];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">

        {/* Top Categories */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-semibold text-foreground mb-6 sm:mb-8">Top Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.categories.exploreCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gray-200 rounded-full w-full h-full flex items-center justify-between text-foreground cursor-pointer px-4 sm:px-6 py-4 mx-auto`}
              >
                <h3 className="font-semibold text-xs sm:text-sm whitespace-nowrap truncate">{category.name}</h3>
                <div className="text-xl sm:text-2xl">💊</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacy departments */}
        {allCategoryIds.map(categoryId => {
          const categoryMedicines = data.medicines.filter(medicine =>
            medicine.categoryId === categoryId
          );

          // Only the first 6 drugs per category
          const displayedMedicines = categoryMedicines.slice(0, 6);

          if (displayedMedicines.length === 0) return null;

          return (
            <div key={categoryId} className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                {getCategoryName(categoryId)}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {displayedMedicines.map(medicine => (
                  <MedicineCard
                    key={medicine.id}
                    name={medicine.name}
                    rating={medicine.rating}
                    price={medicine.price}
                    image={medicine.image}
                    id={medicine.id}
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