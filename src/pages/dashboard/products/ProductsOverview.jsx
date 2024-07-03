import { lazy } from "react"
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import("./ProductsList"));
const EditProduct = lazy(() => import("./EditProduct"));
const AddProduct = lazy(() => import("./AddProduct"));
const ProductDescription = lazy(() => import("./ProductDescription"));

const ProductsOverview = () => {
  return (
    <Routes>
        <Route index element={<ProductList />} />
        <Route path="create" element={<AddProduct />} />
        <Route path=":productId/edit" element={<EditProduct />} />
        <Route path=":productId" element={<ProductDescription />} />
    </Routes>
  )
}

export default ProductsOverview