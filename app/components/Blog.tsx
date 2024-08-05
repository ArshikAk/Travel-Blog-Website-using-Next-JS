import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='mt-20'>
        <div className='flex justify-between pl-10'>
            <div className=' w-[30%] pl-10'>
                <h1 className='font-bold text-yellow-500 text-4xl'>B L O G</h1>
                <h2 className='font-bold text-5xl font-serif my-5' style={{fontFamily : ""}}>Sailing Solo <br /> Down Under</h2>

                <p className='text-2xl font-thin pl-3'>EXPLORE AUSTRALIA IS COASTAL WONDERS AS A SOLO SAILOR UNCOVERING HIDDEN 
                    GEMS AND EMBRACING THE BEAUTY OF THE OPEN SEA ON AN UNFORGETTABLE 
                    VOYAGE OF SELF-DISCOVERY 
                </p>
            </div>

            <div className='flex pr-10'>
                <Image src="/bar.png" alt='' width={100} height={100} className='w-[150px] h-[20px] mt-2'/>
                <h1 className='mx-5 text-3xl'>LATEST POST</h1>
            </div>
        </div>

        <br />
        <br />

        <div className='flex w-full justify-evenly my-10'>

        <div className='m-14 w-[25%]'>
                <Image src="/b1.png" alt='' width={450} height={400} />
                <br />
                <h1 className='pl-5 m-2 font-bold text-2xl'>AUSSIE SAIL TALES</h1>
                <p className='pl-5 m-2'>Unravel the captivating stories of a solo sailor navigating Australia 
                    enchanting coastlines and discovering its awe-inspiring hidden treasures.
                </p>
                <br />
                <div className='flex flex-row justify-between pl-5 pr-16'>
                    <div className='flex ml-6 pt-2'>
                        <p className='font-bold'>AUG 2 2025</p>
                        <p className='pl-2 font-bold'>4 MIN</p>
                    </div>

                    <div>
                        <button className='border border-solid border-black bg-black text-orange-400 p-2 text-sm'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='m-14 w-[25%]'>
                <Image src="/b2.png" alt='' width={450} height={400} />
                <br />
                <h1 className='pl-5 m-2 font-bold text-2xl'>AUSSIE SAIL TALES</h1>
                <p className='pl-5 m-2'>Unravel the captivating stories of a solo sailor navigating Australia 
                    enchanting coastlines and discovering its awe-inspiring hidden treasures.
                </p>
                <br />
                <div className='flex flex-row justify-between pl-5 pr-16'>
                    <div className='flex ml-6 pt-2'>
                        <p className='font-bold'>AUG 2 2025</p>
                        <p className='pl-2 font-bold'>4 MIN</p>
                    </div>

                    <div>
                        <button className='border border-solid border-black bg-black text-orange-400 p-2 text-sm'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='m-14 w-[25%]'>
                <Image src="/b3.png" alt='' width={450} height={400} />
                <br />
                <h1 className='pl-5 m-2 font-bold text-2xl'>AUSSIE SAIL TALES</h1>
                <p className='pl-5 m-2'>Unravel the captivating stories of a solo sailor navigating Australia 
                    enchanting coastlines and discovering its awe-inspiring hidden treasures.
                </p>
                <br />
                <div className='flex flex-row justify-between pl-5 pr-16'>
                    <div className='flex ml-6 pt-2'>
                        <p className='font-bold'>AUG 2 2025</p>
                        <p className='pl-2 font-bold'>4 MIN</p>
                    </div>

                    <div>
                        <button className='border border-solid border-black bg-black text-orange-400 p-2 text-sm'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
