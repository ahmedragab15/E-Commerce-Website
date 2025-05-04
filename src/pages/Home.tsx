import { SwiperSlide } from "swiper/react";
import CategoryAside from "../components/CategoryAside";
import Images from "../components/StaticImages";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";
import { SliderRight, SliderLeft, HeroSlider } from "../components/swiper/Slider";
import { ProductList } from "../data";
import { Helmet } from "react-helmet";
import { BigBanner, SmallBanner } from "../components/UI/Banner";
import { Link } from "react-router-dom";

//*  Render   */
const renderProducts = ProductList.map((product) => (
  <SwiperSlide>
    <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />
  </SwiperSlide>
));

const renderProducts2 = ProductList.map((product) => (
  <SwiperSlide>
    <ProductCard id={product.id} key={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} imageBGColor="bg-gray-100" productCardBGColor="bg-white" />
  </SwiperSlide>
));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | E-commerce Store</title>
        <meta name="description" content="Shop electronics, fashion, and more at unbeatable prices. Fast shipping & secure checkout!" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="online shopping, electronics, fashion, home, e-commerce, buy online, deals, [Your Niche]" />
        <meta name="author" content="Ahmed Store" />
        <meta property="og:title" content="Ahmed Store - Online Store" />
        <meta property="og:description" content="Top deals on gadgets, clothes, and more!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://react-ecommerce15.netlify.app/assets/logo-_i2k98rh.png" />
        <meta property="og:url" content="https://react-ecommerce15.netlify.app/" />
      </Helmet>
      <main className="mt-45 lg:mt-37">
        <section className="hero grid lg:grid-cols-5 p-8 gap-4">
          <div className="hidden lg:flex">
            <CategoryAside />
          </div>
          <div className="center lg:col-span-3 bg-gray-100 pt-10 pl-6">
            <div className="lg:justify-self-end pr-10 mb-6">
              <h2 className="text-3xl font-medium text-avocado">Buy Quality & Save Money </h2>
              <p className="lg:text-center">at the same time to enjoy your shopping</p>
            </div>
            <div className="main img-box max-w-[80vw]">
              <HeroSlider>
                <SwiperSlide>
                  <Link to="/shop">
                    <img src={Images.homeImgs.BH} className="max-w-full h-auto object-fit" alt="hero image" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/shop">
                    <img src={Images.homeImgs.BH2} className="max-w-full h-auto object-fit" alt="hero image" />
                  </Link>
                </SwiperSlide>
              </HeroSlider>
            </div>
          </div>
          <div className="right">
            <div className="img-box flex lg:flex-col gap-4 flex-wrap justify-evenly">
              <SmallBanner src={Images.banners.b1} percentage="70" />
              <SmallBanner src={Images.banners.b2} percentage="45" />
              <SmallBanner src={Images.banners.b3} percentage="30" />
            </div>
          </div>
        </section>
        <ProductsContainer containerTitle="Top Selling">
          <SliderRight>{renderProducts.slice(40)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer containerTitle="Daily Deal" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(26)}</SliderLeft>
        </ProductsContainer>
        <BigBanner src={Images.banners.bb1} />

        <ProductsContainer containerTitle="Top Shops">
          <SliderRight>{renderProducts.slice(50)}</SliderRight>
        </ProductsContainer>
        <ProductsContainer classname="flex-wrap" containerTitle="General Products" productsBGColor="bg-gray-100">
          <SliderLeft>{renderProducts2.slice(4)}</SliderLeft>
          <SliderRight>{renderProducts2.slice(35)}</SliderRight>
          <SliderLeft>{renderProducts2.slice(55)}</SliderLeft>
        </ProductsContainer>
        <BigBanner src={Images.banners.bb2} />
        <BigBanner src={Images.banners.bb3} />
        <ProductsContainer containerTitle="Last Seen" classname="flex-wrap">
          <SliderRight>{renderProducts.slice(4)}</SliderRight>
          <SliderLeft>{renderProducts.slice(55)}</SliderLeft>
        </ProductsContainer>
        <BigBanner src={Images.banners.bb4} />
        <ProductsContainer containerTitle="Top Checked product">
          <SliderRight>{renderProducts.slice(38)}</SliderRight>
        </ProductsContainer>
      </main>
    </>
  );
};

export default Home;
