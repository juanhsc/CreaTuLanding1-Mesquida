

import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom'; // <-- 1. LÍNEA NUEVA: IMPORTAMOS LINK

const CartWidget = () => {
  const { cartQuantity } = useCart();
  const totalItems = cartQuantity();

  return (
    // 2. CAMBIO: Envolvemos todo en un Link que apunta a "/cart"
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div>
        <span className="text-2xl">🛒</span> 
        
        { totalItems > 0 && (
            <span style={{
              color: 'white', 
              backgroundColor: 'red', 
              borderRadius: '50%', 
              padding: '2px 6px',
              fontSize: '0.8rem',
              marginLeft: '5px',
              fontWeight: 'bold'
            }}>
              {totalItems}
            </span>
          )
        }
      </div>
    </Link>
  );
};

export default CartWidget;