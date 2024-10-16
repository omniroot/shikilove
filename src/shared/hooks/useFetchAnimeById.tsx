import { gql, useQuery } from "@apollo/client";

const GET_ANIME_BY_ID = gql`
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
			status: string;
			score: number;
			text: string | null;
			chapters: number;
			episodes: number;
		};
	}[];
}

export const useFetchAnimeById = (id: string) => {
	const { loading, data, error } = useQuery<IResponse>(GET_ANIME_BY_ID, {
		variables: {
			ids: id,
		},
	});

	if (!data?.animes) return { data, loading: loading, error: error };

	return { anime: data.animes[0], loading: loading, error: error };
};
