import { Loader } from "@/components";
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const OrdersList = lazy(() => import("./OrdersList"));
const EditOrder = lazy(() => import("./EditOrder"));
const OrderInfo = lazy(() => import("./OrderInfo"));

const SubCategoriesOverview = () => {
  return (
    <Suspense fallback={<Loader />}>  
      <Routes>
        <Route index element={<OrdersList />} />
        <Route path=":orderId/edit" element={<EditOrder />} />
        <Route path=":orderId" element={<OrderInfo />} />
      </Routes>
    </Suspense>
  )
}

export default SubCategoriesOverview