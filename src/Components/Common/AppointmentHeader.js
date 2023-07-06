import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import BrowseDoctors from "./BrowseDoctor";

export default function AppointmentHeader() {
  const navigate=useNavigate();
  const[showBrowse,setShowBrowse]=useState(false);
  return (
    <>
      {showBrowse && <BrowseDoctors closeModal={setShowBrowse} />}

      <div className=" py-[10px] xl:pl-[50px] lg:pl-[30px] pl-[10px] xl:pr-[30px] lg:pr-[15px] pr-[10px] sm:flex hidden justify-between items-center header-main">
        <div className="" onClick={() => navigate("/home")}>
          <img
            className="w-[120px] h-[120px]"
            src={require("../../assets/images/home/Logo.png")}
            alt="logo"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <div onClick={() => navigate("/book-appointment")}>
            <Link className="border-r-[1px] border-hexGray pr-[20px] font-BasicSans font-semibold tracking-[3.6px] text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
              MAKE AN APPOINTMENT
            </Link>
          </div>
          <div className="pl-[20px]" onClick={() => setShowBrowse(!showBrowse)}>
            <Link className="font-BasicSans border-r-[1px] border-hexGray pr-[20px] font-semibold tracking-[3.6px] text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
              BROWSE
            </Link>
          </div>
          <div className="" onClick={() => navigate("/about-us")}>
            <Link className="border-r-[1px] border-hexGray px-[20px] font-BasicSans font-semibold tracking-[3.6px] text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
              ABOUT US
            </Link>
          </div>
          <div className="pl-[20px]" onClick={() => navigate("/login")}>
            <Link className="font-BasicSans tracking-[3.6px] font-semibold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px] pr-[10px] relative top-[5px] lg:top-[3px] xl:top-[0px]">
              LOGIN/SIGNUP
            </Link>
            <img
              src={require("../../assets/images/home/User.png")}
              alt="user"
              className="inline-block xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:bottom-[3px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
