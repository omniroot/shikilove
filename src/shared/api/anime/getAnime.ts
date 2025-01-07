import { GET_ANIME_BY_ID } from "@/shared/services/anime/anime.graphql.ts";
import { IAnimeGet, IAnimeResponse } from "@/shared/services/anime/anime.interface.ts";
import { graphql } from "@/shared/services/graphql.ts";

export const getAnime = async ({ animeId }: IAnimeGet) => {
	const response = await graphql<IAnimeResponse>(GET_ANIME_BY_ID, {
		ids: animeId,
	});
	let { animes } = response;
	animes = animes.map((anime) => ({
		...anime,
		_type: "IAnime",
	}));
	return animes[0];
};
