import React, { forwardRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import InputText from "../../components/common/InputText";
import InputSelect from "../../components/common/InputSelect";
import { useNavigate } from "react-router-dom";
import SideBanner from "../../components/common/SideBanner";
import LoginFooter from "../../components/common/LoginFooter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "../../../src/validations/auth";
export default function Register() {
  const navigate = useNavigate();
    const [startDate, setStartDate] = useState("");

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    //  navigate("/otp-verification");
  };

  const handleRegister = (e) => {
    handleSubmit(onSubmit)(e);
     navigate("/otp-verification");
  };

  const optionListGender = ["Female", "Male"];
  const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
    let setValue = value;
    if (value === "") setValue = "Today";
    return (
      <div className="relative w-full">
        <div className="relative">
          <span
            onClick={onClick}
            ref={ref}
            className="h-[46px] w-[100%] sm:w-[85%] flex items-center rounded-[6px] border-[2px] cursor-pointer border-opacity-80 p-2  text-placeholderGray font-basic-sans-regular text-[14px] px-2  border-shadeGray opacity-100  pl-[1rem] "
          >
            {setValue}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-5">
      <SideBanner
        customStyle="col-span-2 h-[100vh] hidden lg:block"
        imgsrc={"assets/images/login/Register.jpg"}
      />
      <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
        <div className="max-h-[86vh] sm:max-h-[95vh] overflow-y-auto">
          <div className="w-full flex sm:justify-end justify-center">
            <div className="h-[130px] w-[130px] cursor-pointer relative sm:right-[30px] top-[10px] flex items-center justify-center">
              <img
                className="w-[80%] z-20"
                onClick={() => navigate("/")}
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
            <div className="grid grid-cols-1 sm:grid-cols-2  mt-[30px] text-left">
              <div>
                <InputText
                  name={"firstName"}
                  customLabelStyle="text-[14px]"
                  type="text"
                  label=" First Name"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="Your first name"
                  control={control}
                  schema={registerSchema.firstName}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.firstName?.message}
                />
              </div>
              <div>
                <InputText
                  name={"lastName"}
                  customLabelStyle="text-[14px]"
                  label=" Last Name"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  type="text"
                  placeholder="Your last name"
                  control={control}
                  schema={registerSchema.lastName}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.lastName?.message}
                />
              </div>
              <div>
                <InputSelect
                  name={"gender"}
                  customLabelStyle="text-[14px]"
                  label=" Gender"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  optionList={optionListGender}
                  control={control}
                  schema={registerSchema.gender}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.gender?.message}
                />
              </div>
              <div className="relative w-full ">
                <label className="text-[14px] text-lightGray font-BasicSans inline-block mb-[5px]">
                  DOB
                </label>
                <ReactDatePicker
                  className="test"
                  dateFormat="dd-MM-yyyy"
                  selected={startDate}
                  minDate={new Date()}
                  onChange={(date) => setStartDate(date)}
                  customInput={<DateInputComponent />}
                  closeOnScroll={true}
                />
              </div>
              <div>
                <InputText
                  name={"phone"}
                  customLabelStyle="text-[14px]"
                  type="phonenumber"
                  placeholder={"XXX XXX XXXX"}
                  noIcon={true}
                  label=" Mobile Number"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  control={control}
                  schema={registerSchema.phone}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.phone?.message}
                />
              </div>
              <div>
                <InputText
                  name={"email"}
                  customLabelStyle="text-[14px]"
                  type="email"
                  placeholder={"email@domain.com"}
                  label=" Email ID"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  control={control}
                  schema={registerSchema.email}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div>
                <InputText
                  name={"password"}
                  customLabelStyle="text-[14px]"
                  type="password"
                  placeholder={"*********"}
                  label=" Enter Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  control={control}
                  schema={registerSchema.password}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.password?.message}
                />
              </div>
              <div>
                <InputText
                  name={"confirmPassword"}
                  customLabelStyle="text-[14px]"
                  type="password"
                  placeholder={"*********"}
                  label=" Confirm Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  control={control}
                  schema={registerSchema.confirmPassword}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.confirmPassword?.message}
                />
              </div>
            </div>
          </div>
        </div>
        <LoginFooter label="Next" onClick={handleRegister} />
      </div>
    </div>
  );
}
