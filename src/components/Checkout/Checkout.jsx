import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase.config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
  
    const [loading, setLoading] = useState(false)

    const [orederId, setOrderId] = useState('')

    

    const createOrder = async ({name, phone, email}) => {
        
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map( prod => prod.id )

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in',)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod.id===doc.id)
                const prodCantidad = productAddedToCart?.cantidad
                
                stockDb>=prodCantidad ? batch.update(doc.ref, {stock: stockDb - prodCantidad}) : outOfStock.push({id: doc.id, ...dataDoc})
            })

            if(outOfStock.length === 0){ 
            
            await batch.commit()
            
            const orderRef = collection(db, 'orders')
            
            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)

            clearCart()
        
            }else{
                <Toast>
                    <Toast.Header>
                        <strong className="me-auto">Libreria Eden</strong>
                    </Toast.Header>
                    <Toast.Body>Hay productos que estan fuera de stock</Toast.Body>
                </Toast>
            }
            
        }catch(error){alert('error')}finally{setLoading(false)}
    }

    loading && <h1>Se esta generando su orden</h1>

    orederId && <h1>El Id de su orden es: {orederId}</h1>

    return (
        <div>
            
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>

        </div>
    )
}

export default Checkout