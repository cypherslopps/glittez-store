import { lazy, Suspense } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Route, Routes } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Guest = lazy(() => import("./pages/guest/Guest"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Account = lazy(() => import("./pages/account/Account"));

function App() {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/*" element={<Guest />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="user/*" element={<Account />} />
      </Routes>
    </Suspense>
  
  )
}

// {cart.reduce((acc, cur) => acc + (cur.price * cur.count), 0)}

export default App
