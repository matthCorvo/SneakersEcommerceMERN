import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <div  key={product._id} className="box">
        <div className="icons">
            <a href="/" className="fa fa-shopping-cart"></a>
            <a href={`/product/${product._id}`} className="fa fa-eye"></a>
        </div>
        <div className="content">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
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
