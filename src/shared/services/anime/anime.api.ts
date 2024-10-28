import { GET_ANIME_BY_ID } from "@/shared/services/anime/anime.graphql.ts";
import {
	IAnimeGet,
	IAnimeResponse,
	ISimilarAnime,
} from "@/shared/services/anime/anime.interface.ts";
import { api } from "@/shared/services/api.ts";
import { graphql } from "@/shared/services/graphql.ts";

export const animeApi = {
	getAnime: async ({ animeId }: IAnimeGet) => {
		const response = await graphql<IAnimeResponse>(GET_ANIME_BY_ID, {
			ids: animeId,
		});
		const { animes } = response;
		return animes[0];
	},

	getSimilarAnime: async ({ animeId }: IAnimeGet) => {
		const response = await api.get<ISimilarAnime[]>(`animes/${animeId}/similar`);
		const { data } = response;
		return data;
	},
};
