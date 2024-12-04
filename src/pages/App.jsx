import React, { useEffect, useState } from 'react'
import MainTitle from '../components/MainTitle'
import axios from 'axios'
 import CardStore from '../components/CardStore'

const App = () => {

const [storeItems, setStoreItems] = useState([])

useEffect(() => {
  getItems()
  console.log(storeItems)
}, [])

const getItems = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    setStoreItems(res.data)
  } catch (error) {
    console.log(error)
  }
}

return (
  <div className='flex justify-center mt-20 flex-col items-center'>
    <MainTitle>
      Store cards     
    </MainTitle>

    <CardStore storeItems={storeItems} />
   
  </div>
)
}

export default App