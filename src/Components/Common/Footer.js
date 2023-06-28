import React from 'react'
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import {TfiYoutube} from "react-icons/tfi"

export default function Footer() {
  return (
    <div className="bg-cyanBlue py-[40px] px-[40px]">
      <div className="  grid grid-cols-5 gap-9 mt-[40px]">
        <div className="col-span-2 lg:col-span-1">
          <h3 className=" font-BasicSansBold text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-bold mb-[20px]">
            Holmeddoc
          </h3>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Home
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            About us
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Help
          </Link>
          <div>
            <h3 className=" font-BasicSansBold  text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-bold my-[20px]">
              Contact Us
            </h3>
            <p className="text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
              info@holmeddoc.com
            </p>
            <p className="text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
              +1 000 000 0000
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className=" font-BasicSansBold text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-bold mb-[20px]">
            Insurance Providers
          </h3>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            UHC
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Humana
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Aetna
          </Link>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:pl-[40px]">
          <h3 className=" font-BasicSansBold text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-bold mb-[20px]">
            Major Specialities
          </h3>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Acupuncture
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Aromatherapy
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Alternative Medicine
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Yoga
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Reiki
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Holistic Medicine
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px] underline">
            View All
          </Link>
        </div>
        <div className="col-span-3 lg:col-span-2 lg:pl-[40px]">
          <h3 className=" font-BasicSansBold text-[16px] lg:text-[20px] xl:text-[25px] tracking-[0.87px] font-bold mb-[20px] ">
            For Doctor and Healthcare providers
          </h3>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Sign up with Holmeddoc
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            For Developer Teams
          </Link>
          <Link className="block text-[14px] lg:text-[18px] xl:text-[20px] font-BasicSans text-black tracking-[3.6px] pb-[10px]">
            Get the Holmeddoc App
          </Link>
          <div className="inline-block mt-[15px]">
            <img
              className="inline-block mr-[20px]"
              src={require("../../assets/images/home/AppStore.png")}
              alt="appstore"
            />
            <img
              className="inline-block"
              src={require("../../assets/images/home/Playstore.png")}
              alt="playstore"
            />
          </div>
        </div>
      </div>
      <p className=" font-BasicSansLight text-[14px] lg:text-[18px] xl:text-[20px] tracking-[0.9px] text-black mt-[50px]">
        The content provided here or elsewhere on the Holmeddoc website, mobile
        application, newsletters or similar communication is provided for
        general informational purpose only. Holmeddoc Inc does not provide any
        medical advice, diagnose or treatment of any kind. Always contact your
        doctor or healthcare service provider directly regarding any issues,
        questions or doubts pertaining to your healthcare or medication.
      </p>
      <div className="flex justify-center items-center mt-[20px]">
        <img
          className="w-[100px] h-[100px] sm:w-[195px] sm:h-[176px]"
          src={require("../../assets/images/home/Footer.png")}
          alt="footer"
        />
      </div>
      <div className="flex justify-center items-center mt-[20px] relative">
        <div>
          <span className=" inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Terms
          </span>
          <span className="inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Privacy Policy
          </span>
          <span className=" inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Do not Sell my personal information
          </span>
          <span className=" inline-block p-[10px] lg:p-[20px] text-[12px] sm:text-[14px] lg:text-[18px] font-BahnschriftRegular text-black">
            Our Site map
          </span>
        </div>
        <div className="float-right flex flex-row gap-2 xl:absolute right-0">
          <span className=" w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center">
            <TiSocialFacebook />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center">
            <AiOutlineInstagram />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center">
            <TiSocialTwitter />
          </span>
          <span className="w-[36px] h-[36px] border-[1px] border-black rounded-[50%] flex justify-center items-center">
            <TfiYoutube />
          </span>
        </div>
      </div>
    </div>
  );
}
