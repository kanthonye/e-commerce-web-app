import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import Cart from './components/Cart'
import Home from './components/Home'
import Menu from './components/Menu'
import ProductPage from './components/ProductPage'
import { products } from './components/data';

function App() 
{
  const [show_menu, setMenuVisibility] = useState(false);
  const [show_cart, setCartVisibility] = useState(false);
  const [subtotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [items, setItems] = useState([
    {count: 1, item: products[0]}, 
    {count: 2, item: products[1]}, 
    {count: 1, item: products[4]}, 
  ]);

  useEffect(() => {
    // Update the document title using the browser API
    let total = 0;
    items.map((item, key) => {
        total += (parseFloat(item.item.price) - parseFloat(item.item.discount)) * parseInt(item.count);
    });
    setSubTotal( total.toFixed(2) );
  });


  const toggleMenu = () =>
  {
    if(show_menu) setMenuVisibility(false);
    else setMenuVisibility(true);
    setCartVisibility(false);
  }

  const toggleCart = () =>
  {
    if(show_cart) setCartVisibility(false);
    else setCartVisibility(true);
    setMenuVisibility(false);
  }

  const decrementQuantity = ( id ) =>
  {
    var i = null;
    
    let array = items.map(item => {
      if (item.item.id == id) 
      {
        const count = item.count - 1;
        if( count - 1 < 0 )
        {
          i = item.item.id;
        }
        return {...item, count: count,};
      }
      else 
      {
        return item;
      }
    });
    
    if( i !== null )
    {
      array = array.filter( item => item.item.id !== i );
      console.log(i);
    }

    setItems( array );
  }

  const incrementQuantity = ( id ) =>
  {
    console.log("increment quantity");
    const array = items.map(item => {
      if (item.item.id == id) 
      {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      else 
      {
        return item;
      }
    });
    console.log(array);
    setItems( array );
  }

  const addItem = ( id ) =>
  {
  }

  const removeItem = ( id ) =>
  {
    let filtered_tiems = items.filter
    (
      item => item.item.id !== id
    );
    setItems( filtered_tiems );
  }

  const shoppingBag = {
    subtotal : subtotal,
    items : items,
  };

  return (
    <div>
      <Menu show={show_menu}/>
      <Cart 
        show={show_cart} 
        bag={shoppingBag} 
        subtotal={subtotal} 
        shipping={shipping}
        removeItem={removeItem}
        incrementItem={incrementQuantity}
        decrementItem={decrementQuantity}
      />

      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element=
            {
              <Layout 
                toggleMenu={toggleMenu} 
                toggleCart={toggleCart} 
                shoppingBag={shoppingBag} 
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
