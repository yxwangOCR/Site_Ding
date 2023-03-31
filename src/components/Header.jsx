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
            <a href="#form"><li className="px-2 cursor-pointer hover:text-bordeau">{service}</li></a>
            <a href="#about"><li className="px-2 cursor-pointer hover:text-bordeau">{about}</li></a>
            <a href="#review"><li className="px-2 cursor-pointer hover:text-bordeau">{review}</li></a>
            <a href="#contact"><li className="px-2 cursor-pointer hover:text-bordeau">{contact}</li></a>
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
            ? "absolute bg-bordeau opacity-95 w-full px-8 py-16 text-white sm:hidden"
            : "hidden"
        }
      >
        <a href="#form" onClick={handleClick}><li className="border-b-2 border-marine w-full py-4">{service}</li></a>
        <a href="#about" onClick={handleClick}><li className="border-b-2 border-marine w-full py-4">{about}</li></a>
        <a href="#review" onClick={handleClick}><li className="border-b-2 border-marine w-full py-4">{review}</li></a>
        <a href="#contact" onClick={handleClick}><li className="border-b-2 border-marine w-full py-4">{contact}</li></a>
      </ul>


    </header>
  );
}

export default Header;
