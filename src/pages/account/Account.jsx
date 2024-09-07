import { GuestFooter, GuestNavigation, GuestPanel, NotFound } from '@/components'
import { useSidebar } from '@/providers/SidebarProvider'
import { AnimatePresence } from 'framer-motion'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))

const Account = () => {
  const { isOpen } = useSidebar();

  return (
    <>
        <main className='px-2 sm:px-4 md:px-6'>
            <GuestNavigation />

            <main className='py-12 md:py-16 flex flex-col items-center justify-center gap-y-6 md:gap-y-11'>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
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

export default Account