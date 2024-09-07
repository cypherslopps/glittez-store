import { lazy } from "react";
import { Route, Routes } from "react-router-dom"

const ProductsCategory = lazy(() => import("./ProductsCategory"));
const ProductDescription = lazy(() => import("./ProductDescription"));

const ProductsOverview = () => {
  return (
    <Routes>
        <Route path="category/:categorySlug" element={<ProductsCategory />} />
        <Route path="category/:category/:productSlug" element={<ProductDescription />} />
    </Routes>
  )
}

export default ProductsOverview