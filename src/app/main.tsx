import { router } from "@/app/router.tsx";
import "@/app/styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

dayjs().locale("en");
dayjs.extend(relativeTime);

// const client = new ApolloClient({
// 	uri: CONSTS.API_URL,
// 	cache: new InMemoryCache(),
// 	defaultOptions: {
// 		query: {
// 			pollInterval: 45000,
// 		},
// 	},
// 	headers: {
// 		"User-Agent": CONSTS.USER_AGENT,
// 		Authorization: `Bearer ${access_token}`,
// 	},
// });

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchInterval: 45000,
			refetchOnWindowFocus: false,
			retryDelay: 1000,
			retry: 1, // TODO its temporaty fix, after adding intereeceptor in api, chage it to 2-3
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
);
