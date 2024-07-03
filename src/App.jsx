import { lazy, Suspense, useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Loader } from "./components";

const Guest = lazy(() => import("./pages/guest/Guest"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Account = lazy(() => import("./pages/account/Account"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, []);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return (
    <Suspense fallback={<Loader />}>
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
