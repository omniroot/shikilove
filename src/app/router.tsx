import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import GlobalLayout from "./layouts/global/global.layout";
import { HomePage } from "@pages/home/home.page";
import { NotFoundPage } from "@pages/notfound/notfound.page.tsx";
import { z } from "zod";

const rootRoute = createRootRoute({
	component: () => <GlobalLayout />,
});

// Home Page
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: () => <HomePage />,
});

// About Page
const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "about",
}).lazy(() => import("@/app/pages/about/about.page.tsx").then((b) => b.Route));

// Profile Page
const profileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "profile",
}).lazy(() => import("@/app/pages/profile/profile.page.tsx").then((b) => b.Route));

// Anime Page
const animeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "animes/$animeId",
}).lazy(() => import("@/app/pages/anime/anime.page.tsx").then((b) => b.Route));

// Anime Screenshots Page
const animeScreenshotsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "animes/$animeId/screenshots",
}).lazy(() =>
	import("@/app/pages/anime/_pages/screenshots/screenshots.page.tsx").then((b) => b.Route),
);

// Anime Similars Page
const animeSimilarsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "animes/$animeId/similars",
}).lazy(() => import("@/app/pages/anime/_pages/similars/similars.page.tsx").then((b) => b.Route));

// const discoverySearchShema = z.object({
// 	filter: z.enum(["ongoing", "recently", "critiques", "collections", "calendar"]),
// });

// Discovery Page
const discoveryRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "discovery",
	// validateSearch: (search) => discoverySearchShema.parse(search),
}).lazy(() => import("@/app/pages/discovery/discovery.page.tsx").then((b) => b.Route));

// Discovery Ongoings Page
const ongoingsRoute = createRoute({
	getParentRoute: () => discoveryRoute,
	path: "ongoings",
}).lazy(() => import("@pages/discovery/_pages/ongoings/ongoings.page.tsx").then((b) => b.Route));

// Discovery Latests Page
const latestsRoute = createRoute({
	getParentRoute: () => discoveryRoute,
	path: "latests",
}).lazy(() => import("@pages/discovery/_pages/latests/latests.page.tsx").then((b) => b.Route));

// Discovery Critiques Page
const critiquesRoute = createRoute({
	getParentRoute: () => discoveryRoute,
	path: "critiques",
}).lazy(() => import("@pages/discovery/_pages/critiques/critiques.page.tsx").then((b) => b.Route));

// Discovery Collections Page
const collectionsRoute = createRoute({
	getParentRoute: () => discoveryRoute,
	path: "collections",
}).lazy(() =>
	import("@pages/discovery/_pages/collections/collections.page.tsx").then((b) => b.Route),
);

// Discovery Calendar Page
const calendarRoute = createRoute({
	getParentRoute: () => discoveryRoute,
	path: "calendar",
}).lazy(() => import("@pages/discovery/_pages/calendar/calendar.page.tsx").then((b) => b.Route));

const loginSchema = z.object({
	code: z.string().optional(),
});
// Login Page
const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "login",
	validateSearch: (search) => loginSchema.parse(search),
}).lazy(() => import("@/app/pages/login/login.page.tsx").then((b) => b.Route));

// Settings Page
const settingsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "settings",
}).lazy(() => import("@/app/pages/settings/settings.page.tsx").then((b) => b.Route));

const routeTree = rootRoute.addChildren([
	indexRoute,
	aboutRoute,
	profileRoute,
	settingsRoute,
	animeRoute,
	animeScreenshotsRoute,
	animeSimilarsRoute,
	loginRoute,
	discoveryRoute.addChildren([
		ongoingsRoute,
		latestsRoute,
		critiquesRoute,
		collectionsRoute,
		calendarRoute,
	]),
]);

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultNotFoundComponent: () => <NotFoundPage />,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
