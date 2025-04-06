import { SwiperSlide } from "swiper/react";
import CategoryAside from "../components/CategoryAside";
import Footer from "../components/Footer";
import Images from "../components/Images";
import Pagination from "../components/UI/Pagination";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";
import  {SliderRight, SliderLeft } from "../components/swiper/Slider";
import { ProductList } from "../data";
import Header from "./../components/Header";

//*  Render     */
const renderProducts = ProductList.map((product) => (
  <SwiperSlide>
    <ProductCard key={product.id} title={product.title} imgURL={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} />
  </SwiperSlide>
));

const renderProducts2 = ProductList.map((product) => (
  <SwiperSlide>
    <ProductCard key={product.id} title={product.title} imgURL={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} imageBGColor="bg-gray-100" productCardBGColor="bg-white" />
  </SwiperSlide>
));

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero grid lg:grid-cols-5 p-8 gap-4">
          <CategoryAside />
          <div className="center lg:col-span-3 bg-gray-100 pt-10 pl-6">
            <div className=" justify-self-end pr-10">
              <h2 className="text-3xl font-medium">Buy Quality & Save Money </h2>
              <p className="text-center">at the same time to enjoy your shopping</p>
            </div>
            <div className="main img-box">
              <img src={Images.homeImgs.h1} className="max-w-full h-auto object-fit" alt="hero image" />
            </div>
            <div className="mini img-box flex justify-evenly mt-4 gap-4">
              <img src={Images.homeImgs.h2} className="bg-gray-500 h-[85px] w-[190px] object-fit" alt="hero image" />
              <img src={Images.homeImgs.h2} className="bg-gray-500 h-[85px] w-[190px] object-fit" alt="hero image" />
              <img src={Images.homeImgs.h2} className="bg-gray-500 h-[85px] w-[190px] object-fit" alt="hero image" />
            </div>
          </div>
          <div className="right">
            <div className="img-box flex lg:flex-col gap-4 flex-wrap">
              <img src={Images.homeImgs.h2} className="bg-gray-100 max-w-58 h-58 object-fit" alt="hero image" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 max-w-58 h-58 object-fit" alt="hero image" />
              <img src={Images.homeImgs.h2} className="bg-gray-100 max-w-58 h-58 object-fit" alt="hero image" />
            </div>
          </div>
        </section>
        <ProductsContainer containerTitle="Top Selling">
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer containerTitle="Daily Deal" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(26)}</SliderLeft>
        </ProductsContainer>
        <img src={Images.homeImgs.h2} className="Banner w-11/12 mx-auto object-cover mb-6 h-[200px]" alt="banner" />
        <ProductsContainer containerTitle="Top Shops">
          <SliderRight>{renderProducts.slice(50)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer classname="flex-wrap" containerTitle="General Products" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(4)}</SliderLeft>
          <SliderRight>{renderProducts2.slice(35)}</SliderRight>
          <SliderLeft>{renderProducts2.slice(55)}</SliderLeft>
        </ProductsContainer>
        <img src={Images.homeImgs.h2} className="Banner w-11/12 mx-auto object-cover mb-6 h-[200px]" alt="banner" />
        <ProductsContainer containerTitle="Last Seen" classname="flex-wrap">
          <SliderRight>{renderProducts.slice(4)}</SliderRight>
          <SliderLeft>{renderProducts.slice(55)}</SliderLeft>
        </ProductsContainer>
        <img src={Images.homeImgs.h2} className="Banner w-11/12 mx-auto object-cover mb-6 h-[200px]" alt="banner" />
        <ProductsContainer containerTitle="Top Checked product">
          <SliderRight>{renderProducts.slice(38)}</SliderRight>
        </ProductsContainer>
        <Pagination />
      </main>

      <Footer />
    </>
  );
};

export default Home;
