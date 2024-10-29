import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { GlobalLayout } from "@/app/layouts/GlobalLayout/GlobalLayout.tsx";
const AnimePageLazy = React.lazy(() => import("@/app/pages/AnimePage/AnimePage.tsx"));
const AnimesPageLazy = React.lazy(() => import("@/app/pages/AnimesPage/AnimesPage.tsx"));
const LoginPageLazy = React.lazy(() => import("@/app/pages/LoginPage/LoginPage.tsx"));
const NotFoundPageLazy = React.lazy(() => import("@/app/pages/NotFoundPage/NotFoundPage.tsx"));
const ProfilePageLazy = React.lazy(() => import("@/app/pages/ProfilePage/ProfilePage.tsx"));
const HomePageLazy = React.lazy(() => import("@/app/pages/HomePage/HomePage.tsx"));
const SearchPageLazy = React.lazy(() => import("@/app/pages/SearchPage/SearchPage.tsx"));
const TestPageLazy = React.lazy(() => import("@/app/pages/TestPage/TestPage.tsx"));

const SettingsPageLazy = React.lazy(() => import("@/app/pages/SettingsPage/SettingsPage.tsx"));

const Loading = <div>loading</div>;

const HomePage = () => {
	return (
		<Suspense fallback={Loading}>
			<HomePageLazy />
		</Suspense>
	);
};

const ProfilePage = () => {
	return (
		<Suspense fallback={Loading}>
			<ProfilePageLazy />
		</Suspense>
	);
};

const SearchPage = () => {
	return (
		<Suspense fallback={Loading}>
			<SearchPageLazy />
		</Suspense>
	);
};

const AnimesPage = () => {
	return (
		<Suspense fallback={Loading}>
			<AnimesPageLazy />
		</Suspense>
	);
};

const AnimePage = () => {
	return (
		<Suspense fallback={Loading}>
			<AnimePageLazy />
		</Suspense>
	);
};

const SettingsPage = () => {
	return (
		<Suspense fallback={Loading}>
			<SettingsPageLazy />
		</Suspense>
	);
};

const LoginPage = () => {
	return (
		<Suspense fallback={Loading}>
			<LoginPageLazy />
		</Suspense>
	);
};

const NotFoundPage = () => {
	return (
		<Suspense fallback={Loading}>
			<NotFoundPageLazy />
		</Suspense>
	);
};

const TestPage = () => {
	return (
		<Suspense fallback={Loading}>
			<TestPageLazy />
		</Suspense>
	);
};

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/animes/" element={<AnimesPage />} />
			<Route path="/animes/:animeId" element={<AnimePage />} />

			<Route path="/test" element={<TestPage />} />
			<Route path="/settings" element={<SettingsPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Route>,
	),
);
