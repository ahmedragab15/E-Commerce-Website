import { Heart, Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { WhishListContext } from "../components/context/WhishlistContext";

const Cart = () => {
  const { cartItems, removeCartItem, setCartItems } = useContext(CartContext);
    const { addWhishListItem } = useContext(WhishListContext);

  const handleRemoveFromCart = (id: number) => {
    removeCartItem({ id });
    toast.success("Item removed from cart 🗑");
  };

    const handleAddToWhishList = (product: { id: number; title: string; image: string; category: string; price: number; quantity: number; total: number }) => {
      addWhishListItem(product);
      toast.success("Item added to whishlist ❤");
    };

  const handleQuantityChange = (id: number, quantity: number) => {
    console.log("handleQuantityChange", id, quantity);
    const existingCartItemIndex = cartItems.findIndex((item: { id: number }) => item.id === id);
    if (existingCartItemIndex !== -1) {
      if (quantity <= 0) {
        removeCartItem({ id });
      } else {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex].quantity = quantity;
        setCartItems(updatedCartItems);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Cart| E-commerce Store</title>
      </Helmet>
      <main className="container mx-auto py-10 space-y-10 mt-37">
        <section className="cart-items"></section>
        <div className="space-y-2 px-4">
          <h3 className="text-2xl font-medium ">
            <span className="cart-count">{cartItems.length}</span> Items in your cart
          </h3>

          <p className="max-w-xl">all the items aded into the basket or cart is listed out here! you can add more items or remove the one youre not conortable with</p>
        </div>
        <section className="cart-items">
          <div className="head hidden sm:flex flex-row justify-between items-center gap-2 py-1 px-20 border-b border-gray-200">
            <h3 className="font-medium">ITEMS</h3>
            <div className="flex gap-20">
              <h3 className="font-medium">QUANTITY</h3>
              <h3 className="font-medium">UNIT (PRICE)</h3>
              <h3 className="font-medium">Total</h3>
            </div>
          </div>
          <div className="list py-6 px-14 sm:px-0 space-y-6">
            {cartItems.map((item: { id: number; title: string; image: string; category: string; price: number; quantity: number; total: number }, idx: number) => (
              <div key={idx} className="product bg-neutral-100 flex flex-col sm:flex-row justify-evenly items-center gap-1 lg:gap-8 border-y border-gray-200 py-2 rounded-xl">
                <img src={item.image} className="bg-gray-100 w-44 max-w-11/12 h-44 object-center rounded-xl" alt={item.title} />
                <div className="details flex flex-col sm:gap-20">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="space-y-2">
                    <span className="block font-medium">{item.category}</span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        className="text-orange-400 font-medium flex items-center gap-1 cursor-pointer hover:text-orange-500 duration-200"
                        onClick={(e) => {
                              const heartIcon = (e.target as HTMLElement).children[0];
                              heartIcon.classList.add("fill-red-500");
                              heartIcon.classList.add("text-red-500");
                              setTimeout(() => {
                                heartIcon.classList.remove("fill-red-500");
                                heartIcon.classList.remove("text-red-500");
                              }, 800);
                          handleAddToWhishList(item);
                        }}
                      >
                        <Heart />
                        Add to wishlist
                      </button>
                      <button
                        className="text-red-500 font-medium hover:text-red-600 cursor-pointer flex items-center gap-1"
                        onClick={() => {
                          handleRemoveFromCart(item.id);
                        }}
                      >
                        <Trash2 /> Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quantity font-medium space-x-2 lg:space-x-6">
                  <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-xl py-0.5 px-2 lg:px-3 cursor-pointer" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                    -
                  </button>

                  <span className=" lg:text-xl">{item.quantity}</span>

                  <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-xl py-0.5 px-2 lg:px-3 cursor-pointer" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <span className="price lg:text-xl font-medium">${item.price?.toFixed(2)}</span>
                <div className="total-price lg:text-xl font-medium">${(item.price * item.quantity)?.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="confirmation text-right border-t border-gray-200 py-6 px-4 space-y-3 mt-16">
            <h3 className="text-2xl font-medium">
              Total Amount:
              <span className="ml-6">
                $
                {cartItems
                  .map((item: { price: number; quantity: number }) => item.price * item.quantity)
                  .reduce((a: number, b: number) => a + b, 0)
                  .toLocaleString()}
              </span>
            </h3>

            <span className="block text-sm mb-8">Delivery fee is not included</span>
            <div className="btns flex flex-col sm:flex-row items-center gap-4">
              <Link className="inline-block ml-auto" to="/shop">
                <button className="font-medium text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer py-2 px-8 rounded-sm">Continue Shopping</button>
              </Link>
              <Link to="/checkout">
                <button className="font-medium ml-auto sm:ml-0 text-white border bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
