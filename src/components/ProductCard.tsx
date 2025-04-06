import { Star } from "lucide-react";
import { CartButton } from "./UI/Button";

interface Iprops {
  imgURL: string;
  title: string;
  category: string;
  price:  number;
  discountPercentage:  number;
  imageBGColor?: string;
  productCardBGColor?: string;

}

const ProductCard = ({ imgURL, title, category, price, discountPercentage, imageBGColor = "bg-white", productCardBGColor = "bg-gray-100" }: Iprops) => {
  return (
    <>
      <div className={`product-card w-2xs drop-shadow-lg ${productCardBGColor} p-4 pb-1 rounded-lg`} key={1}>
        <div className="img-box">
          <img src={imgURL} className={`${imageBGColor} rounded-lg w-full h-58 object-fit cursor-pointer`} alt={title} />
        </div>
        <div className="product-details">
          <div className="flex justify-between pt-2 gap-2">
            <h2 className="font-medium line-clamp-1" title={title}>
              {title}
            </h2>
            <div className="rating flex items-center space-x-0.5">
              <Star className="text-orange-300" fill="#FFA621" size={15} />
              <Star className="text-orange-300" fill="#FFA621" size={15} />
              <Star className="text-orange-300" fill="#FFA621" size={15} />
              <Star className="text-orange-300" fill="#FFA621" size={15} />
              <Star className="text-gray-300" fill="#A5A5A5" size={15} />
              <span className="text-xs text-gray-600">(75)</span>
            </div>
          </div>
          <span className="category text-sm text-gray-500">{category}</span>
          <div className="flex justify-between items-center">
            <div className="price-discount leading-0">
              <span className="price text-lg block font-medium">$ {price}</span>
              <span className="discount text-sm font-medium text-gray-400 line-through">$ {(+price * (+discountPercentage / 100) + price).toFixed(1)}</span>
              <span className="discount-percent text-sm font-medium text-orange-400 ml-2">-{discountPercentage}%</span>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;