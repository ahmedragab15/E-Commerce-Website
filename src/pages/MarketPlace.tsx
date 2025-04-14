import { SwiperSlide } from "swiper/react";
import Banner from "../components/Banner";
import { ProductList } from "../data";
import ProductCard from "../components/ProductCard";
import { SliderLeft, SliderRight } from "../components/swiper/Slider";

const MarketPlace = () => {
  //*  Render     */
  const renderProducts = ProductList.map((product) => (
    <SwiperSlide>
      <ProductCard id={product.id} key={product.id} title={product.title} imgURL={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} />
    </SwiperSlide>
  ));

  return (
    <>
      <main className="py-10">
        <div className="container mx-auto">
          <Banner>Visit Shop</Banner>
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
          <Banner>Visit Shop</Banner>
          <SliderLeft>{renderProducts.slice(60)}</SliderLeft>
          <Banner>Visit Shop</Banner>
          <SliderRight>{renderProducts.slice(20)}</SliderRight>
          <Banner>Visit Shop</Banner>
          <SliderLeft>{renderProducts.slice(10)}</SliderLeft>
          <Banner>Visit Shop</Banner>
          <SliderRight>{renderProducts}</SliderRight>
          <Banner>Visit Shop</Banner>
          <SliderLeft>{renderProducts.slice(70)}</SliderLeft>
          <Banner>Visit Shop</Banner>
          <SliderRight>{renderProducts.slice(30)}</SliderRight>
          <Banner>Visit Shop</Banner>
          <SliderLeft>{renderProducts.slice(50)}</SliderLeft>
          <Banner>Visit Shop</Banner>
          <SliderRight>{renderProducts.slice(16)}</SliderRight>
        </div>
      </main>
    </>
  );
};

export default MarketPlace;