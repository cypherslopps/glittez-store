import { Loader } from "@/components";
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const CategoriesList = lazy(() => import("./CategoriesList"));
const EditCategory = lazy(() => import("./EditCategory"));

const CategoriesOverview = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<CategoriesList />} />
        <Route path=":categoryID/edit" element={<EditCategory />} />
      </Routes>
    </Suspense>
  )
}

export default CategoriesOverview