import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts, selectProduct } from '../../store/actions';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.selectedProduct);
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    useEffect(() => {
        if (products.length && !product) {
            const selectedProduct = products.find(item => item.id === parseInt(id));
            dispatch(selectProduct(selectedProduct));
        }
    }, [dispatch, products, product, id]);

    if (!product || product.id !== parseInt(id)) {
        return   (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Model: {product.model}</p>
            <p>Color: {product.color}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <Link to="/products">Back to Products</Link>
        </div>
    );
};

export default ProductDetail;
