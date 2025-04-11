import { SwiperSlide } from "swiper/react";
import CategoryAside from "../components/CategoryAside";
import Images from "../components/Images";
import Pagination from "../components/UI/Pagination";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";
import  {SliderRight, SliderLeft } from "../components/swiper/Slider";
import { ProductList } from "../data";

//*  Render   */
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
          </div>
          <div className="right">
            <div className="img-box flex lg:flex-col gap-4 flex-wrap">
              <span className="bg-gray-100 text-gray-500 text-2xl max-w-58 h-58 object-fit flex justify-center items-center">230 X 230</span>
              <span className="bg-gray-100 text-gray-500 text-2xl max-w-58 h-58 object-fit flex justify-center items-center">230 X 230</span> <span className="bg-gray-100 text-gray-500 text-2xl max-w-58 h-58 object-fit flex justify-center items-center">230 X 230</span>
            </div>
          </div>
        </section>
        <ProductsContainer containerTitle="Top Selling">
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer containerTitle="Daily Deal" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(26)}</SliderLeft>
        </ProductsContainer>
        <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
        <ProductsContainer containerTitle="Top Shops">
          <SliderRight>{renderProducts.slice(50)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer classname="flex-wrap" containerTitle="General Products" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(4)}</SliderLeft>
          <SliderRight>{renderProducts2.slice(35)}</SliderRight>
          <SliderLeft>{renderProducts2.slice(55)}</SliderLeft>
        </ProductsContainer>
        <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
        <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
        <ProductsContainer containerTitle="Last Seen" classname="flex-wrap">
          <SliderRight>{renderProducts.slice(4)}</SliderRight>
          <SliderLeft>{renderProducts.slice(55)}</SliderLeft>
        </ProductsContainer>
        <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
        <ProductsContainer containerTitle="Top Checked product">
          <SliderRight>{renderProducts.slice(38)}</SliderRight>
        </ProductsContainer>
        <Pagination />
      </main>
    </>
  );
};

export default Home;
