import { Loader } from "@/components";
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import("./ProductsList"));
const EditProduct = lazy(() => import("./EditProduct"));
const AddProduct = lazy(() => import("./AddProduct"));
const ProductInfo = lazy(() => import("./ProductInfo"));
const AddProductSKU = lazy(() => import("./AddSKU"));

const ProductsOverview = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
          <Route index element={<ProductList />} />
          <Route path="create" element={<AddProduct />} />
          <Route path=":productId/edit" element={<EditProduct />} />
          <Route path=":productId" element={<ProductInfo />} />
          <Route path=":productId/skus/create" element={<AddProductSKU />} />
      </Routes>
    </Suspense>
  )
}

export default ProductsOverview