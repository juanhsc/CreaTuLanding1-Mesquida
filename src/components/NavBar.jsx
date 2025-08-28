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

      <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#ccc', 
          fontSize: '16px', 
          padding: '5px 0' 
        }}>
          Todos
        </Link>
        <Link to="/category/DC" style={{ 
          textDecoration: 'none', 
          color: '#ccc', 
          fontSize: '16px', 
          padding: '5px 0' 
        }}>
          DC Comics
        </Link>
        <Link to="/category/Marvel" style={{ 
          textDecoration: 'none', 
          color: '#ccc', 
          fontSize: '16px', 
          padding: '5px 0' 
        }}>
          Marvel
        </Link>
        <Link to="/category/Movies" style={{ 
          textDecoration: 'none', 
          color: '#ccc', 
          fontSize: '16px', 
          padding: '5px 0' 
        }}>
          Películas
        </Link>
        <Link to="/category/Anime" style={{ 
          textDecoration: 'none', 
          color: '#ccc', 
          fontSize: '16px', 
          padding: '5px 0' 
        }}>
          Anime
        </Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
//comentario