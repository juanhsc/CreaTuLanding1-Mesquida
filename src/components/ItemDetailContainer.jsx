import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { getFunkoById } from '../data/funkos';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import {db} from "../service/firebase.jsx";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
  

//   const [quantityAdded, setQuantityAdded] = useState(0);

//   const { itemId } = useParams();
//   const { addItem, cart } = useCart();

//   useEffect(() => {
//     getFunkoById(itemId)
//       .then(response => {
//         setProduct(response);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [itemId]);

  
//   const handleOnAdd = (quantity) => {
//     addItem(product, quantity);
    
//     setQuantityAdded(quantity); 
//   };

//   if (loading) {
//     return <p style={{ textAlign: 'center' }}>Cargando detalle del producto...</p>;
//   }

//   if (!product) {
//     return <p style={{ textAlign: 'center' }}>El producto no existe.</p>;
//   }

//   const itemInCart = cart.find(prod => prod.id === product.id);
//   const availableStock = product.stock - (itemInCart ? itemInCart.quantity : 0);

//   return (
//     <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center',
//         padding: '2rem',
//         border: '1px solid #ccc',
//         margin: '2rem auto',
//         maxWidth: '800px'
//     }}>
//       <div style={{ flex: 1, paddingRight: '2rem' }}>
//         <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }}/>
//       </div>
//       <div style={{ flex: 1 }}>
//         <h2>{product.name}</h2>
//         <p>Categoría: {product.category}</p>
//         <p>{product.description}</p>
//         <h3>Precio: ${product.price}</h3>
        
       
        
//         { availableStock > 0 ? (
            
            
//             quantityAdded > 0 ? (
              
//               <div style={{ textAlign: 'center' }}>
//                 <p style={{ fontWeight: 'bold' }}>¡Agregaste {quantityAdded} al carrito!</p>
//                 <Link to="/cart" style={{
//                   display: 'inline-block', margin: '10px 5px', padding: '10px 15px', 
//                   backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px'
//                 }}>
//                   Ir al carrito
//                 </Link>
//                 <Link to="/" style={{
//                   display: 'inline-block', margin: '10px 5px', padding: '10px 15px', 
//                   backgroundColor: 'grey', color: 'white', textDecoration: 'none', borderRadius: '5px'
//                 }}>
//                   Seguir comprando
//                 </Link>
//               </div>
//             ) : (
              
//               <ItemCount 
//                 initial={1} 
//                 stock={availableStock}
//                 onAdd={handleOnAdd}
//               />
//             )

//         ) : (
          
//           <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>
//             ¡No hay más stock disponible!
//           </p>
//         )}
        
//         <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem' }}>
//           ({availableStock} unidades disponibles)
//         </p>

//       </div>
//     </div>
//   );
// };

// export default ItemDetailContainer;

const ItemDetailContainer = () => {
  // --- TODA LA LÓGICA (ESTO NO CAMBIA) ---
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { itemId } = useParams();
  const { addItem, cart } = useCart();

  useEffect(() => {
    setLoading(true);
    
    const productRef = doc(db, 'Funkos', itemId);

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));

  }, [itemId]);

  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(quantity); 
  };

  // --- LÓGICA DE LOADING Y ERRORES (NO CAMBIA) ---
  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem' }}>Cargando producto...</p>;
  }

  if (!product) {
    return <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem' }}>El producto no existe.</p>;
  }

  const itemInCart = cart.find(prod => prod.id === product.id);
  const availableStock = product.stock - (itemInCart ? itemInCart.quantity : 0);

  // --- NUEVA PARTE VISUAL (JSX CON ESTILOS) ---
  
  // Definimos los estilos aquí para un JSX más limpio
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap', // Permite que se apile en pantallas pequeñas
      maxWidth: '900px',
      margin: '2rem auto',
      padding: '2rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      backgroundColor: '#fff',
    },
    imageContainer: {
      flex: '1 1 400px', // Ocupa 1 fracción, base de 400px
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      objectFit: 'cover',
    },
    detailsContainer: {
      flex: '1 1 400px', // Ocupa 1 fracción, base de 400px
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
    },
    category: {
      fontSize: '0.9rem',
      color: '#888',
      textTransform: 'uppercase',
      marginBottom: '0.5rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '1.5rem',
    },
    price: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '1.5rem',
    },
    actionBox: {
      padding: '1.5rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      textAlign: 'center',
    },
    stockText: {
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#777',
      marginTop: '1rem',
    },
    linkButton: {
      display: 'inline-block',
      margin: '10px 5px',
      padding: '12px 20px',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      transition: 'opacity 0.2s',
    },
    outOfStock: {
      textAlign: 'center', 
      fontWeight: 'bold', 
      color: 'red', 
      fontSize: '1.2rem',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Columna de la Imagen */}
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      {/* Columna de Detalles */}
      <div style={styles.detailsContainer}>
        <span style={styles.category}>{product.category}</span>
        <h1 style={styles.title}>{product.name}</h1>
        <p style={styles.description}>{product.description}</p>
        <span style={styles.price}>${product.price}</span>

        {/* Caja de Acciones (Contador o Links) */}
        <div style={styles.actionBox}>
          { availableStock > 0 ? (
              
              quantityAdded > 0 ? (
                // Si YA se agregó
                <div>
                  <p style={{ fontWeight: 'bold' }}>¡Agregaste {quantityAdded} al carrito!</p>
                  <Link to="/cart" style={{ ...styles.linkButton, backgroundColor: '#007bff' }}>
                    Ir al carrito
                  </Link>
                  <Link to="/" style={{ ...styles.linkButton, backgroundColor: '#6c757d' }}>
                    Seguir comprando
                  </Link>
                </div>
              ) : (
                // Si NO se ha agregado
                <ItemCount 
                  initial={1} 
                  stock={availableStock}
                  onAdd={handleOnAdd}
                />
              )

          ) : (
            // Si NO hay stock
            <p style={styles.outOfStock}>
              ¡No hay más stock disponible!
            </p>
          )}
        </div>
        
        <p style={styles.stockText}>
          ({availableStock} unidades disponibles)
        </p>

      </div>
    </div>
  );
};

export default ItemDetailContainer;