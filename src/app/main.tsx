import { router } from "@/app/router.tsx";
import "@/app/styles/main.scss";
import { CONSTS } from "@/shared/consts/consts.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
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

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</StrictMode>,
);
