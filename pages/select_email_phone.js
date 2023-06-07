
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
const select_email_phone = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
               
            <div className="flex relative">
                <div className="bg-[#FBE9E7]  mix-blend-normal h-12 w-12 rounded-lg ml-8 mt-10 flex justify-center py-4">
                   <img src="/Path.png" alt="My Image" className="h-[20px] w-[20px]"/>
                </div>
                <img src="/Pattern.png" alt="My Image" className="h-[200px] w-[500px] top-0 right-0 absolute"/>
            </div>
           <p className="ml-8 mt-8 text-2xl">Create Using</p>

            <div className="flex justify-center h-[550px]">
                <div className="">
                    <div className="mt-[60px] mx-auto px-[15px] pt-[60px] pb-[100px] w-96 drop-shadow-2xl bg-[#FFFFFF] rounded-3xl">
                            <div className="mx-auto">
                                <button class="bg-[#F6F6F6] hover:bg-gray-100 text-gray-800 font-semibold mt-[26px] py-2 px-4 border border-gray-400 w-[350px] h-[57px] rounded-2xl">
                                        Email
                                </button>
                            </div>

                            <div className="mx-auto">
                                <button class="bg-[#F6F6F6] hover:bg-gray-100 text-gray-800 font-semibold mt-[26px] py-2 px-4 border border-gray-400 w-[350px] h-[57px] rounded-2xl">
                                        Mobile number
                                </button>
                            </div>

                            
                    </div>
                    <div className="mt-[90px] flex justify-center">
                            <Link  href="/res_email_form" className="bg-[#F55B14] hover:bg-[#dc5112] text-white font-bold py-[18px] px-[62px] rounded">
                                        Next
                            </Link>      
                    </div>
                </div>    
                    
                    
            </div>     
              

            
        </div>
    )

}

export default select_email_phone
  
