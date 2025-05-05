import { Trash2 } from "lucide-react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useCart } from "../Hooks/useCart";
import { useWhishList } from "../Hooks/useWishList";

const WishList = () => {
  const { whishListItems, removeWhishListItem } = useWhishList();
  const { addCartItem } = useCart();
  const handleRemoveFromWhishList = (id: number) => {
    removeWhishListItem( id );
    toast.success("Item removed from whishlist 🗑");
  };

  const handleAddToCart = (product: { id: number; title: string; image: string; category: string; price: number }) => {
    if (!product) return;

    const cartItem = {
      ...product,
      quantity: 1,
      total: product.price * 1,
    };
    addCartItem(cartItem);
    toast.success("Item added to cart 🛒");
  };

  return (
    <>
      <Helmet>
        <title>WishList | E-commerce Store</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="py-10 mt-37 mb-16">
        <h2 className="text-3xl font-medium text-orange-400 text-center mb-8">My Wishlist</h2>
        <div className="container mx-auto flex md:flex-col gap-8">
          <div className="head hidden md:flex flex-col md:flex-row justify-center items-center gap-16">
            <span className="font-medium">Product name</span>
            <span className="font-medium">Unit Price</span>
            <span className="font-medium">Category</span>
          </div>
          <div className="list flex md:flex-col flex-row justify-center gap-8 md:gap-0 md:space-y-4 space-x-4  flex-wrap">
            {whishListItems.map((item, idx: number) => (
              <div key={idx} className="product flex flex-col md:flex-row justify-evenly items-center gap-2 lg:gap-8 border-y border-gray-200 py-2">
                <button onClick={() => handleRemoveFromWhishList(item.id)}>
                  <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
                </button>
                <img src={item.image} className="bg-gray-100 w-44 h-44 object-fit" alt={item.title} />
                <h3 className="font-medium max-w-50 md:max-w-fit lg:min-w-80 text-center">{item.title}</h3>
                <span className="font-medium">${item.price}</span>
                <span className="font-medium max-w-50 md:max-w-fit lg:min-w-40 text-center">{item.category}</span>
                <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default WishList;
