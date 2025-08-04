// src/Router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage   from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFound   from "./pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:code" element={<CountryPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
