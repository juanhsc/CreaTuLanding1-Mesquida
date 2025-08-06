
import './App.css'

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
const App = () => {
  return (
    
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
     
      <NavBar />
     
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda Online!" />
    </div>
  );
};

export default App;