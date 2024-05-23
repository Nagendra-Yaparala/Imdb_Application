'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const HeaderItem = ({title,path}) => {
    const searchparams = useSearchParams();
    const genere = searchparams.get('genere');
  return (
    <div>
        <Link
                        className={`hover:text-amber-500 font-semibold ${
                            genere === path ? 'underline underline-offset-8 decoration-4 decoration-amber-500' : ''
                        }`}
        
        
        href={`/?genere=${path}`}>{title}</Link>
    </div>
  )
}

export default HeaderItem