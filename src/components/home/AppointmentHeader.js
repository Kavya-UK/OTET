import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrowseDoctors from "./BrowseDoctor";

export default function AppointmentHeader({ setDropShadow = true }) {
  const navigate = useNavigate();
  const [showBrowse, setShowBrowse] = useState(false);
  return (
    <>
      {showBrowse && <BrowseDoctors closeModal={setShowBrowse} />}

      <div className=" py-[10px] xl:pl-[50px] lg:pl-[30px] pl-[10px] xl:pr-[30px] lg:pr-[15px] pr-[10px] sm:flex hidden justify-between items-center header-main">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="w-[120px] h-[120px] "
            src={require("../../assets/images/home/Logo.png")}
            alt="logo"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
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
            className="pl-[20px] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <Link className=" px-[20px] font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem] tracking-[.15rem] text-darkBlack relative top-[2px]">
              LOGIN/SIGNUP
            </Link>
            <img
              src={require("../../assets/images/home/User.png")}
              alt="user"
              className="inline-block xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:top-[2px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
