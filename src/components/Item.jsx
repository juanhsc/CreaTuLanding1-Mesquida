import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ product }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '1rem', 
      margin: '1rem', 
      width: '250px',
      textAlign: 'center'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
     
      <Link to={`/item/${product.id}`} style={{
        display: 'inline-block',
        marginTop: '10px',
        padding: '8px 15px',
        backgroundColor: '#333',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;