import React from 'react'

export default function Appointments() {
  return (
    <>
      <div className="text-center mt-[170px]">
        <h1 className="text-shadeBlue font-BasicSansBold text-[40px] tracking-[5px] font-bold ">
          Success!
        </h1>
        <div>
          <img
            className="w-[20px] h-[20px] inline-block relative bottom-[3px]"
            src={require("../../assets/images/profile/Checkmark.png")}
            alt="check"
          />
          <span className="inline-block pl-[10px] font-BasicSansLight text-[20px] text-eastBayLight">
            You have successfully booked an appointment with
          </span>
          <p className="text-[25px] font-BasicSans text-headingShade mb-[20px]">
            Dr. Alexander O Babazadeh
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[650px] h-[930px] rounded-[40px] border-[4px] border-borderColor p-[20px] bg-bgColor">
          <div className="grid grid-cols-2 gap-10 mb-[20px]">
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray ">
                Type of visit{" "}
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                InPerson
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Clinic Address
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                14 Street Medical P.C. 110 W 14th St New York, NY 10011
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray ">
                Date
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                Monday, September 1
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Time
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                8:00 AM
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray ">
                Medical Conditions
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                Digestive disorders{" "}
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Have visited before ?
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">No</p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray ">
                Practice Areas
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                Dietician
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Insurance
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                UHC
              </p>
            </div>
            <div>
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Insurance
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                UHC
              </p>
            </div>
            <div className="col-span-2">
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Reason
              </p>
              <p className="font-BasicSansLight text-[17px] text-codGray">
                High blood pressure/Hypertension
              </p>
            </div>
            <div className="col-span-2">
              <p className=" font-BasicSansLight text-[13px] text-placeholderGray">
                Clinic address
              </p>
              <p className="font-BasicSansLight text-[17px] text-black">
                14 Street Medical P.C. 110 W 14th St New York, NY 10011
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] border-[1px] "></div>
          <div className="text-center py-[40px] ">
            <button className="bg-white text-shadeBlue border-shadeBlue rounded-[100px] border-[2px] font-BasicSansBold text-[15px] tracking-[1.5px] px-[25px] py-[10px]">
              Back to Home
            </button>
            <button className="bg-shadeBlue text-white border-shadeBlue rounded-[100px] border-[2px] font-BasicSansBold text-[15px] tracking-[1.5px] px-[20px] py-[10px] ml-[30px]">
              View Less
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[650px] px-[20px] pt-[50px] pb-[150px] flex justify-center items-center relative ">
          <span className=" inline-block font-BasicSansBold text-[15px] absolute top-[70px] left-[0px] ml-[30px]">
            *NOTE :-
          </span>
          <p className=" font-BasicSans text-[15px] text-labelColor pl-[80px] mt-[20px] ">
            Updates will be sent to example@gmail.com
            <br className="hidden lg:block" />
            By booking the appointment, you agree to our Terms and Conditions.
            You can read our payment FAQ's
          </p>
        </div>
      </div>
    </>
  );
}
