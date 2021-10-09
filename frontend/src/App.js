import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Cart from './page/Cart';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import { useSelector } from 'react-redux';

function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  return (
    <BrowserRouter>
    <header>
            <div id="menu-bar" className="fa fa-bars"></div>
            <Link to="/" className="logo">Logo</Link>
            <nav className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/">Homme</Link>
                <Link to="/">Femme</Link>
                <Link to="/">Enfant</Link>
                 <span className="fas fa-search expSearchFrom">
                        <input id="field" type="text" placeholder="Search here"/>    
                    </span>   
                       
                    
            </nav>
            <div className="icons"> 
               
                <Link to="/Signin">SignIn</Link>
                <Link to="/Cart"> 
                    <>
                <i className="fas fa-shopping-bag fa-2x"></i>
                <span className="badge badge-warning" id='lblCartCount'>{cartItems.length}</span>
             </>
             </Link>
            </div>
        </header>
        
            
            <Route path="/cart/:id?" component={Cart}></Route>
            <Route path="/product/:id" component={ProductDetail}  ></Route>
            <Route path="/" component={Home} exact ></Route>
            
        <footer className="cridet" >
            <div className="box">
                <h3>all reserved by codeskill</h3>
            </div>
        </footer>

                </BrowserRouter>
  );
}

export default App;
