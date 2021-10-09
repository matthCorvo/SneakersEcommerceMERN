import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
export default function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1; 
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
 

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div>



<div className="wrapper">

        <div className="wrapper_content">
        {cartItems.length === 0 ? (
          <MessageBox>
           <Link to="/"><i className="fas fa-arrow-left"> Retour</i></Link>  Panier vide
          </MessageBox>
        ) : (
 
            <div>
                 <div className="header_title">
                <div className="title">
                    Mon panier :
                </div>
                <div className="amount">
                    <strong>( {cartItems.length} ) Articles</strong> 
                </div>
            </div>
          {cartItems.map((item) => (
            <div key={item.product} className="product_wrap">
                <div className="product_info">
                    <div className="product_img">
                    <Link to={`/product/${item.product}`}>   <img src={item.image} alt={item.name} width="200px" height="200px" /></Link>
                    </div>
                    <div className="product_data">
                        <div className="description">
                            <div className="main_header">
                            <Link to={`/product/${item.product}`}><h1>{item.name}</h1></Link>                            </div>
                            <div className="sub_header">
                            <h2>{item.price}€</h2>   
          
                                           </div>
                        </div>
                            <p><strong>Taille : </strong>{item.size}</p>
                        <div className="dflex">

                            <h4>Quantité</h4>
                  <div>
                  <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                       </div>
                        </div>
                        
                    </div>
                </div>
                <div className="product_btns">
                    <div  type="button"
                      onClick={() => removeFromCartHandler(item.product)} className="remove">Supprimer</div>
                </div>
            </div>
            ))}
            </div>
                )}
        </div>
        
        <div className="wrapper_amount">
           
            <div className="price_details">
                
                <div className="item">
                    <p>Code PROMO :</p>
                    <p className="green">n/a</p>
                </div>
                
                <div className="item">
                    <p> Total de la commande :</p>
                    <p>  ({cartItems.reduce((a, c) => a + c.qty, 0)} articles)  €
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                </div>
                <div className="item">
                    <p>Frais de livraison :</p>
                    <p> <span className="green">GRATUIT</span></p>
                </div>
                <div className="coupon">
                <input type="text" placeholder="CODE PROMO"/>
                  <p><button>Appliquer </button></p>
                </div>
                <div className="total">
                    <p>Total :</p>
                    <p>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}€</p>
                </div>
            </div>
            <div className="checkout">
                <Link href="#" role="button" 
                 type="button"
                 onClick={checkoutHandler}
                 className="checkout_btn"
                 disabled={cartItems.length === 0}>Passer la commande</Link>
            </div>
        </div>
    </div>

      <h1>Cart Screen{cartItems.length}</h1>
         <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
    
  );
}