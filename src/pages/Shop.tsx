import { Helmet } from "react-helmet";
import FilterAside from "../components/FilterAside";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/UI/Pagination";
import { ProductList } from "../data";
import { BigBanner, VerticalBanner } from "../components/UI/Banner";
import Images from "../components/StaticImages";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const PRODUCTS_PER_PAGE = 16;

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductList);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultCategory = searchParams.get("category");

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const category = target.value;
    const isChecked = target.checked;

    setSelectedCategories((prev) => (isChecked ? [...prev, category] : prev.filter((cat) => cat !== category)));

    setCurrentPage(1);
  }, []);

  useEffect(() => {
    if (defaultCategory) {
      setSelectedCategories([defaultCategory]);
    }
  }, [defaultCategory]);

  useEffect(() => {
    setFilteredProducts(selectedCategories.length === 0 ? ProductList : ProductList.filter((product) => selectedCategories.includes(product.category)));
  }, [selectedCategories]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const renderProducts = useMemo(() => {
    return paginatedProducts.map((product) => (
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />{" "}
      </Suspense>
    ));
  }, [paginatedProducts]);

  return (
    <>
      <Helmet>
        <title>Shop | E-commerce Store</title>
        <meta name="description" content="Shop electronics, fashion, and more at unbeatable prices. Fast shipping & secure checkout!" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="online shopping, electronics, fashion, home, e-commerce, buy online, deals" />
        <meta name="author" content="Ahmed Store" />
        <meta property="og:title" content="Ahmed Store - Online Store" />
        <meta property="og:description" content="Top deals on gadgets, clothes, and more!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://react-ecommerce15.netlify.app/assets/logo-_i2k98rh.png" />
        <meta property="og:url" content="https://react-ecommerce15.netlify.app/" />
      </Helmet>
      <main className="pb-10 mx-4 mt-55 lg:mt-45">
        <BigBanner src={Images.banners.bb3} />
        <div className="container mx-auto flex flex-col sm:flex-row justify-evenly items-start xl:gap-4">
          <div className="flex-1/6">
            <FilterAside className="flex-row sm:flex-col" onChange={handleFilter} selectedCategories={selectedCategories} />
            <VerticalBanner src={Images.banners.bbv} />
          </div>
          <div className="content flex flex-wrap flex-3/6 md:flex-4/6 xl:flex-5/6 gap-8 justify-center items-start">{renderProducts}</div>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
      </main>
    </>
  );
};

export default Shop;
