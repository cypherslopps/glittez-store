import { Loader } from "@/components";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const UsersList = lazy(() => import("./UsersList"));

const UsersOverview = () => {
  return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route index element={<UsersList />} />
        </Routes>
    </Suspense>
  )
}

export default UsersOverview