import { router } from "@/app/router.tsx";
import "@/app/styles/main.scss";
import { CONSTS } from "@/shared/consts/consts.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

dayjs().locale("en");
dayjs.extend(relativeTime);

const access_token = localStorage.getItem("access_token");

const client = new ApolloClient({
	uri: CONSTS.API_URL,
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			pollInterval: 45000,
		},
	},
	headers: {
		"User-Agent": CONSTS.USER_AGENT,
		Authorization: `Bearer ${access_token}`,
	},
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
			{/* <TestPage /> */}
		</ApolloProvider>
	</StrictMode>,
);
