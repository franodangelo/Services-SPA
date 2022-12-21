export default function About() {
    return (
        <main name="about" className="w'full my-32 mx-auto text-slate-900">
            <section className="text-center">
                <h1 className="py-6 font-bold text-3xl md:text-5xl text-center">Trusted by +1000 users across the world</h1>
                <p className="py-2 md:py-6 font-sans text-lg md:text-2xl text-center text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum. Odit harum enim dolorem in nostrum ex fuga odio veritatis, omnis dicta sit, sapiente voluptatum illo qui voluptatem? Voluptas, rerum!</p>
            </section>
            <section className="grid md:grid-cols-3 my-4 px-2 gap-8 text-center">
                <div className="flex flex-col py-8 gap-2 rounded-xl shadow-xl">
                    <h3 className="font-bold text-4xl text-amber-400">100%</h3>
                    <p className="font-sans font-semibold text-slate-400">Completion</p>
                </div>
                <div className="flex flex-col py-8 gap-2 rounded-xl shadow-xl">
                    <h3 className="font-bold text-4xl text-amber-400">24/7</h3>
                    <p className="font-sans font-semibold text-slate-400">Support</p>
                </div>
                <div className="flex flex-col py-8 gap-2 rounded-xl shadow-xl">
                    <h3 className="font-bold text-4xl text-amber-400">95%</h3>
                    <p className="font-sans font-semibold text-slate-400">Satisfaction Level!</p>
                </div>
            </section>
        </main>
    )
}