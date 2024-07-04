import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const UsersList = lazy(() => import("./UsersList"));

const UsersOverview = () => {
  return (
    <Routes>
        <Route index element={<UsersList />} />
    </Routes>
  )
}

export default UsersOverview