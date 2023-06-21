import React, { useState } from "react";
import Label from "./Label";

export default function InputText({
  type,
  label,
  labelFor,
  labelColor = "text-lightGray",
  name,
  placeholder,
  disable,
  inputWidth,
  noIcon,
  customInputStyle,
  customLabelStyle
}) {
  // const inputType = type === 'phonenumber' ? "number" : type
  const [imgSrc, setImgSrc] = useState("assets/images/login/Eye.png");
  const [inputType, setinputType] = useState(
    type === "phonenumber" ? "number" : type
  );

  const handleEyeClick = () => {
    if (imgSrc === "assets/images/login/Eye.png") {
      setImgSrc("assets/images/login/EyeVisible.png");
      setinputType("text");
    } else {
      setImgSrc("assets/images/login/Eye.png");
      setinputType("password");
    }
  };
  return (
    <div className={`${inputWidth} relative`}>
      {label ? (
        <Label
          label={label}
          labelFor={labelFor}
          labelColor={labelColor}
          customLabelStyle={customLabelStyle}
        />
      ) : (
        "null"
      )}
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        disable={disable}
        className={`border-[2px] opacity-100 rounded-[5px] border-shadeGray active:border-shadeGray hover:border-shadeGray  py-[10px]  bg-white w-full outline-none placeholder-placeholderGray  ${
          noIcon ? "no-icon " : " "
        } ${
          type === "phonenumber" ? "pl-[40px] " : "pl-[15px] "
        } ${customInputStyle}`}
      />
      {type === "phonenumber" && (
        <span className="text-placeholderGray absolute top-[50%] translate-y-[10%] left-[10px]">
          +1
        </span>
      )}
      {type === "password" && (
        <span
          onClick={handleEyeClick}
          className="text-placeholderGray absolute top-[60%] right-[10px]"
        >
          <img
            className="w-[15px] h-[10px]"
            alt="pass"
            src={require(`../../${imgSrc}`)}
          />
        </span>
      )}
    </div>
  );
}
