import React from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <div className='bg-amber-100 text-amber-500 flex justify-center p-4 gap-4'>
      <HeaderItem title={'Trending'} path={'trending'}/>
      <HeaderItem title={'TopRated'} path={'TopRated'}/>
    </div>
  )
}

export default Header