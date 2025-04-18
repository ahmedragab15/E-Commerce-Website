import { Helmet } from "react-helmet";
import FilterAside from "../components/FilterAside";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/UI/Pagination";
import { ProductList } from "../data";

const Shop = () => {
  /* Render */
  const renderProducts = ProductList.slice(0, 48).map((product) => <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />);
  return (
    <>
      <Helmet>
        <title>Shop | E-commerce Store</title>
      </Helmet>
      <main className="pb-10 mx-4 mt-37">
        <span className="Banner w-full h-[200px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
        <div className="container mx-auto flex flex-col sm:flex-row justify-evenly xl:gap-4">
          <div className="flex-1/6">
            <FilterAside className="flex-row sm:flex-col" />
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
            <span className="Banner hidden sm:flex h-[600px] my-6 mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl  justify-center items-center">Banner</span>
          </div>
          <div className="content flex flex-wrap flex-3/6 md:flex-4/6 xl:flex-5/6 gap-8 justify-center">{renderProducts}</div>
        </div>
        <Pagination />
      </main>
    </>
  );
};

export default Shop;
