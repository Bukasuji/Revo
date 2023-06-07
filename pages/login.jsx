import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"


const login = () => {
  return (
    <div className="relative">
     
      <div className="relative bg-opacity-75 bg-[#F55B14]">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 ml-7 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Revo  Energy <br className="hidden md:block" />
               
              </h2>
              <p className="max-w-xl mb-4 ml-7 text-base text-gray-200 md:text-lg">
                  Revo Energy provides millions with access to clean cooking gas, delivered in a timely manner.
              </p>
             
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign In
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="userName"
                      className="inline-block mb-1 font-medium"
                    >
                      Username
                    </label>
                    <input
                      placeholder=""
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#F55B14] focus:outline-none focus:shadow-outline"
                      id="userName"
                      name="userName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder=""
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#F55B14] focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="flex justify-end text-xs text-[#F55B14]">
				                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
			            </div>
                  <div className="flex items-center pt-4 space-x-1">
		                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		                     <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	                </div>
                <div className="flex justify-center space-x-4">
		              <button aria-label="Log in with Google" className="p-3 rounded-sm" fdprocessedid="u0lh6i">
			                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-[#F55B14]">
				                   <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
		                  </svg>
		              </button>
                  
                  <button aria-label="Log in with GitHub" className="p-3 rounded-sm" fdprocessedid="ksysry">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 text-[#F55B14]">
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                          </svg>
                  </button>
	              </div>
                <p className="text-xs text-center sm:px-6 text-black">Don't have an account?
                  <a rel="noopener noreferrer" href="#" className="underline text-black">Sign up</a>
                </p>
                  
                  <div className="mt-4 mb-2 sm:mb-4">
                    <Link
                      href="/group"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#F55B14] hover:bg-[#F55B19] focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </Link>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login