import React from "react";
import success from "../Components/Assets/images/icon-success.svg"

function ThankYou() {
    const handleClick = (e) => {
        window.location.href = "/"
    }
    return (
        <div className="bg-secondary  sm:h-auto  h-[100vh] sm:bg-white">
            <div className=" h-[100vh] center w-[100%] sm:h-auto">
               <div className="block ">
                    <div className="bg-white sm:pt-14 relative  rounded-lg p-10  sm:h-[100vh] mx-auto sm:p-6 w-[36%] sm:w-[100%]">
                        <div className="">
                            <div className="block">
                                <img src={success} className="h-[50px]" />
                                <p className="text-h1 pt-6 sm:text-[30px] leading-[36px] text-left text-secondary title">
                                    Thanks for <br />
                                    Subscribing!</p>

                                <p className="text-left sm:text-sm text-secondary pt-6">A confromation email has been <span className="title">ash@loremcompany.com</span> .
                                    Please open it and click the button inside to confrom your Subscripition</p>

                                <button onClick={(e) => handleClick(e)} className="mobile-view-hide py-2 sm:text-sm mt-6 duration-300 bg-secondary hover:bg-primary w-[100%] rounded-md text-white">Dismiss message</button>
                            </div>
                  
                    </div>

                    <div className="buttonclass  bottom-0 desktop-hide-view">
                    <button onClick={(e) => handleClick(e)} className="py-2 sm:text-sm mt-6 duration-300 bg-secondary hover:bg-primary w-[100%] rounded-md text-white">Dismiss message</button>
                </div>
                   
                </div>
                </div>
                
                
            </div>


        </div>
    )
}

export default ThankYou