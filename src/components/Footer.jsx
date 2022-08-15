import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <main className='w-full mt-32 bg-slate-900 text-slate-300 p-2'>
            <section className='max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-slate-600 py-8'>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Solutions</h1>
                    <div className='justify-start'>
                        <h2 className='py-1'>Marketing</h2>
                        <h2 className='py-1'>Analytics</h2>
                        <h2 className='py-1'>Data</h2>
                        <h2 className='py-1'>Cloud</h2>
                    </div>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Support</h1>
                    <div className='justify-start'>
                        <h2 className='py-1'>Pricing</h2>
                        <h2 className='py-1'>Documentation</h2>
                        <h2 className='py-1'>Guides</h2>
                        <h2 className='py-1'>API Status</h2>
                    </div>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Company</h1>
                    <div className='justify-start'>
                        <h2 className='py-1'>About</h2>
                        <h2 className='py-1'>Blog</h2>
                        <h2 className='py-1'>Jobs</h2>
                        <h2 className='py-1'>Ch2ents</h2>
                    </div>
                </div>
                <div>
                    <h1 className='font-sans font-bold text-md uppercase pt-2'>Legal</h1>
                    <div className='justify-start'>
                        <h2 className='py-1'>Terms</h2>
                        <h2 className='py-1'>Privacy</h2>
                        <h2 className='py-1'>Claims</h2>
                        <h2 className='py-1'>Conditions</h2>
                    </div>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <h1 className='font-bold uppercase'>Subscribe to our newsletter</h1>
                    <p className='py-4 font-sans'>The latest news, articles and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 mb-4 rounded-md caret-amber-400' type="email" placeholder='Enter email' />
                        <button className='mb-4'>Subscribe</button>
                    </form>
                </div>
            </section>
            <section className='flex flex-col max-w-[1280px] mx-auto px-2 py-4 justify-between sm:flex-row text-center text-slate-500'>
                <h1 className='py-4'>Franco D'Angelo - 2022. All rights reserved</h1>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FiMail className='w-7 h-7 p-2 mx-2 bg-amber-400 text-white rounded-2xl' />
                    <a href='https://www.linkedin.com/in/franco-dangelo/'><FaLinkedin className='w-7 h-7 p-2 mx-2 bg-amber-400 text-white rounded-2xl cursor-pointer' /></a>
                    <a href='https://github.com/franodangelo'><FaGithub className='w-7 h-7 p-2 mx-2 bg-amber-400 text-white rounded-2xl cursor-pointer' /></a>
                </div>
            </section>
        </main>
    )
};