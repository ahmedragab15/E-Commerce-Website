import { createContext, ReactNode, useEffect, useState } from "react";

interface WhishListItems {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface IProps {
  whishListItems: WhishListItems[];
  addWhishListItem: (item: WhishListItems) => void;
  removeWhishListItem: (id: number) => void;
  setWishListItems: React.Dispatch<React.SetStateAction<WhishListItems[]>>;
}

const WhishListContext = createContext<IProps | undefined>(undefined);

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
   if (!existingWhishListItem) {
     setWishListItems((prevItems) => [...prevItems, item]);
   }
  };

  const removeWhishListItem = (id: number) => {
    setWishListItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  return <WhishListContext.Provider value={{ whishListItems: whishListItems, addWhishListItem, removeWhishListItem, setWishListItems }}>{children}</WhishListContext.Provider>;
};

export { WhishListProvider, WhishListContext };
