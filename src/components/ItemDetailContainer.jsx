import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFunkoById } from '../data/funkos';

const ItemDetailContainer = () => {
  const [funko, setFunko] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { itemId } = useParams();

  useEffect(() => {
    getFunkoById(itemId)
      .then((res) => {
        setFunko(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [itemId]);

  const handleIncrease = () => {
    if (quantity < funko.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Agregado al carrito: ${quantity} x ${funko.name}`);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}><h2>Cargando...</h2></div>;
  }

  if (!funko) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}><h2>Producto no encontrado</h2></div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <img 
          src={funko.image} 
          alt={funko.name} 
          style={{ width: '300px', height: 'auto', marginBottom: '1rem' }} 
        />
        <h1>{funko.name}</h1>
        <p style={{ fontSize: '1.5rem', color: 'green' }}>Precio: ${funko.price}</p>
        <p style={{ margin: '1rem 0' }}>{funko.description}</p>
        <p><strong>Stock disponible: {funko.stock}</strong></p>
        
        
        <div style={{ margin: '1rem 0' }}>
          <button 
            onClick={handleDecrease}
            disabled={quantity <= 1}
            style={{
              backgroundColor: quantity <= 1 ? '#ccc' : '#dc3545',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '20px',
              cursor: quantity <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            -
          </button>
          
          <span style={{ 
            margin: '0 1rem', 
            fontSize: '20px', 
            fontWeight: 'bold' 
          }}>
            {quantity}
          </span>
          
          <button 
            onClick={handleIncrease}
            disabled={quantity >= funko.stock}
            style={{
              backgroundColor: quantity >= funko.stock ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              fontSize: '20px',
              cursor: quantity >= funko.stock ? 'not-allowed' : 'pointer'
            }}
          >
            +
          </button>
        </div>

        <button 
          onClick={handleAddToCart}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;