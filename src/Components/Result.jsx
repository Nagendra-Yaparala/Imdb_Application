import React from 'react'
import { IoRestaurantOutline } from 'react-icons/io5'
import Card from './Card'

const Result = ({upDatedData}) => {
   
  return (
    <div className='grid grid-cols-2 mx-auto lg:grid-cols-4 lg:mx-auto lg:max-w-6xl justify-center gap-4 mt-16'>
        {
        upDatedData.map((item,index)=>{
        return(<div key={index}>
            <Card data={item}/>
       </div>)
       })}</div>
  )
}

export default Result