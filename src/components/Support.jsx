import { PhoneIcon, ChipIcon, FingerPrintIcon, ArrowSmRightIcon } from "@heroicons/react/outline";

export default function Support() {
    return (
        <main name="support" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-10 md:px-16 lg:px-20 bg-slate-800 text-white">
            <h1 className="py-2 md:py-4 lg:py-6 font-bold text-3xl md:text-5xl">Need support?</h1>
            <p className="py-2 md:py-4 font-sans text-lg md:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis pariatur eveniet beatae, voluptates esse inventore enim impedit ipsam soluta maiores quibusdam id repellat obcaecati sit incidunt dicta, blanditiis nemo!</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-16 lg:gap-6">
                <div className="flex flex-col h-full justify-between bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <ChipIcon className="w-16 -mt-16 p-4 text-white rounded-lg bg-amber-400" />
                        <h2 className="my-6 font-bold text-2xl text-slate-900">Online data</h2>
                        <p className="font-sans text-xl text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea deleniti magni.</p>
                    </div>
                    <h3 className="flex pl-8 py-4 items-center text-lg text-amber-400 rounded-b-xl bg-slate-100">
                        Download now <ArrowSmRightIcon className="w-5 ml-2" />
                    </h3>
                </div>
                <div className="flex flex-col h-full justify-between bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <PhoneIcon className="w-16 -mt-16 p-4 text-white rounded-lg bg-amber-400" />
                        <h2 className="my-6 font-bold text-2xl text-slate-900">Sales</h2>
                        <p className="font-sans text-xl text-slate-600">Et voluptas ipsa exercitationem similique inventore nam, fuga porro cum laborum!</p>
                    </div>
                    <h3 className="flex pl-8 py-4 items-center text-lg text-amber-400 rounded-b-xl bg-slate-100">
                        Contact us <ArrowSmRightIcon className="w-5 ml-2" />
                    </h3>
                </div>
                <div className="flex flex-col h-full justify-between bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <FingerPrintIcon className="w-16 -mt-16 p-4 text-white rounded-lg bg-amber-400" />
                        <h2 className="my-6 font-bold text-2xl text-slate-900">Security</h2>
                        <p className="font-sans text-xl text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, laboriosam?</p>
                    </div>
                    <h3 className="flex pl-8 py-4 items-center text-lg text-amber-400 rounded-b-xl bg-slate-100">
                        Run a test <ArrowSmRightIcon className="w-5 ml-2" />
                    </h3>
                </div>
            </div>
        </main>
    )
}