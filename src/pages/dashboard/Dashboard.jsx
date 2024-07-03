import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { DashboardSidebar } from "../../components";

const Overview = lazy(() => import("./Overview"));
const ProductOverview = lazy(() => import("./products/ProductsOverview"));

const Dashboard = () => {
  return (
    <main className='bg-bgBlack min-h-screen h-full grid grid-cols-[20vw_1fr]'>
        <DashboardSidebar />
        
        <main className='flex justify-center py-5'>
            <div className='w-[95%] pt-4'>
                <Suspense fallback="Loading...">
                  <Routes>
                      <Route index element={<Overview />} />
                      <Route path="products/*" element={<ProductOverview />} />
                  </Routes>
                </Suspense>
            </div>
        </main>
    </main>
  )
}

export default Dashboard