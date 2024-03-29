import React from 'react'
import InputText from '../common/InputText'

export default function ProfileUpdate() {
  return (
    <>
      <div className="w-full grid grid-cols-4  px-[50px] gap-x-4">
        <div className="col-span-4 xl:col-span-2 grid grid-cols-2 gap-x-4 ">
          <div className=" col-span-4 md:col-span-1 ">
            <InputText
              type="text"
              label=" First name"
              inputWidth={"w-full"}
              placeholder="Your first name"
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <InputText
              type="text"
              label=" Last name"
              inputWidth={"w-full"}
              placeholder="Your last name"
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <label className="text-lightGray text-[14px] font-BasicSans mb-[5px] inline-block">
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
          <div className="col-span-4 md:col-span-1">
            <InputText
              type="text"
              label="Birthday"
              inputWidth={"w-full"}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <InputText
              type="phonenumber"
              label="Mobile number"
              inputWidth={"w-full"}
              placeholder="XXX-XXXX-XXXXX"
              customInputStyle=""
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <InputText
              type="email"
              label="Email ID"
              inputWidth={"w-full"}
              placeholder="email@domain.com"
            />
          </div>
          <div className="col-span-4 md:col-span-1">
            <label className="text-lightGray text-[14px] font-BasicSans mb-[5px] inline-block">
              Select your insurance
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
          <div className="col-span-4 md:col-span-1">
            <InputText
              type="text"
              label="Policy number"
              inputWidth={"w-full"}
            />
          </div>
        </div>
        <div className="block col-span-4 xl:col-span-2 ">
          <div className="col-span-1 ">
            <InputText
              type="text"
              label=" Apartment/Building/Unit"
              inputWidth={"w-full"}
              placeholder="Building Name,Apartment"
              customInputStyle=""
            />
          </div>

          <div className="col-span-1  ">
            <InputText
              type="text"
              label="Street address"
              inputWidth={"w-full"}
              placeholder="Locality"
            />
          </div>

          <div className="col-span-1  grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-2 ">
              <InputText
                type="text"
                label="City"
                inputWidth={"w-full"}
                placeholder="City"
              />
            </div>
            <div className="col-span-4 md:col-span-1">
              <div>
                <label className="text-lightGray text-[14px] font-BasicSans mb-[5px] inline-block">
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
            <div className="col-span-4 md:col-span-1">
              <InputText
                type="text"
                label="Zip"
                inputWidth={"w-full"}
                placeholder="32789"
                customInputStyle={"placeholder:text-black"}
              />
            </div>
          </div>
          {/* <div className=" invisible">
            <InputText
              type="text"
              label=" Apartment/Building/Unit"
              inputWidth={"w-full"}
              placeholder="Building Name,Apartment"
              customInputStyle=""
            />
          </div> */}
        </div>
      </div>
      <div className="text-center mt-[70px]">
        <button className="text-white font-BasicSansBold text-[15px] tracking-[2px] bg-shadeBlue rounded-[100px] py-[12px] px-[20px]">
          UPDATE
        </button>
      </div>
    </>
  );
}
