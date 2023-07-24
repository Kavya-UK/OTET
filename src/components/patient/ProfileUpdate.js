import React from 'react'
import InputText from '../common/InputText'

export default function ProfileUpdate() {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px]  ">
        <div className=" col-span-1 gap-2">
          <InputText
            type="text"
            label=" First name"
            inputWidth={"w-full"}
            placeholder="Your first name"
          />
        </div>
        <div className="">
          <InputText
            type="text"
            label=" Last name"
            inputWidth={"w-full"}
            placeholder="Your last name"
          />
        </div>
        <div className="col-span-2 pl-[80px]">
          <InputText
            type="text"
            label=" Apartment/Building/Unit"
            inputWidth={"w-full"}
            placeholder="Building Name,Apartment"
            customInputStyle=""
          />
        </div>
        <div>
          <label className="text-lightGray text-[18px] font-BasicSans mb-[5px] inline-block">
            Gender
          </label>
          <div className="h-[46px] w-full flex items-center justify-center relative ">
            <input
              className="h-full w-full rounded-[5px]  border-shadeGray px-[16px] outline-none placeholder:text-[13px] bg-white rounded-r-none border-y-[2px] border-l-[2px]"
              placeholder="Select"
              type="text"
            />
            <div className=" bg-[white] border-shadeGray h-full flex items-center justify-center border-[2px] rounded-r-[6px] px-3  ">
              <img
                src={require("../../assets/images/home/GreenArrowDown.png")}
                alt="Dropdown"
                className={`h-[8px] w-[16px] text-green transition-transform duration-300 
              }`}
              />
            </div>
          </div>
        </div>
        <InputText
          type="text"
          label="Birthday"
          inputWidth={"w-full"}
          placeholder="DD/MM/YYYY"
        />
        <div className="col-span-2 pl-[80px]">
          <InputText
            type="text"
            label="Street Address"
            inputWidth={"w-full"}
            placeholder="Locality"
          />
        </div>
        <div>
          <InputText
            type="phonenumber"
            label="Mobile Number"
            inputWidth={"w-full"}
            placeholder="XXX-XXXX-XXXXX"
            customInputStyle=""
          />
        </div>

        <InputText
          type="email"
          label="Email ID"
          inputWidth={"w-full"}
          placeholder="email@domain.com"
        />
        <div className="col-span-2 grid grid-cols-4 gap-4">
          <div className="col-span-2 pl-[80px]">
            <InputText
              type="text"
              label="City"
              inputWidth={"w-full"}
              placeholder="City"
            />
          </div>
          <div className="col-span-1">
            <div>
              <label className="text-lightGray text-[18px] font-BasicSans mb-[5px] inline-block">
                State
              </label>
              <div className="h-[46px] w-full flex items-center justify-center relative ">
                <input
                  className="h-full w-full rounded-[5px]  border-shadeGray px-[16px] outline-none placeholder:text-black placeholder:text-[12px] bg-white rounded-r-none border-y-[2px] border-l-[2px]"
                  placeholder="FL"
                  type="text"
                />
                <div className=" bg-[white] border-shadeGray h-full flex items-center justify-center border-[2px] rounded-r-[6px] px-3  ">
                  <img
                    src={require("../../assets/images/home/GreenArrowDown.png")}
                    alt="Dropdown"
                    className={`h-[8px] w-[16px] text-green transition-transform duration-300 
              }`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <InputText
              type="text"
              label="Zip"
              inputWidth={"w-full"}
              placeholder="32789"
              customInputStyle={"placeholder:text-black"}
            />
          </div>
        </div>
        <div>
          <label className="text-lightGray text-[18px] font-BasicSans mb-[5px] inline-block">
            Select your Insurance
          </label>
          <div className="h-[46px] w-full flex items-center justify-center relative ">
            <input
              className="h-full w-full rounded-[5px]  border-shadeGray px-[16px] outline-none placeholder:text-[13px] bg-white rounded-r-none border-y-[2px] border-l-[2px]"
              placeholder="Select"
              type="text"
            />
            <div className=" bg-[white] border-shadeGray h-full flex items-center justify-center border-[2px] rounded-r-[6px] px-3  ">
              <img
                src={require("../../assets/images/home/GreenArrowDown.png")}
                alt="Dropdown"
                className={`h-[8px] w-[16px] text-green transition-transform duration-300 
              }`}
              />
            </div>
          </div>
        </div>
        <InputText type="text" label="Policy Number" inputWidth={"w-full"} />
      </div>
      <div className="text-center mt-[70px]">
        <button className="text-white font-BasicSansBold text-[15px] tracking-[2px] bg-shadeBlue rounded-[100px] py-[12px] px-[20px]">
          UPDATE
        </button>
      </div>
    </>
  );
}
