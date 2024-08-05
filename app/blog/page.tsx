import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className='w-full relative'>
            <Image src="/blog1.png" alt='' height={200} width={1000} className='w-full h-[530px]'></Image>
            <h1 className='absolute text-white top-[45%] left-[45%] font-bold text-2xl'>BLOGS</h1>
        </div>

        <div className='flex flex-row justify-center items-center w-full my-10'>
            <button className='border border-solid border-black px-20 py-7'>Asia</button>
            <button className='border border-solid border-black px-20 py-7'>South America</button>
            <button className='border border-solid border-black px-20 py-7 bg-blue-600 text-white'>North America</button>
            <button className='border border-solid border-black px-20 py-7'>Europe</button>
            <button className='border border-solid border-black px-20 py-7'>Africa</button>
        </div>

        <div className='flex flex-wrap justify-evenly'>
            <div className='relative m-24'>
                <Image src="/bi1.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi2.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi3.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi4.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi5.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi6.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi7.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi8.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>

            <div className='relative m-24'>
                <Image src="/bi9.png" alt='' width={350} height={100}></Image>
                <div className='border border-solid border-black p-5 shadow absolute top-[200px] left-5 bg-white rounded-lg'>
                    <p className='text-yellow-500 font-bold text-2xl mt-3'>September 10, 2025</p>
                    <h1 className='font-bold pl-5 text-2xl my-5'>Finding Love & <br />
                        Home in <br />
                        Tbilis, Georgia
                    </h1>
                    <p className='text-yellow-500 font-bold text-xl'>Georgia   Comments(250)</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default page
