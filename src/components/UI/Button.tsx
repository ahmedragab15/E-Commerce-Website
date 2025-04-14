import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?:string
}

export const RoundedButton = ({ children, className, ...rest }: Iprops) => {
  return <button className={`py-1.5 px-7 rounded-2xl border text-sm font-semibold cursor-pointer${className}`} {...rest}>{children}</button>;
};

export const SquiredButton = ({ children, className,...rest }: Iprops) => {
  return <button className={`${className} cursor-pointer` }{...rest}>{children}</button>;
};


export const CartButton = ({...rest}: Iprops) => {
  return (
    <button className="font-medium cursor-pointer bg-gradient-to-r from-orange-300 from-0% via-orange-100 via-50% to-orange-300 to-100% py-1 px-2  rounded-sm" {...rest}>
      Add to cart
    </button>
  );
};