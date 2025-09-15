import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

 
  const addItem = (item, quantity) => {
  
    if (isInCart(item.id)) {

      setCart(cart.map(prod => {
        if (prod.id === item.id) {
         
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      }));
    } else {
     
      setCart([...cart, { ...item, quantity }]);
    }
  };

 
  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.id !== itemId));
  };

 
  const clearCart = () => {
    setCart([]);
  };

  
  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };

 
  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };
  

  const cartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ 
        cart, 
        addItem, 
        removeItem, 
        clearCart, 
        cartQuantity,
        cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};