import React from 'react'

export default function DownloadApp() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-[50px] px-[25px] lg:px-[55px] mb-[50px]">
      <div className="col-span-2 lg:col-span-1">
        <h1 className=" font-BasicSans text-[30px] sm:text-[38px] xl:text-[48px] text-codGray tracking-[8px] font-semibold text-center lg:text-left md:leading-[70px]">
          Download Holmeddoc
          <br className="hidden lg:block"/> Mobile App
        </h1>
        <div className="lg:pl-[30px] text-center lg:text-left">
          <p className="mt-[60px] text-[14px] sm:text-[18px] xl:text-[20px] font-BasicSans text-eastBay pb-[15px]">
            Seamless way to find and book appointments for a holistic cure.
          </p>
          <p className=" text-[14px] sm:text-[18px] xl:text-[20px] font-BasicSans text-eastBay pb-[15px]">
            Search based on speciality and select the doctor you wish to
            continue with.
          </p>
          <p className="text-[14px] sm:text-[18px] xl:text-[20px] font-BasicSans text-eastBay pb-[15px]">
            Select the date and time based on the availability and book the
            appointment.
          </p>
          <p className="text-[14px] sm:text-[18px] xl:text-[20px] font-BasicSans text-eastBay pb-[15px]">
            Get online/In-person consultation from Doctors near you.
          </p>
          <div className="inline-block mt-[15px]">
            <img
              className="w-[100px] sm:w-auto inline-block mr-[20px]"
              src={require("../../assets/images/home/AppStore.png")}
              alt="appstore"
            />
            <img
              className="w-[100px] sm:w-auto inline-block"
              src={require("../../assets/images/home/Playstore.png")}
              alt="playstore"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 flex justify-center items-center">
        <img
          className="w-[80%]"
          src={require("../../assets/images/home/Mobile.png")}
          alt="mobile"
        />
      </div>
    </div>
  );
}
