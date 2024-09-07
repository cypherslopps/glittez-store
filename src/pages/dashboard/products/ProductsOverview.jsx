import { Loader } from "@/components";
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import("./ProductsList"));
const EditProduct = lazy(() => import("./EditProduct"));
const AddProduct = lazy(() => import("./AddProduct"));
const ProductInfo = lazy(() => import("./ProductInfo"));
const AddProductSKU = lazy(() => import("./AddSKU"));
const EditSKU = lazy(() => import("./EditSKU"));

const ProductsOverview = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
          <Route index element={<ProductList />} />
          <Route path="create" element={<AddProduct />} />
          <Route path=":productSlug/edit" element={<EditProduct />} />
          <Route path=":productSlug" element={<ProductInfo />} />
          <Route path="skus/:productId/create" element={<AddProductSKU />} />
          <Route path="skus/:productID/:skuCode/edit" element={<EditSKU />} />
      </Routes>
    </Suspense>
  )
}

export default ProductsOverview