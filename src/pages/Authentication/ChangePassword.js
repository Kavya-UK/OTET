import React,{useState} from 'react'
import InputText from '../../components/common/InputText';
import PasswordModal from '../../components/common/PasswordModal';
import SideBanner from '../../components/common/SideBanner';
import LoginFooter from '../../components/common/LoginFooter';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { changePassSchema } from "../../validations/auth.js";
export default function ChangePassword() {
  const navigate=useNavigate();

    const [showModal, setShowModal] = useState(false);
const {
  handleSubmit,
  control,
  setValue,
  register,
  formState: { errors },
} = useForm({
  mode: "onSubmit",
  resolver: joiResolver(changePassSchema),
});

const onSubmit = async (data) => {
  setShowModal(true);
};

const handleContinue = (e) => {
  handleSubmit(onSubmit)(e);
  // navigate("/");
};

   
  return (
    <>
      {showModal && (
        <PasswordModal
          title="Password changed!"
          description="Your password has been changed successfully."
          closeModal={() => setShowModal(false)}
        />
      )}

      <div className="grid grid-cols-5">
        <SideBanner
          customStyle="col-span-2 h-[100vh] hidden lg:block"
          imgsrc={"assets/images/login/ChangePassword.jpg"}
        />
        <div className="col-span-5 lg:col-span-3 relative h-[100vh]">
          <div className="max-h-[82vh] overflow-y-auto h-[100vh]">
            <div className="w-full flex sm:justify-end justify-center">
              <div
                className="h-[130px] w-[130px] relative sm:right-[30px] top-[10px] flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  className="w-[80%] "
                  src={require("../../assets/images/icons/Logo.png")}
                  alt="logo"
                />
              </div>
            </div>
            <div className="px-[40px] sm:px-[100px] text-left">
              <h1 className="text-[36px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
                Change password?
              </h1>
            </div>
            <div className="px-[40px] sm:px-[100px] relative text-left">
              <InputText
                name={"oldPassword"}
                type="password"
                label="Old Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
                control={control}
                schema={changePassSchema.oldPassword}
                register={register}
                isValidationSet={true}
                setValue={setValue}
                errorMessage={errors.oldPassword?.message}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] ">
              <InputText
                name={"password"}
                type="password"
                label="New Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
                control={control}
                schema={changePassSchema.password}
                register={register}
                isValidationSet={true}
                setValue={setValue}
                errorMessage={errors.password?.message}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] mt-[10px]">
              <InputText
                name={"confirmPassword"}
                type="password"
                label="Confirm Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
                control={control}
                schema={changePassSchema.confirmPassword}
                register={register}
                isValidationSet={true}
                setValue={setValue}
                errorMessage={errors.confirmPassword?.message}
              />
            </div>
          </div>
          <LoginFooter label="Continue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
}
