import React from 'react'
import InputText from "../../components/common/InputText"
import {Link, useNavigate} from 'react-router-dom'
import InputCheckbox from '../../components/common/InputCheckbox';
import SideBanner from '../../components/common/SideBanner';
import LoginFooter from "../../components/common/LoginFooter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginSchema } from "../../validations/auth.js";
import { userLogin } from '../../redux/thunk/user.thunk';
import { useDispatch } from 'react-redux';

 const Login=()=> {
  const navigate= useNavigate();
  const dispatch = useDispatch();

const {
  handleSubmit,
  control,
  setValue,
  register,
  formState: { errors },
} = useForm({
  mode: "onSubmit",
  resolver: joiResolver(loginSchema),
});

 const onSubmit = async (data) => {
  console.log(data);
   navigate("/my-appointments");
  const loginData = {phone: data.phoneNumber, password: data.password}
  dispatch(userLogin(loginData));

 };

 const handleLogin = (e) => {
   handleSubmit(onSubmit)(e);
  // navigate("/");
 };

  return (
    <div className="grid grid-cols-5">
      <SideBanner
        customStyle="col-span-2 h-[100vh] hidden lg:block"
        imgsrc={"assets/images/login/Login.jpg"}
      />
      <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
        <div className="max-h-[82vh] overflow-y-auto h-[100vh]">
          <div className="w-full flex sm:justify-end justify-center">
            <div
              className="h-[130px] w-[130px] cursor-pointer relative sm:right-[30px] top-[10px] flex items-center justify-center"
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
              Login
            </h1>
            <p className="font-BasicSans text-eastBay text-[20px]">
              We care for your body.It’s the only place you have to live in.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 mt-[20px] text-left">
              <div>
                <InputText
                  name={"phoneNumber"}
                  type="phonenumber"
                  label="Mobile Number"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="XXX XXX XXXX"
                  control={control}
                  schema={loginSchema.phoneNumber}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.phoneNumber?.message}
                />
              </div>
              <div>
                <InputText
                  name={"password"}
                  type="password"
                  label=" Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="********"
                  control={control}
                  schema={loginSchema.password}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.password?.message}
                />
              </div>

              <div className="w-full flex justify-end text-codGray sm:w-[85%]">
                <Link
                  to="/forgot-password"
                  className="text-[16px] font-BasicSans underline font-normal opacity-50"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="mt-[20px] flex gap-0">
                <InputCheckbox
                  name={"termsCondition"}
                  control={control}
                  schema={loginSchema.termsCondition}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  errorMessage={errors.termsCondition?.message}
                />
                <span className="inline-block text-lightGray font-BasicSans text-[16px]">
                  I have read the Privacy Policy and agree to the Terms of
                  Service.
                </span>
              </div>
            </div>
          </div>
        </div>
        <LoginFooter
          onClick={handleLogin}
          label="Login"
          info={
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className=" cursor-pointer font-BasicSans"
              >
                Signup
              </span>
            </>
          }
        />
      </div>
    </div>
  );
}
export default Login;
