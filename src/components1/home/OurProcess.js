import React from 'react'

export default function OurProcess() {
  return (
    <div className="h-[100vh] ">
      <h1 className="text-[36px] px-[15px] sm:px-[25px] lg:px-[40px] xl:text-[44px] font-BasicSansBold text-codGray font-bold tracking-[9.72px] mb-[20px] ">
        Our Process
      </h1>
      <div className=" grid grid-cols-6 px-[15px] sm:px-[25px] lg:px-[40px] pt-[40px] pb-[60px] border-b-[2px] mb-[30px] gap-8">
        <div className="col-span-6 lg:col-span-2 flex justify-center items-center lg:block">
          <img
            className="hidden lg:inline-block lg:w-auto"
            src={require("../../assets/images/home/OurProcess.png")}
            alt="ourprocess"
          />
        </div>
        <div className="col-span-6 lg:col-span-4 mt-[40px] lg:mt-[40px]">
          <h1 className=" font-BasicSans text-[22px] sm:text-[30px] xl:text-[38px] text-codGray lg:text-left text-center">
            Instant appointment with Holistic Practitioners
          </h1>
          <p className=" font-BasicSans text-[14px] sm:text-[16px] xl:text-[20px] text-eastBay mt-[8px] lg:text-left text-center  mb-[80px]">
            Get onboarded and allow us to connect you a with a holistic
            practitioner near you!
          </p>
          <div className="grid grid-cols-3 pb-[50px]">
            <div className="col-span-1 border-r-[2px] mr-[5px] sm:mr-[10px] lg:mr-[30px] flex lg:block flex-col items-center">
              <span className=" font-BasicSansBold text-[28px] sm:text-[36px] lg:text-[45px] xl:text-[55px] tracking-[9.9px] font-bold text-codGray relative">
                <span className="absolute bottom-2 w-full h-[10px] sm:h-[20px] inline-block bg-cyanBlue z-[-1]"></span>
                01
              </span>
              <div className="mt-[20px]">
                <img
                  className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[70px] xl:h-[70px]"
                  src={require("../../assets/images/home/Find.png")}
                  alt="find"
                />
              </div>
              <div className="mt-[30px]">
                <p className="text-[16px] xl:text-[20px] font-BasicSans text-codGray ">
                  Find Holistic Practitioners
                </p>
              </div>
            </div>
            <div className="col-span-1 border-r-[2px] mr-[5px] sm:mr-[10px] lg:mr-[30px] flex lg:block flex-col items-center">
              <span className=" font-BasicSansBold text-[28px] sm:text-[36px] lg:text-[45px] xl:text-[55px] tracking-[9.9px] font-bold text-codGray relative">
                <span className="absolute bottom-2 w-full h-[10px] sm:h-[20px] inline-block bg-cyanBlue z-[-1]"></span>
                02
              </span>
              <div className="mt-[20px]">
                <img
                  className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[70px] xl:h-[70px]"
                  src={require("../../assets/images/home/Book.png")}
                  alt="find"
                />
              </div>
              <div className="mt-[30px]">
                <p className="text-[16px] xl:text-[20px] font-BasicSans text-codGray ">
                  Book appointment
                </p>
              </div>
            </div>
            <div className="col-span-1 flex lg:block flex-col items-center">
              <span className=" font-BasicSansBold text-[28px] sm:text-[36px] lg:text-[45px] xl:text-[55px] tracking-[9.9px] font-bold text-codGray relative">
                <span className="absolute bottom-2 w-full h-[10px] sm:h-[20px] inline-block bg-cyanBlue z-[-1]"></span>
                03
              </span>
              <div className="mt-[20px]">
                <img
                  className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] xl:w-[70px] xl:h-[70px]"
                  src={require("../../assets/images/home/Office.png")}
                  alt="find"
                />
              </div>
              <div className="mt-[30px]">
                <p className="text-[16px] xl:text-[20px] font-BasicSans text-codGray">
                  Office / Telehealth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
