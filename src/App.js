import { HashRouter,Route,Routes } from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'
import Header from "./Components/Header";
import Home from "./Components/Home";
function App() {
  return (
       <>
         
       <HashRouter>
       <Header/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login"  element = {<Login />} />
              <Route exact path="/register"  element = {<Register />} />
            </Routes>
       </HashRouter>
       </> 
  );
}

export default App;
 
