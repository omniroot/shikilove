import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { GlobalLayout } from "@/app/layouts/global/global.layout";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
const ProfilePage = React.lazy(() => import("@/app/pages/profile/profile.page.tsx"));
const ProfileEditPage = React.lazy(
	() => import("@/app/pages/profile/pages/ProfileEdit/ProfileEdit.tsx"),
);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			{/* <Route path="/" element={<HomePage />} /> */}
			<Route
				path="/profile"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<ProfilePage />
					</Suspense>
				}
			/>
			<Route
				path="/profile/edit"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<ProfileEditPage />
					</Suspense>
				}
			/>
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Route>,
	),
);
