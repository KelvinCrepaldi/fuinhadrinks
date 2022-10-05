import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Cart from "../components/Cart";
import { Routes, Route } from "react-router-dom";
const RoutesPaths = ()=>{
    return(
        <>
        <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer></Footer>
        </>
        
    )
}
export default RoutesPaths;