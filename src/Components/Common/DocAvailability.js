import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedDoctors } from "../../Redux/thunk/featuredDoctor.thunk";
import { useDispatch, useSelector } from "react-redux";

export default function DocAvailability() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const featuredDoc = useSelector(
    (state) => state.featuredpractioner.featuredDocs
  );
  const docTotalCount = useSelector(
    (state) => state.featuredpractioner.totalCount
  );
  const totalPage = Math.ceil(docTotalCount / 4);
  const pageinate = (page) => {
    if (page > 0 && page < totalPage) {
      setPage(page);
      dispatch(fetchFeaturedDoctors({ paginate: 4, page: page }));
    }
  }
  useEffect(() => {
    dispatch(fetchFeaturedDoctors({ paginate: 4, page: 1 }));
  }, []);
  return (
    <>
      {featuredDoc.map((items) => {
        return (
          <div
            key={items.doctor_name}
            className="flex p-[40px] w-full justify-between"
          >
            <div className="flex gap-10">
              <div className="w-[250px] h-[250px] rounded-[20px]">
                <img
                  className="w-full h-full object-contain rounded-[20px]"
                  src={require("../../assets/images/specialities/Doc1.png")}
                  alt="doctor"
                />
              </div>
              <div className="mt-[20px]">
                <h1 className=" font-HenrietteBold text-[30px] text-codGray font-semibold">
                  {items.doctor_name}
                </h1>
                <span className="inline-block pr-[15px] font-BasicSans text-[20px] text-codGray">
                  {items.medical_speciality}
                </span>
                <span className="font-BasicSans text-[20px] text-codGray">
                  {items.country}
                </span>
                <p className="font-BasicSans text-[15px] text-codGray mt-[10px]">
                  {items.education}
                </p>
                <div className="pt-[10px] flex items-center">
                  <img
                    className="inline-block w-[40px] h-[40px]"
                    src={require("../../assets/images/specialities/Group 1849.png")}
                    alt="group"
                  />
                  <span className="inline-block pl-[20px] text-[20px] font-BasicSans text-codGray">
                    {items.languages_spoken.join(", ")}
                  </span>
                </div>
                <div className="pt-[10px] flex items-center">
                  <img
                    className="inline-block w-[40px] h-[40px]"
                    src={require("../../assets/images/specialities/Group 1850.png")}
                    alt="group"
                  />
                  <span className="inline-block pl-[20px] text-[20px] font-BasicSans text-codGray">
                    {items.available_in.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <h1 className="font-HenrietteBold text-[30px] text-codGray font-semibold">
                  Availability
                </h1>
              </div>
              <div className="flex flex-row gap-4 mt-[20px]">
                {items.time_slots.InPerson.map((avail) => {
                  return (
                    <div className="flex flex-col rounded-[8px] bg-cyanBlue items-center p-[8px]">
                      <span className="inline-block font-BasicSansLight text-[15px]">
                        {avail.day.substring(0, 3)}
                      </span>
                      <span className="inline-block font-BasicSans text-[18px] rounded-[8px] bg-cyanBlue">
                        {avail.date.split("-")[2]}
                      </span>
                      <span className="inline-block font-BasicSansLight text-[15px] rounded-[8px] bg-cyanBlue">
                        {month[parseInt(avail.date.split("-")[1]) - 1]}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="">
                <div className="flex justify-between mt-[30px]">
                  <button className="rounded-[100px] bg-shadeBlue text-white py-[10px] px-[25px] font-BasicSansBold text-[15px] tracking-[0.8px]">
                    SCHEDULE AN APPOINTMENT
                  </button>
                  <Link className="text-[20px] font-BasicSans underline text-mustardYellow ml-[20px] relative top-[10px]">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {featuredDoc.length ? (
        <ul className="flex flex-row items-center justify-center paginate-doctor-search my-8">
          <li className="">
            <button
              onClick={() => pageinate(page - 1)}
              className="h-5 p-0 mt-1 mr-[0.5rem] sm:mr-[1rem]"
            >
              <img
                className="h-full"
                alt="prev"
                src={require("../../assets/images/specialities/PaginationArrow.png")}
              />
            </button>
          </li>
          {[...Array(totalPage)].map((_, i) => {
            return (
              <li className="">
                <span
                  onClick={() => pageinate(i + 1)}
                  className={`cursor-pointer p-[10px] ${
                    page === i + 1
                      ? " bg-gray-300 text-black rounded-[10px]"
                      : ""
                  }`}
                >
                  {i + 1}
                </span>
              </li>
            );
          })}

          <li className="">
            <button
              onClick={() => pageinate(page + 1)}
              className="h-5 p-0 ml-[0.5rem] sm:ml-[1rem] mt-1"
            >
              <img
                className="h-full rotate-180"
                alt="next"
                src={require("../../assets/images/specialities/PaginationArrow.png")}
              />
            </button>
          </li>
        </ul>
      ) : null}
    </>
  );
}
