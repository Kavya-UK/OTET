import React from 'react'

export default function Label({
  label,
  labelFor,
  labelColor,
  fontSize,
  fontWeight,
  customLabelStyle,
}) {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className={`${labelColor} ${fontSize} ${fontWeight} text-[18px] text-lightGray font-BasicSans inline-block mb-[5px] ${customLabelStyle}`}
      >
        {label}
      </label>
    </div>
  );
}
