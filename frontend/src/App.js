import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './page/Cart';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <BrowserRouter>
    <header>
            <div id="menu-bar" className="fa fa-bars"></div>
            <a href="/" className="logo">Logo</a>
            <nav className="navbar">
                <a href="/">Accueil</a>
                <a href="/">Homme</a>
                <a href="/">Femme</a>
                <a href="/">Enfant</a>
                 <span className="fas fa-search expSearchFrom">
                        <input id="field" type="text" placeholder="Search here"/>    
                    </span>   
                       
                    
            </nav>
            <div className="icons"> 
               
                <a href="/Signin">SignIn</a>
                <a href="/Cart">Cart</a>
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
