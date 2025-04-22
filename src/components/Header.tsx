import { Link, NavLink } from "react-router-dom";
import { RoundedButton, SquiredButton } from "./UI/Button";
import { CircleHelp, Heart, Search, ShoppingCart } from "lucide-react";
import Images from "./StaticImages";
import { useState } from "react";
import PageTransition from "./PageTransition";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { WhishListContext } from "./context/WhishlistContext";

const Header = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { whishListItems } = useContext(WhishListContext);

  const transitionHandler = () => {
    setIsAnimating(!isAnimating);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 bg-orange-400 lg:py-5 px-8 flex flex-col justify-evenly z-[999] shadow-sm space-y-3">
        <div className="top-nav flex justify-between items-center py-1 lg:py-0 relative">
          <span className="hidden lg:block">Selle easily on our store</span>
          <nav className={`fixed lg:static z-50 top-0 ${openSideNav ? "right-0" : "-right-full"} bottom-0 w-2/4 duration-700 lg:w-auto bg-orange-400 shadow-black shadow-sm lg:shadow-none p-5 lg:p-0 lg:bg-transparent flex items-center justify-center`}>
            <ul className="nav-items block lg:flex space-y-8 lg:space-y-0 lg:space-x-10">
              <li>
                <NavLink
                  className={`nav-item text-2xl lg:text-base font-medium hover:text-white ${openSideNav ? "fade" : ""}`}
                  to="/"
                  onClick={() => {
                    setOpenSideNav(false);
                    transitionHandler();
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item text-2xl lg:text-base font-medium hover:text-white ${openSideNav ? "fade" : ""}`}
                  to="/market-store"
                  onClick={() => {
                    setOpenSideNav(false);
                    transitionHandler();
                  }}
                >
                  Market Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item text-2xl lg:text-base font-medium hover:text-white ${openSideNav ? "fade" : ""}`}
                  to="/shop"
                  onClick={() => {
                    setOpenSideNav(false);
                    transitionHandler();
                  }}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item text-2xl lg:text-base font-medium hover:text-white ${openSideNav ? "fade" : ""}`}
                  to="/about-us"
                  onClick={() => {
                    setOpenSideNav(false);
                    transitionHandler();
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item text-2xl lg:text-base font-medium hover:text-white ${openSideNav ? "fade" : ""}`}
                  to="/contact"
                  onClick={() => {
                    setOpenSideNav(false);
                    transitionHandler();
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="register-btns space-x-2 hidden lg:block">
            <Link
              to="login"
              onClick={() => {
                setOpenSideNav(true);
                transitionHandler();
              }}
            >
              <RoundedButton className=" text-orange-500 bg-white border-white hover:bg-transparent hover:text-white">Sign Up</RoundedButton>
            </Link>
            <Link
              to="/login"
              onClick={() => {
                setOpenSideNav(true);
                transitionHandler();
              }}
            >
              <RoundedButton className=" text-white hover:bg-white hover:text-orange-500 ">Login</RoundedButton>
            </Link>
          </div>
        </div>
        <div className="bottom-nav flex justify-between lg:items-center flex-col lg:flex-row space-y-2">
          <div className="flex items-center justify-between lg:flex-1/12">
            <Link
              to="/"
              onClick={() => {
                setOpenSideNav(false);
                transitionHandler();
              }}
            >
              <img className="w-40 md:w-45 bg-white rounded-2xl" src={Images.Logo} alt="Logo" />
            </Link>
            <div className={`ham-menu h-12 w-10 relative flex lg:hidden cursor-pointer z-50 ${openSideNav ? "active" : ""}`} onClick={() => setOpenSideNav(!openSideNav)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <Menu className="text-white lg:hidden cursor-pointer z-50" size={30} onClick={() => setOpenNav(!openNav)} /> */}
          </div>
          <div className="nav-search flex flex-row gap-2 lg:flex-1/3 order-2 lg:order-1 ">
            <div className="search-box bg-white flex items-center p-3 space-x-5 rounded-md  w-full">
              <Search className="border-none outline-none cursor-pointer hover:scale-110 duration-200" size={30} />
              <input type="text" className="border-none outline-none w-full h-full" placeholder="Look for anything you want" />
            </div>
            <SquiredButton className="rounded-md bg-white hover:bg-gray-100 border-none outline-none py-3 px-10 w-fit mx-auto text-md font-semibold ">Search </SquiredButton>
          </div>
          <div className="nav-icons flex text-white space-x-3 self-center order-1 lg:flex-1/12 lg:justify-end mb-2 lg:mb-0">
            <CircleHelp
              size={33}
              className="cursor-pointer hover:scale-110 duration-200"
              onClick={() => {
                setOpenSideNav(false);
                transitionHandler();
              }}
            />
            <Link
              to="/cart"
              className="relative"
              onClick={() => {
                setOpenSideNav(false);
                transitionHandler();
              }}
            >
              <ShoppingCart size={33} className="cursor-pointer hover:scale-110 duration-200" />
              <span className="cart-count absolute top-0 right-0 bg-red-500 rounded-full pointer-events-none w-5 h-5 flex justify-center items-center">{cartItems?.length}</span>
            </Link>
            <Link
              to="/wishlist"
              className="relative"
              onClick={() => {
                setOpenSideNav(false);
                transitionHandler();
              }}
            >
              <Heart size={33} className="cursor-pointer hover:scale-110 duration-200" />
              <span className="cart-count absolute top-0 right-0 bg-red-500 rounded-full pointer-events-none w-5 h-5 flex justify-center items-center">{whishListItems?.length}</span>
            </Link>
          </div>
        </div>
      </header>
      <PageTransition isAnimating={isAnimating} />
    </>
  );
};

export default Header;
