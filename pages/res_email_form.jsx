
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const res_email_form = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <div className="flex relative">
                <div className="bg-[#FBE9E7]  mix-blend-normal h-12 w-12 rounded-lg ml-8 mt-10 flex justify-center py-4">
                   <img src="/Path.png" alt="My Image" className="h-[20px] w-[20px]"/>
                </div>
                <img src="/Pattern.png" alt="My Image" className="h-[200px] w-[500px] top-0 right-0 absolute"/>
            </div>
        
            
           <h2 className="ml-8 mt-8 text-2xl">Fill in your bio to get started</h2>
           <p className="ml-8 mt-3">This data will be displayed in your account profile for security</p>

            <div className="flex justify-center h-[600px]">
                <form>
                    <div className="px-[15px] py-[15px] w-96 drop-shadow-2xl bg-[#FFFFFF] rounded-3xl">
                            <div className="shadow-xl rounded-full">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Firstname"/>
                            </div>

                            <div className="mt-[20px] shadow-xl rounded-full">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last name"/>
                            </div>

                            <div className="mt-[20px] shadow-xl rounded-full">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                            </div>

                            <div className="mt-[20px] shadow-xl rounded-full">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="Password" type="password" placeholder="Password"/>
                            </div>

                            <div className="mt-[20px] shadow-xl rounded-full">
                                <input class="shadow appearance-none border rounded-2xl w-full bg-[#FFFFFF] py-4 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password"/>
                            </div>

                    </div>
                    <div className="mt-[78px] flex justify-center">
                            <Link  href="/res_email_code" class="bg-[#F55B14] hover:bg-[#dc5112] text-white font-bold py-[18px] px-[62px] rounded">
                                        Next
                            </Link>      
                    </div>
                </form>    
                    
                    
            </div>     
              

            
        </div>
    )

}

export default res_email_form
  
