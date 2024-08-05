import React from 'react'
import Image from 'next/image'

const Banner2 = () => {
  return (
    <div className='w-full bg-yellow-600 py-10 flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-[80px] font-serif'>Sailor&apos;s Journey Map</h1>
        <br />
        <p className='text-center text-xl px-[15vw] '> TRACK THE SAILOR&apos;S JOURNEY THROUGH AUSTRALIA&apos;S COASTAL
            GEMS AND EXTRAORDINARY ADVENTURES.
        </p>

        <br />
        <br />
        <br />

        <div className='flex justify-evenly w-full'>
            <div className='flex flex-col justify-center items-center'>
                <Image src="/bn1.png" alt='' width={50} height={100} />
                <br />
                <p className='font-bold text-xl'>PLACES VISITED</p>
                <p className='font-bold mt-2 text-xl'>13</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image src="/bn2.png" alt='' width={50} height={100} />
                <br />
                <p className='font-bold text-xl'>MILES COVERED</p>
                <p className='font-bold mt-2 text-xl'>3,500</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image src="/bn3.png" alt='' width={50} height={100} />
                <br />
                <p className='font-bold text-xl'>TOP SPOTS</p>
                <p className='font-bold mt-2 text-xl'>10</p>
            </div>
        </div>

        <br />

        <button className='mt-10 border border-solid border-black bg-black text-orange-400 px-10 py-5 text-2xl'>VIEW MY MAP</button>
  </div>
  )
}

export default Banner2
