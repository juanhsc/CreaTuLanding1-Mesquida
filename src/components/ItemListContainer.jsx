import React, { useEffect, useState } from 'react';

import { getFunkos, getFunkosByCategory } from '../data/funkos';
import { useParams, Link } from 'react-router-dom';  
import ItemList from '../components/ItemList.jsx';

import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../service/firebase.jsx";

//**descomentar**
// const ItemListContainer = ({ greeting }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { categoryId } = useParams();


//FIREBASE

//useEffect(() => {
  //  setLoading(true);
// const productsRef = collection(db, 'funkos');
// getDocs(productsCollection)
// them((res)=>console.log(res, "respuesta"))
//catch((error)=>console.error(error))
//.finally(()=> setLoader(false))
//},[])

//   const q = categoryId 
//       ? query(productsRef, where('category', '==', categoryId))
//       : productsRef;

//     
//     getDocs(q)
//       .then((querySnapshot) => {
//         
//         const productsAdapted = querySnapshot.docs.map(doc => {
//           return { id: doc.id, ...doc.data() };
//         });
//         setProducts(productsAdapted);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//   }, [categoryId]); 

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
//       {
//         loading ? (
//           <p style={{ textAlign: 'center' }}>Cargando productos...</p>
//         ) : (
//           <ItemList products={products} />
//         )
//       }
//     </div>
//   );
// };

//export default ItemListContainer;









  //PROMESA
//viejo
//   useEffect(() => {
//     setLoading(true);
    
    
//     if (categoryId) {
//       getFunkosByCategory(categoryId)
//         .then((res) => {
//           setData(res);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error(error);
//           setLoading(false);
//         });
//     } else {
//       getFunkos()
//         .then((res) => {
//           setData(res);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error(error);
//           setLoading(false);
//         });
//     }
//   }, [categoryId]); 

//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', padding: '2rem' }}>
//         <h2>Cargando funkos...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>{greeting}</h1>
//       {categoryId && (
//         <h2>Categoría: {categoryId}</h2>
//       )}
      
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
//         gap: '1rem',
//         marginTop: '2rem'
//       }}>
//         {data.map((funko) => (
//           <div key={funko.id} style={{
//             border: '1px solid #ddd',
//             borderRadius: '8px',
//             padding: '1rem',
//             textAlign: 'center'
//           }}>
//             <img 
//               src={funko.image} 
//               alt={funko.name}
//               style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
//             />
//             <h3>{funko.name}</h3>
//             <p>Precio: ${funko.price}</p>
//             <p>Stock: {funko.stock}</p>
//             <Link 
//   to={`/item/${funko.id}`}
//   style={{
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     padding: '0.5rem 1rem',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     textDecoration: 'none',  
//     display: 'inline-block' 
//   }}
// >
//   Ver Detalle
// </Link>
//           </div>
//         ))}
//       </div>

//       {data.length === 0 && !loading && (
//         <p style={{ textAlign: 'center', marginTop: '2rem' }}>
//           No se encontraron funkos en esta categoría.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, 'Funkos');
    
    const q = categoryId 
      ? query(productsRef, where('category', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [categoryId]); 

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{greeting}</h1>
      {
        loading ? (
          <p style={{ textAlign: 'center' }}>Cargando productos...</p>
        ) : (
          <ItemList products={products} />
        )
      }
    </div>
  );
};

export default ItemListContainer;