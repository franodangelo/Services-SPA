import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';

export default function Pricing() {
    return (
        <main name='pricing' className='w-full text-white my-32'>
            <div className='w-full h-[900px] bg-slate-800 absolute mix-blend-overlay'></div>
            <div className='max-w-[1280px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h1 className='py-6 font-bold text-white text-center text-3xl md:text-5xl'>Here are our alternatives for your budget.</h1>
                    <p className='py-2 font-sans text-lg text-center md:py-6 md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum tenetur quae, dolores recusandae quidem quis, id voluptates voluptatum totam ratione aliquid magnam voluptate nulla facere error molestiae cum accusantium iure distinctio consectetur debitis aliquam!</p>
                </div>
                <section className='grid md:grid-cols-3 gap-8'>
                    <div className='mx-4 p-12 h-auto bg-white text-slate-800 rounded-xl shadow-2xl relative md:p-8'>
                        <span className='px-4 py-1 bg-amber-300 text-slate-900 rounded-2xl font-sans font-semibold text-sm uppercase'>Standard</span>
                        <h1 className='my-6 font-bold text-2xl md:text-4xl'>$49 p{`/`}month</h1>
                        <p className='font-sans text-md md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                        <div className='relative mt-8 md:text-lg'>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                        </div>
                        <button className='w-full'>Get Started</button>
                    </div>
                    <div className='mx-4 p-8 h-auto bg-white text-slate-800 rounded-xl shadow-2xl relative md:p-8'>
                        <span className='px-4 py-1 bg-slate-600 rounded-2xl font-sans font-semibold text-sm text-amber-400 uppercase'>Pro</span>
                        <h1 className='my-6 font-bold text-2xl md:text-4xl'>$79 p{`/`}month</h1>
                        <p className='font-sans text-md md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                        <div className='relative mt-8 md:text-lg'>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><XIcon className='w-9 md:w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                        </div>
                        <button className='w-full'>Get Started</button>
                    </div>
                    <div className='mx-4 p-8 h-auto bg-white text-slate-800 rounded-xl shadow-2xl relative md:p-8'>
                        <span className='px-4 py-1 bg-slate-100 rounded-2xl border border-slate-400 font-sans font-semibold text-sm text-slate-500 uppercase'>Enterprise</span>
                        <h1 className='my-6 font-bold text-2xl md:text-4xl'>$99 p{`/`}month</h1>
                        <p className='font-sans text-md md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                        <div className='relative mt-8 md:text-lg'>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            <h4 className='flex items-center mb-12'><CheckIcon className='w-9 md:w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                        </div>
                        <button className='w-full'>Get Started</button>
                    </div>
                </section>
            </div>
        </main>
    )
};