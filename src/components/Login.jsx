import signup from '../assets/images/signup.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useState } from 'react';

const Login = ({ children }) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top',
  },})

  const handlelogin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   notyf.success("Login successfull")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    notyf.error(errorMessage)
  });
  }
  return (
    <>
      <div className="bg-white md:h-screen flex items-center ">
        <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 h-[80vh] w-[90%] m-auto">
          
          {/* LEFT SIDE - Login Form */}
          <div className="flex items-center p-6 h-full w-full ">
            <form className="max-w-lg w-full mx-auto" onSubmit={(e)=>handlelogin(e)}>
              <div className="mb-12">
                <h1 className="text-slate-900 text-2xl font-semibold">
                  Login
                </h1>
               {children}
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <label className="text-slate-800 text-md font-medium block mb-2">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-slate-900 pl-2 pr-8 py-3 outline-none"
                      placeholder="Enter email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000" />
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit={10}
                          strokeWidth={40}
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        />
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-slate-800 text-md font-medium block mb-2">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-slate-900 pl-2 pr-8 py-3 outline-none"
                      placeholder="Enter password"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 shrink-0 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-600">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm font-medium tracking-wider rounded-sm bg-blue-600 hover:bg-blue-700 text-white focus:outline-none cursor-pointer"
                >
                  Login
                </button>
              </div>

            
            </form>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="max-md:order-2 p-4 h-full">
            <img
              src={signup}
              className="max-w-[80%] w-full h-full aspect-square object-contain block mx-auto "
              alt="login-illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
