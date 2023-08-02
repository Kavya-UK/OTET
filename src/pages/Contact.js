import React from 'react'
import Header from '../components/common/Header'

export default function Contact() {
  return (
    <>
      <Header setDropShadow={true} />
      <div className="h-[380px] w-full relative flex justify-center items-center mb-[20px]">
        <img
          className="w-full h-full absolute object-cover"
          src={require("../assets/images/job.jpeg")}
          alt="contact"
        />
        <h2 className="text-white font-BasicSansBold text-[40px] z-30">
          Contact us
        </h2>
      </div>
      <h3 className=" font-BasicSans text-black text-[35px] text-center">
        Get in touch with us
      </h3>
      <p className="text-[25px] font-BasicSans text-black text-center mb-[20px]">
        Info
      </p>
      <p className=" text-eastBay font-BasicSansLight text-[20px] text-center mb-[40px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore{" "}
        <br className="hidden lg:block" /> magna sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna
      </p>
      <div className=" flex justify-around mb-[90px] ">
        <div className="shadow-[0px_4px_25px_#47C7C626] w-[250px] h-[250px] flex flex-col  items-center space-y-3">
          <div className="w-[100px] h-[75px] mt-[20px]">
            <img
              className="w-full h-full cursor-pointer"
              src={require("../assets/images/profile/Mail.png")}
              alt="mail"
            />
          </div>

          <p className="text-black font-BasicSans text-[20px] cursor-pointer">
            info@holmedddoc.com
          </p>
          <p className="text-black font-BasicSans text-[20px] mt-[10px] cursor-pointer">
            info@holmedddoc.com
          </p>
        </div>
        <div className="shadow-[0px_4px_25px_#47C7C626] w-[250px] h-[250px] flex flex-col  items-center space-y-3">
          <div className="w-[100px] h-[75px] mt-[20px]">
            <img
              className="w-full h-full cursor-pointer"
              src={require("../assets/images/profile/Number.png")}
              alt="number"
            />
          </div>

          <p className="text-black font-BasicSans text-[20px] cursor-pointer">
            +1 000 000 000
          </p>
          <p className="text-black font-BasicSans text-[20px] mt-[10px] cursor-pointer">
            +1 000 000 000
          </p>
        </div>
        <div className="shadow-[0px_4px_25px_#47C7C626] w-[250px] h-[250px] flex flex-col items-center space-y-3 ">
          <div className="w-[100px] h-[75px] mt-[20px]">
            <img
              className="w-full h-full cursor-pointer"
              src={require("../assets/images/profile/Address.png")}
              alt="address"
            />
          </div>
          <div className="w-[150px] h-[100px] border-[1px] border-gray-300 "></div>
        </div>
      </div>
    </>
  );
}
