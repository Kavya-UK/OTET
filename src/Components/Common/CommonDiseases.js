import React from 'react'

export default function CommonDiseases() {
  return (
    <div className="h-[300px] w-full bg-cyanBlue border-[1px] border-Grayish">
      <h1 className="text-codGray text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[54px] font-BasicSansBold font-bold tracking-[6px] sm:tracking-[9.72px] mt-[30px] ml-[15px] sm:ml-[38px] text-center sm:text-left">
        Most common health concerns
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-[50px]">
        <div className="col-span-1 flex justify-around ">
          <div className="w-full flex mx-[10px] sm:mx-[45px] border-b-[2px] border-darkGrayish justify-between pb-[15px] lg:pb-[30px]">
            <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
              Fatigue
            </span>
            <img
              className="h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px]"
              src={require("../../assets/images/home/BlackDropdown.png")}
              alt="homedropdown"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-around ">
          <div className="w-full flex mx-[10px] sm:mx-[45px] border-b-[2px] border-darkGrayish justify-between pb-[15px] lg:pb-[30px]">
            <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
              High Blood Pressure
            </span>
            <img
              className="h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px]"
              src={require("../../assets/images/home/BlackDropdown.png")}
              alt="homedropdown"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-around mt-[20px] sm:mt-[0px]">
          <div className="w-full flex mx-[10px] sm:mx-[45px] border-b-[2px] border-darkGrayish justify-between pb-[15px] lg:pb-[30px]">
            <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
              Diabetes
            </span>
            <img
              className="h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px]"
              src={require("../../assets/images/home/BlackDropdown.png")}
              alt="homedropdown"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-around mt-[20px] sm:mt-[0px]">
          <div className="w-full flex mx-[10px] sm:mx-[45px] border-b-[2px] border-darkGrayish justify-between pb-[15px] lg:pb-[30px]">
            <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
              Obesity
            </span>
            <img
              className="h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px]"
              src={require("../../assets/images/home/BlackDropdown.png")}
              alt="homedropdown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
