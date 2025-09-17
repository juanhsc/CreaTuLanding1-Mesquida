

import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const { cart, clearCart, removeItem, cartTotal } = useCart();

  
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

  
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Resumen de tu Carrito</h1>
      
     
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
         <Link to="/checkout" style={{
          padding: '10px 15px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          Terminar Compra
        </Link>
        {/* ------------------------- */}
      </div>
    </div>
  );
};

export default Cart;