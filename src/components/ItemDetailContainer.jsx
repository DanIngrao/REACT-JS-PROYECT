import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../services/firebase/firebase.config'

const ItemDetailContainer = () => {

  const[product,setProduct] = useState([])

  const {itemId}=useParams()

  useEffect(()=>{

    const docRef = doc(db,'products',itemId)

    getDoc(docRef)
      .then(response =>{
          const data = response.data()
          const productAdapted = {id: response.id, ...data}
          setProduct(productAdapted)
        })
  },[itemId])

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer