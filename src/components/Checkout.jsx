import React, { useState } from 'react';

import { useCart } from '../context/CartContext';
import { db } from '../service/firebase.jsx'; 
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        address: '',
        email: '',
        emailConfirmation: '',
    });
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null); 

    const { cart, cartTotal, clearCart } = useCart();

    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();

       
        if (formData.email !== formData.emailConfirmation) {
            alert('Los correos electrónicos no coinciden.');
            return;
        }
        if (Object.values(formData).some(val => val === '')) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        setLoading(true);

        const order = {
            buyer: formData,
            items: cart,
            total: cartTotal(),
            date: Timestamp.fromDate(new Date()), 
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
            .then((docRef) => {
                setOrderId(docRef.id); 
                clearCart(); 
            })
            .catch((error) => {
                console.error("Error al crear la orden: ", error);
                alert('Hubo un error al procesar su orden. Por favor, intente de nuevo.');
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    
     const styles = {
        container: {
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#333',
            fontSize: '2rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem', 
        },
        input: {
            width: '100%',
            padding: '12px 15px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box', 
        },
        button: {
            padding: '15px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#28a745', 
            
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'background-color 0.2s',
        }
    };

    
    if (loading) {
        return <h2 style={{textAlign: 'center', marginTop: '2rem'}}>Procesando su orden...</h2>
    }

    if (orderId) {
        return (
            <div style={{...styles.container, textAlign: 'center'}}>
                <h1 style={styles.title}>¡Gracias por su compra!</h1>
                <p style={{fontSize: '1.2rem'}}>Su número de orden es: <strong style={{color: '#28a745'}}>{orderId}</strong></p>
                <Link to="/" style={{...styles.button, display: 'inline-block', textDecoration: 'none'}}>
                    Volver al inicio
                </Link>
            </div>
        )
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Complete sus datos para finalizar</h1>
            
           
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                    style={styles.input}
                    placeholder='Ingrese su nombre' 
                    name='name' 
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input 
                    style={styles.input}
                    placeholder='Ingrese su apellido' 
                    name='lastname' 
                    type='text'
                    value={formData.lastname}
                    onChange={handleInputChange}
                />
                <input 
                    style={styles.input}
                    placeholder='Ingrese su dirección' 
                    name='address' 
                    type='text'
                    value={formData.address}
                    onChange={handleInputChange}
                />
                <input 
                    style={styles.input}
                    placeholder='Ingrese su correo electrónico' 
                    name='email' 
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input 
                    style={styles.input}
                    placeholder='Repita su correo electrónico'
                    name='emailConfirmation'
                    type='email'
                    value={formData.emailConfirmation}
                    onChange={handleInputChange}
                />
                <button style={styles.button} type='submit'>
                    Completar Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;