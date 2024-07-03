import { GuestFooter, GuestNavigation } from '@/components'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))

const Account = () => {
  return (
    <>
        <main className='px-2 sm:px-4 md:px-6'>
            <GuestNavigation />

            <main className='py-16 flex flex-col items-center justify-center gap-y-8'>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </main>
        </main>

        <GuestFooter />
    </>
  )
}

export default Account