import { graphql } from "@/shared/services/graphql.ts";
import { AxiosRequestConfig } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IAnime, IAnimeResponse } from "@pages/anime/_api/anime/anime.interface.ts";
import { GET_ANIMES } from "@pages/anime/_api/anime/getAnimes/getAnimes.graphql.ts";
import { AnimeStatus } from "@pages/anime/_api/anime/getAnimes/getAnimes.types.ts";

interface IGetAnimes {
	animeId?: string;
	status?: AnimeStatus;
	limit?: number;
	config?: AxiosRequestConfig;
}

interface IUseGetAnimes {
	animeId?: string;
	status?: AnimeStatus;
	limit?: number;
	config?: UseQueryOptions<IAnime[]>;
}

interface IUseGetAnime {
	animeId?: string;
	status?: AnimeStatus;
	config?: UseQueryOptions<IAnime>;
}

export const getAnimes = ({ animeId = "", status = "", limit = 15, config }: IGetAnimes) => {
	return graphql<IAnimeResponse>({
		query: GET_ANIMES,
		variables: {
			ids: animeId,
			limit: limit,
			status: status,
		},
		config,
	});
};

export const useGetAnimes = ({ animeId = "", status = "", limit = 15, config }: IUseGetAnimes) => {
	return useQuery<IAnime[]>({
		queryKey: ["getAnimes", animeId],
		queryFn: async () => {
			const reponse = await getAnimes({ animeId, status, limit });
			return reponse.data.data.animes;
		},
		...config,
	});
};

export const useGetAnime = ({ animeId = "", status = "", config }: IUseGetAnime) => {
	return useQuery<IAnime>({
		queryKey: ["getAnimes", animeId],
		queryFn: async () => {
			const reponse = await getAnimes({ animeId, status });
			return reponse.data.data.animes[0];
		},
		...config,
	});
};
