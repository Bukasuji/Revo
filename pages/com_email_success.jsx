
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
const res_email_success = () => {
    return (
        <div className="min-h-screen bg-white">
               

            <div className="flex justify-center h-[780px] mt-0">
                <div className="w-full">
                    <div class="w-full">
                       <img src="/full.png" alt="My Image" className=" w-full h-[270px]"/>
                    </div>
                   <div className="flex justify-center">
                      <img src="/success.png" alt="My Image" width={150} height={100}/>
                    </div>
                    
                    <div className="text-center">
                        <h2 className="text-[#F55B14] text-2xl font-bold mt-[0px]">CONGRATS!</h2>
                        <p className ="mt-4 mx-[52px]">Your profile is activated continue to setup account</p>
                    </div>


                    
                
                    <div className="mt-[180px] flex justify-center">
                            <Link  href="/com_email_location" class="bg-[#F55B14] hover:bg-[#dc5112] text-white font-bold py-[18px] px-[62px] rounded">
                                        Account Setup
                            </Link>      
                    </div>
                </div>  
                    
                    
            </div>     
              

            
        </div>
    )

}

export default res_email_success
  
