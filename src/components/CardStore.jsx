import React from 'react'

const CardStore = ({storeItems}) => {
  return (
    <div className='border-2 rounded-lg p-10 flex flex-col justify-center items-center gap-5 pr-px-40 '>
      {storeItems.map((item) => (
        <div className='bg-white text-slate-900 border-2 rounded-lg p-10 flex flex-col items-center w-1/2 hover:shadow-lg transition-shadow duration-300' key={item.id}>
          <img src={item.image} alt="" className='w-32 h-32 object-contain mb-4' />
          <h2 className='text-center text-xl font-bold underline'>{item.title}</h2>
          <p className='text-gray-200'>Description: {item.description}</p>
          <p className='text-blue-700'>Category: {item.category}</p>
        </div>
      ))}
    </div>
  )
}

export default CardStore