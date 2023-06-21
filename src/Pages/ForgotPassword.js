import React, { useState } from "react";
import InputText from "../Components/Common/InputText";
import InputOtpScreen from "../Components/Common/InputOtpScreen";
import { Link,useNavigate } from "react-router-dom";
import PasswordModal from "../Components/Common/PasswordModal";
export default function ForgotPassword() {
  const navigate=useNavigate();

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleNext = () => {
    if(step === 3){
      setShowModal(true);
      // navigate("/change-password")
    } else{
      setStep(step + 1);
    }
  };
  const selected = "bg-shadeBlue text-white";
  const notSelected = "bg-white text-shadeBlue border-[1px] border-shadeBlue";
  return (
    <>
      {showModal && (
        <PasswordModal
          description="Your password has been changed successfully."
          title="SUCCESS!"
          closeModal={()=>setShowModal(false)}
        />
      )}
      <div className="grid grid-cols-5">
        <div className="col-span-2 h-[100%] hidden lg:block">
          <img
            className="h-full object-cover hidden lg:block"
            src={require("../assets/images/login/Forgot.jpg")}
            alt="forgot-password"
          />
        </div>
        <div className="col-span-5 lg:col-span-3 relative">
          <div className="h-[148px] w-[148px] absolute right-[30px] top-[10px]  flex items-center justify-center">
            <img
              className="w-[80%]"
              src={require("../assets/images/icons/Logo.png")}
              alt="logo"
            />
          </div>
          <div className="px-[40px] sm:px-[100px] pt-[60px] text-left mt-[45px] min-h-[75vh]">
            <h1 className="text-[40px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
              Forgot your password?
            </h1>
            <p className="font-BasicSans text-eastBay">
              Don't worry, we will help you to reset.
            </p>
            <div className="flex justify-between relative w-[80%] mt-[30px]">
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

            <div className="flex justify-between relative w-[80%] mt-[10px]">
              <span className="text-[15px] text-lightGray opacity-50 font-BasicSans flex justify-center items-center">
                Mobile Number
              </span>
              <span className="  text-[15px] text-lightGray opacity-50 font-BasicSans flex justify-center items-center relative left-[8px]">
                OTP Verification
              </span>
              <span className=" text-[15px] text-lightGray font-BasicSans flex justify-center items-center relative left-[8px]">
                Reset Password
              </span>
            </div>

            <div className="grid grid-cols-1 mt-[50px]">
              {(step === 1 || step === 2) && (
                <div>
                  <InputText
                    type="phonenumber"
                    label=" Mobile Number"
                    inputWidth={"w-[100%] sm:w-[85%]"}
                    placeholder="XXX XXX XXXX"
                  />
                </div>
              )}
              {step === 2 && (
                <>
                  <div className="mt-[20px]">
                    <span className="text-[20px] text-lightGray font-BasicSans">
                      Enter OTP
                    </span>
                  </div>
                  <div className="grid grid-cols-10 mt-[20px]">
                    <div className="col-span-8 col-start-1">
                      <div className="grid grid-cols-6 gap-1 mb-[30px]">
                        <div>
                          <InputOtpScreen />
                        </div>
                        <div>
                          <InputOtpScreen />
                        </div>
                        <div>
                          <InputOtpScreen />
                        </div>
                        <div>
                          <InputOtpScreen />
                        </div>
                        <div>
                          <InputOtpScreen />
                        </div>
                        <div>
                          <InputOtpScreen />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="">
                  <p className="inline-block font-BasicSansLight text-[15px] sm:text-[18px] lg:text-[20px] text-shadesofGray font-light tracking-[0px]">
                    Please Note , You would receive an OTP to verify the mobile
                    number.
                  </p>
                </div>
              )}
              {step === 2 && (
                <div className="">
                  <p className="inline-block font-BasicSansLight text-[15px] sm:text-[18px] lg:text-[20px] text-shadesofGray font-light tracking-[0px]">
                    Didn’t receive OTP?
                  </p>
                  <Link className="inline-block font-BasicSansLight opacity-50 text-shadeBlue text-[15px] sm:text-[18px] lg:text-[20px] ml-[10px] font-light">
                    Resend
                  </Link>
                </div>
              )}
            </div>
            {step === 3 && (
              <>
                <div className="mt-[30px]">
                  <InputText
                    type="password"
                    placeholder={"*******"}
                    label={"Enter Password"}
                  />
                </div>
                <div className="mt-[20px]">
                  <InputText
                    type="password"
                    placeholder={"*******"}
                    label={"Confirm Password"}
                  />
                </div>
              </>
            )}
          </div>

          <div className="w-full bg-shadeBlue h-[90px] flex justify-end items-center mt-[50px] ">
            <button
              onClick={handleNext}
              className="bg-white h-[40px] w-[20%] text-codGrayLight rounded-[20px] mr-[30px] justify-end items-center font-BasicSans"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
