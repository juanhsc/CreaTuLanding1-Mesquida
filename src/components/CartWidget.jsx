

import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom'; 

const CartWidget = () => {
  const { cartQuantity } = useCart();
  const totalItems = cartQuantity();

  return (
    
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