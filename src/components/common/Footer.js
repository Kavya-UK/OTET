import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import {TfiYoutube} from "react-icons/tfi"
import FooterMobile from './FooterMobile';
import { useNavigate } from 'react-router-dom';
import { fetchInsurance } from '../../redux/thunk/insurance.thunk';
import { fetchFooterSpeciality } from '../../redux/thunk/speciality.thunk';
import { useDispatch, useSelector } from "react-redux";


export default function Footer() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [showAllInsurance,setshowAllInsurance]=useState(false)
   const insurancelist = useSelector(
     (state) => state.insurance.insurance
   );
   const specialityFooterList = useSelector(
     (state) => state.speciality.footerSpecialityList
   );

  useEffect(()=>{
dispatch(fetchInsurance());
dispatch(fetchFooterSpeciality());
  },[])

  const navigateToStore = (type) => {
    if (type === "apple") {
      window.open("https://www.apple.com/", "_blank");
    } else if (type === "android") {
      window.open("https://play.google.com/", "_blank");
    }
  };
  const handleClick = (type) => {
    if (type === "home") {
      navigate("/");
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else if (type === "aboutUs") {
      navigate("/about-us");
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else if (type === "speciality") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
   const handleSpecialitySearch = (title, id) => {
     let url = "/doctor-listing?";
     url = `${url}specialty=${title}_${id}`;
     navigate(url);
   };
  return (
    <div className="bg-cyanBlue py-[40px] px-[40px]">
      <div className="hidden sm:grid grid-cols-5 gap-9 mt-[40px]">
        <div className="col-span-2 lg:col-span-1">
          <h3 className=" font-BasicSans text-[23px] tracking-[0.87px] font-semibold mb-[20px]">
            Holmeddoc
          </h3>
          <Link
            to={"/"}
            onClick={() => handleClick("home")}
            className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]"
          >
            Home
          </Link>
          <Link
            onClick={() => handleClick("aboutUs")}
            to={"/about-us"}
            className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]"
          >
            About us
          </Link>
          <Link className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Help
          </Link>
          <div>
            <h3 className=" font-BasicSans  text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-semibold my-[20px]">
              Contact Us
            </h3>
            <p
              className="font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px] cursor-pointer"
              onClick={() => window.open(`mailto:example@gmail.com`)}
            >
              info@holmeddoc.com
            </p>
            <p
              className="font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px] cursor-pointer"
              onClick={() => window.open(`tel:+91 123456789`)}
            >
              +1 000 000 0000
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className=" font-BasicSans text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-semibold mb-[20px]">
            Insurance Providers
          </h3>
          {insurancelist
            .slice(0, showAllInsurance ? insurancelist.length : 5)
            .map((list, id) => {
              return (
                <Link
                  key={list.insurance_company_name}
                  className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]"
                >
                  {list.insurance_company_name}
                </Link>
              );
            })}
          {
            <span
              onClick={() => setshowAllInsurance(!showAllInsurance)}
              className="inline-block font-medium font-BasicSans text-black tracking-[2px] pb-[10px] underline cursor-pointer"
            >
              {showAllInsurance ? "View Less" : "View All"}
            </span>
          }
        </div>
        <div className="col-span-2 lg:col-span-1 lg:pl-[40px]">
          <h3 className=" font-BasicSans text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-semibold mb-[20px]">
            Major Specialities
          </h3>
          {specialityFooterList.map((spec) => {
            return (
              <Link
                to={`/doctor-listing?specialty=${spec.medical_speciality_name}_${spec.id}`}
                key={spec.medical_speciality_name}
                className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]"
                
              >
                {spec.medical_speciality_name}
              </Link>
            );
          })}
          <Link
            onClick={() => handleClick("speciality")}
            to="/all-speciality"
            className="block font-medium font-BasicSans text-black tracking-[2px] pb-[10px] underline cursor-pointer"
          >
            View All
          </Link>{" "}
        </div>
        <div className="col-span-3 lg:col-span-2 lg:pl-[40px]">
          <h3 className=" font-BasicSans text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-semibold mb-[20px] ">
            For Doctor and Healthcare providers
          </h3>
          <Link className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Sign up with Holmeddoc
          </Link>
          <Link className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            For Developer Teams
          </Link>
          <Link className="block font-medium font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Get the Holmeddoc App
          </Link>
          <div className="inline-block mt-[15px]">
            <img
              className="inline-block mr-[20px] cursor-pointer w-[40%]"
              src={require("../../assets/images/home/AppStore.png")}
              alt="appstore"
              onClick={() => navigateToStore("apple")}
            />
            <img
              className="inline-block cursor-pointer w-[40%]"
              src={require("../../assets/images/home/Playstore.png")}
              alt="playstore"
              onClick={() => navigateToStore("android")}
            />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <FooterMobile />
      </div>
      <p className=" font-BasicSansLight font-medium tracking-[0.9px] text-black mt-[50px]">
        The content provided here or elsewhere on the Holmeddoc website, mobile
        application, newsletters or similar communication is provided for
        general informational purpose only. Holmeddoc Inc does not provide any
        medical advice, diagnose or treatment of any kind. Always contact your
        doctor or healthcare service provider directly regarding any issues,
        questions or doubts pertaining to your healthcare or medication.
      </p>
      <div className="flex justify-center items-center mt-[20px] cursor-pointer">
        <img
          onClick={() => handleClick("home")}
          className="w-[100px] h-[100px] sm:w-[195px] sm:h-[176px]"
          src={require("../../assets/images/home/Footer.png")}
          alt="footer"
        />
      </div>
      <div className="flex justify-center items-center mt-[20px] relative">
        <div>
          <span className=" cursor-pointer inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Terms
          </span>
          <span className=" cursor-pointer inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Privacy Policy
          </span>
          <span className=" cursor-pointer inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Do not Sell my personal information
          </span>
          <span className=" cursor-pointer inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Site map
          </span>
        </div>
        <div className="float-right flex flex-row gap-2 xl:absolute right-0">
          <span className=" w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center cursor-pointer">
            <TiSocialFacebook />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center cursor-pointer">
            <AiOutlineInstagram />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center cursor-pointer">
            <TiSocialTwitter />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center cursor-pointer">
            <TfiYoutube />
          </span>
        </div>
      </div>
    </div>
  );
}
