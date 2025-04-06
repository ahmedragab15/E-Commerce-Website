import { Link } from "react-router-dom";
import { SquiredButton } from "./UI/Button";
import Images from "./Images";
import { Facebook, Twitter, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="top-footer bg-neutral-800 ">
        <div className="container mx-auto flex justify-between flex-col lg:flex-row lg:items-center gap-4 py-10 px-8">
          <Link className="self-center" to="/">
            <img className="w-28" src={Images.logo} alt="Logo" />
          </Link>
          <div className="footer-sub space-y-5 w-full lg:w-5/12  ">
            <h3>Subscribe To Get The Best Deals First</h3>
            <div className="sub-box flex space-x-5 ">
              <input type="text" className="border-none outline-none w-full text-black bg-white py-3 px-5 rounded-xs placeholder:text-neutral-400" placeholder="Enter your email address" />
              <SquiredButton className="border rounded-xs outline-none px-6 text-md font-semibold uppercase">Request</SquiredButton>
            </div>
          </div>
          <div className="download-app self-center">
            <h3 className="text-start">DOWNLOAD OUR FREE APP</h3>
            <p className="text-neutral-400">Get access to exclusive offers!</p>
            <div className="app-link flex space-x-2 my-4">
              <Link to="#">
                <img src={Images.GP} alt="Google Play App" />
              </Link>
              <Link to="#">
                <img src={Images.AS} alt="App Store App" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer bg-neutral-700 ">
        <div className="container mx-auto flex justify-evenly flex-col md:flex-row gap-4 py-10 px-8">
          <div className="col flex-2/4 space-y-10">
            <h4 className="uppercase font-medium">Let us help you</h4>
            <div className="footer-links flex flex-col space-y-2">
              <Link className="hover:text-neutral-200" to="#">
                Help Center
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                How to shop on Jumia?
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Delivery options
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                How to return a product ?
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Corporate and bulk purchases
              </Link>
            </div>
            <div className="footer-social space-y-2">
              <h4 className="font-medium">Follow Us</h4>
              <div className="social-links flex space-x-2">
                <Facebook className="border rounded-full p-1 hover:bg-white hover:text-orange-400" size={30} />
                <Twitter className="border rounded-full p-1 hover:bg-white hover:text-orange-400" size={30} />
                <Instagram className="border rounded-full p-1 hover:bg-white hover:text-orange-400" size={30} />
              </div>
            </div>
          </div>
          <div className="col flex-1/4 space-y-10">
            <h4 className="uppercase font-medium">about our store</h4>
            <div className="footer-links flex flex-col space-y-2">
              <Link className="hover:text-neutral-200" to="#">
                About us
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Our careers
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Our Express
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Terms and Conditions
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Privacy policy
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Our Prime
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Stay Safe
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Our Global
              </Link>
            </div>
          </div>
          <div className="col flex-1/4 space-y-10">
            <h4 className="uppercase font-medium">make money with jumia</h4>
            <div className="footer-links flex flex-col space-y-2">
              <Link className="hover:text-neutral-200" to="#">
                Sell on Jumia
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Become a Jumia Vendor Service Provider
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Become a Logistics Service Partner
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Join the Jumia DA Academy
              </Link>
              <Link className="hover:text-neutral-200" to="#">
                Join the Jumia KOL Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;