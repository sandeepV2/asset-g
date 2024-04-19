import { AssetClass, InvestorTable } from "../pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<InvestorTable />} />
      <Route path="investor/:id" element={<AssetClass />} />
    </>
  )
);

export const AllRoutes = () => {
  return <RouterProvider router={router} />;
};
