import { Link, NavLink } from "react-router-dom";
import {RoundedButton , SquiredButton} from "./UI/Button";
import { CircleHelp, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Images from "./Images";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState("-right-full");
  
  return (
    <header className="bg-orange-400 lg:py-5 px-8 flex flex-col justify-evenly relative z-50 space-y-3">
      <div className="top-nav flex justify-between items-center py-1 lg:py-0 relative">
        <span className="hidden lg:block">Selle easily on our store</span>
        <nav className={`fixed lg:static z-50 top-0 ${openNav} bottom-0 w-2/4 duration-500 lg:w-auto bg-orange-500 p-5 lg:p-0 lg:bg-transparent flex items-center justify-center`}>
          <span className="closeSideNav absolute top-3 left-3 text-2xl cursor-pointer hover:text-white lg:hidden" onClick={() => setOpenNav("-right-full")}>
            X
          </span>
          <ul className="block lg:flex space-y-8 lg:space-y-0 lg:space-x-10">
            <li>
              <NavLink className="font-medium hover:text-white" to="/" onClick={() => setOpenNav("-right-full")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="font-medium hover:text-white" to="/market-store" onClick={() => setOpenNav("-right-full")}>
                Market Store
              </NavLink>
            </li>
            <li>
              <NavLink className="font-medium hover:text-white" to="/about-us" onClick={() => setOpenNav("-right-full")}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="font-medium hover:text-white" to="/contact" onClick={() => setOpenNav("-right-full")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="register-btns space-x-2 hidden lg:block">
          <Link to="login">
            <RoundedButton className=" text-orange-500 bg-white border-white hover:bg-transparent hover:text-white">Sign Up</RoundedButton>
          </Link>
          <Link to="/login">
            <RoundedButton className=" text-white hover:bg-white hover:text-orange-500 ">Login</RoundedButton>
          </Link>
        </div>
      </div>
      <div className="bottom-nav flex justify-between lg:items-center flex-col lg:flex-row space-y-2">
        <div className="flex items-center justify-between lg:flex-1/12">
          <Link to="/">
            <img className="w-12" src={Images.logo} alt="Logo" />
          </Link>
          <Menu className="text-white lg:hidden cursor-pointer" size={30} onClick={() => setOpenNav("-right-0")} />
        </div>
        <div className="nav-search flex flex-row gap-2 lg:flex-1/3 order-2 lg:order-1 ">
          <div className="search-box bg-white flex items-center p-3 space-x-5 rounded-md  w-full">
            <Search className="border-none outline-none cursor-pointer hover:scale-110 duration-200" size={30} />
            <input type="text" className="border-none outline-none w-full h-full" placeholder="Look for anything you want" />
          </div>
          <SquiredButton className="rounded-md bg-white hover:bg-gray-100 border-none outline-none py-3 px-10 w-fit mx-auto text-md font-semibold ">Search </SquiredButton>
        </div>
        <div className="nav-icons flex text-white space-x-3 self-center order-1 lg:flex-1/12 lg:justify-end mb-2 lg:mb-0">
          <CircleHelp size={33} className="cursor-pointer hover:scale-110 duration-200" />
          <ShoppingCart size={33} className="cursor-pointer hover:scale-110 duration-200" />
          <Heart size={33} className="cursor-pointer hover:scale-110 duration-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;