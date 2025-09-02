import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px 20px', 
      borderBottom: '1px solid #555', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      color: '#fff' 
    }}>
     
      <Link to="/" style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        textDecoration: 'none', 
        color: '#fff' 
      }}>
        Funko Store
      </Link>

      <div style={{ display: 'flex', gap: '25px' }}> <Link to="/">Todos</Link> <Link to={`/category/${encodeURIComponent('Marvel')}`}>Marvel</Link> <Link to={`/category/${encodeURIComponent('Dragon ball')}`}>Dragon ball</Link> <Link to={`/category/${encodeURIComponent('DC')}`}>DC</Link></div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
//comentario