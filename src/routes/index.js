import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Products from "../pages/Products";
import Requests from "../pages/Requests";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/requests" element={<Requests/>}/>
        </Routes>
    )
}

export default RoutesApp;