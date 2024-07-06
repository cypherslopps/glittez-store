import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const SubCategoriesList = lazy(() => import("./SubCategoriesList"));
const EditSubCategory = lazy(() => import("./EditSubCategory"));
const AddSubCategory = lazy(() => import("./AddSubCategory"));

const SubCategoriesOverview = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<SubCategoriesList />} />
        <Route path=":slug/edit" element={<EditSubCategory />} />
        <Route path="create" element={<AddSubCategory />} />
      </Routes>
    </Suspense>
  )
}

export default SubCategoriesOverview