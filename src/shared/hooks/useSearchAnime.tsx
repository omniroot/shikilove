import { graphql } from "@/shared/services/graphql.ts";
import { IType } from "@/shared/types/_type.interface.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const GET_SEARCH_ANIME = `
	query ($name: String) {
		animes(search: $name, limit: 15, kind: "!special") {
			id
			name
			russian
      episodes
      episodesAired
			score
			kind
			releasedOn {
      	year
      }
			airedOn {
				year
			}
			poster {
				main2xUrl
			}
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

export interface ISearchAnime {
	_type: IType;
	id: string;
	name: string;
	russian: string;
	episodes: number;
	episodesAired: number;
	score: number;
	kind: string;
	releasedOn: {
		year: number;
	};
	airedOn: {
		year: number;
	};

	poster: {
		main2xUrl: string;
	};
	userRate: {
		status: string;
		score: number;
		text: string | null;
		chapters: number;
		episodes: number;
	} | null;
}

interface IResponse {
	animes: ISearchAnime[];
}

export const useSearchAnime = (defaultSearch: string) => {
	const [searchAnimesQuery, setSearchAnimesQuery] = useState(defaultSearch);
	const {
		refetch: refetchSearchAnimes,
		isFetching: searchAnimesIsLoading,
		data: searchAnimes,
		error: searchAnimesError,
	} = useQuery<ISearchAnime[]>({
		queryKey: ["searchAnime"],
		enabled: false,
		queryFn: async () => {
			let { animes } = await graphql<IResponse>(GET_SEARCH_ANIME, { name: searchAnimesQuery });
			animes = animes.map((anime) => ({
				...anime,
				_type: "ISearchAnime",
			}));
			console.log("searched", animes);

			return animes;
		},
	});

	console.log("Default search query", defaultSearch);

	return {
		refetchSearchAnimes,
		searchAnimesIsLoading,
		searchAnimes,
		searchAnimesError,
		searchAnimesQuery,
		setSearchAnimesQuery,
	};
};
