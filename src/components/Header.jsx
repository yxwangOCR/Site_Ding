import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Anchor } from "antd";

function Header({ home, service, about, contact, review }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full">
      <div className="flex justify-start items-center w-full h-full">
        <div className="flex items-center text-white px-6">
          <h1 className="text-2xl font-bold mr-4 xs:text-md">Wiimmo</h1>
          <ul className="hidden sm:flex">
            <a href="#form"><li className="px-2 cursor-pointer">{service}</li></a>
            <a href="#about"><li className="px-2 cursor-pointer">{about}</li></a>
            <a href="#review"><li className="px-2 cursor-pointer">{review}</li></a>
            <a href="#contact"><li className="px-2 cursor-pointer">{contact}</li></a>
          </ul>



        </div>


        <div className="sm:hidden" onClick={handleClick}>
          {nav ? (
            <CloseOutlined className="text-2xl xs:text-md text-white cursor-pointer" />
          ) : (
            <MenuOutlined className="text-2xl xs:text-md text-white cursor-pointer" />
          )}
        </div>
      </div>
      <ul
        className={
          nav
            ? "absolute bg-bordeau opacity-90 w-full h-screen px-8 text-white sm:hidden"
            : "hidden"
        }
      >
        <li className="border-b-2 border-marine w-full py-4">Service</li>
        <li className="border-b-2 border-marine w-full py-4">About</li>
        <li className="border-b-2 border-marine w-full py-4">Review</li>
        <li className="border-b-2 border-marine w-full py-4">Contact</li>
      </ul>


    </header>
  );
}

export default Header;


/*
<ul className="hidden sm:flex">
            <li className="px-2 cursor-pointer">{service}</li>
            <li className="px-2 cursor-pointer">{about}</li>
            <li className="px-2 cursor-pointer">{review}</li>
            <li className="px-2 cursor-pointer">{contact}</li>
          </ul>
*/