import React from 'react'

export default function InputCheckbox() {
  return (
    <div className="w-[32px] h-[32px] border-[1px] p-[3px] rounded-[5px] border-shadeGray inline-block">
      <input
        type="checkbox"
        className="w-full h-full appearance-none "
      />
    </div>
  );
}
