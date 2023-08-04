import React, { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeaderContainer from "./container/HeaderContainer";

export default function AboutUs() {
  return (
    <HeaderContainer showHomeHeader={true} setDropShadow={true}>
      <div className="h-[550px] w-full hidden sm:block  relative">
        <img
          className="absolute -z-10 w-full h-full object-cover"
          src={require("../assets/images/about/aboutUsBg.png")}
          alt="about-us"
        />
        <h1 className=" font-PoppinsMedium text-[45px] pl-[40px] tracking-[10px] text-black z-10 pt-[250px]">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[15px] sm:py-[20px] lg:py-[30px] xl:py-[40px] px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] border-b-[1px]">
        <div className="col-span-1 mt-[35px]  ">
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
          <h1 className="text-codGray font-BasicSans text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-semibold">
            Know about Holmeddoc
          </h1>
          <p className="mt-[15px] text-[18px] font-BasicSans text-eastBay xl:max-w-[80%] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>

          <div className="flex justify-center items-center lg:block pt-[50px]">
            <button className="bg-shadeBlue text-white rounded-[30px] w-[150px] sm:w-[200px] lg:w-[280px] h-[35px] sm:h-[45px] xl:h-[50px] font-BasicSansLight text-[15px] lg:text-[20px]">
              Know More
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="h-full w-full"
            src={require("../assets/images/about/doctor-patient.png")}
            alt="doctor"
          />
        </div>
      </div>
      <div className="px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] my-[50px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
        <h1 className="text-codGray font-BasicSans text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-semibold">
          Our approach to healthcare
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-[50px] text-center">
          <div className="col-span-1 relative ">
            <div className="hidden md:block border-l-[2px] h-[60%] absolute right-0 top-[50px]"></div>
            <div className="h-[125px]">
              <img
                className=" w-[88px] h-[88px] mx-auto object-contain "
                src={require("../assets/images/about/Approach1.png")}
                alt="connect"
              />
            </div>

            <span className="text-codGray font-BasicSanstext-[20px] lg:text-[25px] font-semibold">
              Connect
            </span>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-eastBay px-[20px] md:px-[40px] py-[15px] md:py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
          <div className="col-span-1 relative">
            <div className="hidden md:block border-l-[2px] h-[60%] absolute right-0 top-[50px]"></div>
            <div className="h-[125px]">
              <img
                className=" w-[110px] h-[95px] mx-auto object-contain"
                src={require("../assets/images/about/Approach2.png")}
                alt="connect"
              />
            </div>

            <span className="text-codGray font-BasicSans text-[20px] lg:text-[25px] font-semibold">
              Trust
            </span>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-eastBay px-[20px] md:px-[40px] py-[15px] md:py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
          <div className="col-span-1 text-center">
            <div className="h-[125px]">
              <img
                className=" w-[110px] h-[95px] mx-auto object-contain "
                src={require("../assets/images/about/Approach3.png")}
                alt="connect"
              />
            </div>

            <span className="text-codGray font-BasicSans text-[20px] lg:text-[25px] font-semibold">
              Transparency
            </span>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-eastBay px-[20px] md:px-[40px] py-[15px] md:py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
        </div>
      </div>
      <div className="px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] my-[50px] bg-cyanBlue w-full pb-[90px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
        <h1 className="text-codGray font-BasicSans text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-semibold mb-[50px]">
          Strength Of the Team
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 flex-row justify-center items-center ">
          <div className="flex flex-col items-center">
            <img
              className="w-[190px] lg:w-[270px] mb-[40px] object-contain"
              src={require("../assets/images/about/Person1.png")}
              alt="person"
            />
            <p className=" font-HenrietteRegular font-bold text-[12px] lg:text-[20px] xl:text-[25px] text-codGray font-codGray">
              Alexander O. Babazadeh
            </p>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-codGray">
              Founder Of Holmeddoc
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[190px] lg:w-[270px] mb-[40px] object-contain"
              src={require("../assets/images/about/Person2.png")}
              alt="person"
            />
            <p className=" font-HenrietteRegular font-bold text-[12px] lg:text-[20px] xl:text-[25px] text-codGray font-codGray ">
              Alizeh Khan
            </p>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-codGray ">
              Co- Founder
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[190px] lg:w-[270px] mb-[40px] object-contain"
              src={require("../assets/images/about/Person3.png")}
              alt="person"
            />
            <p className=" font-HenrietteRegular font-bold text-[12px] lg:text-[20px] xl:text-[25px] text-codGray font-codGray ">
              Maheep
            </p>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-codGray ">
              Co- Founder & VP Operation
            </p>
          </div>
        </div>
        <div className="w-full mt-[40px]">
          <img
            className="w-[65px] h-[21px] float-right"
            src={require("../assets/images/about/LongArrowRight.png")}
            alt="arrow"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-[50px] my-[50px] pb-[90px]">
        <div>
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
          <h1 className="text-codGray font-BasicSans text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-semibold mb-[50px]">
            Our Mission
          </h1>
          <p className=" font-BasicSans text-[20px] text-eastBay lg:w-[80%]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div className="mt-[40px]">
          <img
            className="w-full h-full"
            src={require("../assets/images/about/Mission.png")}
            alt="mission"
          />
        </div>
      </div>
      <div className=" px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] my-[50px] pb-[90px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
        <h1 className="text-codGray font-BasicSans text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-semibold mb-[50px]">
          Our Partners
        </h1>
        <div className="grid grid-cols-3 flex-row pl-[18px] sm:pl-[20px] lg:pl-[30px] xl:pl-[40px]">
          <div className="w-full">
            <img
              className="w-[70px] h-[20px] md:h-[25px] lg:h-[30px] sm:w-full object-contain"
              src={require("../assets/images/about/Montefiore.png")}
              alt="mount"
            />
          </div>
          <div className="w-full">
            <img
              className="w-[110px] h-[20px] md:h-[30px] lg:h-[40px] sm:w-full object-contain"
              src={require("../assets/images/about/SCL.png")}
              alt="scl"
            />
          </div>
          <div className="w-full">
            <img
              className="w-[110px] h-[20px] md:h-[30px] lg:h-[40px] sm:w-full object-contain"
              src={require("../assets/images/about/Mount.png")}
              alt="montefiore"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
