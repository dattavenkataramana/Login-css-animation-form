 

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart } from '../../store/actions';
// import './index.css';

// const Cart = () => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector(state => state.product.cart);

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
//     const totalAmountInRupees = totalAmount * 74.34; 

//     const handleRemove = (item) => {
//         dispatch(removeFromCart(item));
//     };

//     return (
//         <div className="cart-container">
//             <h1>Shopping Cart</h1>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     <ul className="cart-list">
//                         {cartItems.map((item, index) => (
//                             <li key={index} className="cart-item">
//                                 <img src={item.image} alt={item.title} className="cart-item-image" />
//                                 <div className="cart-item-details">
//                                     <p className="cart-item-title">{item.title}</p>
//                                     <p className="cart-item-price">${item.price.toFixed(2)}</p>
//                                     <button className="cart-item-remove" onClick={() => handleRemove(item)}>
//                                         Remove
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="cart-total">
//                         <p>Total Amount: ${totalAmount.toFixed(2)}</p>
//                         <p>Total Amount in Rupees: ₹{totalAmountInRupees.toFixed(2)}</p>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/actions';
import './index.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.product.cart);

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalAmountInRupees = totalAmount * 74.34; 

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p className="cart-item-title">{item.title}</p>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    <button className="cart-item-remove" onClick={() => handleRemove(item)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                        <p>Total Amount in Rupees: ₹{totalAmountInRupees.toFixed(2)}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
