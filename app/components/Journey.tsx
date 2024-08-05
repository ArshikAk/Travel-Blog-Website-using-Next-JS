import React from 'react'
import Image from 'next/image'

const Journey = () => {
  return (
    <div className='mt-20 flex'>
        <div className=' w-[30%] ml-10'>
            <h1 className='font-bold text-yellow-500 text-4xl'>A B O U T</h1>
            <h2 className='font-bold text-5xl font-serif my-5'>My Journey</h2>

            <p className='text-xl font-light pl-3'>WELCOME TO THE JOURNEY OF A SOLO SAILOR
                EXPLORING THE WORLD BY BOAT. THIS TRAVEL BLOG
                DOCUMENTS THE ADVENTURES. EXPERIENCES AND 
                INSIGHT OF A PASSIONATE SAILOR AS THEY NAVIGATE 
                THROUGH THE OPEN SEAS AND DISCOVER NEW 
                HORIZONS
            </p>

            <button className='my-10 border border-solid border-black bg-black text-orange-400 p-7 ml-14 text-2xl'>VIEW MY VIDEOS</button>
        </div>

        <div className='flex w-[65%] flex-wrap'>
            <div className='m-14'>
                <Image src="/j1.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>

            <div className='m-14'>
                <Image src="/j2.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>

            <div className='m-14'>
                <Image src="/j3.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>

            <div className='m-14'>
                <Image src="/j4.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>

            <div className='m-14'>
                <Image src="/j5.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>

            <div className='m-14'>
                <Image src="/j6.png" alt='' width={300} height={300} />
                <h1 className='pl-5 pt-3 m-2 font-bold font-sans text-xl'>WHITSUNDAY ISLANDS</h1>
                <h2 className='pl-5 m-2'>A TROPICAL PARADISE</h2>
            </div>
        </div>
    </div>
  )
}

export default Journey
