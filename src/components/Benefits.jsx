import { CheckIcon } from "@heroicons/react/outline";

export default function Benefits() {
    return (
        <main name="benefits" className="w-full py-[120px] md:py-32 px-10 md:px-16 lg:px-20">
            <h1 className="py-2 md:py-4 lg:py-6 font-bold text-3xl md:text-5xl text-center">Benefits when working with us!</h1>
            <p className="py-2 md:py-4 font-sans text-lg md:text-2xl md:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere incidunt odit, repudiandae cupiditate autem quibusdam iusto atque in nulla et dolorem. Porro delectus sunt enim non. Odio, dolor. Excepturi. Ut nam, pariatur magni aperiam at dolor reiciendis dolores voluptatem! At nam modi harum! </p>
            <section className="grid sm:grid-cols-2 xl:grid-cols-4 mt-8 gap-8 md:gap-4">
                <div className="flex flex-col">
                    <h2 className="flex pb-2 font-sans font-bold text-xl text-slate-500">
                        <CheckIcon className="w-6 mr-2 text-green-600" />Newest technology
                    </h2>
                    <p className="pt-2 pb-4 border-t-2 border-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis atque nobis id voluptatem, fugit molestiae cupiditate ut beatae ab.</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="flex pb-2 font-sans font-bold text-xl text-slate-500">
                        <CheckIcon className="w-6 mr-2 text-green-600" />Qualified supporters
                    </h2>
                    <p className="pt-2 pb-4 border-t-2 border-slate-500">Reprehenderit voluptatibus tenetur rerum facere, culpa labore eligendi officiis magnam ea quam vel eum dolorum! Est asperiores iste sapiente a?</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="flex pb-2 font-sans font-bold text-xl text-slate-500">
                        <CheckIcon className="w-6 mr-2 text-green-600" />Transparent service
                    </h2>
                    <p className="pt-2 pb-4 border-t-2 border-slate-500">Quisquam earum, porro fugit sapiente odio ipsa laudantium veritatis voluptate dignissimos. Hic magnam dolorem odit voluptates aliquam!</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="flex pb-2 font-sans font-bold text-xl text-slate-500">
                        <CheckIcon className="w-6 mr-2 text-green-600" />Greatest references
                    </h2>
                    <p className="pt-2 pb-4 border-t-2 border-slate-500">Deleniti libero veniam itaque quae, labore doloremque, optio obcaecati aperiam! Iure tenetur repellat accusantium facilis voluptatem earum.</p>
                </div>
            </section>
        </main>
    )
}