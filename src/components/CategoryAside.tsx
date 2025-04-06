// interface Iprops {

import { Link } from "react-router-dom";
import { ProductList } from "../data";



const renderCategories = [...new Set(ProductList.map((product) => product.category))].map((category) => (
  <li key={category} className="capitalize font-medium">
    <Link className="hover:text-orange-400" to="shop">{category}</Link>
  </li>
));

const CategoryAside = () => {
  return (
    <aside className="bg-gray-100">
      <ul className=" flex flex-col gap-8 py-6 px-8">
        {renderCategories}
      </ul>
    </aside>
  );
};

export default CategoryAside;