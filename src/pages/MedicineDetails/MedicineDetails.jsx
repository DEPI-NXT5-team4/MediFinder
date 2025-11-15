import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { useFav } from '../../context/useFav'; 

const MedicineDetails = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToFav, removeFromFav, isFavored, user, addToCart } = useFav();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundMedicine = data.medicines.find(med => med.id === parseInt(id));
        setMedicine(foundMedicine);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading medicine:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    addToCart({
      id: medicine.id, 
      name: medicine.name, 
      price: medicine.price, 
      image: medicine.image
    });
  };

  const handleAddToFav = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    isFavored(medicine.id) ? removeFromFav(medicine.id) : addToFav(medicine);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading medicine details...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!medicine) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Medicine not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Medicine Header */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Medicine Image */}
              <div className="lg:w-1/3">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                />
              </div>

              {/* Medicine Info */}
              <div className="lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{medicine.name}</h1>
                  <button
                    onClick={handleAddToFav}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart 
                      className="w-6 h-6 text-red-500" 
                      fill={isFavored(medicine.id) ? "red" : "none"}
                    />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index}
                        fill={index < medicine.rating ? '#fcc900' : '#e5e7eb'}
                        className="w-5 h-5 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({medicine.rating}.0)</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">In Stock</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{medicine.price} EGP</span>
                  <span className="text-sm text-gray-500 ml-2">per pack</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  <button 
                    onClick={handleAddToCart} 
                    className="flex-1 bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                {/* Additional Links */}
                <div className="flex gap-4">
                  <Link 
                    to={`/compare?id=${medicine.id}`}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                  >
                    Compare Prices
                  </Link>
                  <Link 
                    to="/nearby"
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                  >
                    Find Pharmacies
                  </Link>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free Delivery
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Original Product
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Doctor Recommended
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>

            {/* Medicine Details */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Description</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {medicine.name} is a trusted medication used for pain relief and fever reduction. 
                    It's suitable for adults and children over 12 years.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Dosage Instructions</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Adults: 1-2 tablets every 4-6 hours</li>
                    <li>• Maximum: 8 tablets in 24 hours</li>
                    <li>• Take with food if stomach upset occurs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;