import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {

    const [nav, setNav] = useState(false);

    function handleClickNav() {
        setNav(!nav);
    }

    return (
        <div className="w-screen h-[80px] z-10 bg-yellow-50 fixed drop-shadow-md">
            <div className="flex justify-between items-center px-4 w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mx-4">My brand.</h1>
                    <ul className="hidden md:flex">
                        <li className="font-sans">Home</li>
                        <li className="font-sans">About</li>
                        <li className="font-sans">Services</li>
                        <li className="font-sans">Pricing</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4 mr-4">
                    <button>Get started</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClickNav}>
                    {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-yellow-50 w-full px-8 md:hidden"}>
                <li className="border-b-2 border-yellow-200 w-full font-sans">Home</li>
                <li className="border-b-2 border-yellow-200 w-full font-sans">About</li>
                <li className="border-b-2 border-yellow-200 w-full font-sans">Services</li>
                <li className="border-b-2 border-yellow-200 w-full font-sans">Pricing</li>
                <div className="flex flex-col my-4">
                    <button className="py-2 px-8">Get started</button>
                </div>
            </ul>
        </div>
    )
};