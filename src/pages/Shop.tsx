import { Helmet } from "react-helmet";
import FilterAside from "../components/FilterAside";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/UI/Pagination";
import { ProductList } from "../data";
import { BigBanner, VerticalBanner } from "../components/UI/Banner";
import Images from "../components/StaticImages";
import { useEffect, useState } from "react";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductList.slice(0, 48));
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilter = (e: React.MouseEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    const category = target.value;
    const isChecked = target.checked;
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    }
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(ProductList.slice(40, 72));
    } else {
      const filtered = ProductList.filter((product) => selectedCategories.includes(product.category));
      setFilteredProducts(filtered);
    }
  }, [selectedCategories]);


  const renderProducts = filteredProducts.map((product) => <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />);

  return (
    <>
      <Helmet>
        <title>Shop | E-commerce Store</title>
      </Helmet>
      <main className="pb-10 mx-4 mt-55 lg:mt-45">
        <BigBanner src={Images.banners.bb3} />
        <div className="container mx-auto flex flex-col sm:flex-row justify-evenly items-start xl:gap-4">
          <div className="flex-1/6">
            <FilterAside className="flex-row sm:flex-col" onClick={handleFilter} />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
            <VerticalBanner src={Images.banners.bbv} />
          </div>
          <div className="content flex flex-wrap flex-3/6 md:flex-4/6 xl:flex-5/6 gap-8 justify-center items-start">{renderProducts}</div>
        </div>
        <Pagination />
      </main>
    </>
  );
};

export default Shop;
