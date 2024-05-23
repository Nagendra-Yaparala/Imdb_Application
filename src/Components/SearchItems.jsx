'use client'

import React, { useState } from 'react'
import Link from 'next/link';


const SearchItems = () => {
    const[forsearch,setSearch] =useState('');
    
    console.log(forsearch);
    
  return (
    <div > 
       <form className='flex px-5 gap-1 mt-2' >
       <input className='w-full flex-1 py-3  p-1 placeholder-gray-500 outline-none bg-amber-100' type='text' placeholder='search movie' onChange={(e)=>{setSearch(e.target.value)}}/>
       <Link className='bg-amber-500 text-white rounded flex items-center justify-center px-2' href={`/search/${forsearch}`}>
                    Search
                </Link>
       </form>
    </div>
  )
}

export default SearchItems