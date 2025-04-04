import { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
  placeholder:string,
  name:string
}

const Input = ({ className, type, placeholder, ...rest }: Iprops) => {
  return (
    <>
      <input className={`block w-full bg-zinc-100 px-4 py-3 outline-none rounded-md focus:shadow-md${className}`} type={type} placeholder={placeholder} {...rest} />
    </>
  );
};

export default Input;