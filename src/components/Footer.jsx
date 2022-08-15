import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <main className='w-full my-32 bg-slate-900 text-slate-300 p-2'>
            <section className='max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Solutions</h1>
                    <ul className='justify-start'>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Support</h1>
                    <ul className='justify-start'>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Company</h1>
                    <ul className='justify-start'>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Clients</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Legal</h1>
                    <ul className='justify-start'>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <h1 className='font-bold uppercase'>Subscribe to our newsletter</h1>
                    <p className='py-4 font-sans'>The latest news, articles and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4 caret-yellow-400' type="email" placeholder='Enter email' />
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </section>
            <section className='flex flex-col max-w-[1280px] mx-auto px-2 py-4 justify-between sm:flex-row text-center text-gray-500'>
                <h1 className='py-4'>Franco D'Angelo - 2022. All rights reserved</h1>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FiMail className='w-7 h-7 p-2 mx-2 bg-yellow-400 text-white rounded-2xl' />
                    <FaLinkedin className='w-7 h-7 p-2 mx-2 bg-yellow-400 text-white rounded-2xl' />
                    <FaGithub className='w-7 h-7 p-2 mx-2 bg-yellow-400 text-white rounded-2xl' />
                </div>
            </section>
        </main>
    )
};