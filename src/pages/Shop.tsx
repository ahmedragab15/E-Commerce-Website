import { Helmet } from "react-helmet";
import FilterAside from "../components/FilterAside";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/UI/Pagination";
import { ProductList } from "../data";
import { BigBanner, VerticalBanner } from "../components/UI/Banner";
import Images from "../components/StaticImages";

const Shop = () => {
  /* Render */
  const renderProducts = ProductList.slice(0, 48).map((product) => <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />);
  return (
    <>
      <Helmet>
        <title>Shop | E-commerce Store</title>
      </Helmet>
      <main className="pb-10 mx-4 mt-55 lg:mt-45">
        <BigBanner src={Images.banners.bb3} />
        <div className="container mx-auto flex flex-col sm:flex-row justify-evenly xl:gap-4">
          <div className="flex-1/6">
            <FilterAside className="flex-row sm:flex-col" />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
          </div>
          <div className="content flex flex-wrap flex-3/6 md:flex-4/6 xl:flex-5/6 gap-8 justify-center">{renderProducts}</div>
        </div>
        <Pagination />
      </main>
    </>
  );
};

export default Shop;
