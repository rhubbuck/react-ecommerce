import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline } from '@material-ui/core';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import TitleNav from './components/TitleNav/TitleNav';
import Checkout from './components/Checkout/Checkout';
import Toys from './components/Toys/Toys';
import Bowls from './components/Bowls/Bowls';
import Beds from './components/Beds/Beds';
import './styles.css';
import Intro from './components/Intro/Intro';
import Info from './components/Info/Info';



const App = () => {
    const [products, setProducts] = useState([]);
    const [toyProducts, setToyProducts] = useState([]);
    const [bedProducts, setBedProducts] = useState([]);
    const [bowlProducts, setBowlProducts] = useState([]);
    const [cart, setCart] = useState({});
    // const [order, setOrder] = useState({});
    // const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        console.log(data);
        setProducts(data);
    }

    const fetchToysProducts = async () => {
        const {data} = await commerce.products.list({
            category_slug: ['toys']
        });
        setToyProducts(data);
    }

    const fetchBedsProducts = async () => {
        const {data} = await commerce.products.list({
            category_slug: ['beds']
        });
        setBedProducts(data);
    }

    const fetchBowlsProducts = async () => {
        const {data} = await commerce.products.list({
            category_slug: ['bowls']
        });
        setBowlProducts(data);
    }


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    // const refreshCart = async () => {
    //     const newCart = await commerce.cart.refresh();
    //     setCart(newCart);
    // }

    // const handleCaptureCheckout = async ( checkoutTokenId, newOrder) => {
    //     try {
    //         const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    //         setOrder(incomingOrder);
    //         refreshCart();
    //     } catch (error) {
    //         setErrorMessage(error.data.error.message);
    //     }
    // }

    

    useEffect (() => {
        fetchProducts();
        fetchBedsProducts();
        fetchBowlsProducts();
        fetchToysProducts();
        fetchCart();
    }, []);

    console.log(cart);


    return (
        <Router>
            <div>
                <CssBaseline >
                    <Navbar totalItems={cart.total_items} /> 
                        <Switch>
                            <Route exact path="/">
                                <Intro />
                                {/* <TitleNav /> */}
                                <Products products={products} onAddToCart={handleAddToCart}/>
                                <Info />
                                <Footer />
                            </Route>
                            <Route exact path='/toys'>
                                <TitleNav />
                                <Toys toyProducts={toyProducts} onAddToCart={handleAddToCart}/>
                                <Footer />
                            </Route>
                            <Route exact path='/beds'>
                                <TitleNav />
                                <Beds bedProducts={bedProducts} onAddToCart={handleAddToCart}/>
                                <Footer />
                            </Route>
                            <Route exact path='/bowls'>
                                <TitleNav />
                                <Bowls bowlProducts={bowlProducts} onAddToCart={handleAddToCart}/>
                                <Footer />
                            </Route>
                            <Route exact path="/cart"> 
                                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} handleUpdateCartQty={handleUpdateCartQty}/>
                            </Route>
                            <Route exact path="/checkout">
                                <Checkout cart={cart} />
                            </Route>
                        </Switch>
                </CssBaseline>
            </div>
        </Router>
    ) 
}

export default App
