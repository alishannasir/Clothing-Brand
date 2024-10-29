import React from 'react'
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";


function Icons() {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
          <Link href="/search"><LuSearch  className='h-6 w-6'/></Link>
          <Link href="/profile"><GoPerson className='h-6 w-6'/></Link>
          <Link href="/cart"><CiShoppingCart className='h-6 w-6'/></Link>
    </div>
  )
}

export default Icons