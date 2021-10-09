import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product } = props;
    
    return (
        <div  key={product._id} className="box">
        <div className="icons">
            <Link to="/" className="fa fa-shopping-cart"></Link>
            
        </div>

        <div className="content">
            <Link to={`/product/${product._id}`} >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            </Link>
            <p>{product.category}</p>
            <div className="price">{product.price} € </div>
            <Rating 
            rating={product.rating}
            numReviews={product.numReviews}>
            </Rating>
        </div>
        </div>
    )
}
