import React from "react";
import { AcademicCapIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import bgImg from "../assets/landing-bg.svg";

export default function Hero() {
    return (
        <main name="home">
            <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between text-slate-900">
                <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
                    <div className="flex flex-col w-full px-4 py-8 md:mx-4 justify-center">
                        <h4 className="font-sans text-md md:text-base">Category {`&`} Industry</h4>
                        <h1 className=" py-4 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Service type</h1>
                        <h2 className="font-sans font-thin text-lg md:text-xl">Some information about our service</h2>
                        <button className="my-6 w-full md:w-[50%]">Get started</button>
                    </div>
                    <div>
                        <img className="w-full h-[70%]" src={bgImg} alt="/" />
                    </div>
                    <div className="absolute flex flex-col place-self-center py-4 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white rounded-xl text-center shadow-lg">
                        <h3 className="font-sans text-2xl mb-2">Our works</h3>
                        <div className="flex justify-between flex-wrap px-4">
                            <h4 className="flex px-4- py-2 gap-2 text-slate-600"><AcademicCapIcon className="h-6 text-amber-400" /> Service</h4>
                            <h4 className="flex px-4- py-2 gap-2 text-slate-600"><DatabaseIcon className="h-6 text-amber-400" />  Service</h4>
                            <h4 className="flex px-4- py-2 gap-2 text-slate-600"><ServerIcon className="h-6 text-amber-400" /> Service</h4>
                            <h4 className="flex px-4- py-2 gap-2 text-slate-600"><PaperAirplaneIcon className="h-6 text-amber-400" /> Service</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};