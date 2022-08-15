import React from "react";
import { AcademicCapIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon  } from "@heroicons/react/solid";
import bgImg from "../assets/landing-bg.svg"

export default function Hero() {
    return (
        <main name="home">
            <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
                    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                        <h4 className="text-sm md:text-base">Category & Industry</h4>
                        <h1 className=" py-3 font-sans font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Service type</h1>
                        <h2 className="font-sans font-thin text-lg md:text-xl">Some information about our service</h2>
                        <button className="my-6 w-full md:w-[60%]">Get started</button>
                    </div>
                    <div>
                        <img className="w-full h-[90%]" src={bgImg} alt="/" />
                    </div>
                    <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border-slate-400 rounded-xl text-center shadow-lg">
                        <h3 className="font-sans text-2xl">Our works</h3>
                        <div className="flex justify-between flex-wrap px-4">
                            <h4 className="flex px-4- py-2 text-gray-600"><AcademicCapIcon className="h-6 text-yellow-400"/> Service</h4>
                            <h4 className="flex px-4- py-2 text-gray-600"><DatabaseIcon className="h-6 text-yellow-400"/>  Service</h4>
                            <h4 className="flex px-4- py-2 text-gray-600"><ServerIcon className="h-6 text-yellow-400"/> Service</h4>
                            <h4 className="flex px-4- py-2 text-gray-600"><PaperAirplaneIcon className="h-6 text-yellow-400"/> Service</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};