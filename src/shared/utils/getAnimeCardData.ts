// import { ISearchAnime } from "@/shared/hooks/useSearchAnime.tsx";
// import { IAnime, ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
// import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
// import { IUserRate } from "@pages/user/_api/userRate/userRate.interface.ts";

// type IGetAnimeCardDataProps = IAnime | ISearchAnime | IUserRate | ISimilarAnime;

// export const getAnimeCardData = (anime: IGetAnimeCardDataProps): IAnimeCard => {
// 	let animeCard: IAnimeCard;

// 	animeCard = {
// 		id: "20",
// 		poster: "",
// 		name: "",
// 		russian: "",
// 		episodes: 0,
// 		score: 0,
// 		kind: "",
// 		airedOn: "",
// 		userRate: {
// 			status: "",
// 			episodes: 0,
// 			score: 0,
// 		},
// 	};

// 	if (anime._type === "IAnime") {
// 		const _anime = anime as IAnime;
// 		animeCard = {
// 			id: _anime.id,
// 			poster: _anime.poster.mainUrl,
// 			name: _anime.name,
// 			russian: _anime.russian,
// 			episodes: _anime.episodes,
// 			score: _anime.score,
// 			kind: _anime.kind,
// 			airedOn: String(_anime.airedOn.year),
// 			userRate: {
// 				status: _anime.userRate?.status,
// 				episodes: _anime.userRate?.episodes,
// 				score: _anime.userRate?.score,
// 			},
// 		} as IAnimeCard;
// 	}

// 	if (anime._type === "IUserRate") {
// 		// console.log("IUserRate", anime);

// 		const _anime = anime as IUserRate;
// 		animeCard = {
// 			id: _anime.anime.id,
// 			poster: _anime.anime.poster?.main2xUrl || "/404.png",
// 			name: _anime.anime.name,
// 			russian: _anime.anime.russian,
// 			episodes: _anime.anime.episodes,
// 			score: _anime.anime.score,
// 			kind: _anime.anime.kind,
// 			airedOn: String(_anime.anime.airedOn.year),
// 			userRate: {
// 				status: _anime.status,
// 				episodes: _anime.episodes,
// 				score: _anime.score,
// 			},
// 		} as IAnimeCard;
// 	}

// 	if (anime._type === "ISearchAnime") {
// 		// console.log("ISearchAnime", anime);

// 		const _anime = anime as ISearchAnime;
// 		animeCard = {
// 			id: _anime.id,
// 			poster: _anime.poster.main2xUrl,
// 			name: _anime.name,
// 			russian: _anime.russian,
// 			episodes: _anime.episodes,
// 			score: _anime.score,
// 			kind: _anime.kind,
// 			airedOn: String(_anime.airedOn.year),
// 			userRate: {
// 				status: _anime.userRate?.status,
// 				episodes: _anime.userRate?.episodes,
// 				score: _anime.userRate?.score,
// 			},
// 		} as IAnimeCard;
// 	}

// 	// TODO add similar anime check

// 	return animeCard;
// };
