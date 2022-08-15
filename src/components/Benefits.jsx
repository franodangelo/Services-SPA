import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

export default function Benefits() {
    return (
        <main className='w-full my-32'>
            <div className='max-w-[1280px] mx-auto px-2'>
                <h1 className='text-5xl font-bold text-center'>Benefits when working with us!</h1>
                <p className='font-sans text-2xl py-8 text-slate-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere incidunt odit, repudiandae cupiditate autem quibusdam iusto atque in nulla et dolorem. Porro delectus sunt enim non. Odio, dolor. Excepturi.
                    Ut nam, pariatur magni aperiam at dolor reiciendis dolores voluptatem! At nam modi harum! Voluptatem accusantium reprehenderit, officia incidunt perferendis culpa doloremque temporibus earum beatae, ad veniam, vitae ut sequi?
                    Nihil nisi reprehenderit tempora. Nemo inventore sint suscipit reprehenderit, illo ea quos sed veritatis adipisci excepturi ipsam vero eligendi voluptatem molestiae animi voluptatibus molestias iusto maxime laboriosam? Vitae, voluptatem illum?
                    Ullam, corrupti expedita ex laborum quia numquam repellendus possimus qui minus reprehenderit doloremque soluta amet. Optio error voluptate officiis vero quas veniam nisi? Veniam beatae recusandae numquam unde ratione adipisci!</p>
            </div>
            <section className='grid sm:grid-cols-2 lg:grid-cols-4 px-4 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Notifications</h2>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad provident soluta modi, harum quidem et autem nulla vero voluptate ipsum, error praesentium beatae nihil accusantium molestiae ipsa deleniti nemo?</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Notifications</h2>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad provident soluta modi, harum quidem et autem nulla vero voluptate ipsum, error praesentium beatae nihil accusantium molestiae ipsa deleniti nemo?</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Notifications</h2>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad provident soluta modi, harum quidem et autem nulla vero voluptate ipsum, error praesentium beatae nihil accusantium molestiae ipsa deleniti nemo?</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-2 text-green-600' />
                    </div>
                    <div>
                        <h2 className='font-sans font-bold text-xl text-slate-500'>Notifications</h2>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad provident soluta modi, harum quidem et autem nulla vero voluptate ipsum, error praesentium beatae nihil accusantium molestiae ipsa deleniti nemo?</p>
                    </div>
                </div>
            </section>
        </main>
    )
};