import { createRoot } from "react-dom/client";

import "@/app/styles/main.scss";
import { router } from "@/app/router";
import { CONSTS } from "@/shared/consts/consts";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
		"User-Agent": "ShikiLove",
		Authorization: `Bearer ${access_token}`,
	},
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
			{/* <TestPage /> */}
		</ApolloProvider>
	</StrictMode>,
);
