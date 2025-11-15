import React, { useState, useEffect } from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const [data, setData] = useState({ categories: { homeCategories: [] }, medicines: [] });
  const [loading, setLoading] = useState(true);
  const { term } = useParams();  
  
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data.medicines);
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

  // console.log(data);
  
  function searchMedicines(medicines, searchTerm) {
    const cleaned = searchTerm.trim().toLowerCase();
    return (medicines.filter(med =>
      med.name.toLowerCase().includes(cleaned)
    ))
  }
  
  return(
    <div className="mt-8 mx-8 sm:mb-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {searchMedicines(data, term).map((medicine) => (
          <MedicineCard
            key={medicine.id}
            {
            ...medicine
            }
          />
        ))}
      </div>
    </div>
  )

}
export default SearchResults;