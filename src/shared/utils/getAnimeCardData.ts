import { ISearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
import { IAnime, ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
import { IUserRate } from "@/shared/services/userRate/userRate.interface.ts";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";

type IGetAnimeCardDataProps = IAnime | ISearchAnime | IUserRate | ISimilarAnime;
export const getAnimeCardData = (anime: IGetAnimeCardDataProps): IAnimeCard => {
	const animeCard: IAnimeCard | any = {};

	if (anime._type === "IAnime") {
		// console.log("IAnime", anime);

		const _anime = anime as IAnime;
		animeCard.id = _anime.id;
		animeCard.poster = _anime.poster.mainUrl;
		animeCard.name = _anime.name;
		animeCard.russian = _anime.russian;
		animeCard.episodes = _anime.episodes;
		animeCard.score = _anime.score;
		animeCard.kind = _anime.kind;
		animeCard.airedOn = String(_anime.airedOn.year);
		animeCard.userRate = {
			status: _anime.userRate?.status,
			episodes: _anime.userRate?.episodes,
			score: _anime.userRate?.score,
		};
	}

	if (anime._type === "IUserRate") {
		// console.log("IUserRate", anime);

		const _anime = anime as IUserRate;
		animeCard.id = _anime.anime.id;
		animeCard.poster = _anime.anime.poster.main2xUrl;
		animeCard.name = _anime.anime.name;
		animeCard.russian = _anime.anime.russian;
		animeCard.episodes = _anime.anime.episodes;
		animeCard.score = _anime.anime.score;
		animeCard.kind = _anime.anime.kind;
		animeCard.airedOn = String(_anime.anime.airedOn.year);
		animeCard.userRate = {
			status: _anime.status,
			episodes: _anime.episodes,
			score: _anime.score,
		};
	}

	if (anime._type === "ISearchAnime") {
		// console.log("ISearchAnime", anime);

		const _anime = anime as ISearchAnime;
		animeCard.id = _anime.id;
		animeCard.poster = _anime.poster.main2xUrl;
		animeCard.name = _anime.name;
		animeCard.russian = _anime.russian;
		animeCard.episodes = _anime.episodes;
		animeCard.score = _anime.score;
		animeCard.kind = _anime.kind;
		animeCard.airedOn = String(_anime.airedOn.year);
		animeCard.userRate = {
			status: _anime.userRate?.status,
			episodes: _anime.userRate?.episodes,
			score: _anime.userRate?.score,
		};
	}

	// TODO add similar anime check

	return animeCard;
};
