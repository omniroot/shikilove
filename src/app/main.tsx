import { router } from "@/app/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CONSTS } from "@/shared/consts/consts";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
