import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 12.3;
    if (total > 35) {
        shipping = 4.9;
    }
    else if ( total < 35){
        shipping = 0;
    }
    return (
        <div>
            <h1>Order Summery</h1>
    <h3>Items Ordered: {cart.length}</h3>
    <h4>Shipping Price ${shipping}</h4>
    <h4>Total Price ${total + shipping}</h4>
        </div>
    );
};

export default Cart;