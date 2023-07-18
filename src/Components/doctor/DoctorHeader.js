import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { fetchLocation } from "../../Redux/thunk/location.thunk";
import { fetchSpeciality } from "../../Redux/thunk/speciality.thunk";
import { fetchConditions } from "../../Redux/thunk/conditions.thunk";
import { useSelector, useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";

export default function DoctorHeader() {
  const specialityList = useSelector(
    (state) => state.speciality.specialityList
  );
  const areasList = useSelector((state) => state.locations.areas);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const dispatch = useDispatch();
    const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchLocation());
    dispatch(fetchSpeciality());
    dispatch(fetchConditions());
  }, []);
  const conditionsList = useSelector(
    (state) => state.conditions.conditionsList
  );

  const [allList, setAllList] = useState({ speciality: [], conditions: [] });
  const [showSpecDropdown, setShowSpecDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const [locValue, setLocValue] = useState("");

  useEffect(() => {
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
    const area = query.get("area");
    const specialty = query.get("specialty");
    setSpecValue(specialty?.split("_")[0]);
    setLocValue(area?.split("_")[0]);
  }, [specialityList, conditionsList]);

  const handleLocSearch = (e) => {
    const searchText = e.target.value;
    setLocValue(searchText);
    dispatch(fetchLocation({ name: searchText }));
    setShowAreasDropdown(true);
  };
  const handleSpecSearch = (e) => {
    const searchText = e.target.value;
    setSpecValue(e.target.value);
    const filterSpec = specialityList.filter((spec) => {
      if (
        spec.medical_speciality_name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) {
        return spec;
      }
    });
    const filterCond = conditionsList.filter((cond) => {
      if (
        cond.medical_condition_name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) {
        return cond;
      }
    });
    setShowSpecDropdown(!!filterSpec.length);
    setAllList({
      speciality: filterSpec,
      conditions: filterCond,
    });
  };

  const handleLocSelection = (city) => {
    setLocValue(city);
    setShowAreasDropdown(false);
  };
  const handleSpecSelection = (name) => {
    setSpecValue(name);
    setShowSpecDropdown(false);
  };
  const handleLocOnBlur = () => {
    setLocValue("");
    setTimeout(() => {
      setShowAreasDropdown(false);
    }, 100);
  };
  const handleSpecOnBlur = () => {
    setSpecValue("");
    setTimeout(() => {
      setShowSpecDropdown(false);
    }, 100);
  };
  const handleLocFocusIn = () => {
    setLocValue("");
  };
  const handleSpecFocusIn = () => {
    setSpecValue("");
    setShowSpecDropdown(true);
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
  };
  return (
    <div className="flex flex-row justify-between items-center max-h-fit py-[5px] pl-[30px] pr-[50px] bg-white  drop-shadow-md">
      <div onClick={()=>navigate('/home')}>
        <img
          className="w-[130px] h-[130px]"
          src={require("../../assets/images/home/Logo.png")}
          alt="logo"
        />
      </div>
      <div>
        <div className="flex items-center w-full border-[2px] rounded-[20px]  py-[0.5rem] relative">
          <div className="w-[30%] relative">
            <div className="ml-3">
              <input
                onBlur={handleLocOnBlur}
                onFocus={handleLocFocusIn}
                onChange={handleLocSearch}
                value={locValue}
                type="text"
                placeholder="Location"
                className="text-codGray font-BasicSans h-[40px] text-[16px] w-full border-r outline-none bg-white px-[0.5rem]"
              />
            </div>
            <div
              className={`absolute top-[80px] left-0 w-[300px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                showAreasDropdown ? " block " : " hidden "
              }`}
            >
              <ul className="">
                <li className="font-BasicSans text-eastBayLight">Areas</li>
                {areasList.length
                  ? areasList.map((area) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() => handleLocSelection(area.city)}
                          key={area.id}
                        >
                          {area.city}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="ml-3">
              <input
                onBlur={handleSpecOnBlur}
                onFocus={handleSpecFocusIn}
                onChange={handleSpecSearch}
                value={specValue}
                placeholder="Specialty"
                type="text"
                className="text-[16px] text-codGray font-BasicSans h-[40px] border-r w-full px-2 outline-none bg-white"
              />
            </div>
            <div
              className={`absolute top-[80px] left-0 w-[500px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                showSpecDropdown ? " block " : " hidden "
              }`}
            >
              <ul className="">
                <li className="font-BasicSans text-eastBayLight">Speciality</li>
                {allList.speciality.length
                  ? allList.speciality.map((spec) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() =>
                            handleSpecSelection(spec.medical_speciality_name)
                          }
                          key={spec.id}
                        >
                          {spec.medical_speciality_name}
                        </li>
                      );
                    })
                  : null}
                <li className="font-BasicSans text-eastBayLight">Conditions</li>
                {allList.conditions.length ? (
                  allList.conditions.map((spec) => {
                    return (
                      <li
                        className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                        onClick={() =>
                          handleSpecSelection(spec.medical_condition_name)
                        }
                        key={spec.id}
                      >
                        {spec.medical_condition_name}
                      </li>
                    );
                  })
                ) : (
                  <img
                    className="relative top-[80px] left-[180px] w-[100px]"
                    src={require("../../assets/images/cat-loading.gif")}
                    alt="loading"
                  />
                )}
              </ul>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="ml-3">
              <input
                placeholder="Others"
                type="text"
                className="text-codGray font-BasicSans h-[40px] text-[16px] px-2 outline-none bg-white"
                value=""
              />{" "}
            </div>
          </div>
          <button className="absolute -right-[1px]  bg-shadeBlue border-y border-r border-l-none w-[4rem] h-full flex items-center justify-center rounded-xl text-white">
            <BsSearch className="text-[30px] text-white " />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <Link className="font-BasicSans tracking-[3.6px] font-semibold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px] pr-[10px] relative top-[5px] lg:top-[3px] xl:top-[0px]">
          LOGIN/SIGNUP
        </Link>
        <img
          src={require("../../assets/images/home/User.png")}
          alt="user"
          className="inline-block xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:bottom-[3px]"
        />
      </div>
    </div>
  );
}
