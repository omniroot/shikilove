import { GET_ANIME_ONGOINGS } from "@/shared/services/anime/anime.graphql.ts";
import { IAnimeResponse } from "@/shared/services/anime/anime.interface.ts";
import { graphql } from "@/shared/services/graphql.ts";

export const getAnimeOngoing = async () => {
	const response = await graphql<IAnimeResponse>(GET_ANIME_ONGOINGS);
	let { animes } = response;
	animes = animes.map((anime) => ({
		...anime,
		_type: "IAnime",
	}));
	return animes;
};
