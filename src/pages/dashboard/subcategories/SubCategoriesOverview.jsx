import { lazy } from "react"
import { Route, Routes } from "react-router-dom";

const SubCategoriesList = lazy(() => import("./SubCategoriesList"));
const EditSubCategory = lazy(() => import("./EditSubCategory"));

const SubCategoriesOverview = () => {
  return (
    <Routes>
      <Route index element={<SubCategoriesList />} />
      <Route path=":subCategoryID/edit" element={<EditSubCategory />} />
    </Routes>
  )
}

export default SubCategoriesOverview