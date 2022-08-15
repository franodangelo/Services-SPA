import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

export default function Benefits() {
    return (
        <main name='benefits' className='w-full my-32'>
            <div className='max-w-[1280px] mx-auto px-2'>
                <h1 className='text-5xl font-bold text-center'>Benefits when working with us!</h1>
                <p className='font-sans text-2xl py-8 text-slate-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere incidunt odit, repudiandae cupiditate autem quibusdam iusto atque in nulla et dolorem. Porro delectus sunt enim non. Odio, dolor. Excepturi.
                    Ut nam, pariatur magni aperiam at dolor reiciendis dolores voluptatem! At nam modi harum! Voluptatem accusantium reprehenderit, officia incidunt perferendis culpa doloremque temporibus earum beatae, ad veniam, vitae ut sequi?</p>
            </div>
            <section className='grid sm:grid-cols-2 lg:grid-cols-4 px-4 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Newest technology</h2>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis atque nobis id voluptatem, fugit molestiae cupiditate ut beatae ab.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Qualified supporters</h2>
                        <p className='text-lg pt-2 pb-4'>Reprehenderit voluptatibus tenetur corporis aspernatur minima deserunt quia error ex quas rerum facere, culpa labore eligendi officiis magnam ea quam vel eum dolorum! Est asperiores iste sapiente a?</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Transparent service</h2>
                        <p className='text-lg pt-2 pb-4'>Quisquam earum, porro fugit sapiente odio ipsa laudantium veritatis voluptate dignissimos. Hic magnam dolorem odit voluptates aliquam!</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Greatest references</h2>
                        <p className='text-lg pt-2 pb-4'>Deleniti libero veniam itaque quae, dolores accusantium aut labore magnam porro doloremque, optio obcaecati aperiam! Iure tenetur repellat accusantium facilis voluptatem earum.</p>
                    </div>
                </div>
            </section>
        </main>
    )
};