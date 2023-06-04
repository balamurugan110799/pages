import React, { useState } from "react";
import signup from "../Components/Assets/images/illustration-sign-up-desktop.svg"
import signupmobile from "../Components/Assets/images/illustration-sign-up-mobile.svg"

import bullets from "../Components/Assets/images/icon-list.svg"
function Home() {
    const [data, setData] = useState({
        email: "",
    })
    const [error, setError] = useState({
        email: "",
    })

    const [flag, setFlag] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
        errorhandler(data)
        setError(error)
        console.log(data)

    }

    const errorhandler = (data, e) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (data.email === "" || data.email === undefined) {
            error.email = "Enter the Email"
        } else if (!regex.test(data.email)) {
            error.email = "vaild email required"
        } else {
            error.email = ""
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        errorhandler(data)
        setError(error)
        setFlag(true)
        Object.keys(data).forEach(key => {
            if (data[key] == '') {
                delete data[key];
            }
        })
        if (error.email === "") {
            window.location.href = "/thank-you"
        }

        handleChange(e)
    }
    return (
        <div>
            <div className="lg:h-[100vh] sm:h-auto md:h-auto mdsm:h-auto bg-charcoal-grey center">
                <div className="lg:w-[55%] md:w-[100%] mdsm:w-[100%] sm:w-[100%] sm:rounded-none rounded-lg bg-white ">
                    <div className="w-[100%] flex flex-wrap sm:pt-0 sm:px-0 lg:p-6 md:pt-0 mdsm:pt-0 ">
                        <img src={signupmobile} className="desktop-hide-view mdsm:w-[100%] md:w-[100%] sm:w-[100%]" />
                        <div className="lg:w-[60%] md:w-[100%] mdsm:w-[100%] sm:w-[100%]">
                            <div className="pr-16  pl-8 py-6 sm:pr-4 sm:pl-4 ">
                                <h1 className="text-[38px] sm:pt-4 sm:text-[24px] title text-left text-secondary">
                                    Stay Updated!
                                </h1>
                                <p className="text-left sm:pt-4 sm:text-[14px] text-secondary leading-[20px] pt-2">Join 60,000 product managers receiving monthly updates on:</p>
                                <ul className="py-4 sm:py-8">
                                    <li className="text-secondary sm:pb-2 text-[16px] text-left flex"><img src={bullets} className="mr-4 sm:mr-2 sm:h-[20px]" /><span className="text-secondary sm:text-sm pt-1 sm:pt-0 sm:leading-[20px] leading-[26px]">Product discovery and building what matters</span></li>
                                    <li className="text-secondary sm:pb-2 text-[16px] text-left flex"><img src={bullets} className="mr-4 sm:mr-2 sm:h-[20px]" /><span className="text-secondary sm:text-sm pt-1 sm:pt-0 sm:leading-[20px] leading-[26px]">Measuring to ensure updates are a success</span></li>
                                    <li className="text-secondary sm:pb-2 text-[16px] text-left flex"><img src={bullets} className="mr-4 sm:mr-2 sm:h-[20px]" /><span className="text-secondary sm:text-sm pt-1 sm:pt-0 sm:leading-[20px] leading-[26px]">And much more!</span></li>
                                </ul>
                                <from>
                                    <div className="pt-2">
                                        <div className="flex w-[100%] text-sm text-secondary pb-1">
                                            <div className="w-[50%] flex">
                                                <label className="title sm:text-[12px]">Email address</label>
                                            </div>
                                            <div className="w-[50%] text-primary flex justify-end">
                                                {error.email}
                                            </div>
                                        </div>
                                        <input
                                            onChange={(e) => handleChange(e)}
                                            type="email"
                                            name="email"
                                            className={`${error.email.length > 0 ? "error placeholder:text-primary" : "False"} border-color sm:text-sm  placeholder:text-grey w-[100%] py-3 px-6 rounded-md`}
                                            placeholder="email@company.com"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button onClick={(e) => handleClick(e)} className="duration-300 py-2 sm:text-sm bg-secondary hover:bg-primary w-[100%] rounded-md text-white">
                                            Subscribe to monthly newletter
                                        </button>
                                    </div>
                                </from>
                            </div>

                        </div>
                        <div className="lg:w-[40%] md:w-[100%] mdsm:w-[100%] lg:p-0 md:p-4 mdsm:p-4  mobile-view-hide center">
                            <img src={signup} className="w-[100%] center h-[100%] mobile-view-hide" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home