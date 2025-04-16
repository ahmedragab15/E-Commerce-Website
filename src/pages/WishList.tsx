// interface Iprops {

import { Trash2 } from "lucide-react";
import Images from "../components/Images";

// }

const WishList = () => {
  return (
    <>
      <main className="py-10 mt-37">
        <h2 className="text-3xl font-medium text-orange-400 text-center mb-8">My Wishlist</h2>
        <div className="container mx-auto flex md:flex-col gap-8">
          <div className="head hidden md:flex flex-col md:flex-row justify-center items-center gap-16">
            <span className="font-medium">Product name</span>
            <span className="font-medium">Unit Price</span>
            <span className="font-medium">Category</span>
          </div>
          <div className="list my-8 flex md:flex-col justify-center gap-8 md:gap-0 flex-wrap">
            <div className="product flex flex-col md:flex-row justify-evenly items-center gap-8 border-y border-gray-200 py-2">
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-44 h-auto object-fit" alt="hero image" />
              <h3 className="font-medium">Product Name</h3>
              <span className="">$ 700.00</span>
              <span className="">Product Category</span>
              <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Add to Cart</button>
            </div>
            <div className="product flex flex-col md:flex-row justify-evenly items-center gap-8 border-y border-gray-200 py-1">
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-44 h-auto object-fit" alt="hero image" />
              <h3 className="font-medium">Product Name</h3>
              <span className="">$ 700.00</span>
              <span className="">Product Category</span>
              <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Add to Cart</button>
            </div>
            <div className="product flex flex-col md:flex-row justify-evenly items-center gap-8 border-y border-gray-200 py-1">
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-44 h-auto object-fit" alt="hero image" />
              <h3 className="font-medium">Product Name</h3>
              <span className="">$ 700.00</span>
              <span className="">Product Category</span>
              <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Add to Cart</button>
            </div>
            <div className="product flex flex-col md:flex-row justify-evenly items-center gap-8 border-y border-gray-200 py-1">
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-44 h-auto object-fit" alt="hero image" />
              <h3 className="font-medium">Product Name</h3>
              <span className="">$ 700.00</span>
              <span className="">Product Category</span>
              <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Add to Cart</button>
            </div>
            <div className="product flex flex-col md:flex-row justify-evenly items-center gap-8 border-y border-gray-200 py-1">
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-44 h-auto object-fit" alt="hero image" />
              <h3 className="font-medium">Product Name</h3>
              <span className="">$ 700.00</span>
              <span className="">Product Category</span>
              <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WishList;
