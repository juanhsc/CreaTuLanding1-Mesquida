import React from 'react';
import Item from 'Item'; 


const ItemList = ({ products }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    }}>
      
      {products.map(prod => (
        
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;