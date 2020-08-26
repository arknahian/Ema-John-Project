import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>

            <div className="product-info">
            <h4>{name}</h4>
            <p><b>{seller}</b></p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={() => props.HandleProduct(props.product)} className="add-btn"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
            </div>
        </div>
    );
};

export default Product;