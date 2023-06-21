import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase.config'

const ItemListContainer = () => {

  const[products,setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{
    
    const collectionRef = categoryId 
      ? query(collection(db,'products'), where('categoria','==',categoryId))
      : collection(db,'products')
    
    getDocs(collectionRef)
      .then(response =>{
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
  },[categoryId])

  return (
    <div className='contenedor'>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer