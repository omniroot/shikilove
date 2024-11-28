import {
	GET_ANIME_BY_ID,
	GET_ANIME_LATESTS,
	GET_ANIME_ONGOINGS,
} from "@/shared/services/anime/anime.graphql.ts";
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
		let { animes } = response;
		animes = animes.map((anime) => ({
			...anime,
			_type: "IAnime",
		}));
		return animes[0];
	},

	getAnimeOngoing: async () => {
		const response = await graphql<IAnimeResponse>(GET_ANIME_ONGOINGS);
		let { animes } = response;
		animes = animes.map((anime) => ({
			...anime,
			_type: "IAnime",
		}));
		return animes;
	},

	getAnimeLatests: async () => {
		const response = await graphql<IAnimeResponse>(GET_ANIME_LATESTS);
		let { animes } = response;
		animes = animes.map((anime) => ({
			...anime,
			_type: "IAnime",
		}));
		return animes;
	},

	getSimilarAnime: async ({ animeId }: IAnimeGet) => {
		const response = await api.get<ISimilarAnime[]>(`animes/${animeId}/similar`);
		let { data: animes } = response;
		animes = animes.map((anime) => ({
			...anime,
			_type: "ISimilarAnime",
		}));
		return animes;
	},
};
