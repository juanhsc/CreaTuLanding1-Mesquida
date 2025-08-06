import React from 'react';
import CartWidget from './CartWidget'; 
const NavBar = () => {
  return (
    
    <nav style={{ backgroundColor: '#333', padding: '15px 20px', borderBottom: '1px solid #555', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
     
      <a href="#" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#fff' }}>
        Mi tienda !!!
      </a>

    
      <div style={{ display: 'flex', gap: '25px' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#ccc', fontSize: '16px', padding: '5px 0' }}>
          Ofertas
        </a>
        <a href="#" style={{ textDecoration: 'none', color: '#ccc', fontSize: '16px', padding: '5px 0' }}>
          Nuevos productos
        </a>
        <a href="#" style={{ textDecoration: 'none', color: '#ccc', fontSize: '16px', padding: '5px 0' }}>
          Un poco de todo
        </a>
        <a href="#" style={{ textDecoration: 'none', color: '#ccc', fontSize: '16px', padding: '5px 0' }}>
          Que dificil es esto
        </a>
      </div>

     
      <CartWidget />
    </nav>
  );
};

export default NavBar;