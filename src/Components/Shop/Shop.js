import React, { useState } from 'react';
import fakeData from '../..//ema-john-simple-resources/fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0 , 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const HandleProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
        {
            products.map(pd => <Product 
                HandleProduct = {HandleProduct}
                product={pd}>                    
                </Product>)
        }
            </div>
            <div className="card-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Shop;