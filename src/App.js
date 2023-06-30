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
import CheckoutPage from './components/CheckoutPage';
import ReceiptPage from './components/ReceiptPage';

function App() 
{
    const [ show_menu, setMenuVisibility ] = useState(false);
    const [ show_cart, setCartVisibility ] = useState(false);
    const [ subtotal, setSubTotal ] = useState(0);
    const [ shipping, setShipping ] = useState(0);
    const [ bag, setBag ] = useState([]);
    const [ total_item, setTotalItem ] = useState(1);

    useEffect
    (
        () => 
        {
            /* calculate the subtotal */
            let cost = 0;
            bag.forEach
            (
                (item, key) => 
                {
                    cost += (parseFloat(item.item.price) - parseFloat(item.item.discount)) * parseInt(item.count);
                }
            );
            setSubTotal( cost );

            /* calculate the sum of all the items in the bag */
            let quantity = 0;
            bag.forEach
            (
                item => quantity += parseInt(item.count)
            );
            setTotalItem( quantity );
        }
    );


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

    const clearOverlays = () =>
    {
        setCartVisibility(false);
        setMenuVisibility(false);
    }

    /**
     * function use to decrement an item quantity
     */
    const decrementQuantity = ( id ) =>
    {
        var i = null;
        
        let array = bag.map(item => {
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
        }

        setBag( array );
    }

    /**
     * function use to increment an item quantity
     */
    const incrementQuantity = ( id ) =>
    {
        const array = bag.map
        (
            item => 
            {
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
            }
        );
        setBag( array );
    }

    /**
     * function use to add item to bag
     */
    const addItem = ( obj ) =>
    {
        if( obj.count >= 1 )
        {
            let itm = bag.find  /* check if item already exist in shopping bag */
            (
                item => 
                {
                    if( item.item.id === obj.item_id )
                        return item;
                }
            );

            if( itm != null ) /* if item already exist in bag increase its quantity */
            {
                const array = bag.map
                (
                    item => 
                    {
                        if (item.item.id == obj.item_id) 
                        {
                            return { ...item, count: item.count + parseInt(obj.count) };
                        }
                        else 
                        {
                            return item;
                        }
                    }
                );
                setBag( array );
            }
            else /* else add new item to the shopping bag */
            {
                itm = products.find
                (
                    item => {
                        if( item.id === obj.item_id )
                            return item;
                    }
                );
                
                if( itm !== null )
                {
                    setBag([...bag, { size: obj.size, count: obj.count, item: itm }]);
                }
            }
        }
    }

    /**
     * function use to remove an item from bag
     */
    const removeItem = ( id ) =>
    {
        let filtered_tiems = bag.filter
        (
            item => item.item.id !== id
        );
        setBag( filtered_tiems );
    }

    return (
        <div>
            <Menu show={show_menu}/>
            <Cart 
                show_menu={show_menu} 
                show={show_cart} 
                bag={bag} 
                subtotal={subtotal} 
                shipping={shipping}
                total_item={total_item}
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
                            clearOverlays={clearOverlays}
                            total_item={total_item} 
                            subtotal={subtotal} 
                            bag={bag} 
                    />
                    }
                >
                    <Route 
                        path="*" element={<NoPage />} 
                    />

                    <Route 
                        index 
                        element={<Home clearOverlays={clearOverlays} />} 
                    />

                    <Route 
                        path="/product" 
                        element={<ProductPage addToBag={addItem}/>} 
                    />
                    
                    <Route 
                        path="/receipt" 
                        element={<ReceiptPage addToBag={addItem}/>} 
                    />
                    
                    <Route 
                        path="/checkout" 
                        element={
                            <CheckoutPage 
                                bag={bag} 
                                subtotal={subtotal} 
                                shipping={shipping}
                                total_item={total_item}
                            />
                        } 
                    />
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
