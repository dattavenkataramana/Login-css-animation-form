

import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products');
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.products });
        } catch (err) {
            console.error(err);
        }
    };
};



export const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product,
});

 
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
});