import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <header className="w-screen h-[80px] bg-marine drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
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
                    {nav ? <XMarkIcon className="w-8 text-white" /> : <Bars3Icon className="w-8 text-white" />}
                </div>
            </div>
            <ul
                className={
                    nav ? "absolute bg-gray opacity-50 w-full h-screen px-8 text-white sm:hidden" : "hidden"
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
