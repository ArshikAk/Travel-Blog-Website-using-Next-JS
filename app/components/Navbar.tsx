import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5'>
      <div className='flex'>
        <Image src="/logo.png" alt='' width={100} height={100}/>
        <h1 className='font-bold ml-5 pt-4'>Lizzie Rose</h1>
      </div>

      <div className='flex pt-4'>
        <Link href="/" className='pr-10 text-orange-500'>HOME</Link>
        <Link href="" className='pr-10 text-violet-600'>VIDEO</Link>
        <Link href="/blog" className='pr-10 text-violet-600'>BLOG</Link>
        <Link href="/about" className='pr-10 text-violet-600'>ABOUT</Link>
        <Link href="" className='pr-10 text-violet-600'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Navbar
