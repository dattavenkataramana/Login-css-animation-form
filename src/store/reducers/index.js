 
// import { FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

// const initialState = {
//     products: [],
//     selectedProduct: null,
//     cart: [],
// };

// export default function productReducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_PRODUCTS_SUCCESS:
//             return { ...state, products: action.payload };
//         case SELECT_PRODUCT:
//             return { ...state, selectedProduct: action.payload };
//         case ADD_TO_CART:
//             return { ...state, cart: [...state.cart, action.payload] };
//         case REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cart: state.cart.filter(item => item.id !== action.payload.id),
//             };
//         default:
//             return state;
//     }
// }


import { FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
    products: [],
    selectedProduct: null,
    cart: [],
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };
        case SELECT_PRODUCT:
            return { ...state, selectedProduct: action.payload };
        case ADD_TO_CART: {
            const item = action.payload;
            const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return { ...state, cart: [...state.cart, { ...item, quantity: 1 }] };
            }
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
}

