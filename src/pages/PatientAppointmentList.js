import React from 'react'
import SideBar from '../components/common/SideBar';

export default function PatientAppointmentList() {
  return (
    <>
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-2 ">
          <SideBar />
        </div>
        <div className="col-span-10 flex h-[100vh] overflow-auto">
          <div className="flex flex-col w-[500px] h-full justify-start ">
            <div className="flex justify-between items-center bg-Grayish h-[70px] border-b border-b-Grayish pl-[20px] pr-[40px]">
              <h1 className="text-graycolor font-BasicSansLight text-[18px]">
                My Appointments
              </h1>
              <img
                className="w-[60px] h-[30px]"
                src={require("../assets/images/profile/ListCalender.png")}
                alt="calendar"
              />
            </div>
            <div className="bg-white h-[120px] border-b-Grayish border-b pl-[20px] py-[20px] pr-[10px]">
              <p className=" font-BasicSans text-codGray text-[15px]">
                Alexander O. Babazadeh
              </p>
              <span className=" font-BasicSansLight text-[12px] text-graycolor">
                Scheduled for:
              </span>
              <span className=" font-BasicSansLight text-[12px] text-graycolor">
                Thurs, Feb 18th
              </span>
              <div className="flex justify-between mt-[10px]">
                <p className="text-codGray font-BasicSansLight text-[12px]">
                  High blood pressure/Hypertension
                </p>
                <p className="text-graycolor font-BasicSansLight text-[12px]">
                  Tues, Feb 16th
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white w-full h-full px-[30px] ">
            <div className="flex justify-between border-b border-b-Grayish py-[20px] pr-[50px]">
              <p className=" text- codGray font-BasicSans text-[20px]">
                #OTET201834
              </p>
              <div>
                <p className="text-lightestGray font-BasicSansLight text-[10px]">
                  Appointment booked on
                </p>
                <p className="text-graycolor font-BasicSansLight text-[15px]">
                  Tuesday, February 16th
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 py-[20px] border-b border-b-Grayish">
              <img
                className="w-[120px] h-[120px] "
                src={require("../assets/images/specialities/Doc4.png")}
                alt="doctor"
              />
              <div className="flex flex-col">
                <p className="text-codGray font-BasicSans text-[18px] mb-[8px]">
                  Alexander O. Babazadeh
                </p>
                <span className="text-graycolor font-BasicSans text-[15px]">
                  Allergist, New York, NY
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex-col">
                <div className="pb-[20px] pt-[40px]">
                  <p className=" font-BasicSansLight text-graycolor text-[14px] mb-[10px] ">
                    What’s the reason for your visit?
                  </p>
                  <p className=" font-BasicSans text-[17px] text-codGray ">
                    High blood pressure/Hypertension
                  </p>
                </div>
                <div>
                  <p className=" font-BasicSansLight text-graycolor text-[14px] mb-[10px] ">
                    Insurance Details
                  </p>
                  <p className=" font-BasicSans text-[17px] text-codGray">
                    UHS, PN : 763529
                  </p>
                </div>
                <div className='py-[20px]'>
                  <p className=" font-BasicSansLight text-graycolor text-[14px] mb-[10px] ">
                    Type of Visit
                  </p>
                  <p className=" font-BasicSans text-[17px] text-codGray ">
                    In-Person
                  </p>
                </div>
                <div className='py-[0px]'>
                  <p className=" font-BasicSansLight text-graycolor text-[14px] mb-[10px]">
                    Schedule
                  </p>
                  <p className=" font-BasicSans text-[17px] text-codGray ">
                    Thursday, February 18th 08:00 PM
                  </p>
                </div>
              </div>
              <div className="flex-col ml-[90px]">
                <div className="inline-block pb-[5px]">
                  <img
                    className=" inline-block w-[20px] h-[20px]  relative bottom-[3px] mr-[7px]"
                    src={require("../assets/images/profile/Checkmark.png")}
                    alt="check"
                  />
                  <span className=" font-BasicSansBold text-eastBay text-[25px]">
                    Appointment Confirmed
                  </span>
                </div>
                <p className=" font-BasicSansLight text-graycolor text-[14px] mt-[10px] ">
                  Address
                </p>
                <p className=" font-BasicSans text-[17px] text-codGray mt-[10px]">
                  14 Street Medical P.C. 110 W 14th St New York, NY 10011
                </p>
                <div className="w-[400px] h-[200px] border-gray-400 border-[1px] mt-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
