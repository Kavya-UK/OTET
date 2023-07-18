import React from 'react'
import InputText from "../../Components/common/InputText";
import InputSelect from '../../Components/common/InputSelect';
import { useNavigate } from 'react-router-dom';
import SideBanner from "../../Components/common/SideBanner";
import LoginFooter from '../../Components/common/LoginFooter';

export default function Register() {
  const navigate=useNavigate();

  const optionListGender=["Female","Male"];

  return (
    <div className="grid grid-cols-5">
      <SideBanner
        customStyle="col-span-2 h-[100vh] hidden lg:block"
        imgsrc={"assets/images/login/Register.jpg"}
      />
      <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
        <div className="max-h-[82vh] overflow-y-auto">
          <div className="w-full flex sm:justify-end justify-center">
            <div className="h-[130px] w-[130px] relative sm:right-[30px] top-[10px] flex items-center justify-center">
              <img
                className="w-[80%]"
                src={require("../../assets/images/icons/Logo.png")}
                alt="logo"
              />
            </div>
          </div>
          <div className="px-[40px] sm:px-[100px] relative sm:-top-[80px] top-0 text-center sm:text-left">
            <h1 className="text-[36px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
              Register
            </h1>
            <p className="font-BasicSans text-eastBayLight text-[20px]">
              Let's get you setup so that you can manage your profile and start
              booking appointments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[50px] text-left">
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  type="text"
                  label=" First Name"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="Your first name"
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  label=" Last Name"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  type="text"
                  placeholder="Your last name"
                />
              </div>
              <div>
                <InputSelect
                  customLabelStyle="text-[16px]"
                  label=" Gender"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  optionList={optionListGender}
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  noIcon={true}
                  type="date"
                  label=" DOB"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  type="phonenumber"
                  placeholder={"XXX XXX XXXX"}
                  noIcon={true}
                  label=" Mobile Number"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  type="email"
                  placeholder={"email@domain.com"}
                  label=" Email ID"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  type="password"
                  placeholder={"*********"}
                  label=" Enter Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                />
              </div>
              <div>
                <InputText
                  customLabelStyle="text-[16px]"
                  type="password"
                  placeholder={"*********"}
                  label=" Confirm Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                />
              </div>
            </div>
          </div>
        </div>
        <LoginFooter
          label="Next"
          onClick={() => navigate("/otp-verification")}
        />
      </div>
    </div>
  );
}
