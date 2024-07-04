import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { DashboardSidebar, Loader, NotFound } from "../../components";

const Overview = lazy(() => import("./Overview"));
const ProductOverview = lazy(() => import("./products/ProductsOverview"));
const UsersOverview = lazy(() => import("./users/UsersOverview"));
const CategoriesOverview = lazy(() => import("./categories/CategoriesOverview"));
const SubCategoriesOverview = lazy(() => import("./subcategories/SubCategoriesOverview"));
const OrdersOverview = lazy(() => import("./orders/OrdersOverview"));
const Settings = lazy(() => import("./Settings"));

const Dashboard = () => {
  return (
    <main className='bg-bgBlack min-h-screen h-full grid grid-cols-[20vw_1fr]'>
        <DashboardSidebar />
        
        <main className='flex justify-center py-5'>
            <div className='w-[95%] pt-4'>
                <Suspense fallback={<Loader />}>
                  <Routes>
                      <Route index element={<Overview />} />
                      <Route path="products/*" element={<ProductOverview />} />
                      <Route path="users/*" element={<UsersOverview />} />
                      <Route path="categories/*" element={<CategoriesOverview />} />
                      <Route path="subcategory/*" element={<SubCategoriesOverview />} />
                      <Route path="orders/*" element={<OrdersOverview />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
            </div>
        </main>
    </main>
  )
}

export default Dashboard