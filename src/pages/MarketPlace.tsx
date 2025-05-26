import { SwiperSlide } from "swiper/react";
import { BigBanner } from "../components/UI/Banner";
import { ProductList } from "../data";
import ProductCard from "../components/ProductCard";
import { SliderLeft, SliderRight } from "../components/swiper/Slider";
import { Helmet } from "react-helmet";
import Images from "../components/StaticImages";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const MarketPlace = () => {
  const categories = [...new Set(ProductList.map((product) => product.category))];

  const banners = [Images.banners.bb1, Images.banners.bb2, Images.banners.bb3, Images.banners.bb4, Images.banners.bb5];

  return (
    <>
      <Helmet>
        <title>Market Store | E-commerce Store</title>
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
      <main className="py-10 mt-37">
        <div className="container mx-auto">
          {categories.map((category, index) => {
            const categoryProducts = ProductList.filter((product) => product.category === category);
            const sliderItems = categoryProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard id={product.id} title={product.title} image={product.image} category={product.category} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} product={product} />
                </Suspense>
              </SwiperSlide>
            ));

            const banner = banners[index % banners.length];
            const SliderComponent = index % 2 === 0 ? SliderRight : SliderLeft;

            return (
              <section key={category} className="space-y-6">
                <BigBanner src={banner} />
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold text-center capitalize">{category}</h2>
                  <Link to={`/shop?category=${encodeURIComponent(category)}`} className="text-orange-400 hover:underline">
                    View More
                  </Link>
                </div>
                <SliderComponent>{sliderItems}</SliderComponent>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default MarketPlace;
