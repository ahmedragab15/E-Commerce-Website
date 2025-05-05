import { useContext } from "react";
import { WhishListContext } from "../context/WhishlistContext";

export const useWhishList = () => {
  const context = useContext(WhishListContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
