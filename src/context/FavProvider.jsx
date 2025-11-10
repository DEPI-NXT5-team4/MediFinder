import React, { useState } from "react";
import { favContext as FavContext } from "./favContext.js";

const FavProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favItems, setFavItems] = useState({});
  const [cartItems, setCartItems] = useState({});

// User functions
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setFavItems({});
    setCartItems({});
    localStorage.removeItem('user');
  };

  // Favorite functions
  const addToFav = (item) => {
    if (!user) return;
    
    setFavItems({
      ...favItems,
      [item.id]: item,
    });
  };

  const removeFromFav = (itemId) => {
    setFavItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[itemId];
      return updatedItems;
    });
  };

  const isFavored = (itemId) => {
    const favItem = favItems[itemId];
    if (favItem) return true;
    return false;
  };

// Basket functions
  const addToCart = (item) => {
    if (!user) return;
    
    setCartItems(prev => ({
      ...prev,
      [item.id]: {
        ...item,
        quantity: (prev[item.id]?.quantity || 0) + 1
      },
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity
      }
    }));
  };

  //Values to be shared
  const values = {
    // user
    user,
    login,
    logout,
    
    // favorites
    addToFav,
    removeFromFav,
    favItems,
    isFavored,
    favCount: Object.keys(favItems).length,
    
    // Basket
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    cartCount: Object.values(cartItems).reduce((total, item) => total + item.quantity, 0)
  };

  return (
    <FavContext.Provider value={values}>
    {children}
  </FavContext.Provider>
  );
};

export default FavProvider;