import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { GlobalLayout } from "@/app/layouts/global/global.layout";
import { ProfilePageSkeleton } from "@pages/profile/profile.page.skeleton.tsx";
import { HomePage } from "@pages/home/home.page.tsx";
const LoginPage = React.lazy(() => import("@/app/pages/login/login.page.tsx"));
const AnimePage = React.lazy(() => import("@/app/pages/anime/anime.page.tsx"));
const ProfilePage = React.lazy(() => import("@/app/pages/profile/profile.page.tsx"));
const ProfileEditPage = React.lazy(
	() => import("@pages/profile/_pages/profile_edit/profile_edit.page.tsx"),
);
const ProfileAchievementsPage = React.lazy(
	() => import("@pages/profile/_pages/profile_achievements/profile_achievements.page.tsx"),
);
const DiscoveryPage = React.lazy(() => import("@pages/discovery/discovery.page.tsx"));
const SettingsPage = React.lazy(() => import("@pages/settings/settings.page.tsx"));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/animes/:animeId" element={<AnimePage />} />
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
				path="/settings"
				element={
					<Suspense fallback={<ProfilePageSkeleton />}>
						<SettingsPage />
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
