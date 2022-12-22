import { useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <nav className="fixed w-screen h-20 z-10 bg-white text-slate-800 shadow-md transition-all">
            <div className="flex w-full h-full px-10 md:px-16 lg:px-20 justify-between items-center">
                <section className="flex items-center gap-6">
                    <ul className="hidden md:flex gap-6 items-center">
                        <li className="font-sans cursor-pointer hover:text-amber-400 hover:font-bold hover:ease-in duration-150">
                            <Link to="home" smooth={true} offset={-150} duration={1000}>
                                <h1 className="font-bold text-2xl">My brand.</h1>
                            </Link>
                        </li>
                        <li className="font-sans cursor-pointer hover:text-amber-400 hover:font-bold hover:ease-in duration-150">
                            <Link to="about" smooth={true} duration={1000}>About</Link>
                        </li>
                        <li className="font-sans cursor-pointer hover:text-amber-400 hover:font-bold hover:ease-in duration-150">
                            <Link to="support" smooth={true} duration={1000}>Support</Link>
                        </li>
                        <li className="font-sans cursor-pointer hover:text-amber-400 hover:font-bold hover:ease-in duration-150">
                            <Link to="benefits" smooth={true} duration={1000}>Benefits</Link>
                        </li>
                        <li className="font-sans cursor-pointer hover:text-amber-400 hover:font-bold hover:ease-in duration-150">
                            <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                        </li>
                    </ul>
                </section>
                <Link to="pricing" smooth={true} duration={1000}>
                    <button className="hidden md:flex">Get started</button>
                </Link>
                {!nav ?
                    <div className="flex md:hidden w-full justify-between">
                        <Link to="home" smooth={true} offset={-150} duration={1000}>
                            <h1 className="font-bold text-2xl">My brand.</h1>
                        </Link>
                        <MenuIcon onClick={handleNav} className="w-6 cursor-pointer md:hidden" />
                    </div> :
                    <XIcon onClick={handleNav} className="w-6 cursor-pointer md:hidden" />
                }
            </div>
            <div className={!nav ? "hidden" : "absolute bg-white w-full px-10 py-6 md:hidden"}>
                <ul className="flex flex-col gap-6">
                    <li className="pb-2 border-b-2 border-amber-200 font-sans font-medium cursor-pointer">
                        <Link onClick={handleNav} to="home" smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li className="pb-2 border-b-2 border-amber-200 font-sans font-medium cursor-pointer">
                        <Link onClick={handleNav} to="about" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li className="pb-2 border-b-2 border-amber-200 font-sans font-medium cursor-pointer">
                        <Link onClick={handleNav} to="support" smooth={true} duration={1000}>Support</Link>
                    </li>
                    <li className="pb-2 border-b-2 border-amber-200 font-sans font-medium cursor-pointer">
                        <Link onClick={handleNav} to="benefits" smooth={true} duration={1000}>Benefits</Link>
                    </li>
                    <li className="pb-2 border-b-2 border-amber-200 font-sans font-medium cursor-pointer">
                        <Link onClick={handleNav} to="pricing" smooth={true} offset={-50} duration={1000}>Pricing</Link>
                    </li>
                </ul>
                <button className="w-full mt-6">Get started</button>
            </div>
        </nav>
    )
}