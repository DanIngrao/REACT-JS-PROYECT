import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../services/firebase/firebase.config'
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)

  const[product,setProduct] = useState([])

  const {itemId}=useParams()

  useEffect(()=>{

    const docRef = doc(db,'products',itemId)

    getDoc(docRef)
      .then(response =>{
          const data = response.data()
          const productAdapted = {id: response.id, ...data}
          setProduct(productAdapted)
        }).catch().finally(()=>{setLoading(false)})
  },[itemId])

  return (
    <>
      {loading ? 

      <div className='spinnerloading'>
        <Spinner animation="border" variant="primary" />
      </div>

      :

      <div>
        <ItemDetail {...product}/>
      </div>}
    </>
  )
}

export default ItemDetailContainer