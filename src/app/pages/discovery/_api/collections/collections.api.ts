import { api } from "@/shared/services/api.ts";
import { UndefinedInitialDataInfiniteOptions, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { ICollection } from "./collections.types.ts";

interface IGetCollections {
	page: number;
	limit: number;
	config?: AxiosRequestConfig;
}

interface IUseGetCollections {
	limit?: number;
	config?: UndefinedInitialDataInfiniteOptions<ICollection[]>;
}

export const getCollections = ({ limit, page, config }: IGetCollections) => {
	const realLimit = limit - 1; // because fucking shikimori api return limit + 1 and infinity query not work
	return api.get<ICollection[]>(`topics/?forum=collections`, {
		params: {
			page,
			limit: realLimit,
		},
		...config,
	});
};

export const useGetCollections = ({ limit = 15, config }: IUseGetCollections = {}) => {
	return useInfiniteQuery<ICollection[]>({
		queryKey: ["getCollections"],
		queryFn: async ({ pageParam = 1 }) => {
			console.log("fetch in hook", pageParam);

			const response = await getCollections({ page: pageParam as number, limit });
			return response.data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			console.log("fetch in get next page param", lastPage.length);

			return lastPage.length === 15 ? pages.length + 1 : undefined;
		},
		...config,
	});
};
