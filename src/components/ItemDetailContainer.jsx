import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFunkoById } from '../data/funkos';

const ItemDetailContainer = () => {
  const [funko, setFunko] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div><h2>Cargando...</h2></div>;
  }

  if (!funko) {
    return <div><h2>Producto no encontrado</h2></div>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img src={funko.image} alt={funko.name} style={{ width: '300px' }} />
      <h1>{funko.name}</h1>
      <p>Precio: ${funko.price}</p>
      <p>{funko.description}</p>
      <p>Stock: {funko.stock}</p>
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;