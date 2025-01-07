import { api } from "@/shared/services/api.ts";
import { UndefinedInitialDataInfiniteOptions, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { ICritique } from "./critiques.types.ts";

interface IGetCritiques {
	page: number;
	limit: number;
	config?: AxiosRequestConfig;
}

interface IUseGetCritiques {
	limit?: number;
	config?: UndefinedInitialDataInfiniteOptions<ICritique[]>;
}

export const getCritiques = ({ limit, page, config }: IGetCritiques) => {
	const realLimit = limit - 1; // because fucking shikimori api return limit + 1 and infinity query not work
	return api.get<ICritique[]>(`topics/?forum=critiques`, {
		params: {
			page,
			limit: realLimit,
		},
		...config,
	});
};

export const useGetCritiques = ({ limit = 15, config }: IUseGetCritiques = {}) => {
	return useInfiniteQuery<ICritique[]>({
		queryKey: ["getCritiques"],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await getCritiques({ limit, page: pageParam as number });
			return response.data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length === 15 ? pages.length + 1 : undefined;
		},
		...config,
	});
};
