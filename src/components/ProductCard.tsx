import { Star } from "lucide-react";
import { CartButton } from "./UI/Button";
import toast from "react-hot-toast";
import { IProduct } from "../interfaces";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

interface Iprops extends IProduct {
  product: IProduct;
  imageBGColor?: string;
  productCardBGColor?: string;
}

const ProductCard = ({ id, image, title, category, price, discountPercentage, imageBGColor = "bg-white", productCardBGColor = "bg-gray-100", rating, product }: Iprops) => {
  /* State */

  const { addCartItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addCartItem(product);
    toast.success("Item added to cart");
  };

  return (
    <>
      <div className={`product-card w-2xs drop-shadow-lg ${productCardBGColor} p-4 pb-1 rounded-lg`} key={id}>
        <div className="img-box">
          <img src={image} className={`${imageBGColor} rounded-lg w-full h-58 object-fit cursor-pointer`} alt={title} />
        </div>
        <div className="product-details">
          <div className="flex justify-between pt-2 gap-2">
            <h2 className="font-medium line-clamp-1" title={title}>
              {title}
            </h2>
            <div className="rating flex items-center space-x-0.5">
              {Array.from({ length: Math.floor(rating.stars) }, (_, index) => (
                <Star key={index} className="text-orange-300" fill="#FFA621" size={15} />
              ))}
              {Array.from({ length: 5 - Math.floor(rating.stars) }, (_, index) => (
                <Star key={index} className="text-gray-300" fill="#A5A5A5" size={15} />
              ))}
              <span className="text-xs text-gray-600">({rating.count})</span>
            </div>
          </div>
          <span className="category text-sm text-gray-500">{category}</span>
          <div className="flex justify-between items-center">
            <div className="price-discount leading-0">
              <span className="price text-lg block font-medium">$ {price.toFixed(2)}</span>
              <span className="discount text-sm font-medium text-gray-400 line-through">$ {(+price * (+discountPercentage / 100) + price).toFixed(2)}</span>
              <span className="discount-percent text-sm font-medium text-orange-400 ml-2">-{discountPercentage}%</span>
            </div>
            <CartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
