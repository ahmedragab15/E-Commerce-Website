import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
function Login() {
    const [isActive, setIsActive] = useState(false);
    return (
      <>
        <Helmet>
          <title>Login or SignUp | E-commerce Store</title>
        </Helmet>
        <main className="py-30 w-full bg-stone-100 flex flex-col justify-center items-center mt-37">
          <div className={`containerr ${isActive ? "active" : ""}  bg-white rounded-4xl shadow-lg relative w-4xl max-w-full min-h-[580px] overflow-hidden`} id="container">
            <div className="form-container sign-up absolute top-0 left-0 w-1/2 opacity-0 z-10 h-full duration-500 ease-in-out">
              <form className="bg-white flex flex-col justify-center items-center px-10 h-full">
                <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
                <input className="bg-zinc-100 border-0 my-2 py-2.5 px-3.5 text-sm rounded-lg w-full outline-0" type="text" placeholder="Username" />
                <input className="bg-zinc-100 border-0 my-2 py-2.5 px-3.5 text-sm rounded-lg w-full outline-0" type="email" placeholder="Email" />
                <input className="bg-zinc-100 border-0 my-2 py-2.5 px-3.5 text-sm rounded-lg w-full outline-0" type="password" placeholder="Password" />
                <button className="bg-orange-400 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase mt-2.5 cursor-pointer hover:bg-orange-500">Sign Up</button>
                <p className="text-sm font-medium  leading-5 my-5">or sign up with</p>
                <div className="social-icons flex">
                  <Github className=" text-neutral-600 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Linkedin className="text-sky-700 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Facebook className="text-sky-500 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Twitter className="text-sky-600 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                </div>
              </form>
            </div>
            <div className="form-container sign-in absolute top-0 left-0 w-1/2 z-20 h-full duration-500 ease-in-out ">
              <form className="bg-white flex flex-col justify-center items-center px-10 h-full">
                <h1 className="text-2xl font-semibold mb-2">Sign In</h1>
                <input className="bg-zinc-100 border-0 my-2 py-2.5 px-3.5 text-sm rounded-lg w-full outline-0" type="email" placeholder="Email" />
                <input className="bg-zinc-100 border-0 my-2 py-2.5 px-3.5 text-sm rounded-lg w-full outline-0" type="password" placeholder="Password" />
                <a className="text-zinc-800 text-sm no-underline mt-3.5 mb-2.5" href="#">
                  Forget Password?
                </a>
                <button className="bg-orange-400 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold uppercase mt-2.5 cursor-pointer hover:bg-orange-500">Sign In</button>
                <p className="text-sm font-medium leading-5 my-5">or sign in with</p>
                <div className="social-icons flex">
                  <Github className=" text-neutral-600 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Linkedin className="text-sky-700 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Facebook className="text-sky-500 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                  <Twitter className="text-sky-600 border border-orange-400 rounded-full justify-center items-center p-2 mx-1.5 duration-300 cursor-pointer hover:bg-orange-400 hover:text-white" size={40} />
                </div>
              </form>
            </div>
            <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden duration-500 ease-in-out rounded-2xl z-40">
              <div className="toggle bg-orange-400 h-full text-white relative -left-full translate-x-0 duration-500 ease-in-out">
                <div className="toggle-panel toggle-left absolute top-0 w-1/2 h-full flex flex-col justify-center items-center px-7 text-center translate-x-0 duration-500 ease-in-out">
                  <h1 className="text-2xl font-semibold mb-2">
                    Welcome To <br />
                    Jumia
                  </h1>
                  <p className="text-sm font-medium  leading-5 my-5">Sign in With Email &amp; Passowrd</p>
                  <button className="hiddenn bg-transparent text-white text-sm py-2.5 px-11 border border-white rounded-lg font-semibold uppercase mt-2.5 cursor-pointer hover:bg-white hover:text-orange-400" id="login" onClick={() => setIsActive(!isActive)}>
                    Sign In
                  </button>
                </div>
                <div className="toggle-panel toggle-right absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center px-7 text-center translate-x-0 duration-500 ease-in-out">
                  <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
                  <p className="text-sm font-medium  leading-5 my-5">No account yet? Sign up</p>
                  <button className="hiddenn bg-transparent text-white text-sm py-2.5 px-11 border border-white rounded-lg font-semibold uppercase mt-2.5 cursor-pointer hover:bg-white hover:text-orange-400" id="register" onClick={() => setIsActive(!isActive)}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Login;
