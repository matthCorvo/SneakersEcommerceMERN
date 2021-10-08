import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';

export default function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error,products} = productList;
useEffect(() => {
  dispatch(listProducts());
}, [dispatch]);
    return (
        <div>
          <section className="product" >
            <h1 className="heading">Dernières <span>nouveautés</span></h1>
        {loading ? ( <LoadingBox></LoadingBox>
          ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <div className="box-container">
        {products.map((product) => (
            <Product key={product._id} product={product}></Product>
              ))}
            </div>
              )}
              </section>  
            </div>
    )
}
