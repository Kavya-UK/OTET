import React from 'react'
import Header from '../components/common/Header';
export default function NoConnectivity() {
  return (
    <>
      <Header setDropShadow={true} />
      <div className="relative h-full w-full mt-[200px]">
        <div className="flex flex-col justify-center items-center ">
          <img
            className="h-[200px] w-[200px]"
            src={require("../assets/images/home/no connectivity .png")}
            alt="no-internet"
          />
          <div>
            <h2 className="text-[25px] font-BasicSansBold tracking-[2px] text-headingShade">
              Something went wrong!
            </h2>
            <p className="text-headingShade font-BasicSansLight text-[18px] text-center">
              Slow or no internet connection,
              <br /> Please check your internet settings
            </p>
            <div className='text-center mt-[40px]'>
              <button className='bg-shadeBlue text-white px-[50px] py-[10px] rounded-[100px] text-[15px]'>Try Again</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
