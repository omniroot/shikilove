import { CONSTS } from "@/shared/consts/consts.ts";
import { authApi } from "@/shared/services/auth/auth.api.ts";
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";

export const _graphql = axios.create({
	baseURL: "https://shikimori.one/api/graphql",
	headers: {
		"User-Agent": CONSTS.USER_AGENT,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

_graphql.interceptors.request.use(
	(config) => {
		// Получаем access token из local storage
		const token = localStorage.getItem("access_token");

		// Если токен существует, добавляем его в заголовки запроса
		if (token) {
			// Убедимся, что headers определены
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${token}`,
			} as AxiosRequestHeaders;
		}

		return config;
	},
	(error) => {
		// Обработка ошибок запроса
		return Promise.reject(error);
	},
);

_graphql.interceptors.response.use(
	(response: AxiosResponse) => {
		console.log(response);
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry &&
			localStorage.getItem("refresh_token")
		) {
			originalRequest._retry = true;
			console.log("Trying refreshing tokens");
			const tokens = await authApi.refreshTokens(localStorage.getItem("refresh_token") || "");
			console.log("Tokens: ", tokens);

			if (tokens) {
				localStorage.setItem("access_token", tokens.access_token);
				localStorage.setItem("refresh_token", tokens.refresh_token);
			}
			return _graphql(originalRequest);
		}
		return Promise.reject(error);
	},
);

interface IVariables {
	[key: string]: string | number | undefined;
}

interface IGraphql {
	query: string;
	variables?: IVariables;
	config?: AxiosRequestConfig;
}

export const graphql = async <T>({
	query,
	variables,
	config,
}: IGraphql): Promise<AxiosResponse<{ data: T }>> => {
	const response = await _graphql.post<{ data: T }>(
		"",
		{
			query: query,
			variables: variables,
		},
		config,
	);
	return response;
};
