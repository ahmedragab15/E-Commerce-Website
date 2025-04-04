import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?:string
}

export const RoundedButton = ({ children, className, ...rest }: Iprops) => {
  return <button className={`py-1.5 px-7 rounded-2xl border text-sm font-semibold cursor-pointer${className}`} {...rest}>{children}</button>;
};

export const SquiredButton = ({ children, className }: Iprops) => {
  return <button className={`${className} cursor-pointer`}>{children}</button>;
};
