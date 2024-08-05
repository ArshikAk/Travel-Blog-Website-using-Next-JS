import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <Navbar/>

        <div className='w-full relative'>
            <Image src="/about2.png" alt='' height={200} width={1000} className='w-full h-[530px]'></Image>
            <h1 className='absolute text-white top-[45%] left-[45%] font-bold text-2xl'>About Me</h1>
        </div>

        <div className='flex justify-between mx-20 mt-10'>
            <div className='text-yellow-500 text-4xl'>
                Hey I am the Solo Sailer
            </div>

            <div className='w-[35%]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                <br />
                Ad cum deserunt iste id voluptatibus natus reprehenderit, <br />
                numquam similique? Deserunt debitis enim voluptatem quisquam sit ad earum. <br />
                 Impedit labore doloremque cumque.
            </div>
        </div>

        <br />

        <div className='my-10 flex w-full justify-center items-center flex-col'>
            <Image src="/about1.png" alt='' height={500} width={1300} className='w-[80%]'></Image>

            <p className='font-bold text-xl w-[80%] mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore, explicabo debitis mollitia harum aliquam, 
                esse a exercitationem neque aspernatur, non alias quod laboriosam officiis? 
                Optio sequi dolorum autem accusamus quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laudantium odit itaque explicabo quia sint quo libero laboriosam, 
                accusantium temporibus ad ipsa odio cupiditate illo corrupti mollitia 
                deleniti ducimus nemo culpa.
            </p>
        </div>

        <div className='flex justify-evenly mt-[10vh] mb-[10vh]'>
            <div className='w-[40%]'>
                <h1 className='text-yellow-500 text-4xl'>My Story</h1>
                <br />
                <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore, explicabo debitis mollitia harum aliquam, 
                esse a exercitationem neque aspernatur, non alias quod laboriosam officiis? 
                Optio sequi dolorum autem accusamus quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laudantium odit itaque explicabo quia sint quo libero laboriosam, 
                accusantium temporibus ad ipsa odio cupiditate illo corrupti mollitia 
                deleniti ducimus nemo culpa.</p>
            </div>

            <div className='w-[40%]'>
                <h1 className='text-yellow-500 text-4xl'>Who am I</h1>
                <br />
                <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore, explicabo debitis mollitia harum aliquam, 
                esse a exercitationem neque aspernatur, non alias quod laboriosam officiis? 
                Optio sequi dolorum autem accusamus quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laudantium odit itaque explicabo quia sint quo libero laboriosam, 
                accusantium temporibus ad ipsa odio cupiditate illo corrupti mollitia 
                deleniti ducimus nemo culpa.</p>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page
