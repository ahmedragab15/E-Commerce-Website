import { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from "../interfaces";

interface WhishListItems extends IProduct {
  quantity: number;
}

interface IProps {
  whishListItems: WhishListItems[];
  addWhishListItem: (item: WhishListItems) => void;
  removeWhishListItem: (item: WhishListItems) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhishListContext = createContext<IProps | any>(null);

const WhishListProvider = ({ children }: { children: ReactNode }) => {
  const [whishListItems, setWishListItems] = useState<WhishListItems[]>([]);

  useEffect(() => {
    const storedWhishListItems = localStorage.getItem("whishListItems");
    if (storedWhishListItems) {
      setWishListItems(JSON.parse(storedWhishListItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("whishListItems", JSON.stringify(whishListItems));
  }, [whishListItems]);

  const addWhishListItem = (item: WhishListItems) => {
    const existingWhishListItem = whishListItems.find((i) => i.id === item.id);
    if (existingWhishListItem) {
      setWishListItems((prevItems) => prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)));
    } else {
      setWishListItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeWhishListItem = (item: WhishListItems) => {
    setWishListItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return <WhishListContext.Provider value={{ whishListItems: whishListItems, addWhishListItem, removeWhishListItem, setWishListItems }}>{children}</WhishListContext.Provider>;
};

export { WhishListProvider, WhishListContext };
