import React from 'react'
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";


function Icons({onSearchClick, onCartClick}: {onSearchClick: () => void, onCartClick: () => void}) {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>

          <button onClick={onSearchClick}><LuSearch  className='h-6 w-6'/></button>
          <Link href="/profile"><GoPerson className='h-6 w-6'/></Link>
          <button onClick={onCartClick}><CiShoppingCart className='h-6 w-6'/></button>
    </div>
  )
}

export default Icons