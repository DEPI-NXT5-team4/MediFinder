import { useState } from "react";
import { favContext } from "./favContext";

const FavProvider = ({ children }) => {
  const [favItems, setFavItems] = useState({});
  const addToFav = (item) => {
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
    console.log(favItem);
    if (favItem) return true;
    return false;
  };
  const values = {
    addToFav,
    removeFromFav,
    favItems,
    isFavored,
  };
  return <favContext.Provider value={values}>{children}</favContext.Provider>;
}

export default FavProvider;