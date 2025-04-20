import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
