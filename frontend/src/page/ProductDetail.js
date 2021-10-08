import React, { useEffect }from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../redux/actions/productActions';

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

    return (
        <>

{loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
      <Link to="/">Retour au résultat</Link> / <Link to="/">{product.category}</Link>
        <div class="productdetail">
        <div className="details" >
              <div className="big-img">
                <img src={product.image} alt={product.name}/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.name}</h2>
                  <span>{product.price}€</span>
                </div>
                  <p className="brand">{product.brand}</p>
                <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
                 <div>
                        {product.countInStock > 0 ? (
                        <span className="success">En stock</span>
                        ) : (
                        <span className="error">Indisponible</span>
                        )}
                    </div>
                <p>{product.description}</p>
                

                <button className="cart"><h2>Ajouter au panier</h2></button>

              </div>
            </div>
        </div>
        </div>
      )}

        </>
    )
}
