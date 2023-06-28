import React from 'react'
import Header from './Header'
import Footer from "../Common/Footer"

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="h-[614px] w-full bg-aboutusBg bg-contain bg-no-repeat">
        <div>
          <img
            className="xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] w-[180px] h-[180px] relative left-[50%] lg:-translate-y-[40%] -translate-x-[50%] transition-all duration-[0.5s] ease-[ease]"
            src={require("../../assets/images/home/Logo.png")}
            alt=""
          />
        </div>
        <h1 className=" font-PoppinsMedium text-[45px] pl-[30px] tracking-[10px] text-black">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 py-[40px] px-[50px] border-b-[1px]">
        <div className="col-span-1 mt-[35px] ">
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
          <h1 className="text-codGray font-BasicSansBold text-[40px] tracking-[8px] font-bold">
            Know about Holmeddoc
          </h1>
          <p className="mt-[15px] text-[18px] font-BasicSans text-eastBay max-w-[80%] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
          <div className="mt-[20px]">
            <button className="bg-shadeBlue text-white rounded-[30px] w-[280px] h-[50px] font-BasicSansLight text-[20px]">
              Know More
            </button>
          </div>
        </div>
        <div>
          <img
            src={require("../../assets/images/about/doctor-patient.png")}
            alt="doctor"
          />
        </div>
      </div>
      <div className="px-[50px] my-[50px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[20px]"></div>
        <h1 className="text-codGray font-BasicSansBold text-[40px] tracking-[5px] font-bold">
          Our approach to healthcare
        </h1>
        <div className="grid grid-cols-3 gap-2 mt-[50px] text-center">
          <div className="col-span-1 border-r-[2px]">
            <img
              className=" w-[90px] h-[90px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach1.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[25px] font-bold">
              Connect
            </span>
            <p className=" font-BasicSans text-[20px] text-eastBay px-[40px] py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
          <div className="col-span-1 border-r-[2px]">
            <img
              className=" w-[171px] h-[116px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach2.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[25px] font-bold">
              Trust
            </span>
            <p className=" font-BasicSans text-[20px] text-eastBay px-[40px] py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
          <div className="col-span-1 text-center">
            <img
              className=" w-[133px] h-[90px] mb-[20px] mx-auto "
              src={require("../../assets/images/about/Approach3.png")}
              alt="connect"
            />
            <span className="text-codGray font-BasicSansBold text-[25px] font-bold">
              Transparency
            </span>
            <p className=" font-BasicSans text-[20px] text-eastBay px-[40px] py-[30px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea
            </p>
          </div>
        </div>
      </div>
      <div className="px-[50px] my-[50px] bg-cyanBlue w-full pb-[90px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
        <h1 className="text-codGray font-BasicSansBold text-[40px] tracking-[5px] font-bold mb-[50px]">
          Strength Of the Team
        </h1>
        <div className=" grid grid-cols-3 flex-row justify-center items-center ">
          <div className="text-center">
            <img
              className="w-[350px] h-[350px] mb-[40px]"
              src={require("../../assets/images/about/Person1.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[31px] text-codGray font-codGray">
              Alexander O. Babazadeh
            </p>
            <p className=" font-BasicSans text-[25px] text-codGray">
              Founder Of Holmeddoc
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-[350px] h-[350px] mb-[40px]"
              src={require("../../assets/images/about/Person2.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[31px] text-codGray font-codGray ">
              Alizeh Khan
            </p>
            <p className=" font-BasicSans text-[25px] text-codGray ">
              Co- Founder
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-[350px] h-[350px] mb-[40px]"
              src={require("../../assets/images/about/Person3.png")}
              alt="person"
            />
            <p className=" font-HenrietteBold text-[31px] text-codGray font-codGray ">
              Maheep
            </p>
            <p className=" font-BasicSans text-[25px] text-codGray ">
              Co- Founder & VP Operation
            </p>
            <div className="float-right">
              <img
                className="w-[65px] h-[21px]"
                src={require("../../assets/images/about/LongArrowRight.png")}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-[50px] my-[50px] pb-[90px]">
        <div>
          <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
          <h1 className="text-codGray font-BasicSansBold text-[40px] tracking-[8px] font-bold mb-[50px]">
            Our Mission
          </h1>
          <p className=" font-BasicSans text-[20px] text-eastBay max-w-[80%]">
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
            src={require("../../assets/images/about/Mission.png")}
            alt="mission"
          />
        </div>
      </div>
      <div className=" px-[50px] my-[50px] pb-[90px]">
        <div className="inline-block border-t-[5px] border-mustardShade w-[100px] h-[0px] mb-[10px] mt-[40px]"></div>
        <h1 className="text-codGray font-BasicSansBold text-[40px] tracking-[5px] font-bold mb-[50px]">
          Our Partners
        </h1>
        <div className="grid grid-cols-3 flex-row">
          <div className="pl-[120px]">
            <img
              className="w-[376px] h-[65px]"
              src={require("../../assets/images/about/Montefiore.png")}
              alt="mount"
            />
          </div>
          <div>
            <img
              className="w-[366px] h-[94px]"
              src={require("../../assets/images/about/SCL.png")}
              alt="scl"
            />
          </div>
          <div className="pr-[120px]">
            <img
              className="w-[300px] h-[100px]"
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
