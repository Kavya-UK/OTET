import React from 'react'

export default function ListPractise() {
  return (
    <div className="">
      <div className="grid grid-cols-6 xl:grid-cols-5  bg-cyanBlue  w-full pl-[20px] sm:pl-[30px] lg:pl-[50px]">
        <div className="col-span-6 lg:col-span-3 xl:col-span-2 -translate-y-[5%] h-[105%]">
          <img
            className="h-full"
            src={require("../../assets/images/home/Practice.png")}
            alt="check"
          />
        </div>
        <div className="col-span-6 lg:col-span-3 xl:col-span-3 pl-[0px] sm:pl-[50px] xl:pl-[80px]">
          <h1 className=" font-BasicSans text-[30px] sm:text-[38px] xl:text-[48px] text-blackShade tracking-[3.79px] mt-[100px]">
            Let's connect your practice
          </h1>
          <p className="text-eastBay font-BasicSans text-[14px] sm:text-[18px] xl:text-[20px] pt-[20px] sm:pt-[50px] pb-[20px]">
            Get onboarded and allow us to connect the patient with you.
          </p>
          <p className="text-eastBay font-BasicSans text-[14px] sm:text-[18px] xl:text-[20px] pb-[20px]">
            Answer medical queries & showcase your expertise
          </p>
          <p className="text-eastBay font-BasicSans text-[14px] sm:text-[18px] xl:text-[20px]">
            Grow your reach and experience.
          </p>
          <div className="mt-[50px] flex lg:block justify-center">
            <button className="font-BasicSans text-[16px] xl:text-[18px] bg-shadeBlue text-white rounded-[50px] h-[52px] w-[75%] sm:w-[285px] xl:w-[325px]">
              List your practice on Holmeddoc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
