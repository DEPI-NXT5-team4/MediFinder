import { Heart, ShoppingCart, User, LogOut, Home, Tag, MapPin, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFav } from '../../../context/useFav';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, favCount, cartCount } = useFav();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 relative">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">CuraTrack</h1>
          <sup className="text-xs sm:text-sm font-light -mt-1">©</sup>
        </Link>

        {/* Desktop Navigation & Search & Icons */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <nav className="flex items-center gap-6">
            <Link to="/" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link to="/explore" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Explore
            </Link>
            <Link to="/offers" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Offers
            </Link>
            {/*  New: Nearby */}
            <Link to="/nearby" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nearby
            </Link>
             <Link to="/OrderHistory" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              My Orders
            </Link>
            <Link to="/faq" className="underline text-gray-700 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          <SearchBar
            value1="flex-1 max-w-md"
            value2="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
            value3="text-muted-foreground w-5 h-5"
            value4="w-full pl-10 pr-4 py-2 border border-muted-foreground rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          />

        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Favorites */}
          <Link to="/favorites" className="relative">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Heart className="text-muted-foreground w-5 h-5" />
              {favCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </button>
          </Link>

          {/* Shopping Cart */}
          <Link to="/cart" className="relative">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <ShoppingCart className="text-muted-foreground w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <User className="text-muted-foreground w-5 h-5" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    {user.fullName}
                  </Link>
                  <Link
                    to="/favorites"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    Favorites
                    {favCount > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {favCount}
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Icons & Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Favorites - Mobile */}
          <Link to="/favorites" className="relative">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <Heart className="text-muted-foreground w-5 h-5" />
              {favCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </button>
          </Link>

          {/* Shopping Cart - Mobile */}
          <Link to="/cart" className="relative">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <ShoppingCart className="text-muted-foreground w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="absolute top-0 left-0 right-0 bg-white shadow-lg z-50">
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

              <div className="p-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <Home className="w-5 h-5" />
                      Home
                    </Link>

                    <Link
                      to="/explore"
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <Search className="w-5 h-5" />
                      Explore
                    </Link>

                    <Link
                      to="/offers"
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <Tag className="w-5 h-5" />
                      Offers
                    </Link>

                    {/*  New: Nearby in mobile menu */}
                    <Link
                      to="/nearby"
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <MapPin className="w-5 h-5" />
                      Nearby
                    </Link>

                    <Link
                      to="/faq"
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <HelpCircle className="w-5 h-5" />
                      FAQ
                    </Link>

                    {user && (
                      <>
                        <Link
                          to="/profile"
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                          onClick={closeMenu}
                        >
                          <User className="w-5 h-5" />
                          {user.fullName}
                        </Link>

                        <Link
                          to="/favorites"
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                          onClick={closeMenu}
                        >
                          <Heart className="w-5 h-5" />
                          Favorites
                          {favCount > 0 && (
                            <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {favCount}
                            </span>
                          )}
                        </Link>

                        <Link
                          to="/cart"
                          className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
                          onClick={closeMenu}
                        >
                          <ShoppingCart className="w-5 h-5" />
                          Cart
                          {cartCount > 0 && (
                            <span className="ml-auto bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {cartCount}
                            </span>
                          )}
                        </Link>
                      </>
                    )}
                  </div>

                  <div className="px-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search for your medicine"
                        className="w-full pl-10 pr-4 py-3 border border-muted-foreground rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white w-full py-3 rounded-full hover:bg-red-700 transition-colors font-medium text-center block"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="bg-gray-900 text-white w-full py-3 rounded-full hover:bg-gray-600 transition-colors font-medium text-center block"
                        onClick={closeMenu}
                      >
                        Login / Sign Up
                      </Link>
                    )}
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