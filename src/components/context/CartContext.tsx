import { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from "../../interfaces";

interface CartItem extends IProduct {
    quantity: number;
}

interface IProps {
    cartItems: CartItem[];
    addCartItem: (item: CartItem) => void;
    removeCartItem: (item: CartItem) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartContext = createContext<IProps | any>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addCartItem = (item: CartItem) => {
        const existingCartItem = cartItems.find((i) => i.id === item.id);
        if (existingCartItem) {
            setCartItems((prevItems) => prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)));
        } else {
            setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    const removeCartItem = (item: CartItem) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id))
    };

    return <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem, setCartItems }}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
