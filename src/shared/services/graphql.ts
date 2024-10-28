import { CONSTS } from "@/shared/consts/consts.ts";
import axios from "axios";

export const _graphql = axios.create({
	baseURL: "https://shikimori.one/api/graphql",
	headers: {
		"User-Agent": CONSTS.USER_AGENT,
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${localStorage.getItem("access_token")}`,
	},
});

interface IVariables {
	[key: string]: string | number;
}

export const graphql = async <T>(
	query: string,
	variables?: IVariables,
): Promise<T> => {
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
