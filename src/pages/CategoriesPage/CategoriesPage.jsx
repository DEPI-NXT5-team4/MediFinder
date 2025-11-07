import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MedicineCard from '../../components/common/MedicineCard';



const CategorySection = ({ categoryName, medicines }) => {
  // Only the first 6 drugs per category
  const displayedMedicines = medicines.slice(0, 6);

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{categoryName}</h2>
        <Link
          to="/explore"
          className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium"
        >
          View More
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {displayedMedicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            {
            ...medicine
            }
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
          <div className="text-gray-600"> Loading... </div>
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