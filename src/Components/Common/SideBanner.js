import React from 'react'

export default function SideBanner({ imgsrc, customStyle }) {
  return (
    <div className={customStyle}>
      <img
        className="h-full w-full object-cover "
        src={require(`../../${imgsrc}`)}
        alt="banner"
      />
    </div>
  );
}
