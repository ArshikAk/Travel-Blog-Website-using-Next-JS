import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='relative'>
        <Image src="/carosel1.png" alt='' width={800} height={700} className='w-full  h-[820px]'/>

        <div className='absolute top-[40%] left-[35%]'>
            <Image src="/carosel2.png" alt='' width={600} height={200}/>
        </div>
    </div>
  )
}

export default Intro
