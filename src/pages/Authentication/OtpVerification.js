import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import SideBanner from '../../components/common/SideBanner';
import LoginFooter from "../../components/common/LoginFooter";
import Otp from "../../components/common/Otp";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  otpSchema
} from "../../validations/auth.js";
const OtpVerification=()=> {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: joiResolver(otpSchema),
  });
  const onSubmit = async (data) => {
   navigate("/login")
  };

  const submitHandler = (e) => {
    handleSubmit(onSubmit)(e);
    // navigate("/");
  };

  const navigate=useNavigate();
  return (
    <div className="grid grid-cols-5">
      <SideBanner
        customStyle="col-span-2 h-[100vh] hidden lg:block"
        imgsrc={"assets/images/login/Register.jpg"}
      />
      <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
        <div className="max-h-[82vh] overflow-y-auto">
          <div className="w-full flex sm:justify-end justify-center">
            <div
              className="h-[130px] w-[130px] cursor-pointer relative sm:right-[30px] top-[10px]  flex items-center justify-center"
              onClick={() => navigate("/")}
            >
              <img
                className="w-[80%]"
                src={require("../../assets/images/icons/Logo.png")}
                alt="logo"
              />
            </div>
          </div>
          <div className="px-[40px] sm:px-[100px] relative text-center sm:text-left">
            <h1 className="text-[36px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
              OTP Verification
            </h1>
            <p className="font-BasicSans text-eastBayLight text-[20px]">
              Enter 4 digit verification code sent to your mobile number +1
              XXXXX XXX25
            </p>
            <div className="grid grid-cols-8 mt-[40px]">
              <div className=" col-start-2 lg:col-start-1 lg:col-span-7 col-span-6 grid grid-cols-6 gap-2 mb-[30px]">
                <Otp
                  control={control}
                  setValue={setValue}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="">
              <p className="inline-block font-BasicSansLight text-[15px] sm:text-[18px] lg:text-[20px] text-shadesofGray font-light tracking-[0px]">
                Didn’t receive OTP?
              </p>
              <Link className="inline-block font-BasicSansLight opacity-50 underline decoration-1 text-shadeBlue text-[15px] sm:text-[18px] lg:text-[20px] ml-[10px] font-light">
                Resend
              </Link>
            </div>
          </div>
        </div>
        <LoginFooter label="Continue" onClick={submitHandler} />
      </div>
    </div>
  );
}
export default OtpVerification;