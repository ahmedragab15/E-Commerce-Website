interface Iprops {
  children: React.ReactNode;
}

const Banner = ({ children }: Iprops) => {
  return (
    <div className="my-6">
      <h3 className="mb-2 font-medium">{children}</h3>
      <span className="Banner w-11/12 h-[200px] mx-auto object-cover mb-6 bg-gray-100 text-gray-500 text-3xl flex justify-center items-center">Banner</span>
    </div>
  );
};
export default Banner;
