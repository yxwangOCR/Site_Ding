import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Anchor } from "antd";

function Header() {
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
            <li className="px-2">Home</li>
            <li className="px-2">Services</li>
            <li className="px-2">About</li>
            <li className="px-2">Contact</li>
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

/*
<Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
          {
            key: 'part-4',
            href: '#part-4',
            title: 'Part 4',
          },
          {
            key: 'part-5',
            href: '#part-5',
            title: 'Part 5',
          },
          {
            key: 'part-6',
            href: '#part-6',
            title: 'Part 6',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
      <div
        id="part-4"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#F4EAD5',
        }}
      />
      <div
        id="part-5"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#DAE2B6',
        }}
      />
      <div
        id="part-6"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#CCD6A6',
        }}
      />
*/
