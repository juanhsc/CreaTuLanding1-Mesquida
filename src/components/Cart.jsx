// src/components/Cart.jsx

import React from 'react';
import { useCart } from '../context/CartContext'; // Importamos el hook
import { Link } from 'react-router-dom';

const Cart = () => {
  // Obtenemos todo lo que necesitamos del contexto
  const { cart, clearCart, removeItem, cartTotal } = useCart();

  // Caso 1: Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Tu carrito está vacío</h2>
        <p>No has agregado ningún producto todavía.</p>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'blue',
          marginTop: '1rem',
          display: 'inline-block'
        }}>
          Ver productos
        </Link>
      </div>
    );
  }

  // Caso 2: Si el carrito tiene productos
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Resumen de tu Carrito</h1>
      
      {/* Mapeamos los productos del carrito */}
      {cart.map(product => (
        <div key={product.id} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: '1px solid #ccc',
          padding: '1rem' 
        }}>
          <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }}/>
          <h4>{product.name}</h4>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio c/u: ${product.price}</p>
          <p>Subtotal: ${product.price * product.quantity}</p>
          <button 
            onClick={() => removeItem(product.id)} 
            style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            X
          </button>
        </div>
      ))}
      
      {/* Total y botones de acción */}
      <div style={{ marginTop: '2rem', textAlign: 'right' }}>
        <h2>Total: ${cartTotal()}</h2>
        <button 
          onClick={clearCart}
          style={{ 
            padding: '10px 15px', 
            backgroundColor: 'orange', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          Vaciar Carrito
        </button>
        {/* Aquí podrías agregar un botón para "Finalizar Compra" */}
      </div>
    </div>
  );
};

export default Cart;