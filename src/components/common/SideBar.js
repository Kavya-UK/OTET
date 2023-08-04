import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PopupModal from "./PopupModal";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSignoutModal, setSignoutModal] = useState(false);
  let location = useLocation();

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
      <div className=" h-[100vh] w-full bg-shadeBlue relative shadow-3xl">
        <div
          className="flex justify-center items-center pt-[15px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="xl:w-[140px] xl:h-[140px] w-[120px] h-[120px]"
            src={require("../../assets/images/profile/Logo.png")}
            alt="logo"
          />
        </div>
        <div className="absolute bottom-8 w-full">
          <p
            className={` font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer mb-[4px] ${
              location.pathname === "/my-profile"
                ? " bg-white text-shadeBlue "
                : " text-white "
            }`}
            onClick={() => navigate("/my-profile")}
          >
            My Profile
          </p>
          <p
            className={`font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer mb-[4px] ${
              location.pathname === "/my-appointments"
                ? "bg-white text-shadeBlue "
                : "text-white "
            }`}
            onClick={() => navigate("/my-appointments")}
          >
            My Appointments
          </p>
          <p
            className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer mb-[4px]"
            onClick={() => navigate("/change-password")}
          >
            Change Password
          </p>
          <p
            className={`font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer mb-[4px] ${
              showModal ? " bg-white  text-shadeBlue " : " text-white "
            }`}
            onClick={() => setShowModal(true)}
          >
            Delete Account
          </p>
          <p
            className={` font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px] cursor-pointer ${
              showSignoutModal ? " bg-white text-shadeBlue " : " text-white "
            }`}
            onClick={() => setSignoutModal(true)}
          >
            Sign out
          </p>
        </div>
      </div>
    </>
  );
}
