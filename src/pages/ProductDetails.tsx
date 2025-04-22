/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight, CircleCheckBig, Facebook, Instagram, ShoppingCart, Star, Twitter } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data";
import { IProduct } from "../interfaces";
import { CartContext } from "../components/context/CartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined | any>(undefined);

  const { addCartItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addCartItem(product);
    toast.success("Item added to cart");
  };

  useEffect(() => {
    const productData = ProductList.find((product: { id: number }) => product.id === Number(id));
    setProduct(productData);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{product?.title}</title>
        <meta name="description" content="Shop electronics, fashion, and more at unbeatable prices. Fast shipping & secure checkout!" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="online shopping, electronics, fashion, home, e-commerce, buy online, deals, [Your Niche]" />
        <meta name="author" content="Ahmed Store" />
        <meta property="og:title" content="Ahmed Store - Online Store" />
        <meta property="og:description" content="Top deals on gadgets, clothes, and more!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://react-ecommerce15.netlify.app/assets/logo-_i2k98rh.png" />
        <meta property="og:url" content="https://react-ecommerce15.netlify.app/" />
      </Helmet>
      {product ? (
        <main className=" mt-37">
          <section className="hero container mx-auto py-10 px-4 flex gap-4">
            <div className="product-info bg-gray-100 w-10/12 min-h-[660px] py-5 px-4 flex gap-8">
              <div className="images space-y-4 w-1/2">
                <div className="main-img-box">
                  <img src={product?.image} alt={product?.title} className="main-img w-full h-[480px] object-contain" />
                </div>
                <div className="mini-imgs-box flex justify-center gap-8">
                  <img src={product?.image} alt={product?.title} className="mini-imgs w-20 h-20 bg-white" />
                  <img src={product?.image} alt={product?.title} className="mini-imgs w-20 h-20 bg-white" />
                  <img src={product?.image} alt={product?.title} className="mini-imgs w-20 h-20 bg-white" />
                  <img src={product?.image} alt={product?.title} className="mini-imgs w-20 h-20 bg-white" />
                </div>
                <div className="share flex justify-between">
                  <h3 className="text-md uppercase font-medium">share products:</h3>
                  <div className="social-media flex gap-3">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                  </div>
                </div>
              </div>
              <div className="info w-1/2 space-y-4 h-full flex flex-col">
                <h3 className="product-title text-lg font-medium">{product?.title || "Ahmed"}</h3>
                <p className="product-description text-sm text-neutral-600 leading-4">{product?.description}</p>
                <div className="product-rate flex gap-1 py-4">
                  {Array.from({ length: Math.floor(product?.rating.stars) }, (_, index) => (
                    <Star key={index} className="text-orange-300" fill="#FFA621" size={20} />
                  ))}
                  {Array.from({ length: 5 - Math.floor(product?.rating.stars) }, (_, index) => (
                    <Star key={index} className="text-gray-300" fill="#A5A5A5" size={20} />
                  ))}
                </div>
                <div className="price-info pt-8 border-t-1 border-gray-300">
                  <strong className="product-price text-2xl">${product?.price}</strong>
                  <div className="product-discount space-x-4">
                    <span className="before-discount text-gray-600 font-medium line-through">${(+product?.price * (+product?.discountPercentage / 100) + product?.price).toFixed(2)}</span>
                    <span className="discount-percentage text-xs bg-green-100 text-orange-400 font-medium p-0.5">-{product?.discountPercentage}%</span>
                  </div>
                </div>
                <span className="product-category block my-2 text-neutral-600">{product?.category}</span>
                <button className="font-medium w-full flex items-center justify-center text-white border bg-orange-400 hover:bg-orange-500 cursor-pointer py-3 px-8 mt-auto rounded-sm gap-4  text-center" onClick={handleAddToCart}>
                  <ShoppingCart /> Add to cart
                </button>
              </div>
            </div>
            <div className="additionl-info bg-gray-100 w-2/12 min-h-80 py-5 px-4 space-y-8">
              <div className="delivery-option bg-white pt-4 pb-6 px-2 rounded-md">
                <h3 className="text-md border-b-1 border-gray-200 pb-2">Delivery</h3>
                <label className="block py-4" htmlFor="country">
                  Choose your location
                </label>
                <select className="border-1 border-gray-200 w-full rounded-md py-1 px-2 mb-2" name="country" id="country">
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi-Arabia">Saudi Arabia</option>
                  <option value="united-emirates">United Emirates</option>
                </select>
                <select className="border-1 border-gray-200 w-full rounded-md py-1 px-2" name="city" id="city">
                  <option value="Cairo">Cairo</option>
                  <option value="Alexandria">Alexandria</option>
                </select>
              </div>
              <div className="seller-details bg-white pt-4 pb-6 px-2 rounded-md">
                <h3 className="text-md border-b-1 border-gray-200 pb-2">Seller Details</h3>
                <h3 className="seller-name my-2">Seller Name</h3>
                <span className="seller-score block text-gray-600">100% Seller Score</span>
                <span className="seller-followers block my-2 text-gray-600">145 followers</span>
                <h3 className="seller-performance pt-2 pb-4">Seller Performance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CircleCheckBig fill="green" color="white" size={20} /> Order Fulfillment: Excellent
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CircleCheckBig fill="green" color="white" size={20} /> Quality Score: Excellent
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CircleCheckBig fill="green" color="white" size={20} /> Customer Rating: Excellent
                  </li>
                </ul>
              </div>
              <div className="become-seller bg-orange-50 p-1 px-2 rounded-md">
                <h3>you want to Sell?</h3>
                <a className="text-xs text-gray-600 leading-tight flex items-center" href="">
                  Click here to list your products <ChevronRight />
                </a>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ProductDetails;
