import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase.config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import './Checkout.css'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Checkout = () => {

    const [loading, setLoading]=useState(false)
    
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {

        setLoading(true)
        
        const order = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        };
        
        const ordersCollection = collection(db,'orders');

        addDoc(ordersCollection, order).then(({id})=>
        
        setOrderId(id),
        
        setLoading(false)

        );
    
    }


    return (
        <div className='checkout'>
            {loading?
                <div className='spinnerloading'>
                    <Spinner animation="border" variant="primary" />
                </div>
            :
            orderId?
                <>
                    <h1 style={{color:'white'}}>El id de su orden es: {orderId}</h1>
                    <br />
                    <Button as={Link} to='/' variant="primary" size="lg">
                        Volver al catalogo
                    </Button>
                </>
                :
                <>
                    <h1 style={{color:'white'}}>Checkout</h1>
                    <CheckoutForm onConfirm={createOrder}/>
                </>
            }

        </div>
    )
}

export default Checkout