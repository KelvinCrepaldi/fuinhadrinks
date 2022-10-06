import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import About from "../pages/About";
import DrinkPage from "../pages/DrinkPage";
import ScrollToTop from "../components/ScrollToTop";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
const RoutesPaths = () => {
  return (
    <>
      <Header></Header>
      <div className="background-svg"></div>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<DrinkPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>

      <Footer></Footer>
    </>
  );
};
export default RoutesPaths;
