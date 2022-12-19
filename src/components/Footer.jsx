import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="w-full mt-32 p-10 md:py-4 text-slate-300 bg-slate-900">
            <section className="grid grid-cols-2 md:grid-cols-6 mx-auto py-10 border-b-2 border-slate-600">
                <div className="flex flex-col pb-4">
                    <h1 className="font-sans font-bold uppercase">Solutions</h1>
                    <ul className="flex flex-col mt-2 gap-2">
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Marketing</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Analytics</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Data</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Cloud</li>
                    </ul>
                </div>
                <div className="flex flex-col pb-4">
                    <h1 className="font-sans font-bold uppercase">Support</h1>
                    <ul className="flex flex-col mt-2 gap-2">
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Pricing</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Documentation</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Guides</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">API Status</li>
                    </ul>
                </div>
                <div className="flex flex-col pb-4">
                    <h1 className="font-sans font-bold uppercase">Company</h1>
                    <ul className="flex flex-col mt-2 gap-2">
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">About</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Blog</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Jobs</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Clients</li>
                    </ul>
                </div>
                <div className="flex flex-col pb-4">
                    <h1 className="font-sans font-bold uppercase">Legal</h1>
                    <ul className="flex flex-col mt-2 gap-2">
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Terms</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Privacy</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Claims</li>
                        <li className="text-sm hover:text-amber-400 focus:text-amber-400 ease-in duration-200 md:cursor-pointer">Conditions</li>
                    </ul>
                </div>
                <div className="pt-8 md:pt-0 col-span-2">
                    <h1 className="font-sans font-bold uppercase">Subscribe to our newsletter</h1>
                    <p className="mt-2 font-sans text-sm md:text-base">The latest news, articles and resources, weekly in your inbox.</p>
                    <form className="flex flex-col sm:flex-row mt-4 gap-4">
                        <input className="w-full py-2 px-4 rounded-md" type="email" placeholder="Enter email" />
                        <button>Subscribe</button>
                    </form>
                </div>
            </section>
            <section className="flex flex-col md:flex-row mx-auto px-2 py-4 justify-between text-center text-slate-500">
                <h1 className="py-4 text-sm md:text-base text-amber-400">{`Franco D'Angelo (2022) - All rights reserved`}</h1>
                <div className="flex justify-between items-center gap-6 text-2xl">
                    <a href="mailto:ffrancodangelo@gmail.com">
                        <FiMail className="w-8 h-8 p-2 rounded-full bg-amber-400 text-slate-900 md:cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/franco-dangelo/">
                        <FaLinkedin className="w-8 h-8 p-2 rounded-full bg-amber-400 text-slate-900 md:cursor-pointer" />
                    </a>
                    <a href="https://github.com/franodangelo">
                        <FaGithub className="w-8 h-8 p-2 rounded-full bg-amber-400 text-slate-900 md:cursor-pointer" />
                    </a>
                </div>
            </section>
        </footer>
    )
}