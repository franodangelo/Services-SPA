import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {

    const [nav, setNav] = useState(false);

    function handleClickNav() {
        setNav(!nav);
    }

    return (
        <div className="w-screen h-[80px] z-10 bg-yellow-50 fixed drop-shadow-md">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mx-4 sm:text-4xl">My brand.</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="py-2 px-4 mx-6">Get started</button>
                </div>
                <div className="md:hidden" onClick={handleClickNav}>
                    {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-yellow-50 w-full px-8"}>
                <li className="border-b-2 border-yellow-200 w-full">Home</li>
                <li className="border-b-2 border-yellow-200 w-full">About</li>
                <li className="border-b-2 border-yellow-200 w-full">Services</li>
                <li className="border-b-2 border-yellow-200 w-full">Pricing</li>
                <div className="flex flex-col my-4">
                    <button className="py-2 px-8">Get started</button>
                </div>
            </ul>
        </div>
    )
};