import React from 'react'
import Link from 'next/link'
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";function Profile() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div>
        <h1 className='text-4xl font-bold font-serif tracking-tight text-center my-5'>Login</h1>
            <p className='text-xl font-light font-sans tracking-tight text-center my-5'> Please enter your e-mail and password:</p>
            <form action="" className='w-80 flex flex-col justify-center items-center gap-3'>
                <input type="email" placeholder='Enter your email' className='w-full h-10 rounded-md border-2 border-gray-300 hover:border-black p-2 text-black' />
                <input type="password" placeholder='Enter your password' className='w-full h-10 rounded-md border-2 border-gray-300 hover:border-black p-2 text-black' />
                <button type='submit' className='w-full h-10 rounded-md bg-black text-white'>Login</button>
            </form>
            <p className='text-xl font-light font-sans tracking-tight text-center my-5'>
                Don&apos;t have an account? <Link href="/signup" className='text-blue-500'>Sign up</Link>
            </p>
        </div>
        <div className='w-full flex flex-row justify-center items-center gap-10 my-10 py-5'>
                   <div className='flex flex-col justify-center items-center gap-1'>
                        <TbTruckDelivery className='text-4xl' />
                        <h3 className='text-xl font-bold font-sans tracking-tight text-center my-5'>Free Shipping</h3>
                        <p className='text-xl font-light font-sans tracking-tight text-center '>Free shipping on all orders over $50</p>
                   </div>
                   <div className='flex flex-col justify-center items-center gap-1'>
                        <PiKeyReturnBold className='text-4xl' />
                        <h3 className='text-xl font-bold font-sans tracking-tight text-center my-5'>30-Day Return Policy</h3>
                        <p className='text-xl font-light font-sans tracking-tight text-center'>Return your item within 30 days for a full refund</p>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-1'>
                        <MdMailOutline className='text-4xl' />
                        <h3 className='text-xl font-bold font-sans tracking-tight text-center my-5'>Customer Support</h3>
                        <p className='text-xl font-light font-sans tracking-tight text-center'>Our support team is here to help you</p>
                  </div>
        </div>
    </div>
  )
}

export default Profile