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
        className={`${labelColor} ${fontSize} ${fontWeight} text-[18px] text-lightGray font-BasicSans ${customLabelStyle}`}
      >
        {label}
      </label>
    </div>
  );
}
