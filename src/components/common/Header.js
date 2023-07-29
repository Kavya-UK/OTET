import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrowseDoctors from "../home/BrowseDoctor";

export default function Header({ setDropShadow = false }) {
  const [browseFlag, setBrowseFlag] = useState(false);
  const [showDropdown, setDropdown] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {browseFlag && <BrowseDoctors closeModal={setBrowseFlag} />}

      <div>
        <div
          className={`hidden px-[1.5rem] md:px-[0.5rem] lg:px-[0.5rem] xl:px-[1rem] text-darkBlack lg:py-[1.25rem] md:grid grid-col-12 py-[0.25rem] md:py-[0.75rem] bg-white h-[7rem] relative false ${
            setDropShadow ? " drop-shadow-md " : " "
          } z-20`}
        >
          <div className="flex flex-row justify-between items-center mx-10  text-gray-900 ">
            <div className="flex items-center justify-between ">
              <div
                className=" font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] cursor-pointer tracking-[.15rem]"
                onClick={() => navigate("/book-appointment")}
              >
                MAKE AN APPOINTMENT
              </div>
              <div className="text-lightGray xl:mx-[1.5rem] mx-[0.5rem] ">
                |
              </div>
              <div
                className="font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] tracking-[.15rem]  cursor-pointer"
                onClick={() => setBrowseFlag(true)}
              >
                BROWSE
              </div>
            </div>
            <div className="flex items-center justify-center bg-white rounded-full absolute top-[100%] tall:top-[108%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[10rem] w-[10rem] md:h-[10rem] md:w-[10rem] tall:h-[13rem] tall:w-[13rem] lg:h-[15rem] lg:w-[15rem]">
              <img
                className="h-[8rem] md:h-[10rem] tall:h-[13rem] lg:h-[15rem] cursor-pointer"
                onClick={() => navigate("/")}
                alt="Logo"
                src={require("../../assets/images/home/Logo.png")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div
                className=" font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem]  tracking-[.15rem] cursor-pointer"
                onClick={() => navigate("/about-us")}
              >
                ABOUT US
              </div>
              <div className="text-lightGray xl:mx-6 mx-2 ">|</div>
              <div className="font-BasicSans font-bold text-xs lg:text-base">
                <div className="w-full z-40">
                  <div className="mx-auto w-full max-w-md">
                    <div>
                      <div
                        className="relative z-20"
                        onClick={() => setDropdown(!showDropdown)}
                      >
                        <button
                          className="flex w-full justify-between items-center text-darkBlack
 px-[0px] pt-[0px] text-left text-[0.75rem] leading-[1rem]  focus:outline-none font-bold z-40 "
                        >
                          <span className="font-BasicSans cursor-pointer mr-[0.5rem] font-bold lg:text-base text-[0.75rem] leading-[1rem] tracking-[.15rem] ">
                            LOGIN/SIGNUP
                          </span>
                          <div>
                            <img
                              className="h-[1.75rem]"
                              alt="user"
                              src={require("../../assets/images/home/User.png")}
                            />
                          </div>
                        </button>
                        {showDropdown&&
                          <div className="absolute right-0 -bottom-[110px] bg-white">
                            <div className="flex flex-col p-[10px] whitespace-nowrap">
                              <div className="flex flex-row justify-center items-center pb-[10px] border-b-[2px] border-b-gray-300">
                                <div className=" font-BasicSans font-bold text-[15px] text-black pr-[8px]">
                                  Patients
                                </div>
                                <span
                                  className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4 mr-[5px]"
                                  onClick={() => navigate("/login")}
                                >
                                  Log in
                                </span>
                                <span
                                  className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4"
                                  onClick={() => navigate("/register")}
                                >
                                  Sign up
                                </span>
                              </div>
                              <div className="flex flex-row justify-start items-center pt-[10px]">
                                <div className=" font-BasicSans font-bold text-[15px] text-black pr-[8px]">
                                  Doctors
                                </div>
                                <span className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4 ">
                                  Log in
                                </span>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
