import { Heart, Star } from "lucide-react";
import { CartButton } from "./UI/Button";
import toast from "react-hot-toast";
import { IProduct } from "../interfaces";
import { Link } from "react-router-dom";
import { generateSlug } from "../utils";
import { useCart } from "../Hooks/useCart";
import { useWhishList } from "../Hooks/useWishList";
import { memo, useCallback, useState } from "react";

interface Iprops extends IProduct {
  product: IProduct;
  imageBGColor?: string;
  productCardBGColor?: string;
}

const ProductCard = ({ id, image, title, category, price, discountPercentage, imageBGColor = "bg-white", productCardBGColor = "bg-gray-100", rating, product }: Iprops) => {
  const { addCartItem } = useCart();
  const { addWhishListItem } = useWhishList();
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = useCallback(() => {
    addCartItem({
      ...product,
      quantity: 1,
    });
    toast.success("Item added to cart 🛒");
  }, [addCartItem, product]);

  const handleAddToWhishList = (e: React.MouseEvent<SVGSVGElement>) => {
    const heartIcon = e.target as HTMLElement;
    heartIcon.classList.add("fill-red-500");
    heartIcon.classList.add("text-red-500");
    setTimeout(() => {
      heartIcon.classList.remove("fill-red-500");
      heartIcon.classList.remove("text-red-500");
    }, 800);
    addWhishListItem(product);
    toast.success("Item added to whishlist ❤");
  };

  return (
    <>
      <div className={`product-card w-2xs drop-shadow-lg ${productCardBGColor} p-4 pb-2 rounded-lg`} key={id}>
        <Link to={`/product/${generateSlug(product.title)}`}>
          <div className="img-box">
            {isLoading && <div className="spinner border-4 border-gray-300 border-t-orange-500 rounded-full w-10 h-10 animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/3 " />}
            <img src={image} alt={title} loading="lazy" className={`${imageBGColor} rounded-lg w-full h-58 object-fit cursor-pointer transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`} onLoad={() => setIsLoading(false)}/>
          </div>
        </Link>
        <div className="product-details">
          <div className="flex flex-col lg:flex-row justify-between pt-2 gap-2">
            <Link to={`/product/${generateSlug(product.title)}`}>
              <h2 className="font-medium line-clamp-1" title={title}>
                {title}
              </h2>
            </Link>
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
          <div className="flex justify-between">
            <span className="category text-sm text-gray-500">{category}</span>
            <Heart size={20} className="cursor-pointer hover:scale-110 duration-200" onClick={handleAddToWhishList} />
          </div>
          <div className="flex  flex-col lg:flex-row justify-between gap-1 lg:items-center">
            <div className="price-discount leading-0">
              <span className="price text-lg block font-medium">${price.toFixed(2)}</span>
              <span className="discount text-xs xl:text-sm font-medium text-gray-400 line-through">${(+price * (+discountPercentage / 100) + price).toFixed(2)}</span>
              <span className="discount-percent text-xs xl:text-sm font-medium text-orange-400 ml-2">-{discountPercentage}%</span>
            </div>
            <CartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductCard);
