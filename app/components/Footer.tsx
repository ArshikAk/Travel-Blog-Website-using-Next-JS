// 'use client'

import React from 'react'
import Image from 'next/image'
// import { useState } from 'react'

const Footer = () => {

  // const [count , setCount] = useState(0)

  // const [image , setImage] = useState(["/f1.png","/f2.png","/f3.png","/f4.png","/f5.png","/f6.png"])

  // setTimeout(() => {
  //   let value = image[0]
  //   let array = image
  //   array.splice(0,1)
  //   array.push(value)
  //   setImage(array)
  // },2000)

  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl font-serif'>@Follow Me</h1>
        <br />
        <p className='text-2xl font-light'>Discover stunning visuals of a solo sailor&apos;s odyssey through Australia&apos;s captivating coastlines and unforgettable adventures</p>
        <br />


        <div className='flex w-full overflow-x-auto' id='slideshow'>
          <Image src="/f1.png"  alt='' width={500} height={100} className='' />
          <Image src="/f2.png"  alt='' width={500} height={100} className='' />
          <Image src="/f3.png"  alt='' width={500} height={100} className='' />
          <Image src="/f4.png"  alt='' width={500} height={100} className='' />
          <Image src="/f5.png"  alt='' width={500} height={100} className='' />
          <Image src="/f6.png"  alt='' width={500} height={100} className='' />
          {/* {
            image.forEach((data,index) => {
              <Image src={data} key={index}  alt='' width={500} height={100} className='w-[33%]'/>
            })
          } */}
        </div>

        <div className='bg-black text-white px-10 flex justify-between w-full py-7'>
            <div className='flex'>
                <p className='mx-5'>ABOUT ME</p>
                <p className='mx-5'>VIDEOS</p>
                <p className='mx-5'>BLOGS</p>
                <p className='mx-5'>PHOTOS</p>
                <p className='mx-5'>MAP</p>
            </div>

            <div>
                <p>ALL RIGHTS RESERVED 2025</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
