import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProduct ,addToCart } from '../../store/actions';
import { Link } from 'react-router-dom';
import './products.css';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    const [fetchedData, setFetchedData] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
             dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (category === 'all') {
            setFetchedData(products);
        } else {
            const filteredData = products.filter((item) => item.category === category);
            setFetchedData(filteredData);
        }
    }, [category, products]);

    const handleFilterData = (cat) => {
        setCategory(cat);
    };

    if (!Array.isArray(products) || products.length === 0) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }
    




    return (
        <>
            <h1>Products</h1>
            <div className="items-click-container">
                <button className="buttons-of-click" onClick={() => handleFilterData('all')}>All</button>
                <button className="buttons-of-click" onClick={() => handleFilterData('audio')}>Audio</button>
                <button className="buttons-of-click" onClick={() => handleFilterData('gaming')}>Gaming</button>
                <button className="buttons-of-click" onClick={() => handleFilterData('mobile')}>Mobile</button>
                <button className="buttons-of-click" onClick={() => handleFilterData('tv')}>TV</button>
            </div>
            <div className="product-list">
                {fetchedData.map((product) => (
                    <div key={product.id} className="product-item">
                        <Link className="list" to={`/products/${product.id}`} onClick={() => dispatch(selectProduct(product))}>
                            <img className="image-height" src={product.image} alt={product.title} />
                            <h3 className="heading1">{product.title}</h3>
                            <p className="para1">${product.price}</p>
                        </Link>
                        <button className="button-of-add" type="button" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;