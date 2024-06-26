import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { Products } from './components/Products';
import CartContext from './context/CartContext';

function App() {
  let [cartData, setCartData] = useState({});

  function addProductToCart(productData) {
      cartData[productData.id] = productData;
      cartData[productData.id].qty = 1;

      setCartData({
          ...cartData
      });
  }

  function removeProductFromCart(productData) {
      let productId = productData.id;
      delete cartData[productId];

      setCartData({
          ...cartData
      });
  }

  function incrementProductQty(productData) {
      let productId = productData.id;

      if (!cartData[productId]) {
          addProductToCart(productData);
          return;
      }

      cartData[productId].qty++;
      setCartData({
          ...cartData
      });
  }

  function decrementProductQty(productData) {
      let productId = productData.id;

      if (!cartData[productId]) {
          return;
      }

      if (cartData[productId].qty === 1) {
          removeProductFromCart(productData);
          return;
      }

      cartData[productId].qty--;
      setCartData({
          ...cartData
      });
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <CartContext.Provider value={{ cartData, addProductToCart, removeProductFromCart, incrementProductQty, decrementProductQty }}>
           <Products />
        </CartContext.Provider>
      {/* </header> */}
    </div>
  );
}

export default App;
