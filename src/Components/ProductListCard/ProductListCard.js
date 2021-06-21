import React from 'react';
import './ProductListCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const ProductListCard = ({ product }) => {

    const { name, img, stock, price,_id } = product;
    
    return (
        <div className="product-card">
           <img src={img} alt="Furniture" className="logo"/>
            <h3> {name}</h3>
            <hr/>
            <h5> Stock : <small>{stock}</small></h5>
            <h5> price : $ <small>{price}</small></h5>
            
          <Link className="btn" to={`/CheckOut/${_id}`}><FontAwesomeIcon icon={faShoppingBasket} className="mx-2" />   Buy Now</Link>
        </div>
    );
};

export default ProductListCard;