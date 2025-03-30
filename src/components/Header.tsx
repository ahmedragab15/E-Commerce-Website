import { Link, NavLink } from "react-router-dom";
import {RoundedButton , SquiredButton} from "./UI/Button";
import { CircleHelp, Heart, Search, ShoppingCart } from "lucide-react";
import Images from "./Images";

const Header = () => {
  return (
    <header className="bg-orange-400 h-32 px-8 flex flex-col justify-evenly">
      <div className="top-nav flex justify-between items-center">
        <span>Selle easily on our store</span>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <NavLink className="hover:text-white" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/market-store">
                Market Store
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="register-btns space-x-2">
          <RoundedButton className=" text-orange-500 bg-white border-white hover:bg-transparent hover:text-white">Sign Up</RoundedButton>
          <RoundedButton className=" text-white hover:bg-white hover:text-orange-500 ">Login</RoundedButton>
        </div>
      </div>
      <div className="bottom-nav flex justify-between items-center">
        <Link className="flex-1/12" to="/">
          <img className="w-12" src={Images.logo} alt="Logo" />
        </Link>
        <div className="nav-search flex space-x-4 flex-1/3 ">
          <div className="search-box bg-white flex items-center p-3 space-x-5 rounded-md  w-full">
            <Search className="border-none outline-none cursor-pointer" size={30} />
            <input type="text" className="border-none outline-none w-full" placeholder="Look for anything you want" />
          </div>
          <SquiredButton className="rounded-md bg-white border-none outline-none px-10 text-md font-semibold ">Search </SquiredButton>
        </div>
        <div className="nav-icons flex text-white space-x-3 flex-1/12 justify-end">
          <CircleHelp size={33} className="cursor-pointer" />
          <ShoppingCart size={33} className="cursor-pointer" />
          <Heart size={33} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;