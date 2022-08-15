import React from 'react'

export default function About() {
    return (
        <main name='about' className='w-full my-32'>
            <div className='max-w-[1280px] mx-auto text-slate-900'>
                <section className='text-center'>
                    <h1 className='text-5xl font-bold py-6 text-center'>Trusted by +1000 users across the world</h1>
                    <p className='py-6 font-sans text-2xl text-center text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum. Odit harum enim dolorem in nostrum ex fuga odio veritatis, omnis dicta sit, sapiente voluptatum illo qui voluptatem? Voluptas, rerum!</p>
                </section>
                <section className='grid md:grid-cols-3 gap-8 px-2 my-4 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-400'>100%</p>
                        <p className='font-sans font-semibold text-slate-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-400'>24/7</p>
                        <p className='font-sans font-semibold text-slate-400 mt-2'>Support</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-amber-400'>95%</p>
                        <p className='font-sans font-semibold text-slate-400 mt-2'>Satisfaction Level!</p>
                    </div>
                </section>
            </div>
        </main>
    )
};