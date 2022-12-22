import { CheckIcon, XIcon } from "@heroicons/react/outline";

export default function Pricing() {
    return (
        <main name="pricing" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-10 md:px-16 lg:px-20 text-slate-100 bg-slate-800">
            <h1 className="py-2 md:py-4 lg:py-6 font-bold text-3xl md:text-5xl">Here are our alternatives for your budget.</h1>
            <p className="py-2 md:py-4 font-sans text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum tenetur quae, dolores recusandae quidem quis, id voluptates voluptatum totam ratione aliquid magnam voluptate nulla facere error molestiae cum accusantium iure distinctio consectetur debitis aliquam!</p>
            <section className="grid md:grid-cols-3 mt-16 gap-16 lg:gap-6">
                <div className="flex flex-col h-auto p-8 justify-between rounded-xl bg-white text-slate-800 shadow-2xl">
                    <span className="w-fit px-2 py-1 bg-amber-300 text-slate-900 rounded-xl font-sans font-semibold text-sm uppercase">Standard</span>
                    <h1 className="my-6 font-bold text-3xl md:text-4xl">$49 p/month</h1>
                    <p className="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                    <div className="mt-8 md:text-lg">
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.
                        </h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.
                        </h4>
                    </div>
                    <button className="w-full">Get Started</button>
                </div>
                <div className="flex flex-col h-auto p-8 justify-between rounded-xl bg-white text-slate-800 shadow-2xl">
                    <span className="w-fit px-2 py-1 bg-slate-600 rounded-xl font-sans font-semibold text-sm text-amber-400 uppercase">Pro</span>
                    <h1 className="my-6 font-bold text-3xl md:text-4xl">$79 p/month</h1>
                    <p className="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                    <div className="mt-8 md:text-lg">
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <XIcon className="w-8 md:w-10 mr-2 text-red-600" />Lorem ipsum dolor sit.</h4>
                    </div>
                    <button className="w-full">Get Started</button>
                </div>
                <div className="flex flex-col h-auto p-8 justify-between rounded-xl bg-white text-slate-800 shadow-2xl">
                    <span className="w-fit px-2 py-1 bg-slate-100 rounded-xl border border-slate-400 font-sans font-semibold text-sm text-slate-500 uppercase">Enterprise</span>
                    <h1 className="my-6 font-bold text-3xl md:text-4xl">$99 p/month</h1>
                    <p className="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                    <div className="mt-8 md:text-lg">
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                        <h4 className="flex mb-8 items-center">
                            <CheckIcon className="w-8 md:w-10 mr-2 text-green-600" />Lorem ipsum dolor sit.</h4>
                    </div>
                    <button className="w-full">Get Started</button>
                </div>
            </section>
        </main>
    )
}