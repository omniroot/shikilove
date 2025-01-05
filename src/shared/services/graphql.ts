import { CONSTS } from "@/shared/consts/consts.ts";
import axios, { AxiosRequestHeaders } from "axios";

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

interface IVariables {
	[key: string]: string | number | undefined;
}

export const graphql = async <T>(query: string, variables?: IVariables): Promise<T> => {
	try {
		const response = await _graphql.post<{ data: T }>("", {
			query: query,
			variables: variables,
		});
		return response.data.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("Error with graphql ==> ", error);
			throw error;
		} else {
			throw error;
			throw "error";
		}
	}
};
