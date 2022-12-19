import { AcademicCapIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import bgImg from "../assets/landing-bg.svg";

export default function Hero() {
    return (
        <header name="home" className="flex flex-col w-full bg-zinc-100 text-slate-900">
            <div className="flex flex-col w-full h-auto mt-[120px] items-center gap-10">
                <section className="flex flex-col md:flex-row w-full px-10 md:px-16 lg:px-20 md:items-center justify-between gap-4 md:gap-0">
                    <div className="flex flex-col basis-1/3 gap-2">
                        <h4 className="font-sans font-light text-md md:text-base">Eveniet non ab laudantium, temporibus animi.</h4>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">Service type</h1>
                        <h2 className="font-sans text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt reprehenderit impedit iste ad labore alias consequatur?</h2>
                        <button className="w-full md:w-[75%] lg:w-[60] xl:w-[50%] mt-4">Get started</button>
                    </div>
                    <img className="basis-2/3 w-full h-[200px]" src={bgImg} alt="Services illustration" />
                </section>

                <section className="w-[80%] p-4 text-center rounded-xl bg-white shadow-lg">
                    <h3 className="font-sans text-2xl">Our works</h3>
                    <div className="flex flex-wrap justify-around">
                        <h4 className="flex px-4 py-2 gap-2 text-slate-600"><AcademicCapIcon className="h-6 text-amber-400" /> Service</h4>
                        <h4 className="flex px-4 py-2 gap-2 text-slate-600"><DatabaseIcon className="h-6 text-amber-400" />  Service</h4>
                        <h4 className="flex px-4 py-2 gap-2 text-slate-600"><ServerIcon className="h-6 text-amber-400" /> Service</h4>
                        <h4 className="flex px-4 py-2 gap-2 text-slate-600"><PaperAirplaneIcon className="h-6 text-amber-400" /> Service</h4>
                    </div>
                </section>
            </div>
        </header>
    )
}