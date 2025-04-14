import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import RootLayout from "../pages/Layout";
import Home from "../pages/Home";
import MarketPlace from "../pages/MarketPlace";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Shop from "../pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="market-store" element={<MarketPlace />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
        <Route path="wishList" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </>
  )
);
export default router;
