import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <main className='w-full my-24 bg-slate-900 text-slate-300 p-2'>
            <section className='max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h1 className='font-bold uppercase pt-2'>Solutions</h1>
                    <ul >
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold uppercase pt-2'>Support</h1>
                    <ul >
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold uppercase pt-2'>Company</h1>
                    <ul >
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Clients</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold uppercase pt-2'>Legal</h1>
                    <ul >
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <h1>Subscribe to our newsletter</h1>
                    <p>The latest news, articles and resources, sent to your inbox weekly.</p>
                    <form>
                        <input type="email" />
                        <button>Suscribe</button>
                    </form>
                </div>
            </section>
            <section>
                <h1>Franco D'Angelo - 2022. All rights reserved</h1>
                <div>
                    <FaGithub/>
                    <FaLinkedin/>
                </div>
            </section>
        </main>
    )
};