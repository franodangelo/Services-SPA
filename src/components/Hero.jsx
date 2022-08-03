import React from "react";

export default function Hero() {
    return (
        <div>
            <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
                    <div>
                        <h4 className="text-sm md:text-base">Category & Industry</h4>
                        <h1 className="text-3xl my-2 md:text-4xl lg:text-5xl xl:text-6xl">Service type</h1>
                        <h2 className="text-lg md:text-xl">Some information about our service</h2>
                        <button className="mt-6 w-full md:w-auto">Get started</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>Our works</h3>
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