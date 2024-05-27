import { HashRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from './Components/Products'
import { fetchProducts, selectProduct } from './store/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductDetail from "./Components/ProductDetail";
import Cart from './Components/Cart'

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products products={products} onSelectProduct={(product) => dispatch(selectProduct(product))} />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

