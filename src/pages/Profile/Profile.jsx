import React from 'react';
import { Link } from 'react-router-dom';
import { useFav } from '../../context/useFav';
import { User, Heart, ShoppingCart, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout, favCount, cartCount } = useFav();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your profile.</p>
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.fullName}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500 text-sm">{user.phone}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-900">{favCount}</h3>
            <p className="text-gray-600">Favorite Items</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <ShoppingCart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-900">{cartCount}</h3>
            <p className="text-gray-600">Cart Items</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Active</h3>
            <p className="text-gray-600">Account Status</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              to="/favorites" 
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Heart className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="font-semibold text-gray-900">My Favorites</h3>
                <p className="text-gray-600 text-sm">View your saved medicines</p>
              </div>
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Shopping Cart</h3>
                <p className="text-gray-600 text-sm">Review your cart items</p>
              </div>
            </Link>
            
            <button className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-left">
              <Settings className="w-6 h-6 text-gray-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Settings</h3>
                <p className="text-gray-600 text-sm">Manage your account</p>
              </div>
            </button>
            
            <button 
              onClick={logout}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-red-50 transition-colors text-left"
            >
              <LogOut className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Logout</h3>
                <p className="text-gray-600 text-sm">Sign out of your account</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-900">Added Panadol to favorites</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-900">Added Aspirin to cart</p>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;