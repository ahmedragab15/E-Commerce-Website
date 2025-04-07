import { Link } from "react-router-dom";

interface Iprops {
  children: React.ReactNode;
  containerTitle?: string;
  productsBGColor?: string;
  classname?: string;
}

const ProductsContainer = ({ children, containerTitle, productsBGColor = "bg-white", classname }: Iprops) => {
  return (
    <>
      <div className="container mx-auto flex justify-between px-4">
        <h3 className=" text-lg font-medium">{containerTitle}</h3>
        <Link to="shop">
          <h3 className="text-lg font-medium">See more</h3>
        </Link>
      </div>
      <div className={`products ${productsBGColor} pb-6 mt-4 mb-6`}>
        <div className={`container mx-auto flex justify-evenly items-center gap-8 py-6  ${classname}`}>{children}</div>
      </div>
    </>
  );
};

export default ProductsContainer;
