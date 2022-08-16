import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

export default function Benefits() {
    return (
        <main name='benefits' className='w-full my-32'>
            <div className='max-w-[1280px] mx-auto px-2'>
                <h1 className='py-6 font-bold text-3xl text-center md:text-5xl'>Benefits when working with us!</h1>
                <p className='py-2 font-sans text-lg text-center text-slate-500 md:py-6 md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere incidunt odit, repudiandae cupiditate autem quibusdam iusto atque in nulla et dolorem. Porro delectus sunt enim non. Odio, dolor. Excepturi.
                    Ut nam, pariatur magni aperiam at dolor reiciendis dolores voluptatem! At nam modi harum! </p>
            </div>
            <section className='grid sm:grid-cols-2 lg:grid-cols-4 mx-8 px-4 gap-4 pt-4'>
                <div className='flex my-4'>
                    <div>
                        <h2 className='flex font-sans font-bold text-xl pb-4 text-slate-500'><CheckIcon className='w-7 mr-2 text-green-600' />Newest technology</h2>
                        <p className='border-solid border-t-4 text-lg pt-2 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis atque nobis id voluptatem, fugit molestiae cupiditate ut beatae ab.</p>
                    </div>
                </div>
                <div className='flex my-4'>
                    <div>
                        <h2 className='flex font-sans font-bold text-xl pb-4 text-slate-500'><CheckIcon className='w-7 mr-2 text-green-600' />Qualified supporters</h2>
                        <p className='border-solid border-t-4 text-lg pt-2 pb-4'>Reprehenderit voluptatibus tenetur corporis aspernatur minima deserunt quia error ex quas rerum facere, culpa labore eligendi officiis magnam ea quam vel eum dolorum! Est asperiores iste sapiente a?</p>
                    </div>
                </div>
                <div className='flex my-4'>
                    <div>
                        <h2 className='flex font-sans font-bold text-xl pb-4 text-slate-500'><CheckIcon className='w-7 mr-2 text-green-600' />Transparent service</h2>
                        <p className='border-solid border-t-4 text-lg pt-2 pb-4'>Quisquam earum, porro fugit sapiente odio ipsa laudantium veritatis voluptate dignissimos. Hic magnam dolorem odit voluptates aliquam!</p>
                    </div>
                </div>
                <div className='flex my-4'>
                    <div>
                        <h2 className='flex font-sans font-bold text-xl pb-4 text-slate-500'><CheckIcon className='w-7 mr-2 text-green-600' />Greatest references</h2>
                        <p className='border-solid border-t-4 text-lg pt-2 pb-4'>Deleniti libero veniam itaque quae, dolores accusantium aut labore magnam porro doloremque, optio obcaecati aperiam! Iure tenetur repellat accusantium facilis voluptatem earum.</p>
                    </div>
                </div>
            </section>
        </main>
    )
};