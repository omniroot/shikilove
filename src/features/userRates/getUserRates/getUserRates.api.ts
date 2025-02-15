import { graphql } from "@/shared/services/graphql.ts";
import { GET_USER_RATES } from "@pages/user/_api/userRate/userRate.graphql.ts";
import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types.ts";
import { useInfiniteQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { IUserRate, IUserRatesResponse } from "./getUserRates.types.ts";

interface IGetUserRates {
	userId: number;
	page?: number;
	limit?: number;
	status?: IUserRateStatus;
	config?: AxiosRequestConfig;
}

interface IUseGetUserRates {
	userId?: number;
	page?: number;
	limit?: number;
	status?: IUserRateStatus;
	config?: UseQueryOptions<IUserRate[]>;
}

export const getUserRates = ({
	userId,
	page = 1,
	limit = 30,
	status = "watching",
	config,
}: IGetUserRates) => {
	return graphql<IUserRatesResponse>({
		query: GET_USER_RATES,
		variables: {
			page,
			limit,
			status,
			userId,
		},
		config,
	});
};

export const useGetUserRates = ({ userId, status = "watching" }: IUseGetUserRates = {}) => {
	if (!userId) {
		userId = Number(localStorage.getItem("user_id"));
	}
	return useInfiniteQuery<IUserRate[], Error>({
		queryKey: ["getUserRates", userId, status],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await getUserRates({
				userId,
				page: pageParam as number,
				limit: 15,
				status,
			});
			return response.data.data.userRates;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length === 15 ? pages.length + 1 : undefined;
		},
	});
};
