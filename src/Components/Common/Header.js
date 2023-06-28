import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate=useNavigate();

  return (
    <div className=" py-[30px] xl:pl-[75px] lg:pl-[50px] pl-[30px] xl:pr-[50px] lg:pr-[30px] pr-[10px] justify-between sm:flex hidden">
      <div className="flex flex-row">
        <div className="">
          <Link className="border-r-[1px] border-hexGray pr-[20px] font-BasicSansBold tracking-[3.6px] font-bold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
            MAKE AN APPOINTMENT
          </Link>
        </div>
        <div className="pl-[20px] ">
          <Link className="font-BasicSansBold tracking-[3.6px] font-bold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
            BROWSE
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="" onClick={()=>navigate("/about-us")}>
          <Link className="border-r-[1px] border-hexGray pr-[20px] font-BasicSansBold tracking-[3.6px] font-bold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px]">
            ABOUT US
          </Link>
        </div>
        <div
          className="pl-[20px] flex flex-row"
          onClick={() => navigate("/login")}
        >
          <Link className="font-BasicSansBold tracking-[3.6px] font-bold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px] pr-[10px] relative top-[5px] lg:top-[3px] xl:top-[0px]">
            LOGIN/SIGNUP
          </Link>
          <img
            src={require("../../assets/images/home/User.png")}
            alt="user"
            className="xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:bottom-[3px]"
          />
        </div>
      </div>
    </div>
  );
}
