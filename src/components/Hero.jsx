import { AcademicCapIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import bgImg from "../assets/landing-bg.svg";

export default function Hero() {
    return (
        <header name="home" className="flex flex-col w-full py-[120px] md:py-40 justify-between items-center bg-zinc-100 text-slate-900">
            <section className="flex flex-col md:flex-row w-full px-10 md:px-16 lg:px-20 md:items-center justify-between gap-4 md:gap-0">
                <div className="flex flex-col basis-2/3 gap-2">
                    <h4 className="font-sans font-light text-md md:text-base">Eveniet non ab laudantium, temporibus animi.</h4>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="w-[75%] font-sans text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt reprehenderit impedit iste ad labore alias consequatur?</p>
                    <button className="w-full md:w-[75%] lg:w-[60] xl:w-[50%] mt-4">Get started</button>
                </div>
                <img className="basis-1/3 w-full h-full mt-4 md:mt-0 object-cover" src={bgImg} alt="Services illustration" />
            </section>
            <section className="flex flex-col w-[80%] sm:w-[75%] lg:w-[65%] xl:w-[50%] mt-16 p-4 gap-4 text-center rounded-xl bg-white shadow-lg">
                <h3 className="font-sans text-2xl">Our works</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 justify-around">
                    <h4 className="flex px-4 py-2 gap-2 text-slate-600">
                        <AcademicCapIcon className="w-6 h-6 text-amber-400" />Service
                    </h4>
                    <h4 className="flex px-4 py-2 gap-2 text-slate-600">
                        <DatabaseIcon className="w-6 h-6 text-amber-400" />Service
                    </h4>
                    <h4 className="flex px-4 py-2 gap-2 text-slate-600">
                        <ServerIcon className="w-6 h-6 text-amber-400" />Service
                    </h4>
                    <h4 className="flex px-4 py-2 gap-2 text-slate-600">
                        <PaperAirplaneIcon className="w-6 h-6 text-amber-400" />Service
                    </h4>
                </div>
            </section>
        </header>
    )
}