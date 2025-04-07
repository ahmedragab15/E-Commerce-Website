import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Images from "../components/Images";

const Checkout = () => {
  return (
    <main>
      <div className="container mx-auto my-12 py-8 px-18 bg-neutral-100 h-[1000px]">
        <Link to="/" className="inline-block underline text-orange-400 font-medium dec hover:text-black py-2">
          &lt; Continue Shopping
        </Link>
        <div className="cart-header pt-8 pb-4 border-t border-gray-200">
          <h3 className="text-xl font-medium">Shopping cart</h3>
          <span className="text-gray-600">Short list of items picked</span>
        </div>
        <div className="wrapper flex justify-between gap-4">
          <div className="cart-items space-y-8 w-3/5">
            <div className="item bg-white flex flex-col md:flex-row justify-evenly items-center gap-4 py-4 px-6 rounded-xl shadow-lg">
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-30 h-auto object-fit" alt="hero image" />
              <div>
                <h3 className="font-medium">Product Name</h3>
                <h3 className="text-sm text-gray-600">Product description</h3>
              </div>
              <div className="quantity font-medium space-x-1 lg:space-x-3">
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">-</button>
                <span className=" lg:text-lg">2</span>
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">+</button>
              </div>
              <span className="price font-medium">$ 700.00</span>
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
            </div>
            <div className="item bg-white flex flex-col md:flex-row justify-evenly items-center gap-4 py-4 px-6 rounded-xl shadow-lg">
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-30 h-auto object-fit" alt="hero image" />
              <div>
                <h3 className="font-medium">Product Name</h3>
                <h3 className="text-sm text-gray-600">Product description</h3>
              </div>
              <div className="quantity items-center font-medium space-x-1 lg:space-x-3">
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">-</button>
                <span className=" lg:text-xl">2</span>
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">+</button>
              </div>
              <span className="price">$ 700.00</span>
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
            </div>
            <div className="item bg-white flex flex-col md:flex-row justify-evenly items-center gap-4 py-4 px-6 rounded-xl shadow-lg">
              <img src={Images.homeImgs.h2} className="bg-gray-100 w-30 h-auto object-fit" alt="hero image" />
              <div>
                <h3 className="font-medium">Product Name</h3>
                <h3 className="text-sm text-gray-600">Product description</h3>
              </div>
              <div className="quantity font-medium space-x-1 lg:space-x-3">
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">-</button>
                <span className=" lg:text-xl">2</span>
                <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-lg px-1 lg:px-2 cursor-pointer">+</button>
              </div>
              <span className="price">$ 700.00</span>
              <Trash2 className="text-red-400 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="card-details w-2/5 bg-white rounded-xl shadow-lg py-8 px-6">
            <h3 className="text-lg font-medium">Card Details</h3>
            <form className="space-y-2">
              <div className="card-types border-t border-gray-200 pt-2 my-6">
                <h5 className="font-medium text-sm">Card Type</h5>
                <div className="types flex gap-4">
                  <input type="radio" name="card-types" id="visa" value="visa" className="absolute  -left-full" />
                  <label htmlFor="visa">
                    <img src={Images.checkoutImgs.h1} alt="visa logo" />
                  </label>

                  <input type="radio" name="card-types" id="master-card" value="master-card" className="absolute -left-full" />
                  <label htmlFor="master-card">
                    <img src={Images.checkoutImgs.h2} alt="master card logo" />
                  </label>

                  <input type="radio" name="card-types" id="paypal" value="paypal" className="absolute -left-full" />
                  <label htmlFor="paypal">
                    <img src={Images.checkoutImgs.h3} alt="paypal logo" />
                  </label>

                  <input type="radio" name="card-types" id="american-express" value="american-express" className="absolute -left-full" />
                  <label htmlFor="american-express">
                    <img src={Images.checkoutImgs.h4} alt="american express logo" />
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

              <div className="input flex flex-col md:flex-row justify-between gap-6">
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
              <div className="total-price space-y-2 py-8 border-t border-gray-100">
                <div className="balance flex justify-between gap-2">
                  <h5 className="font-medium">Balance</h5>
                  <h5 className="text-sm">
                    $ <span>700.00</span>
                  </h5>
                </div>
                <div className="delivery-fee flex justify-between gap-2">
                  <h5 className="font-medium">Delivery fee</h5>
                  <h5 className="text-xs pr-2">
                    $ <span>70.00</span>
                  </h5>
                </div>
                <div className="total-amount flex justify-between gap-2">
                  <h5 className="text-lg font-bold">Total bill amount</h5>
                  <h5 className="text-lg font-bold">
                    $ <span>770.00</span>
                  </h5>
                </div>
              </div>
              <input className="font-medium w-full text-lg text-white bg-orange-400 border border-orange-400 hover:text-orange-400 hover:bg-white cursor-pointer py-3 rounded-sm" type="submit" value="Confirm Payment" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
