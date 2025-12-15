import React, { useState, useEffect } from "react";
import { favContext as FavContext } from "./favContext.js";

const FavProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favItems, setFavItems] = useState({});
  const [cartItems, setCartItems] = useState({});

  // Function to obtain a unique key for each user
  const getUserKey = (userId) => `user_${userId}`;

  // loading data when the user changes
  useEffect(() => {
    if (user) {
      const userKey = getUserKey(user.id);
      
      //load favorites
      const savedFavs = localStorage.getItem(`${userKey}_favItems`);
      if (savedFavs) {
        setFavItems(JSON.parse(savedFavs));
      } else {
        setFavItems({});
      }
      
      //load basket
      const savedCart = localStorage.getItem(`${userKey}_cartItems`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems({});
      }
    } else {
      // If there is no user, clear the data.
      setFavItems({});
      setCartItems({});
    }
  }, [user]);

  // Save data when it changes
  useEffect(() => {
    if (user && Object.keys(favItems).length > 0) {
      const userKey = getUserKey(user.id);
      localStorage.setItem(`${userKey}_favItems`, JSON.stringify(favItems));
    }
  }, [favItems, user]);

  useEffect(() => {
    if (user && Object.keys(cartItems).length > 0) {
      const userKey = getUserKey(user.id);
      localStorage.setItem(`${userKey}_cartItems`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  // User functions
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      setUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      return { 
        success: false, 
        message: "Email already exists. Please login instead." 
      };
    }
    
    const newUser = {
      id: Date.now(),
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone,
      password: userData.password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return { success: true, message: "Account created successfully" };
  };

  const logout = () => {
    setUser(null);
    setFavItems({});
    setCartItems({});
    localStorage.removeItem('currentUser');
  };

  //Load the current user 
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Favorite functions
  const addToFav = (item) => {
    if (!user) return;
    
    setFavItems(prev => ({
      ...prev,
      [item.id]: item,
    }));
  };

  const removeFromFav = (itemId) => {
    setFavItems(prev => {
      const updatedItems = { ...prev };
      delete updatedItems[itemId];
      return updatedItems;
    });
  };

  const clearAllFavs = () => {
    setFavItems({});
    if (user) {
      const userKey = getUserKey(user.id);
      localStorage.removeItem(`${userKey}_favItems`);
    }
  };

  const isFavored = (itemId) => {
    return !!favItems[itemId];
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

  const clearCart = () => {
    setCartItems({});
    if (user) {
      const userKey = getUserKey(user.id);
      localStorage.removeItem(`${userKey}_cartItems`);
    }
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
    signup,
    logout,
    
    // favorites
    addToFav,
    removeFromFav,
    clearAllFavs,
    favItems,
    isFavored,
    favCount: Object.keys(favItems).length,
    
    // Basket 
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
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