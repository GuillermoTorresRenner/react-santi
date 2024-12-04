import React from 'react'

const MainTitle2 = ({title, subtitle}) => {

  return (
   <>
    <div className=' text-center text-green-700 font-bold mt-10 text-4xl'>
        
        {title}        
        </div>
    <div className=' text-center text-green-700 font-bold mb-10 text-2xl'>
        
        {subtitle}        
        </div>
        
        </>
  )
}

export default MainTitle2