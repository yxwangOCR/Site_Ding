import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Data from "../Data.json"
import { Anchor } from "antd";

function Header({ home, service, about, contact }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="w-screen h-[80px] bg-marine drop-shadow-lg">
      <div className="px-12 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-white">
          <h1 className="text-3xl font-bold mr-4 xs:text-4xl">Ding</h1>
          <ul className="hidden sm:flex">
            <li className="px-2">{home}</li>
            <li className="px-2">{service}</li>
            <li className="px-2">{about}</li>
            <li className="px-2">{contact}</li>
          </ul>
        </div>
        <div className="sm:hidden" onClick={handleClick}>
          {nav ? (
            <CloseOutlined className="text-3xl xs:text-4xl text-white cursor-pointer" />
          ) : (
            <MenuOutlined className="text-3xl xs:text-4xl text-white cursor-pointer" />
          )}
        </div>
      </div>
      <ul
        className={
          nav
            ? "absolute bg-gray opacity-90 w-full h-screen px-8 text-white sm:hidden"
            : "hidden"
        }
      >
        <li className="border-b-2 border-marine w-full py-4">Home</li>
        <li className="border-b-2 border-marine w-full py-4">Service</li>
        <li className="border-b-2 border-marine w-full py-4">About</li>
        <li className="border-b-2 border-marine w-full py-4">Contact</li>
      </ul>
    </header>
  );
}

export default Header;


