import React, { useState } from "react";
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {

    const [nav, setNav] = useState(false);

    function handleClickNav() {
        setNav(!nav);
    };

    function handleClose() {
        setNav(!nav);
    };

    return (
        <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-md">
            <div className="flex justify-between items-center px-4 w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mx-4">My brand.</h1>
                    <ul className="hidden md:flex">
                        <li className="font-sans cursor-pointer hover:text-amber-500 hover:font-bold hover:ease-in duration-150"><Link to="home" smooth={true} offset={-150} duration={1000}>Home</Link></li>
                        <li className="font-sans cursor-pointer hover:text-amber-500 hover:font-bold hover:ease-in duration-150"><Link to="about" smooth={true} offset={-220} duration={1000}>About</Link></li>
                        <li className="font-sans cursor-pointer hover:text-amber-500 hover:font-bold hover:ease-in duration-150"><Link to="support" smooth={true} offset={-40} duration={1000}>Support</Link></li>
                        <li className="font-sans cursor-pointer hover:text-amber-500 hover:font-bold hover:ease-in duration-150"><Link to="benefits" smooth={true} offset={-100} duration={1000}>Benefits</Link></li>
                        <li className="font-sans cursor-pointer hover:text-amber-500 hover:font-bold hover:ease-in duration-150"><Link to="pricing" smooth={true} offset={-50} duration={1000}>Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4 mr-4">
                    <button>Get started</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClickNav}>
                    {!nav ? <MenuIcon className="w-6 cursor-pointer" /> : <XIcon className="w-6 cursor-pointer" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8 md:hidden"}>
                <li className="border-b-2 border-amber-200 w-full font-sans cursor-pointer"><Link onClick={handleClose} to="home" smooth={true} offset={-150} duration={1000}>Home</Link></li>
                <li className="border-b-2 border-amber-200 w-full font-sans cursor-pointer"><Link onClick={handleClose} to="about" smooth={true} offset={-220} duration={1000}>About</Link></li>
                <li className="border-b-2 border-amber-200 w-full font-sans cursor-pointer"><Link onClick={handleClose} to="support" smooth={true} offset={-40} duration={1000}>Support</Link></li>
                <li className="border-b-2 border-amber-200 w-full font-sans cursor-pointer"><Link onClick={handleClose} to="benefits" smooth={true} offset={-100} duration={1000}>Benefits</Link></li>
                <li className="border-b-2 border-amber-200 w-full font-sans cursor-pointer"><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={1000}>Pricing</Link></li>
                <div className="flex flex-col my-4">
                    <button className="py-2 px-8">Get started</button>
                </div>
            </ul>
        </div>
    )
};