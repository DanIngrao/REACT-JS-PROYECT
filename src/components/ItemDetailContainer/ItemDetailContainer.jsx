import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc} from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetailContainer.css'
import Swal from 'sweetalert2'
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase/firebase.config';

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
        }).catch( error => {
          Swal.fire({
            tittle:'Error',
            text:'Error de comunicacion con el servidor',
            icon:'error',
            confirmButtonColor: '#dc3545'
        })}
        ).finally(()=>{setLoading(false)})
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