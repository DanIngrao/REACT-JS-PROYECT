import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const[product,setProduct] = useState([])

  const {itemId}=useParams()

  useEffect(()=>{
    getProductById(itemId)
      .then(response=>{
        setProduct(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[itemId])

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer