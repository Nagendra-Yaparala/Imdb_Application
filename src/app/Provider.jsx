import React, { Children } from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({Children}) => {
  return (
    <ThemeProvider>
       <div>
         {Children}
       </div>
    </ThemeProvider>
  )
}

export default Provider