import React, { useEffect, useState } from 'react';
import SideBar from '../components/common/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorDataById } from '../redux/thunk/featuredDoctor.thunk';
import { fetchAppointments } from '../redux/thunk/listAppointment.thunk';
import SideBarContainer from './container/SideBarContainer';


export default function MyAppointmentList() {
      
  const dispatch = useDispatch()
  const [showAppoinmt, setShowAppoinmt] = useState(true)
  const [selectedApp, setselectedApp] = useState({});
  const appointmentList = useSelector(
    (state) => state.myAppointment.appointmentList
  );
  const doctorDatabyId = useSelector(
    (state) => state.featuredpractioner.doctorDatabyId
  );
  const user = useSelector(
    (state) => state.user.user
  );
  useEffect(() => {
    console.log(user);
    if (user.id) {
      dispatch(fetchAppointments({ id: user.id }));
    }
  }, [user]);
  useEffect(() => {
    if (appointmentList.length > 0) {
      setselectedApp(appointmentList[0]);
      dispatch(fetchDoctorDataById({ id: [appointmentList[0]?.doctor_id] }));
    }
  }, [appointmentList]);
    const tConvert = (time) => {
      time = time
        ?.toString()
        ?.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? "AM" : "PM";
        time[0] = +time[0] % 12 || 12;
      }
      return `${time[0]}:${time[2]} ${time[5]}`;
    };

  return (
    <>
      <SideBarContainer
        childrenClass="w-full flex h-[100vh] overflow-auto"
        showHamburger={showAppoinmt}
      >
        {appointmentList.length ? (
          <>
            <div
              className={`lg:min-w-[350px] min-w-full max-w-[350px] transition-all duration-[0.3s] ease-[linear] flex flex-col justify-start ${
                showAppoinmt ? " " : "hidden lg:flex"
              }`}
            >
              <div className=" flex justify-between items-center bg-Grayish h-[70px] border-b border-b-Grayish pl-[20px] pr-[40px]">
                <h1 className="text-graycolor font-BasicSansLight text-[18px] py-[10px]">
                  My Appointments
                </h1>
              </div>
              {appointmentList.map((appointment) => {
                return (
                  <div
                    onClick={() => {
                      setShowAppoinmt(false);
                      setselectedApp(appointment);
                      dispatch(
                        fetchDoctorDataById({
                          id: [appointment?.doctor_id],
                        })
                      );
                    }}
                    className={` h-[120px] border-b-Grayish border-b pl-[20px] py-[20px] pr-[10px] cursor-pointer hover:bg-white ${
                      appointment.id === selectedApp.id
                        ? " bg-white"
                        : "bg-Grayish"
                    }`}
                  >
                    <p className=" font-BasicSans text-codGray text-[15px]">
                      {appointment.doctor_name}
                    </p>
                    <span className=" font-BasicSansLight text-[12px] text-graycolor">
                      Scheduled for:
                    </span>
                    <span className=" font-BasicSansLight text-[12px] text-graycolor">
                      {appointment.appointment_date}
                    </span>
                    <div className="flex justify-between mt-[10px]">
                      <p className="text-codGray font-BasicSansLight text-[12px]">
                        {appointment.medical_condition}
                      </p>
                      <p className="text-graycolor font-BasicSansLight text-[12px]">
                        {appointment.booked_on}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`flex flex-col bg-white w-full h-full px-[10px] sm:px-[30px] ${
                showAppoinmt ? " hidden lg:flex " : ""
              }`}
            >
              <div className="flex md:justify-between flex-col lg:flex-row border-b border-b-Grayish py-[20px] pr-[50px]">
                <p className=" text-codGray font-BasicSans text-[20px]">
                  #{selectedApp.appointment_number}
                </p>
                <div>
                  <p className="text-lightestGray font-BasicSansLight text-[10px]">
                    Appointment booked on
                  </p>
                  <p className="text-graycolor font-BasicSansLight text-[15px]">
                    {selectedApp.booked_on}
                  </p>
                </div>
                <div className="lg:hidden block  absolute right-5">
                  <button
                    className="text-white font-BasicSans text-[12px]  bg-shadeBlue rounded-[30px] py-[5px]  px-[8px]"
                    onClick={() => setShowAppoinmt(!showAppoinmt)}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="flex flex-row sm:gap-5 py-[20px] border-b border-b-Grayish">
                <img
                  className="sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] "
                  src={require("../assets/images/specialities/Doc4.png")}
                  alt="doctor"
                />
                <div className="flex flex-col">
                  <p className="text-codGray font-BasicSans text-[14px] lg:text-[18px] mb-[8px]">
                    {doctorDatabyId.doctor_name}
                  </p>
                  <span className="text-graycolor font-BasicSans text-[12px] lg:text-[15px]">
                    {doctorDatabyId?.medical_speciality?.join(" ,")},
                    {doctorDatabyId?.country?.join(" ,")}
                  </span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-5 justify-between">
                <div className="flex-col min-w-[300px]">
                  <div className="pb-[20px] pt-[40px]">
                    <p className=" font-BasicSansLight text-graycolor text-[12px] md:text-[14px] mb-[10px] ">
                      What’s the reason for your visit?
                    </p>
                    <p className=" font-BasicSans text-[14px] md:text-[16px] text-codGray ">
                      {selectedApp.medical_condition}
                    </p>
                  </div>
                  <div>
                    <p className=" font-BasicSansLight text-graycolor text-[12px] md:text-[14px] mb-[10px] ">
                      Insurance Details
                    </p>
                    <p className=" font-BasicSans text-[14px] md:text-[16px] text-codGray">
                      {selectedApp.insurance}
                    </p>
                  </div>
                  <div className="py-[20px]">
                    <p className=" font-BasicSansLight text-graycolor text-[12px] md:text-[14px] mb-[10px] ">
                      Type of Visit
                    </p>
                    <p className=" font-BasicSans text-[14px] md:text-[16px] text-codGray ">
                      {selectedApp.visit_type}
                    </p>
                  </div>
                  <div className="py-[0px]">
                    <p className=" font-BasicSansLight text-graycolor text-[12px] md:text-[14px] mb-[10px]">
                      Schedule
                    </p>
                    <p className=" font-BasicSans text-[14px] md:text-[16px] text-codGray ">
                      {selectedApp.appointment_date}{" "}
                      {tConvert(selectedApp.appointment_time)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="inline-block pb-[5px]">
                    <img
                      className=" inline-block w-[20px] h-[20px]  relative bottom-[3px] mr-[7px]"
                      src={require("../assets/images/profile/Checkmark.png")}
                      alt="check"
                    />
                    <span className=" font-BasicSansBold text-eastBay text-[20px] md:text-[25px]">
                      Appointment Confirmed
                    </span>
                  </div>
                  <p className=" font-BasicSansLight text-graycolor text-[12px] md:text-[14px] mt-[10px] ">
                    Address
                  </p>
                  <p className=" font-BasicSans text-[14px] md:text-[16px] text-codGray mt-[10px]">
                    {selectedApp.clinic_address}
                  </p>
                  <div className="w-[200px] md:w-[400px] h-[200px] border-gray-400 border-[1px] mt-[10px]"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <img
              className="xl:h-[500px] xl:w-[600px] lg:h-[400px] lg:w-[450px] h-[200px] w-[250px]"
              src={require("../assets/images/home/noappointment.png")}
              alt="no-appointment"
            />
            <p className="text-headingShade font-BasicSansBold text-[20px] tracking-[2px] mt-[50px]">
              Sorry! No appointments found
            </p>
          </div>
        )}
      </SideBarContainer>
    </>
  );
}
