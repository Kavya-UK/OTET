import React from "react";
import Label from "../Common/Label"
export default function InputSelect({ type, optionList, label, name, inputWidth, labelFor }) {
  return (
    <div className={`${inputWidth} relative`}>
      {label ? (
        <Label label={label} labelFor={labelFor} labelColor="text-lightGray" />
      ) : (
        "null"
      )}
      <select
        id={name}
        name={name}
        type={type}
        className="select-dropdown border-[2px] opacity-100 rounded-[5px] border-shadeGray active:border-shadeGray hover:border-shadeGray outline-none py-[10px] pl-[15px] bg-white w-full placeholder-placeholderGray"
      >
        <option value="" disabled selected>
          Select
        </option>
        {optionList.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <label htmlFor={name} className="">
        <img
          className="w-[12px] h-[10px] absolute top-[60%] right-[20px]"
          src={require("../../assets/images/login/GrayDropdown.png")}
          alt="drop"
        />
      </label>
    </div>
  );
}
