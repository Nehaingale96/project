import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import User from "./User"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="login" element={<User/>}/>

        </Route>
    )
)