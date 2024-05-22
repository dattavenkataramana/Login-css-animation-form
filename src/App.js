import { HashRouter,Route,Routes } from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
       <>
       <HashRouter>
            <Routes>
              <Route exact path="/"  element = {<Login />} />
              <Route exact path="/register"  element = {<Register />} />
            </Routes>
       </HashRouter>
       </> 
  );
}

export default App;
 
