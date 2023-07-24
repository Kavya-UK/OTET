import React from 'react'
import InputText from "../../components/common/InputText"
import {Link, useNavigate} from 'react-router-dom'
import InputCheckbox from '../../components/common/InputCheckbox';
import SideBanner from '../../components/common/SideBanner';
import LoginFooter from "../../components/common/LoginFooter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginSchema } from "../../validations/auth.js";
 const Login=()=> {
  const navigate= useNavigate();
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
 
   navigate("/home");
 };

 const handleLogin = (e) => {
   handleSubmit(onSubmit)(e);
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
            <div className="h-[130px] w-[130px] relative sm:right-[30px] top-[10px] flex items-center justify-center" onClick={()=>navigate('/')}>
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
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-[20px] text-left">
              <div>
                <InputText
                  type="email"
                  label="Mobile Number"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="XXX XXX XXXX"
                  control={control}
                  // schema={loginSchema.email}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  // errorMessage={errors.email?.message}
                />
              </div>
              <div>
                <InputText
                  type="password"
                  label=" Password"
                  inputWidth={"w-[100%] sm:w-[85%]"}
                  placeholder="********"
                  control={control}
                  // schema={loginSchema.password}
                  register={register}
                  isValidationSet={true}
                  setValue={setValue}
                  // errorMessage={errors.email?.message}
                />
              </div>
              <div className="w-full flex justify-end text-codGray sm:w-[85%]">
                <Link
                  to="/forgot-password"
                  className="text-[18px] font-BasicSans underline font-normal opacity-50"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="mt-[20px] flex gap-0">
                <InputCheckbox />
                <span className="inline-block text-lightGray font-BasicSans text-[18px]">
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
          info="Don’t have an account? Signup"
        />
      </div>
    </div>
  );
}
export default Login;
