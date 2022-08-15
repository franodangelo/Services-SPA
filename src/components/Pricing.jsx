import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';

export default function Pricing() {
    return (
        <main name='pricing' className='w-full text-white my-32'>
            <div className='w-full h-[800px] bg-slate-800 absolute mix-blend-overlay'></div>

            <div className='max-w-[1280px] mx-auto py-12'>
                    <div className='text-center py-8 text-slate-300'>
                        <h3 className='font-sans font-light text-3xl uppercase'>Pricing</h3>
                        <h1 className='text-5xl font-bold text-white py-8'>Here are our alternatives for your budget</h1>
                        <p className='font-sans text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt blanditiis, temporibus aliquid hic ex quia repellat similique voluptas aperiam sequi.</p>
                    </div>

                    <section className='grid md:grid-cols-3'>
                        <div className='m-2 p-8 h-auto bg-white text-slate-800 rounded-xl shadow-2xl relative'>
                            <span className='px-4 py-1 bg-yellow-200 text-yellow-800 rounded-2xl font-sans font-semibold text-sm uppercase'>Standard</span>
                            <h1 className='my-6 text-4xl font-bold'>$49 p{`/`}month</h1>
                            <p className='font-sans text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                            <div className='text-lg relative mt-8'>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            </div>
                            <button className='w-full'>Get Started</button>
                        </div>
                        <div className='bg-white text-slate-800 m-2 p-8 rounded-xl shadow-2xl'>
                            <span className='px-4 py-1 bg-slate-600 rounded-2xl font-sans font-semibold text-sm text-yellow-500 uppercase'>Pro</span>
                            <h1 className='my-6 text-4xl font-bold'>$79 p{`/`}month</h1>
                            <p className='font-sans text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                            <div className='text-lg relative mt-8'>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><XIcon className='w-12 mr-2 text-red-600' />Lorem ipsum dolor sit.</h4>
                            </div>
                            <button className='w-full'>Get Started</button>
                        </div>
                        <div className='bg-white text-slate-800 m-2 p-8 rounded-xl shadow-2xl'>
                            <span className='px-4 py-1 bg-slate-100 rounded-2xl border border-slate-400 font-sans font-semibold text-sm text-slate-500 uppercase'>Enterprise</span>
                            <h1 className='my-6 text-4xl font-bold'>$99 p{`/`}month</h1>
                            <p className='font-sans text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consectetur.</p>
                            <div className='text-lg relative mt-8'>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                                <h4 className='flex items-center mb-12'><CheckIcon className='w-12 mr-2 text-green-600' />Lorem ipsum dolor sit.</h4>
                            </div>
                            <button className='w-full'>Get Started</button>
                        </div>
                    </section>
                </div>
        </main>
    )
};