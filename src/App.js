import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User"
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";


function App() {

  const[product,setProduct]=useState({})

  return (
    // <div>
    //   {/* <Navbar/> */}
    //   {/* <User/> */}
    //   <Home/>
    // </div>


    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
          <Route path="/" element={<Product setProduct={setProduct} /> }/>
          <Route path="productdetails" element={<ProductDetails product={product}/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
