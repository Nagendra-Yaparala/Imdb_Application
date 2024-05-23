'use client'
import React, { useEffect } from 'react'

const error = ({error,reset}) => {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div>
        <h1>Something went Wrong.Please Try Again</h1>
        <button onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error