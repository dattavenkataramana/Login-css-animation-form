import {BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
       <>
       <BrowserRouter>
            <Routes>
              <Route exact path="/"  element = {<Login />} />
              <Route exact path="/register"  element = {<Register />} />
            </Routes>
       </BrowserRouter>
       </> 
  );
}

export default App;
 
