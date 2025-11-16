import React, { useState, useEffect } from 'react';
import MedicineCard from '../../components/common/MedicineCard';
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const [data, setData] = useState({ categories: { homeCategories: [] }, medicines: [] });
  const [loading, setLoading] = useState(true);
  const { term } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(json => {
        setData(json.medicines); // your file has { medicines: [...] }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!term || !data.length) return;

    const cleaned = term.trim().toLowerCase();
    const filtered = data.filter(med =>
      med.name.toLowerCase().includes(cleaned)
    );

    setResult(filtered);
  }, [term, data]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }  

  return (
    <>
      {result.length > 0 ? (
        <div className="mt-8 mx-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {result.map((medicine) => (
              <MedicineCard key={medicine.id} {...medicine} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-80">
          <div className="text-gray-600">No results found.</div>
        </div>
      )
      }
    </>
  );
};

export default SearchResults;
