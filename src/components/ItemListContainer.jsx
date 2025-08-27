import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFunkos, getFunkosByCategory } from '../data/funkos';

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    
    if (categoryId) {
      getFunkosByCategory(categoryId)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      getFunkos()
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [categoryId]); 

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Cargando funkos...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{greeting}</h1>
      {categoryId && (
        <h2>Categoría: {categoryId}</h2>
      )}
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {data.map((funko) => (
          <div key={funko.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <img 
              src={funko.image} 
              alt={funko.name}
              style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
            />
            <h3>{funko.name}</h3>
            <p>Precio: ${funko.price}</p>
            <p>Stock: {funko.stock}</p>
            <button 
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => {
                
                alert(`Ver detalle de ${funko.name}`);
              }}
            >
              Ver Detalle
            </button>
          </div>
        ))}
      </div>

      {data.length === 0 && !loading && (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No se encontraron funkos en esta categoría.
        </p>
      )}
    </div>
  );
};

export default ItemListContainer;