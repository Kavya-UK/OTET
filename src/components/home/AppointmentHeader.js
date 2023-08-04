import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrowseDoctors from "./BrowseDoctor";

export default function AppointmentHeader({ setDropShadow = true }) {
  const navigate = useNavigate();
  const [showBrowse, setShowBrowse] = useState(false);
    const [showDropdown, setDropdown] = useState(false);

  return (
    <>
      {showBrowse && <BrowseDoctors closeModal={setShowBrowse} />}

      <div className=" py-[10px] xl:pl-[50px] lg:pl-[30px] pl-[10px] xl:pr-[30px] lg:pr-[15px] pr-[10px] flex justify-between items-center header-main">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="h-[96px] md:h-[120px] cursor-pointer "
            src={require("../../assets/images/home/Logo.png")}
            alt="logo"
          />
        </div>

        <div className="md:flex hidden flex-row justify-between items-center">
          <div onClick={() => navigate("/book-appointment")}>
            <Link className="border-r-[1px] border-hexGray pr-[20px] font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] cursor-pointer tracking-[.15rem] text-darkBlack ">
              MAKE AN APPOINTMENT
            </Link>
          </div>
          <div className="pl-[20px]" onClick={() => setShowBrowse(!showBrowse)}>
            <Link className="font-BasicSans border-r-[1px] border-hexGray pr-[20px] font-bold lg:text-base text-[0.75rem] leading-[1rem] cursor-pointer tracking-[.15rem] text-darkBlack ">
              BROWSE
            </Link>
          </div>
          <div className="" onClick={() => navigate("/about-us")}>
            <Link className="border-r-[1px] border-hexGray px-[20px] font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] cursor-pointer tracking-[.15rem] text-darkBlack ">
              ABOUT US
            </Link>
          </div>
          <div
            className="pl-[20px] cursor-pointer relative"
            onClick={() => setDropdown(!showDropdown)}
          >
            <Link className=" px-[20px] font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] tracking-[.15rem] text-darkBlack relative top-[2px]">
              LOGIN/SIGNUP
            </Link>
            <img
              src={require("../../assets/images/home/User.png")}
              alt="user"
              className="inline-block xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:top-[2px]"
            />
            {showDropdown && (
              <div className="absolute right-0 -bottom-[110px] bg-white z-30">
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
