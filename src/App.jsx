import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'; 

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route 
            path='/' 
            element={<ItemListContainer greeting="¡Bienvenido a la Tienda de Muñecos de Acción!" />} 
          />
          <Route 
            path='/category/:categoryId' 
            element={<ItemListContainer greeting="Funkos por categoría" />} 
          />
          <Route 
            path='/item/:itemId' 
            element={<ItemDetailContainer />} 
          />
          
          
          <Route path='/cart' element={<Cart />} /> 
          
          <Route 
            path='*' 
            element={
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2>Página no encontrada</h2>
                <p>La página que buscas no existe.</p>
              </div>
            } 
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;