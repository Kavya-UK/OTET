import React from 'react'
import Header from './Header'
import Footer from "../Common/Footer"

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="h-[550px] w-full hidden sm:block  relative">
        <img
          className="absolute -z-10 w-full h-full object-contain"
          src={require("../../assets/images/about/aboutUsBg.png")}
          alt="about-us"
        />
        <div>
          <img
            className="xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] w-[180px] h-[180px] relative left-[50%] lg:-translate-y-[40%] -translate-x-[50%] transition-all duration-[0.5s] ease-[ease]"
            src={require("../../assets/images/home/Logo.png")}
            alt=""
          />
        </div>
        <h1 className=" font-PoppinsMedium text-[45px] pl-[30px] tracking-[10px] text-black z-10">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-[15px] sm:py-[20px] lg:py-[30px] xl:py-[40px] px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] border-b-[1px]">
        <div className="col-span-1 mt-[35px]  ">
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
          <h1 className="text-codGray font-BasicSansBold text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[8px] font-bold">
            Know about Holmeddoc
          </h1>
          <p className="mt-[15px] text-[15px] lg:text-[20px] font-BasicSans text-eastBay xl:max-w-[80%] ">
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
        <div className="">
          <img
            className="h-full w-full"
            src={require("../../assets/images/about/doctor-patient.png")}
            alt="doctor"
          />
        </div>
        <div className="flex justify-center items-center lg:block">
          <button className="bg-shadeBlue text-white rounded-[30px] w-[150px] sm:w-[200px] lg:w-[280px] h-[35px] sm:h-[45px] xl:h-[50px] font-BasicSansLight text-[15px] lg:text-[20px]">
            Know More
          </button>
        </div>
      </div>
      <div className="px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] my-[50px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
        <h1 className="text-codGray font-BasicSansBold text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-bold">
          Our approach to healthcare
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-[50px] text-center">
          <div className="col-span-1 relative ">
            <div className="hidden md:block border-l-[2px] h-[60%] absolute right-0 top-[50px]"></div>
            <img
              className=" w-[100px] h-[100px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach1.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[20px] lg:text-[25px] font-bold">
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

            <img
              className=" w-[140px] h-[100px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach2.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[20px] lg:text-[25px] font-bold">
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
            <img
              className=" w-[140px] h-[100px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach3.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[20px] lg:text-[25px] font-bold">
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
        <h1 className="text-codGray font-BasicSansBold text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-bold mb-[50px]">
          Strength Of the Team
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 flex-row justify-center items-center ">
          <div className="flex flex-col items-center">
            <img
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[350px] lg:w-[250px] lg:h-[250px] xl:h-[350px] mb-[40px] object-contain"
              src={require("../../assets/images/about/Person1.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[15px] lg:text-[25px] xl:text-[30px] text-codGray font-codGray">
              Alexander O. Babazadeh
            </p>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-codGray">
              Founder Of Holmeddoc
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[350px] lg:w-[250px] lg:h-[250px] xl:h-[350px] mb-[40px] object-contain"
              src={require("../../assets/images/about/Person2.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[15px] lg:text-[25px] xl:text-[30px] text-codGray font-codGray ">
              Alizeh Khan
            </p>
            <p className=" font-BasicSans text-[15px] lg:text-[20px] text-codGray ">
              Co- Founder
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[350px] lg:w-[250px] lg:h-[250px] xl:h-[350px] mb-[40px] object-contain"
              src={require("../../assets/images/about/Person3.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[15px] lg:text-[25px] xl:text-[30px] text-codGray font-codGray ">
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
            src={require("../../assets/images/about/LongArrowRight.png")}
            alt="arrow"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-[50px] my-[50px] pb-[90px]">
        <div>
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
          <h1 className="text-codGray font-BasicSansBold text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[8px] font-bold mb-[50px]">
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
            src={require("../../assets/images/about/Mission.png")}
            alt="mission"
          />
        </div>
      </div>
      <div className=" px-[15px] sm:px-[25px] lg:px-[35px] xl:px-[50px] my-[50px] pb-[90px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
        <h1 className="text-codGray font-BasicSansBold text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] tracking-[5px] font-bold mb-[50px]">
          Our Partners
        </h1>
        <div className="grid grid-cols-3 flex-row pl-[20px] sm:pl-[30px] lg:pl-[60px] xl:pl-[80px]">
          <div className="w-full">
            <img
              className="w-[96px] h-[20px] md:h-[40px] lg:h-[48px] sm:w-full object-contain"
              src={require("../../assets/images/about/Montefiore.png")}
              alt="mount"
            />
          </div>
          <div className="w-full">
            <img
              className="w-[106px] h-[20px] md:h-[48px] lg:h-[64px] sm:w-full object-contain"
              src={require("../../assets/images/about/SCL.png")}
              alt="scl"
            />
          </div>
          <div className="w-full">
            <img
              className="w-[106px] h-[20px] md:h-[48px] lg:h-[64px] sm:w-full object-contain"
              src={require("../../assets/images/about/Mount.png")}
              alt="montefiore"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
