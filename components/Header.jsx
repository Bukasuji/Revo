 
 import React, { useEffect, useRef, useState } from "react";
 const Header = () => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="gas.jpg"
            alt="gas cylinder"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-[#081539]">
              Coming soon
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Easy Distribution
              <br className="hidden md:block" />
              of Cooking{' '}
              <span className="inline-block text-[#F55B14]">
                Gas
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Revo energy offers a convenient solution for both residential and commercial gas users to monitor their gas consumption in real-time and receive timely gas deliveries to avoid running out of gas.
            </p>
            <p className=" max-w-md mb-0 text-xs text-black sm:text-sm font-bold">
              Revo is coming soon subscribe for updates
           </p>


            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-0">
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 ml-0 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-[#F55B14] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#F55B14] hover:bg-[#F59014] focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
           
            <div className="flex items-center space-x-3">
                <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                  <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                </a>
                <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                  <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                </a>
            </div>
        </div>
            
          
        </div>
      </div>
    );
  };
export default Header 