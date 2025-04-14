// // CartContext.tsx
// import { createContext, useState, useEffect } from "react";
// import { CartItem } from "../types/CartItem";

// interface CartContextProps {
//   cartItems: CartItem[];
//   dispatch: (action: { type: string; payload: any }) => void;
// }

// const CartContext = createContext<CartContextProps | null>(null);

// interface CartProviderProps {
//   children: React.ReactNode;
// }

// const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const dispatch = (action: { type: string; payload: any }) => {
//     switch (action.type) {
//       case "INIT_CART":
//         setCartItems(action.payload);
//         break;
//       case "ADD_TO_CART":
//         setCartItems([...cartItems, action.payload]);
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     const storedCartItems = localStorage.getItem("cartItems");
//     if (storedCartItems) {
//       dispatch({ type: "INIT_CART", payload: JSON.parse(storedCartItems) });
//     }
//   }, []);

//   return <CartContext.Provider value={{ cartItems, dispatch }}>{children}</CartContext.Provider>;
// };

// export { CartProvider, CartContext };
