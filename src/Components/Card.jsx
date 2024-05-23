import Link from 'next/link'
import React from 'react'

const Card = ({data}) => {
  return (
    <div className=' group border border-gray-100 space-x-4 rounded-lg hover:shadow-lg'>
       <Link href={`/movie/${data.id}`}>
       <img className='rounded-t-lg' src={`https:///image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path}`}/>
       </Link>
        <h2 className={`${data.original_title?' text-md font-bold text-green-400':'font-bold text-red-400'}`}>{data.original_title?data.original_title:'MovieName not Found'}</h2>
        <p className='text-dark text-semibold'>{data.overview.slice(0,20)}....</p>

    </div>
  )
}

export default Card