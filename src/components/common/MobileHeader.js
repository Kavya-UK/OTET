// import React from 'react'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrowseDoctors from "../home/BrowseDoctor";
import PopupModal from "./PopupModal";

function MobileHeader({ showHeader, setShowHeader, showHamburger=true, top='50px' }) {
  const [browseFlag, setBrowseFlag] = useState(false);
  const [showDropdown, setDropdown] = useState(false);
  // const [showHeader, setShowHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`absolute top-[${top}] z-30 right-5 font-BasicSans font-bold lg:text-base text-[0.75rem] leading-[1rem]  tracking-[.15rem] cursor-pointer`}
      >
        <img
          className={`md:hidden h-[20px]  cursor-pointer ${
            showHamburger ? " block " : " hidden "
          }`}
          onClick={() => setShowHeader(true)}
          alt="hamburger"
          src={require("../../assets/images/Hamburger.png")}
        />
      </div>
      <div
        className={`block md:hidden px-[20px] fixed min-h-[100vh] w-[100vw] overflow-y-scroll inset-0 z-50 bg-white   pb-[50px]  ${
          showHeader
            ? "   translate-x-0 transition-all duration-[0.3s] ease-[linear]"
            : "  translate-x-[100%] transition-all duration-[0.3s] ease-[linear]"
        }`}
      >
        {showModal && (
          <PopupModal
            title="Are you sure you want to delete your account?"
            description="Your account and all of its data will be permanently deleted."
            closeModal={() => setShowModal(false)}
            className="block md:hidden"
          />
        )}
        {showSignoutModal && (
          <PopupModal
            title="Logout?"
            description="Are you sure you want to Logout?"
            closeModal={() => setShowSignoutModal(false)}
            className="block md:hidden"
          />
        )}
        {browseFlag && <BrowseDoctors closeModal={setBrowseFlag} />}

        <div className="relative ">
          <span
            className="inline-block mt-[20px] px-[15px] py-[15px] bg-gray-100 rounded-[50%] cursor-pointer absolute right-2"
            onClick={() => setShowHeader(false)}
          >
            <img
              className="h-[15px] "
              src={require("../../assets/images/login/Close.png")}
              alt="cross"
            />
          </span>
        </div>
        <h1 className=" font-BasicSans text-[22px] font-bold tracking-[2px] pl-[10px] py-[20px] mt-[50px] text-shadeBlue">
          Hello, User
        </h1>
        <div className="flex flex-col">
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px]"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => navigate("/book-appointment")}
          >
            Make an appointment
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => {
              setBrowseFlag(true);
              // setShowHeader(false);
            }}
          >
            Browse
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => navigate("/my-profile")}
          >
            My Profile
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => navigate("/my-appointments")}
          >
            My Appointments
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => navigate("/change-password")}
          >
            Change Password
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => {
              setShowModal(true);
              // setShowHeader(false);
            }}
          >
            Delete Account
          </div>
          <div
            className="border-b-[1px] py-[15px] pl-[20px] cursor-pointer text-black font-BasicSansLight font-semibold text-[18px] "
            onClick={() => {
              setShowSignoutModal(true);
              // setShowHeader(false);
            }}
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader