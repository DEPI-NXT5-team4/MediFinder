import React from 'react';
import { Link } from 'react-router-dom';
import { useFav } from '../../context/useFav';
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';

const Favorites = () => {
  const { user, favItems, removeFromFav, addToCart, clearAllFavs } = useFav();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your favorites.</p>
          <Link 
            to="/login" 
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const favorites = Object.values(favItems);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/profile" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Favorites</h1>
              <p className="text-gray-600">Your saved medicines ({favorites.length} items)</p>
            </div>
          </div>
          
          {favorites.length > 0 && (
            <button
              onClick={clearAllFavs}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">Start adding medicines to your favorites list!</p>
            <Link 
              to="/explore" 
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors font-medium"
            >
              Explore Medicines
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map(medicine => (
              <div key={medicine.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                <div className="relative">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button 
                      onClick={() => addToCart(medicine)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="text-muted-foreground w-4 h-4" />
                    </button>
                    
                    <button 
                      onClick={() => removeFromFav(medicine.id)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                      title="Remove from Favorites"
                    >
                      <Heart className="text-red-500 w-4 h-4" fill="red" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{medicine.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <svg 
                        key={index}
                        className={`w-4 h-4 ${index < medicine.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">{medicine.price} EGP</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => addToCart(medicine)}
                        className="bg-gray-900 text-white px-3 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors"
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => removeFromFav(medicine.id)}
                        className="bg-red-100 text-red-600 px-3 py-2 rounded-full text-sm hover:bg-red-200 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Favorites;