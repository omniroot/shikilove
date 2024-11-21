import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { GlobalLayout } from "@/app/layouts/global/global.layout";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
const LoginPage = React.lazy(() => import("@/app/pages/login/login.page.tsx"));
const ProfilePage = React.lazy(() => import("@/app/pages/profile/profile.page.tsx"));
const ProfileEditPage = React.lazy(
	() => import("@pages/profile/_pages/profile_edit/profile_edit.page.tsx"),
);
const ProfileAchievementsPage = React.lazy(
	() => import("@pages/profile/_pages/profile_achievements/profile_achievements.page.tsx"),
);
const DiscoveryPage = React.lazy(() => import("@pages/discovery/discovery.page.tsx"));

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
			<Route
				path="/profile/achievements"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<ProfileAchievementsPage />
					</Suspense>
				}
			/>

			<Route
				path="/discovery"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<DiscoveryPage />
					</Suspense>
				}
			/>

			<Route
				path="/login"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<LoginPage />
					</Suspense>
				}
			/>

			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Route>,
	),
);
