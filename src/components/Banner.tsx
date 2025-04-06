import Images from "./Images";

interface Iprops {
  children: React.ReactNode;
}

const Banner = ({ children }: Iprops) => {
  return (
    <div className="my-6">
      <h3 className="mb-2 font-medium">{children}</h3>
      <img src={Images.homeImgs.h2} className="Banner w-full mx-auto object-cover mb-6 h-[200px]" alt="banner" />
    </div>
  );
};
export default Banner;
