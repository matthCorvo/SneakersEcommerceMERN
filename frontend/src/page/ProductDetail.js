import React, { useEffect, useState  }from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../redux/actions/productActions';

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
    return (
        <>

{loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
        <div className="productdetail">
          <br></br>
      <Link to="/"><i class="fas fa-arrow-left"></i> Accueil </Link> / <Link to="/">{product.category}</Link>
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
                 <p><strong>Taille : </strong>{product.size}</p>
                <p>{product.description}</p>
                
                {product.countInStock > 0 && (       
                  <>

                <div className="dflex">
                  <h4>Quantité</h4>
                  <div>
                   <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                    </select>
                  </div>
                </div>
                <button className="cart"  onClick={addToCartHandler}>
                  <h2>Ajouter au panier</h2>
                  </button>

                </>
                )}
              </div>
            </div>
        </div>
        </div>
      )}

        </>
    )
}
