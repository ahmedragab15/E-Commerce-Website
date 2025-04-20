import { SwiperSlide } from "swiper/react";
import { BigBanner } from "../components/UI/Banner";
import { ProductList } from "../data";
import ProductCard from "../components/ProductCard";
import { SliderLeft, SliderRight } from "../components/swiper/Slider";
import { Helmet } from "react-helmet";
import Images from "../components/StaticImages";

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
          <BigBanner src={Images.banners.bb1} />
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
          <BigBanner src={Images.banners.bb2} />
          <SliderLeft>{renderProducts.slice(60)}</SliderLeft>
          <BigBanner src={Images.banners.bb4} />
          <SliderRight>{renderProducts.slice(20)}</SliderRight>
          <BigBanner src={Images.banners.bb3} />
          <SliderLeft>{renderProducts.slice(10)}</SliderLeft>
          <BigBanner src={Images.banners.bb5} />
          <SliderRight>{renderProducts}</SliderRight>
          <BigBanner src={Images.banners.bb1} />
          <SliderLeft>{renderProducts.slice(70)}</SliderLeft>
          <BigBanner src={Images.banners.bb3} />
          <SliderRight>{renderProducts.slice(30)}</SliderRight>
          <BigBanner src={Images.banners.bb2} />
          <SliderLeft>{renderProducts.slice(50)}</SliderLeft>
          <BigBanner src={Images.banners.bb4} />
          <SliderRight>{renderProducts.slice(16)}</SliderRight>
        </div>
      </main>
    </>
  );
};

export default MarketPlace;
