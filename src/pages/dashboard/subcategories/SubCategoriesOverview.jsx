import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom";

const SubCategoriesList = lazy(() => import("./SubCategoriesList"));
const EditSubCategory = lazy(() => import("./EditSubCategory"));

const SubCategoriesOverview = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<SubCategoriesList />} />
        <Route path=":subCategoryID/edit" element={<EditSubCategory />} />
      </Routes>
    </Suspense>
  )
}

export default SubCategoriesOverview