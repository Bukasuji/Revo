
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const com_phone_code = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
               
            <div className="flex relative">
                <div className="bg-[#FBE9E7]  mix-blend-normal h-12 w-12 rounded-lg ml-8 mt-10 flex justify-center py-4">
                   <img src="/Path.png" alt="My Image" className="h-[20px] w-[20px]"/>
                </div>
                <img src="/Pattern.png" alt="My Image" className="h-[200px] w-[500px] top-0 right-0 absolute"/>
            </div>
           <h2 className="ml-8 mt-8 text-2xl">Enter 4-digits verification code</h2>
           <p className="ml-8 mt-3">Code sent to +234******. This code will expire in 01:00sec</p>

            <div className="flex justify-center h-[600px] mt-10">
                <form>
                    <div className="px-[15px] w-96 drop-shadow-2xl bg-[#FFFFFF] rounded-3xl">
                            
                            <div class="flex justify-center py-5">
                                    <input type="text" class="w-12 h-12 text-center text-2xl border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55B14] focus:border-blue-500 mx-1" maxlength="1"/>
                                    <input type="text" class="w-12 h-12 text-center text-2xl border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55B14] focus:border-blue-500 mx-1" maxlength="1"/>
                                    <input type="text" class="w-12 h-12 text-center text-2xl border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55B14] focus:border-blue-500 mx-1" maxlength="1"/>
                                    <input type="text" class="w-12 h-12 text-center text-2xl border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55B14] focus:border-blue-500 mx-1" maxlength="1"/>
                            </div>


                    </div>
                    <div className="mt-[322px] flex justify-center">
                            <Link  href="/com_phone_success" class="bg-[#F55B14] hover:bg-[#dc5112] text-white font-bold py-[18px] px-[62px] rounded">
                                        Next
                            </Link>      
                    </div>
                </form>    
                    
                    
            </div>     
              

            
        </div>
    )

}

export default com_phone_code
  
