import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase.config'
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2'

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)

  const[products, setProducts] = useState([])

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
      }).catch(error =>{
        Swal.fire({
          tittle:'Error',
          text:'Error de comunicacion con el servidor',
          icon:'error',
          confirmButtonColor: '#dc3545'
      })}
      ).finally(()=>{setLoading(false)})
  },[categoryId])

  return (
    
    <>
      {loading ? 

      <div className='spinnerloading'>
        <Spinner animation="border" variant="primary" />
      </div>  

      :
      
      <div className='contenedor'>
        <ItemList products={products}/>
      </div>}
    </>    
  )
}

export default ItemListContainer