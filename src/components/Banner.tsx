import { Link } from "react-router-dom";
import { RoundedButton } from "./UI/Button";

interface Iprop {
  src: string;
  percentage?: string;
}

export const BigBanner = ({ src }: Iprop) => {
  return (
    <Link to="/shop" className="my-6 block w-fit mx-auto">
      <img src={src} alt="Banner" className="Banner w-fit h-[200px] object-contain mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center" />
    </Link>
  );
};

export const SmallBanner = ({ src, percentage }: Iprop) => {
  return (
    <div className="small-banner bg-gray-100 max-w-58 min-h-58 py-1 px-4">
      <Link to="/shop" className="flex flex-col items-center  gap-2">
        <img src={src} alt="flash sale banner" className="max-w-30  h-25  object-cover" />
        <div className="text w-full text-center">
          <h5 className="font-medium">Break Disc deals on this</h5>

          <div className="sale">
            <div>
              <span className="text-zinc-500">Up To</span>
            </div>
            <strong className="text-orange-400 font-semibold">{percentage}%</strong>
          </div>
          <RoundedButton className=" cursor-pointer hover:bg-orange-400 hover:text-white duration-200">Shop Now</RoundedButton>
        </div>
      </Link>
    </div>
  );
};

export const VerticalBanner = ({src}:Iprop)=>{
  return (
    <Link to="/shop">
      <img src={src} alt="Vertical Banner" className="Banner hidden sm:block w-full my-6 object-contain mb-6"/>
    </Link>
  );
}


//         <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
