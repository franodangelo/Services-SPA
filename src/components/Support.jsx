import React from 'react';
import { PhoneIcon, ChipIcon, FingerPrintIcon, ArrowSmRightIcon } from '@heroicons/react/outline';

export default function Support() {
    return (
        <main className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src="" alt="/" />
            </div>
            <div className='max-w-[1280px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h1 className='text-5xl font-bold py-6 text-center'>Need support?</h1>
                    <p className='font-sans text-2xl text-center py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis pariatur eveniet beatae, voluptates esse inventore enim impedit ipsam soluta maiores quibusdam id repellat obcaecati sit incidunt dicta, blanditiis nemo!</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-yellow-600 text-white rounded-lg mt-[-4rem]' />
                            <h2 className='text-2xl font-bold my-6'>Online data</h2>
                            <p className='font-sans text-xl text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea deleniti magni.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-b-xl'>
                            <h3 className='flex items-center text-yellow-600 text-lg'>Download now <ArrowSmRightIcon className='w-5 mt-2' /></h3>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-yellow-600 text-white rounded-lg mt-[-4rem]' />
                            <h2 className='text-2xl font-bold my-6'>Sales</h2>
                            <p className='font-sans text-xl text-gray-600'>Et voluptas ipsa id facere veritatis exercitationem similique inventore nam, fuga porro cum laborum!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-b-xl'>
                            <h3 className='flex items-center text-yellow-600 text-lg'>Contact us <ArrowSmRightIcon className='w-5 mt-2' /></h3>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <FingerPrintIcon className='w-16 p-4 bg-yellow-600 text-white rounded-lg mt-[-4rem]' />
                            <h2 className='text-2xl font-bold my-6'>Security</h2>
                            <p className='font-sans text-xl text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, laboriosam?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-b-xl'>
                            <h3 className='flex items-center text-yellow-600 text-lg'>Run a test <ArrowSmRightIcon className='w-5 mt-2' /></h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};