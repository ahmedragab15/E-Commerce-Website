import { SwiperSlide } from "swiper/react";
import Banner from "../components/Banner";
import { ProductList } from "../data";
import ProductCard from "../components/ProductCard";
import { SliderLeft, SliderRight } from "../components/swiper/Slider";
import { Helmet } from "react-helmet";

const MarketPlace = () => {
  //*  Render     */
  const renderProducts = ProductList.map((product) => (
    <SwiperSlide>
      <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />
    </SwiperSlide>
  ));
  return (
    <>
      <Helmet>
        <title>Market Store | E-commerce Store</title>
      </Helmet>
      <main className="py-10 mt-37">
        <div className="container mx-auto">
          <Banner />
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
          <Banner />
          <SliderLeft>{renderProducts.slice(60)}</SliderLeft>
          <Banner />
          <SliderRight>{renderProducts.slice(20)}</SliderRight>
          <Banner />
          <SliderLeft>{renderProducts.slice(10)}</SliderLeft>
          <Banner />
          <SliderRight>{renderProducts}</SliderRight>
          <Banner />
          <SliderLeft>{renderProducts.slice(70)}</SliderLeft>
          <Banner />
          <SliderRight>{renderProducts.slice(30)}</SliderRight>
          <Banner />
          <SliderLeft>{renderProducts.slice(50)}</SliderLeft>
          <Banner />
          <SliderRight>{renderProducts.slice(16)}</SliderRight>
        </div>
      </main>
    </>
  );
};

export default MarketPlace;
