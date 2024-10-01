import { GlobalLayout } from "@/app/layouts/GlobalLayout/GlobalLayout";
import { ProfilePage } from "@/app/pages/ProfilePage/ProfilePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="/" element={<ProfilePage />} />
    </Route>
  )
);
