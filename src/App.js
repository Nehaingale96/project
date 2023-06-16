import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User"
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";


function App() {

  // const[product,setProduct]=useState({})
  const [data, setData] = useState([]);
  const [detailData, setdetailData] = useState([]);
  const [islogin, setisLogin] = useState(false)
  const baseUrl = "http://localhost:3000/"
  return (
    // <div>
    //   {/* <Navbar/> */}
    //   {/* <User/> */}
    //   <Home/>
    // </div>


    <>
    <BrowserRouter>
    <Navbar islogin={islogin} setisLogin={setisLogin}/>

    <Routes>
           <Route path="/" element={<Product data={data} setData={setData} /> }/>
          <Route path="/login" element={<User baseUrl={baseUrl} setisLogin={setisLogin}/> }/>
          <Route path="products/:id" element={<ProductDetails data={detailData} setData={setdetailData} />}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
