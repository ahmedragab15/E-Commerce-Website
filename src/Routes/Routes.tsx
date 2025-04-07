import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "./../pages/Home";
import AboutUs from "./../pages/AboutUs";
import NotFound from "./../pages/NotFound";
import MarketPlace from "./../pages/MarketPlace";
import Contact from "./../pages/Contact";
import WishList from "./../pages/WishList";
import Cart from "./../pages/Cart";
import Checkout from "./../pages/Checkout";

import RootLayout from "./../pages/Layout";
const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="market-store" element={<MarketPlace />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishList" element={<WishList />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Routes;
