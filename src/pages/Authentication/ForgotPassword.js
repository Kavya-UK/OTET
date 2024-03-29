import React, { useState } from "react";
import InputText from "../../components/common/InputText";
import { Link,useNavigate } from "react-router-dom";
import PasswordModal from "../../components/common/PasswordModal";
import SideBanner from "../../components/common/SideBanner";
import Otp from "../../components/common/Otp";
import LoginFooter from "../../components/common/LoginFooter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  forgotPass1Schema,
  forgotPass3Schema,
  forgotPass2Schema,
} from "../../validations/auth.js";

export default function ForgotPassword() {

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();
  const handleNext = () => {
    if(step === 3){
      setShowModal(true);
    } else{
      setStep(step + 1);
    }
  };
  const selected = "bg-shadeBlue text-white";
  const notSelected = "bg-white text-shadeBlue border-[1px] border-shadeBlue";
const {
  handleSubmit,
  control,
  setValue,
  register,
  formState: { errors },
} = useForm({
  mode: "onSubmit",
  resolver: joiResolver(
    step === 1
      ? forgotPass1Schema
      : step === 2
      ? forgotPass2Schema
      : forgotPass3Schema
  ),
});

const onSubmit = async (data) => {
   if (step === 3) {
     setShowModal(true);
   } else {
     setStep(step + 1);
   }
};

const submitHandler = (e) => {
  handleSubmit(onSubmit)(e);
  // navigate("/");
};
  return (
    <>
      {showModal && (
        <PasswordModal
          description="Your password has been changed successfully."
          title="SUCCESS!"
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className="grid grid-cols-5">
        <SideBanner
          customStyle="col-span-2 h-[100vh] hidden lg:block"
          imgsrc={"assets/images/login/Forgot.jpg"}
        />
        <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
          <div className="max-h-[82vh] overflow-y-auto h-[100vh]">
            <div className="w-full flex md:justify-end justify-center relative">
              <div
                className="h-[130px] w-[130px] md:absolute relative md:right-[30px] top-[10px] flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  className="w-[80%]"
                  src={require("../../assets/images/icons/Logo.png")}
                  alt="logo"
                />
              </div>
            </div>

            <div className="px-[40px] sm:px-[100px] relative text-center sm:text-left top-[80px]">
              <h1 className="text-[36px] font-BasicSans text-codGray mb-[10px] font-normal tracking-[4px]">
                Forgot your password?
              </h1>
              <p className="font-BasicSans text-eastBay text-[20px]">
                Don't worry, we will help you to reset.
              </p>
              <div className="flex justify-between relative w-[100%] sm:w-[80%] mt-[30px]">
                <div className="absolute w-[80%] border-t-[1px] border-shadeBlue top-[50%] left-[10%] "></div>
                <span
                  className={`rounded-[50%] relative font-BasicSansLight w-[50px] h-[50px] flex justify-center items-center ml-[20px] ${
                    step >= 1 ? selected : notSelected
                  }`}
                >
                  1
                </span>
                <span
                  className={`rounded-[50%] relative font-BasicSansLight w-[50px] h-[50px] flex justify-center items-center ${
                    step >= 2 ? selected : notSelected
                  }`}
                >
                  2
                </span>
                <span
                  className={`rounded-[50%] relative font-BasicSansLight w-[50px] h-[50px] flex justify-center items-center mr-[20px] ${
                    step >= 3 ? selected : notSelected
                  }`}
                >
                  3
                </span>
              </div>

              <div className="flex justify-between relative  w-[100%] sm:w-[80%] mt-[10px]">
                <span className="text-[15px] text-lightGray opacity-50 font-BasicSans flex justify-center items-center ">
                  Mobile Number
                </span>
                <span className="  text-[15px] text-lightGray opacity-50 font-BasicSans flex justify-center items-center relative left-[8px]">
                  OTP Verification
                </span>
                <span className=" text-[15px] text-lightGray font-BasicSans flex justify-center items-center relative left-[8px]">
                  Reset Password
                </span>
              </div>

              <div className="grid grid-cols-1 mt-[20px] text-left">
                {(step === 1 || step === 2) && (
                  <div>
                    <InputText
                      name={"phoneNumber"}
                      type="phonenumber"
                      label=" Mobile Number"
                      inputWidth={"w-full sm:w-[75%]"}
                      placeholder="XXX XXX XXXX"
                      control={control}
                      schema={
                        step === 1
                          ? forgotPass1Schema.phoneNumber
                          : forgotPass2Schema.phoneNumber
                      }
                      register={register}
                      isValidationSet={true}
                      setValue={setValue}
                      errorMessage={errors.phoneNumber?.message}
                    />
                  </div>
                )}
                {step === 2 && (
                  <>
                    <div className="">
                      <span className="text-[14px] text-lightGray font-BasicSans">
                        Enter OTP
                      </span>
                    </div>
                    <div className="grid grid-cols-10 mt-[10px] ">
                      <div className="col-span-8 col-start-1">
                        <div className="grid grid-cols-6 gap-1 mb-[10px] text-left">
                          <Otp
                            control={control}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <div className="">
                    <p className="inline-block font-BasicSansLight text-[15px] sm:text-[15px] lg:text-[15px] text-shadesofGray font-light tracking-[0px] mt-[30px]">
                      Please Note , You would receive an OTP to verify the
                      mobile number.
                    </p>
                  </div>
                )}
                {step === 2 && (
                  <div className="">
                    <p className="inline-block font-BasicSansLight text-[12px] sm:text-[14px] lg:text-[16px] text-shadesofGray font-light tracking-[0px]">
                      Didn’t receive OTP?
                    </p>
                    <Link className="inline-block font-BasicSansLight opacity-50 text-shadeBlue text-[12px] sm:text-[14px] lg:text-[16px] ml-[10px] font-light">
                      Resend
                    </Link>
                  </div>
                )}
              </div>
              {step === 3 && (
                <>
                  <div className="mt-[10px] text-left">
                    <InputText
                      name={"password"}
                      inputWidth={"w-full lg:w-[70%]"}
                      type="password"
                      placeholder={"*******"}
                      label={"Enter Password"}
                      control={control}
                      schema={forgotPass3Schema.password}
                      register={register}
                      isValidationSet={true}
                      setValue={setValue}
                      errorMessage={errors.password?.message}
                    />
                  </div>
                  <div className="mt-[20px] text-left">
                    <InputText
                      name={"confirmPassword"}
                      inputWidth={"w-full lg:w-[70%]"}
                      type="password"
                      placeholder={"*******"}
                      label={"Confirm Password"}
                      control={control}
                      schema={forgotPass3Schema.confirmPassword}
                      register={register}
                      isValidationSet={true}
                      setValue={setValue}
                      errorMessage={errors.confirmPassword?.message}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <LoginFooter label="Next" onClick={submitHandler} />
        </div>
      </div>
    </>
  );
}
