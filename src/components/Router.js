import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import User from "./User"
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="login" element={<User/>}/>
            <Route path="products" element={<Product/>}></Route>
            <Route path="products/productDetails" element={<ProductDetails/>}>

                </Route>

        </Route>
    )
)