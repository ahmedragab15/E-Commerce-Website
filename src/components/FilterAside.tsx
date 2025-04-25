import { Star } from "lucide-react";
import { ProductList } from "../data";

type Props = {
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  selectedCategories: string[];
};

const FilterAside = ({ className, onChange, selectedCategories }: Props) => {
  const uniqueCategories = [...new Set(ProductList.map((product) => product.category))];
  const renderInpCategories = uniqueCategories.map((category, idx) => (
    <div key={idx} className="optionspace-x-2 ml-2 my-2">
      <input className="cursor-pointer" type="checkbox" name={category} id={category} value={category} onChange={onChange} checked={selectedCategories.includes(category)} readOnly />
      <label className="text-gray-600 ml-1 cursor-pointer" htmlFor={category}>
        {category}
      </label>
    </div>
  ));
  return (
    <aside className={`bg-gray-100 py-5 px-6 max-w-2/3 mx-auto sm:max-w-full sm h-fit mb-4 rounded-md ${className}`}>
      <div className="options flex flex-row md:flex-col flex-wrap gap-4 items-center md:items-start">
        <h3 className="text-lg font-medium">Category</h3>
        <div className="option-box sm:mb-4 w-full">
          {renderInpCategories}
        </div>
        <div className="option-box sm:mb-4 w-full">
          <div className="mb-2 text-md flex justify-between">
            <span className="font-medium uppercase">price($)</span> <button className="cursor-pointer">Apply</button>
          </div>
          <input type="range" name="price" id="price" className="w-full" />
          <div className="range flex justify-center items-center gap-4 font-medium">
            <span className="from bg-gray-200 p-2">500</span> - <span className="to bg-gray-200 p-2">1000</span>
          </div>
        </div>
        <div className="option-box sm:mb-4 w-full">
          <h4 className="uppercase font-medium">Discount Percentage</h4>
          <div className="option space-x-2 my-2 sm:my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Discount-Percentage" id="above50%" value="above50%" />
            <label htmlFor="above50%">&gt;50%</label>
          </div>
          <div className="option space-x-2 my-2 sm:my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Discount-Percentage" id="40%" value="40%" />
            <label htmlFor="40%">40%</label>
          </div>
          <div className="option space-x-2 my-2 sm:my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Discount-Percentage" id="30%" value="30%" />
            <label htmlFor="30%">30%</label>
          </div>
          <div className="option space-x-2 my-2 sm:my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Discount-Percentage" id="20%" value="20%" />
            <label htmlFor="20%">20%</label>
          </div>
          <div className="option space-x-2 my-2 sm:my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Discount-Percentage" id="10%" value="10%" />
            <label htmlFor="10%">10%</label>
          </div>
        </div>
        <div className="option-box sm:mb-4 w-full">
          <h4 className="uppercase font-medium">Product Rating</h4>
          <div className="option space-x-2 my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Rating" id="4-stars" value="4-stars" />
            <label htmlFor="4-stars" className="flex gap-1">
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
            </label>
          </div>
          <div className="option space-x-2 my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Rating" id="3-stars" value="3-stars" />
            <label htmlFor="3-stars" className="flex gap-1">
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
            </label>
          </div>
          <div className="option space-x-2 my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Rating" id="2-stars" value="2-stars" />
            <label htmlFor="2-stars" className="flex gap-1">
              <Star fill="#000" size={18} />
              <Star fill="#000" size={18} />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
            </label>
          </div>
          <div className="option space-x-2 my-4 flex items-center">
            <input className="w-5 h-5" type="radio" name="Rating" id="1-star" value="1-star" />
            <label htmlFor="1-star" className="flex gap-1">
              <Star fill="#000" size={18} />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
              <Star fill="#A5A5A5" size={18} className="text-gray-300" />
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterAside;
