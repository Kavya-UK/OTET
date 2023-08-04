import React, { useState } from "react";
import MobileHeader from "../../components/common/MobileHeader";
import SideBar from "../../components/common/SideBar";

const SideBarContainer = ({
  showHamburger,
  childrenClass,
  children,
}) => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <MobileHeader
        setShowHeader={setShowHeader}
        showHeader={showHeader}
        showHamburger={showHamburger}
        top="30px"
      />
      <div
        className={`${
          showHeader
            ? "   translate-x-[-100%] transition-all duration-[0.3s] ease-[linear]"
            : "  translate-x-[0] transition-all duration-[0.3s] ease-[linear]"
        }}`}
      >
        <div className="flex h-full">
          <div className="hidden md:flex basis-[16em] ">
            <SideBar />
          </div>
          <div className={childrenClass}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SideBarContainer;
