import { GlobalLayout } from "@/app/layouts/GlobalLayout/GlobalLayout";
import { LoginPage } from "@/app/pages/LoginPage/LoginPage";
import { LogoutPage } from "@/app/pages/LogoutPage/LogoutPage";
import { NotFoundPage } from "@/app/pages/NotFoundPage/NotFoundPage";
import { ProfilePage } from "@/app/pages/ProfilePage/ProfilePage";
import { SearchPage } from "@/app/pages/SearchPage/SearchPage";
import { SettingsPage } from "@/app/pages/SettingsPage/SettingsPage";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
