import React from 'react'
import Header from '../components/common/Header';
import HeaderContainer from './container/HeaderContainer';

export default function SiteUnderConstruction() {
  return (
    <>
      <HeaderContainer showHomeHeader={true} setDropShadow={true}>
        <div className="relative h-full w-full my-[200px]">
          <div className="flex flex-col justify-center items-center ">
            <img
              className="h-[200px] w-[280px]"
              src={require("../assets/images/home/UnderMaintenance.png")}
              alt="construction"
            />
            <div className="text-center">
              <h2 className="text-[20px] font-BasicSansLight tracking-[2.5px] text-headingShade ">
                WE ARE COMING SOON
              </h2>
              <p className="text-headingShade font-BasicSansBold text-[18px] text-center tracking-[3px]">
                This page is under maintenance!
              </p>
              <div className="text-center mt-[40px]">
                <button className="bg-shadeBlue text-white px-[50px] py-[10px] rounded-[100px] text-[15px]">
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}
