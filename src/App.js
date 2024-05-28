// import { HashRouter, Route, Routes } from "react-router-dom";
// import Login from './Components/Login'
// import Register from './Components/Register'
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Products from './Components/Products'
// import { fetchProducts, selectProduct } from './store/actions'
// import { useDispatch, useSelector } from "react-redux";
// import { useState,useEffect } from "react";
// import ProductDetail from "./Components/ProductDetail";
// import Cart from './Components/Cart'

// function App() {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.products);
   
//   const [searchQuery, setSearchQuery] = useState('');
  
//     const handleSearch = (query) => {
//       setSearchQuery(query);
//     };

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);



//   return (
//     <>
//       <HashRouter>
//         <Header onSearch={handleSearch} />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/register" element={<Register />} />
//           <Route exact path="/products" element={<Products products={products} searchQuery={searchQuery}   onSelectProduct={(product) => dispatch(selectProduct(product))} />} />
//           <Route exact path="/products/:id" element={<ProductDetail />} />
//           <Route exact path="/cart" element={<Cart />} />
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProduct } from './store/actions';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <HashRouter>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={
            <Products 
              products={products} 
              searchQuery={searchQuery} 
              onSelectProduct={(product) => dispatch(selectProduct(product))} 
            />
          } />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

