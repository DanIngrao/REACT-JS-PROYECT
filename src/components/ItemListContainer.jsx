import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProductByCategory, getProducts } from '../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const[products,setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{
    
    const itemListPrint = categoryId ? getProductByCategory:getProducts
    
    itemListPrint(categoryId)
      .then(response=>{
        setProducts(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[categoryId])

  console.log(products)

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer