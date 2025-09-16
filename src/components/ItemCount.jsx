import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={decrement} style={{ padding: '5px 10px' }}>-</button>
        <h4 style={{ margin: '0 15px' }}>{quantity}</h4>
        <button onClick={increment} style={{ padding: '5px 10px' }}>+</button>
      </div>
      <div>
        
        <button onClick={() => onAdd(quantity)} disabled={!stock} style={{ padding: '10px 15px' }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;