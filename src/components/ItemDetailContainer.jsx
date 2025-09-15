import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // 1. IMPORTAMOS 'Link'
import { getFunkoById } from '../data/funkos';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 2. NUEVO ESTADO: Para saber si el usuario ya agregó este item
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { itemId } = useParams();
  const { addItem, cart } = useCart();

  useEffect(() => {
    getFunkoById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  // 3. MODIFICAMOS 'handleOnAdd'
  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
    // Actualizamos el estado local para saber que ya se agregó
    setQuantityAdded(quantity); 
  };

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Cargando detalle del producto...</p>;
  }

  if (!product) {
    return <p style={{ textAlign: 'center' }}>El producto no existe.</p>;
  }

  const itemInCart = cart.find(prod => prod.id === product.id);
  const availableStock = product.stock - (itemInCart ? itemInCart.quantity : 0);

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '2rem',
        border: '1px solid #ccc',
        margin: '2rem auto',
        maxWidth: '800px'
    }}>
      <div style={{ flex: 1, paddingRight: '2rem' }}>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }}/>
      </div>
      <div style={{ flex: 1 }}>
        <h2>{product.name}</h2>
        <p>Categoría: {product.category}</p>
        <p>{product.description}</p>
        <h3>Precio: ${product.price}</h3>
        
        {/* --- 4. LÓGICA DE RENDERIZADO CONDICIONAL --- */}
        
        { availableStock > 0 ? (
            
            // Si hay stock, revisamos si ya se agregó
            quantityAdded > 0 ? (
              // Si YA se agregó, mostramos los links
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold' }}>¡Agregaste {quantityAdded} al carrito!</p>
                <Link to="/cart" style={{
                  display: 'inline-block', margin: '10px 5px', padding: '10px 15px', 
                  backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'
                }}>
                  Ir al carrito
                </Link>
                <Link to="/" style={{
                  display: 'inline-block', margin: '10px 5px', padding: '10px 15px', 
                  backgroundColor: 'grey', color: 'white', textDecoration: 'none', borderRadius: '5px'
                }}>
                  Seguir comprando
                </Link>
              </div>
            ) : (
              // Si NO se ha agregado, mostramos el contador
              <ItemCount 
                initial={1} 
                stock={availableStock}
                onAdd={handleOnAdd}
              />
            )

        ) : (
          // Si NO hay stock (availableStock es 0), mostramos un mensaje
          <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>
            ¡No hay más stock disponible!
          </p>
        )}
        
        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem' }}>
          ({availableStock} unidades disponibles)
        </p>

      </div>
    </div>
  );
};

export default ItemDetailContainer;