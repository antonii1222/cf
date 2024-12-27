import "./styles/norm.css";
import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Head from "./components/Head/Head";
import Foot from "./components/Foot/Foot";
import Home from "./pages/Home";
import Prog from "./pages/Prog";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import ProductOne from "./pages/ProductOne";
import ProductTwo from "./pages/ProductTwo";



function App() {

  return (

      <div className="coffe">

      <div className="container">
          <Router>
          <Head></Head> 
          <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/prog" element={<Prog></Prog> }></Route>
          <Route path="/basket" element={<Basket></Basket>}></Route>
          <Route path="/project/:id" element={<Product></Product>}></Route>
          <Route path="/productone/:id" element={<ProductOne></ProductOne>}></Route>
          <Route path="/producttwo/:id" element={<ProductTwo></ProductTwo>}></Route>
          </Routes>
          <Foot></Foot>
          </Router>

        </div>
        </div>
      
      
  )
}

export default App
