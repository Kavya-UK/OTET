import React from 'react'
import { ReactComponent as SearchBar } from "../../assets/images/home/SearchBarIcon.svg";  
import { ReactComponent as Calendar } from "../../assets/images/home/Calendar.svg";  



export default function HomeBanner() {
  return (
    <div className="h-[800px] bg-cyanBlue w-full">
      <div>
        <img
          className="xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] w-[180px] h-[180px] relative left-[50%] lg:-translate-y-[40%] -translate-x-[50%] transition-all duration-[0.5s] ease-[ease]"
          src={require("../../assets/images/home/Logo.png")}
          alt=""
        />
      </div>
      <h1 className="text-titleBlack text-[36px] sm:text-[48px] lg:text-[68px] font-PoppinsRegular pt-[5%] text-center tracking-[6.8px] font-normal mb-[15px] transition-all duration-[0.5s] ease-[ease]">
        HOLISTIC
        <br className="sm:hidden block" />
        <img
          src={require("../../assets/images/home/M.png")}
          alt="title"
          className="inline-block sm:ml-[40px] lg:ml-[30px] h-[56px] sm:h-[70px] lg:h-[95px] w-[35px] sm:w-[40px] lg:w-[59px] relative bottom-[5px] transition-all duration-[0.5s] ease-[ease]"
        />
        EDICINE CONNECTING
      </h1>
      <h3 className="text-[24px] sm:text-[36px] lg:text-[46px] font-PoppinsItalic text-titleBlack italic tracking-[8.28px] text-center">
        Mind. Body. Soul
      </h3>
      <div className="grid grid-cols-12 rounded-[60px] sm:rounded-[87px] h-[184px] sm:h-[134px] border-[1px] bg-white mt-[90px] mx-[10px] sm:mx-[40px] transition-all duration-[0.5s] ease-[ease]">
        <div className="col-span-10 sm:col-span-11">
          <div className=" grid grid-cols-3 h-full">
            <div className="col-span-3 sm:col-span-1 sm:pr-[10px]  flex justify-around items-center">
              <span className="font-BasicSansBold sm:text-[20px] lg:text-[24px] xl:text-[28px] text-codGray tracking-[5.04px] font-bold">
                Location
              </span>
              <img
                className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative top-[4px] -right-[5px] sm:right-auto"
                src={require("../../assets/images/home/WhiteDropdown.png")}
                alt="dropdown"
              />
            </div>
            <div className="col-span-3 sm:col-span-1 flex justify-around items-center">
              <span className="font-BasicSansBold sm:text-[20px] lg:text-[24px] xl:text-[28px] text-codGray tracking-[5.04px] font-bold">
                Speciality
              </span>

              <img
                className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative top-[4px]"
                src={require("../../assets/images/home/WhiteDropdown.png")}
                alt="dropdown"
              />
            </div>
            <div className="col-span-3 sm:col-span-1 flex justify-around items-center ">
              <div className="flex gap-4">
                <Calendar className="w-[15px] sm:w-auto relative -top-[5px] sm:top-0" />
                <span className="font-BasicSansBold sm:text-[20px] lg:text-[24px] xl:text-[28px] text-codGray tracking-[5.04px] font-bold">
                  Today
                </span>
              </div>
              <img
                className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative -top-[5px] sm:top-[4px] -right-[5px] sm:right-auto"
                src={require("../../assets/images/home/WhiteDropdown.png")}
                alt="dropdown"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center">
          <SearchBar className="w-[80%] xl:w-[100%]" />
        </div>
      </div>
    </div>
  );
}
