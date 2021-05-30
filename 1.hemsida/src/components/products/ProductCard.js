import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {Link} from 'react-router-dom';


const ProductCard = ({product}) => {

  const dispatch =useDispatch();

  return (
      <div className="col">
    <div className="card h-100">
    <img
        src={product.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="card-text">
         <p>{product.short}</p> 
         <p className="text-danger h5">{product.price}</p>
         <div className="d-flex justify-content-center py-3">
         <button className="btn btn-sm text-dark mx-4" onClick={() => {dispatch(addToCart(product))}}>Add to <i className="fas fa-shopping-cart"></i></button>
         <Link to="/ProductInfo" className="btn btn-sm text-dark" >Product Info</Link>
         </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default ProductCard
