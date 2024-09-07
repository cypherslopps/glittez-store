import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GuestNavigation, GuestFooter, NotFound, GuestPanel } from "@/components";
import { useSidebar } from '@/providers/SidebarProvider';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import("./Home"));
const ProductsOverview = lazy(() => import("./ProductsOverview"));
const Checkout = lazy(() => import("./Checkout"));
const Shop = lazy(() => import("./Shop"));

const Guest = () => {
  const { isOpen } = useSidebar();
  console.log(isOpen);

  return (
    <>
      <main className='px-2 sm:px-4 md:px-6'>
        <GuestNavigation />

        <main className='pt-4 pb-6'>
          <Routes>
              <Route index element={<Home />} />
              <Route path="products/*" element={<ProductsOverview />} />
              <Route path="cart/checkout" element={<Checkout />} />
              <Route path="shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </main>

      <AnimatePresence>
        {isOpen ? (
          <GuestPanel />
        ) : null}
      </AnimatePresence>

      <GuestFooter />
    </>
  )
}

export default Guest