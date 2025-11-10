import { useContext } from "react";
import { favContext } from "./favContext";

export const useFav = () => {
  const context = useContext(favContext);
  if (!context) {
    throw new Error('useFav must be used within FavProvider');
  }
  return context;
};