import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Images from "../components/StaticImages";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cartItems, removeCartItem, setCartItems } = useContext(CartContext);

  const handleRemoveFromCart = (id: number) => {
    removeCartItem({ id });
    toast.success("Item removed from cart");
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

  const total = cartItems.map((item: { price: number; quantity: number }) => item.price * item.quantity).reduce((a: number, b: number) => a + b, 0);

  const deliveryFee = 40;

  return (
    <>
      <Helmet>
        <title>Checkout | E-commerce Store</title>
      </Helmet>
      <main className="mt-37">
        <div className="container mx-auto my-12 py-8 px-10 xl:px-18 bg-neutral-100">
          <Link to="/shop" className="inline-block underline text-orange-400 font-medium dec hover:text-black py-2">
            &lt; Continue Shopping
          </Link>
          <div className="cart-header pt-8 pb-4 border-t border-gray-200">
            <h3 className="text-xl font-medium">Shopping cart</h3>
            <span className="text-gray-600">Short list of items picked</span>
          </div>
          <div className="wrapper flex flex-col lg:flex-row justify-between gap-4">
            <div className="cart-items space-y-8 lg:w-3/5 ">
              {cartItems.map((item: { id: number; title: string; image: string; description: string; category: string; price: number; quantity: number; total: number }, idx: number) => (
                <div key={idx} className="item w-fit mx-auto sm:w-auto bg-white flex flex-col sm:flex-row justify-evenly items-center gap-4 py-4 px-6 rounded-xl shadow-lg">
                  <img src={item.image} className="bg-gray-100 w-20 lg:w-30 h-30 object-fit" alt={item.title} />
                  <div>
                    <h3 title={item.title} className="font-medium line-clamp-1">
                      {item.title}
                    </h3>
                    <h3 title={item.description} className="text-sm text-gray-600 max-w-50 line-clamp-2">
                      {item.description}
                    </h3>
                  </div>
                  <div className="quantity flex font-medium space-x-2 lg:space-x-3">
                    <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span className=" lg:text-lg">{item.quantity}</span>
                    <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <span className="price font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
                  </button>
                </div>
              ))}
            </div>
            <div className="card-details lg:w-2/5 bg-white rounded-xl shadow-lg py-8 px-6 h-fit">
              <h3 className="text-lg font-medium">Card Details</h3>
              <form className="space-y-2 h-full">
                <div className="card-types border-t border-gray-200 pt-2 my-6">
                  <h5 className="font-medium text-sm">Card Type</h5>
                  <div className="types flex gap-4">
                    <input type="radio" name="card-types" id="visa" value="visa" className="absolute  -left-full" />
                    <label htmlFor="visa">
                      <img className="cursor-pointer" src={Images.checkoutImgs.h1} alt="visa logo" />
                    </label>

                    <input type="radio" name="card-types" id="master-card" value="master-card" className="absolute -left-full" />
                    <label htmlFor="master-card">
                      <img className="cursor-pointer" src={Images.checkoutImgs.h2} alt="master card logo" />
                    </label>

                    <input type="radio" name="card-types" id="paypal" value="paypal" className="absolute -left-full" />
                    <label htmlFor="paypal">
                      <img className="cursor-pointer" src={Images.checkoutImgs.h3} alt="paypal logo" />
                    </label>

                    <input type="radio" name="card-types" id="american-express" value="american-express" className="absolute -left-full" />
                    <label htmlFor="american-express">
                      <img className="cursor-pointer" src={Images.checkoutImgs.h4} alt="american express logo" />
                    </label>
                  </div>
                </div>
                <div className="input">
                  <label className="block" htmlFor="username">
                    Account Name
                  </label>
                  <input className="bg-zinc-100 border border-transparent my-2 p-4 text-sm rounded-md w-full shadow-xs focus:border-orange-400 outline-0" type="text" name="username" id="username" placeholder="Your Name" />
                </div>

                <div className="input">
                  <label className="block" htmlFor="number">
                    Account Number
                  </label>
                  <input className="bg-zinc-100 border border-transparent my-2 p-4 text-sm rounded-md w-full shadow-xs focus:border-orange-400 outline-0" type="text" name="number" id="number" placeholder="Your Number" />
                </div>

                <div className="input flex flex-col md:flex-row justify-between gap-1 md:gap-6">
                  <div className="w-full">
                    <label className="block" htmlFor="expiring-date">
                      Expiring date
                    </label>
                    <input className="bg-zinc-100 border w-full border-transparent my-2 p-4 text-sm rounded-md shadow-xs focus:border-orange-400 outline-0" type="text" name="expiring-date" id="expiring-date" placeholder="01 / 27" />
                  </div>
                  <div className="w-full">
                    <label className="block" htmlFor="security-code">
                      Security code
                    </label>
                    <input className="bg-zinc-100 border w-full border-transparent my-2 p-4 text-sm rounded-md shadow-xs focus:border-orange-400 outline-0" type="text" name="security-code" id="security-code" placeholder="CVC" />
                  </div>
                </div>
                <div className="total-price space-y-2 py-8 border-t border-gray-100 ">
                  <div className="balance flex flex-col pl-2 sm:pl-0 sm:flex-row justify-between gap-2">
                    <h5 className="font-medium">Balance</h5>
                    <h5 className="font-medium text-sm">
                      <span className="text-base">${total.toLocaleString()}</span>
                    </h5>
                  </div>
                  <div className="delivery-fee flex flex-col pl-2 sm:pl-0 sm:flex-row justify-between gap-2">
                    <h5 className="font-medium">Delivery fee</h5>
                    <h5 className="font-medium text-xs pr-2">
                      <span>${total ? deliveryFee : 0}</span>
                    </h5>
                  </div>
                  <div className="total-amount flex flex-col pl-2 sm:pl-0 sm:flex-row justify-between gap-2">
                    <h5 className="text-lg font-bold">Total bill amount</h5>
                    <h5 className="text-lg font-bold">
                      <span>${total ? (total + deliveryFee).toLocaleString() : 0}</span>
                    </h5>
                  </div>
                  <input className="font-medium w-full text-lg text-white bg-orange-400 border border-orange-400 hover:text-orange-400 hover:bg-white cursor-pointer py-3 my-6 rounded-sm" type="submit" value="Confirm Payment" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
