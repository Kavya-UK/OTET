import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const FooterMobile = () => {
  const [openAcc, setOpenAcc] = useState([
    {
      id: 1,
      isOpen: false,
      title: "Holmeddoc",
      links: ["Home", "About Us", "Help"],
    },
    {
      id: 2,
      isOpen: false,
      title: "Insurance Providers",
      links: ["UHC", "Humana", "Aetna"],
    },
    {
      id: 3,
      isOpen: false,
      title: "Major Specialities",
      links: [
        "Acupuncture",
        "Aromatherapy",
        "Alternative Medicine",
        "Yoga",
        "Reiki",
        "Holistic Medicine",
      ],
    },
    {
      id: 4,
      isOpen: false,
      title: "For Doctor and Healthcare providers",
      links: [
        "Sign up with Holmeddoc",
        "For Developer Teams",
        "Get the Holmeddoc App",
      ],
    },
    {
      id: 5,
      isOpen: false,
      title: "Contact Us",
      links: ["info@holmeddoc.com", "+1 000 000 0000"],
    },
  ]);
  const handleClick = (id, flag) => {
    const accorList = openAcc.map((list)=> {
      if(list.id === id)
        return  { ...list, isOpen: flag };
      else
        return { ...list, isOpen: false };
    })
    setOpenAcc(accorList);
  }
  return (
    <div>
      {
        openAcc.map(list => {
          return (
            <div key={list.title}>
              <div className="border-b-[1px] pl-[20px] py-[20px] border-eastBayLight">
                <div className="flex items-center justify-between">
                  <h1 className="text-black font-black text-[14px]">
                    {list.title}
                  </h1>
                  {!list.isOpen ? (
                    <BiPlus onClick={() => handleClick(list.id, true)} />
                  ) : (
                    <BiMinus onClick={() => handleClick(list.id, false)} />
                  )}
                </div>
                <div
                  className={`footer-link  ${list.isOpen ? " expand" : " "}`}
                >
                  {list.links.map((link) => {
                    return (
                      <Link
                        key={link}
                        className="block text-[14px] font-BasicSans text-black tracking-[3.6px] pb-[10px]"
                      >
                        {link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      }
      
    </div>
  );
};
export default FooterMobile;
