import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 relative">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-baseline gap-1">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">CuraTrack</h1>
          <sup className="text-xs sm:text-sm font-light -mt-1">©</sup>
        </div>

        {/* Desktop Navigation & Search & Icons */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {/* Navigation links */}
          <nav className="flex items-center gap-6">
            <Link to="/" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link to="/explore" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Explore
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for your medicine"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Desktop Icons & Login */}
        <div className="hidden md:flex items-center gap-4">
          {/* Shopping basket */}
          <div className="relative">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Favorites */}
          <div className="relative">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          {/* Login */}
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium">
            Login
          </button>
        </div>

        {/* Mobile Icons & Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Shopping basket icon - Mobile */}
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          {/* Favorites icon - Mobile */}
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          {/* Mobile menu button */}
          <button 
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Appears when menu button is clicked */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="absolute top-0 left-0 right-0 bg-white shadow-lg z-50">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-baseline gap-1">
                  <h1 className="text-xl font-black text-gray-900">CuraTrack</h1>
                  <sup className="text-xs font-light -mt-1">©</sup>
                </div>
                <button 
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4">
                <div className="flex flex-col space-y-4">
                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-3">
                    <Link 
                      to="/" 
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </Link>
                    <Link 
                      to="/explore" 
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Explore
                    </Link>
                  </div>

                  {/* Mobile Search Bar in Menu */}
                  <div className="px-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search for your medicine"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Login Button for Mobile */}
                  <div className="pt-4 border-t border-gray-200">
                    <button className="bg-gray-900 text-white w-full py-3 rounded-full hover:bg-gray-600 transition-colors font-medium">
                      Login / Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;