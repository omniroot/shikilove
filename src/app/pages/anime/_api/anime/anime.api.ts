// import {
// 	GET_ANIME_BY_ID,
// 	GET_ANIME_LATESTS,
// 	GET_ANIME_ONGOINGS,
// } from "@/shared/services/anime/anime.graphql.ts";
// import {
// 	IAnimeFranchisesResponse,
// 	IAnimeGet,
// 	IAnimeResponse,
// 	ISimilarAnime,
// } from "@/shared/services/anime/anime.interface.ts";
// import { api } from "@/shared/services/api.ts";
// import { graphql } from "@/shared/services/graphql.ts";

// export const animeApi = {
// 	getAnimeOngoing: async () => {
// 		const response = await graphql<IAnimeResponse>(GET_ANIME_ONGOINGS);
// 		let { animes } = response;
// 		animes = animes.map((anime) => ({
// 			...anime,
// 			_type: "IAnime",
// 		}));
// 		return animes;
// 	},

// 	getAnimeLatests: async () => {
// 		const response = await graphql<IAnimeResponse>(GET_ANIME_LATESTS);
// 		let { animes } = response;
// 		animes = animes.map((anime) => ({
// 			...anime,
// 			_type: "IAnime",
// 		}));
// 		return animes;
// 	},
// };
