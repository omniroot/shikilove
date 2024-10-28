import { graphql } from "@/shared/services/graphql";
import { useQuery } from "@tanstack/react-query";

const GET_ANIME_BY_ID = `
	query ($ids: String) {
		animes(ids: $ids, limit: 1, kind: "!special") {
			id
			name
			russian
			kind
			rating
			score
			status
			episodes
			episodesAired
			duration
			airedOn {
				year
				month
				day
				date
			}
			releasedOn {
				year
				month
				day
				date
			}
			url
			poster {
				id
				originalUrl
				mainUrl
			}
			licensors
			createdAt
			updatedAt

			genres {
				id
				name
				russian
				kind
			}
			studios {
				id
				name
				imageUrl
			}

			related {
				id
				anime {
					id
					name
				}
				manga {
					id
					name
				}
				relationKind
				relationText
			}

			# videos { id url name kind playerUrl imageUrl }
			screenshots {
				id
				originalUrl
				x166Url
				x332Url
			}

			scoresStats {
				score
				count
			}
			statusesStats {
				status
				count
			}

			description

			userRate {
				id
				status
				score
				text
				chapters
				episodes
			}
		}
	}
`;

interface IResponse {
	animes: {
		id: string;
		name: string;
		russian: string;
		kind: string;
		rating: string;
		score: number;
		status: string;
		episodes: number;
		episodesAired: number;
		duration: number;
		airedOn: {
			year: number;
			month: number;
			day: number;
			date: string;
		};
		releasedOn: {
			year: number;
			month: number;
			day: number;
			date: string;
		};
		url: string;
		poster: {
			id: string;
			originalUrl: string;
			mainUrl: string;
		};
		licensors: string[];
		createdAt: string;
		updatedAt: string;
		genres: {
			id: string;
			name: string;
			russian: string;
			kind: string;
		}[];
		studios: {
			id: string;
			name: string;
			imageUrl: string;
		}[];
		related: {
			id: string;
			anime: {
				id: string;
				name: string;
			};
			manga: {
				id: string;
				name: string;
			};
			relationKind: string;
			relationText: string;
		}[];
		videos: {
			id: string;
			url: string;
			name: string;
			kind: string;
			playerUrl: string;
			imageUrl: string;
		}[];
		screenshots: {
			id: string;
			originalUrl: string;
			x166Url: string;
			x332Url: string;
		}[];
		scoresStats: {
			score: number;
			count: number;
		}[];
		statusesStats: {
			status: string;
			count: number;
		}[];
		description: string;
		userRate: {
			id: number;
			status: string;
			score: number;
			text: string | null;
			chapters: number;
			episodes: number;
		};
	}[];
}

export const useFetchAnimeById = (id: string) => {
	const { isLoading, data, error, refetch } = useQuery<IResponse>({
		queryKey: ["animeById", id],
		queryFn: () =>
			graphql<IResponse>(GET_ANIME_BY_ID, {
				ids: id,
			}),
	});

	// useEffect(() => {
	// 	console.log("REfetching anime by id, ", id);
	// 	refetch();
	// }, [id]);

	if (!data?.animes)
		return { data, isLoading, error: error, refetchAnime: refetch };

	console.log("returned fetchanime by id, ", data);

	return {
		anime: data.animes[0],
		error: error,
		isLoading,
		refetchAnime: refetch,
	};
};
