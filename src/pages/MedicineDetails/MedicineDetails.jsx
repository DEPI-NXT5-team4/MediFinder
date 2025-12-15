import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Star, ArrowLeft, MapPin } from 'lucide-react';
import { useFav } from '../../context/useFav'; 

const MedicineDetails = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nearbyPharmacies, setNearbyPharmacies] = useState([]);
  const [showPharmacies, setShowPharmacies] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
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

  const findNearbyPharmacies = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLocationLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch('/data.json');
            const data = await response.json();
            
            const pharmaciesWithMedicine = data.pharmacies.filter(pharmacy => {
              const medicineData = data.medicines.find(med => med.id === parseInt(id));
              if (medicineData && medicineData.vendors) {
                return medicineData.vendors.some(vendor => 
                  vendor.pharmacyId === pharmacy.id && vendor.stock === true
                );
              }
              return false;
            });
            
            const pharmaciesWithDistance = pharmaciesWithMedicine.map(pharmacy => {
              const distance = calculateDistance(latitude, longitude, pharmacy.lat, pharmacy.lng);
              const medicineData = data.medicines.find(med => med.id === parseInt(id));
              const vendorInfo = medicineData.vendors.find(v => v.pharmacyId === pharmacy.id);
              
              return {
                ...pharmacy,
                distance: distance.toFixed(1),
                price: vendorInfo ? vendorInfo.price : medicineData.price,
                stock: vendorInfo ? vendorInfo.stock : false
              };
            });
            
            pharmaciesWithDistance.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
            
            setNearbyPharmacies(pharmaciesWithDistance);
            setShowPharmacies(true);
          } catch (error) {
            console.error('Error finding pharmacies:', error);
          } finally {
            setLocationLoading(false);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationLoading(false);
          alert('تعذر الحصول على الموقع. يرجى التأكد من تفعيل خدمة الموقع.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocationLoading(false);
      alert('المتصفح لا يدعم خدمة تحديد الموقع.');
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
  };

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
                  <button 
                    onClick={findNearbyPharmacies}
                    disabled={locationLoading}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    {locationLoading ? 'Searching...' : 'Find Nearby Pharmacies'}
                  </button>
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

            {/* Nearby Pharmacies Section */}
            {showPharmacies && (
              <div className="mt-8 border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Pharmacies with {medicine.name}</h3>
                
                {nearbyPharmacies.length > 0 ? (
                  <div className="space-y-4">
                    {nearbyPharmacies.map(pharmacy => (
                      <div key={pharmacy.id} className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{pharmacy.name}</h4>
                          <p className="text-gray-600 text-sm">{pharmacy.city}</p>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-4 h-4 text-blue-500 mr-1" />
                            <span className="text-sm text-gray-500">{pharmacy.distance} km away</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{pharmacy.price} EGP</p>
                          <p className={`text-sm ${pharmacy.stock ? 'text-green-600' : 'text-red-600'}`}>
                            {pharmacy.stock ? 'In Stock' : 'Out of Stock'}
                          </p>
                          <button 
                            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            onClick={() => {
                              window.open(`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lng}`, '_blank');
                            }}
                          >
                            Directions
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No nearby pharmacies found with this medicine in stock.</p>
                    <button
                      className="mt-4 text-blue-600 hover:underline"
                      onClick={() => setShowPharmacies(false)}
                    >
                      Hide results
                    </button>
                  </div>
                )}
              </div>
            )}

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