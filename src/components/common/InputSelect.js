import React from "react";
import Label from "./Label"
import ErrorMessage from "./ErrorMessage";
export default function InputSelect({
  type,
  optionList,
  label,
  name,
  inputWidth,
  labelFor,
  customLabelStyle,
  errorMessage,
  ...otherProps
}) {
  return (
    <div className={`${inputWidth} relative`}>
      {label ? (
        <Label
          label={label}
          labelFor={labelFor}
          labelColor="text-lightGray"
          customLabelStyle={customLabelStyle}
        />
      ) : (
        "null"
      )}
      <select
        id={name}
        name={name}
        {...(otherProps.isValidationSet
          ? {
              ...otherProps.register(name, {
                ...otherProps.schema,
              }),
            }
          : null)}
        type={type}
        defaultValue={""}
        className="select-dropdown border-[2px] opacity-100 rounded-[5px] border-shadeGray active:border-shadeGray hover:border-shadeGray outline-none py-[10px] pl-[15px] bg-white w-full placeholder-placeholderGray placeholder:font-BasicSansLight text-[15px]"
      >
        <option
          value=""
          disabled
          className="placeholder:font-BasicSansLight text-[15px]"
        >
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
          className="w-[12px] h-[10px] absolute top-[48%] right-[20px]"
          src={require("../../assets/images/login/GrayDropdown.png")}
          alt="drop"
        />
      </label>
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
}
