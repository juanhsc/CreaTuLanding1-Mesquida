
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import { Router,BrowserRouter,Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    
     
      <NavBar />
    <Routes>
<Route path='/' element= {<ItemListContainer greeting="¡Bienvenido a Mi Tienda Online!" />}> </Route>
<Route path='/item' element={<ItemDetailContainer/>}/>
    </Routes>
      
    
    </BrowserRouter>
  )
}

export default App;