import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home1";
import NotFound from "pages/NotFound";
const Cart = React.lazy(() => import("pages/Cart"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const ProductDetail = React.lazy(() => import("pages/ProductDetail"));
const Shop = React.lazy(() => import("pages/Shop"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
