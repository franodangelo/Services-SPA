import React from "react";
// import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/solid";
// import bgImg from "../assets"

export default function Hero() {
    return (
        <div>
            <div className="w-full h-screen bg-green-200 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
                    <div>
                        <h3>Category & Industry</h3>
                        <h1>Service type</h1>
                        <h2>Some information about our service</h2>
                        <button>Get started</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h4></h4>
                        <ul>
                            <li>Service</li>
                            <li>Service</li>
                            <li>Service</li>
                            <li>Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};