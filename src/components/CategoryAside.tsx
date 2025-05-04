import { Link } from "react-router-dom";
import { ProductList } from "../data";

const renderCategories = [...new Set(ProductList.map((product) => product.category))].map((category) => (
  <li key={category} className="font-medium hover:-translate-y-1 duration-300">
    <Link className="hover:text-orange-400 " to="shop">
      {category}
    </Link>
  </li>
));

const CategoryAside = () => {
  return (
    <aside className="bg-gray-100 w-full">
      <ul className=" flex lg:flex-col gap-8 py-6 px-8 flex-wrap">{renderCategories}</ul>
    </aside>
  );
};

export default CategoryAside;
