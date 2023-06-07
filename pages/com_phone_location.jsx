
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
const com_phone_location = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
          <div className="flex relative">
                <div className="bg-[#FBE9E7]  mix-blend-normal h-12 w-12 rounded-lg ml-8 mt-10 flex justify-center py-4">
                   <img src="/Path.png" alt="My Image" className="h-[20px] w-[20px]"/>
                </div>
                <img src="/Pattern.png" alt="My Image" className="h-[200px] w-[500px] top-0 right-0 absolute"/>
            </div>

           <h2 className="ml-8 mt-8 text-2xl">Set your location</h2>
           <p className="mx-8 mt-4">This data will be displayed in your account profile for security</p>

            <div className="flex justify-center h-[700px]">
                <div>
                    <form>
                        <div className="px-[15px] py-[10px] mt-[15px] w-96 drop-shadow-2xl bg-[#FFFFFF] rounded-3xl">
                            <div className="flex">
                                <img src="/Pin Logo.png" alt="My Image" className="h-[30px] w-[30px]"/>
                                <p className="ml-4">Your location</p>
                            </div>
                            <div className="mt-[20px] mb-[10px]">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Search address"/>
                            </div>
                        </div>
                                
                    </form>   
                            <div className="flex justify-center">
                                <button class="bg-[#F6F6F6] hover:bg-gray-100 text-gray-800 font-semibold mt-[26px] py-2 px-4 border border-none rounded shadow-xl w-[350px] h-[57px] rounded-2xl">
                                        Get current location
                                </button>
                            </div>
            

                     
                    <div className="mt-[90px] flex justify-center">
                            <Link  href="/comm_phone_account_setup" className="bg-[#F55B14] hover:bg-[#dc5112] text-white font-bold py-[18px] px-[62px] rounded">
                                        Next
                            </Link>      
                    </div>
                </div>    
                    
                    
            </div>     
              

            
        </div>
    )

}

export default com_phone_location
  
