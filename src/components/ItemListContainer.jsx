import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../asyncMock'

const ItemListContainer = () => {

  const[products,setProducts] = useState([])

  useEffect(()=>{
    getProducts()
      .then(response=>{
        setProducts(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer