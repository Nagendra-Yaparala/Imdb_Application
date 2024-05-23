import React from 'react'
import MenuItem from './MenuItem'
import { IoHomeSharp } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='flex max-w-6xl justify-between items-center mx-auto p-3'>
      <div className='flex items-center gap-6'>
        <MenuItem title={'Home'} address={'/'} icon={<IoHomeSharp/>}/>
        <MenuItem title={'About'} address={'/about'} icon={<BiFilter/>}/>
    </div>
    <Link className='flex items-center' href={'/'}><span className='bg-amber-500 p-2 rounded-lg'>IMDB</span>
    <span>Clone</span></Link>
    </div>
  )
}

export default Navbar