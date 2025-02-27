import { router } from "@/app/router.tsx";
import "@/app/styles/main.css";
import { CONSTS } from "@/shared/consts/consts.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

dayjs().locale("en");
dayjs.extend(relativeTime);

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchInterval: CONSTS.REFETCH_INTERVAL,
			staleTime: CONSTS.STALE_TIME,
			refetchOnWindowFocus: false,
			retryDelay: 1000,
			retry: 2, // TODO its temporary fix, after adding intereeceptor in api, chage it to 2-3
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
