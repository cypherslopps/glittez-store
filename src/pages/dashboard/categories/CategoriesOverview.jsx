import { lazy } from "react"
import { Route, Routes } from "react-router-dom";

const CategoriesList = lazy(() => import("./CategoriesList"));
const EditCategory = lazy(() => import("./EditCategory"));

const CategoriesOverview = () => {
  return (
    <Routes>
      <Route index element={<CategoriesList />} />
      <Route path=":categoryID/edit" element={<EditCategory />} />
    </Routes>
  )
}

export default CategoriesOverview