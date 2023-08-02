import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupModal from "./DeleteAccModal";

export default function SideBar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const[showSignoutModal,setSignoutModal]=useState(false)

 
  return (
    <>
      {showModal && (
        <PopupModal
          title="Are you sure you want to delete your account?"
          description="Your account and all of its data will be permanently deleted."
          closeModal={() => setShowModal(false)}
        />
      )}
      {showSignoutModal && (
        <PopupModal
          title="Logout?"
          description="Are you sure you want to Logout?"
          closeModal={() => setSignoutModal(false)}
        />
      )}
      <div className="w-[250px] h-[100vh] bg-shadeBlue relative shadow-3xl">
        <div
          className="flex justify-center items-center pt-[15px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="w-[140px] h-[140px]"
            src={require("../../assets/images/profile/Logo.png")}
            alt="logo"
          />
        </div>
        <div className="absolute bottom-8 w-full">
          <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer">
            My Profile
          </p>
          <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer">
            My Appointments
          </p>
          <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer">
            Change Password
          </p>
          <p
            className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Delete Account
          </p>
          <p
            className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer"
            onClick={() => setSignoutModal(true)}
          >
            Sign out
          </p>
        </div>
      </div>
    </>
  );
}
