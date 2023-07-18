import React,{useState} from 'react'
import InputText from '../../Components/common/InputText';
import PasswordModal from '../../Components/common/PasswordModal';
import SideBanner from '../../Components/common/SideBanner';
import LoginFooter from '../../Components/common/LoginFooter';

export default function ChangePassword() {

    const [showModal, setShowModal] = useState(false);

    const handleContinue=()=>{
      setShowModal(true)
    }
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
              <div className="h-[130px] w-[130px] relative sm:right-[30px] top-[10px] flex items-center justify-center">
                <img
                  className="w-[80%]"
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
                type="password"
                label="Old Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] ">
              <InputText
                type="password"
                label="New Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] mt-[10px]">
              <InputText
                type="password"
                label="Confirm Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[75%]"}
                customLabelStyle={"inline-block "}
              />
            </div>
          </div>
          <LoginFooter label="Continue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
}
