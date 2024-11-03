import { graphql } from "@/shared/services/graphql.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const GET_SEARCH_ANIME = `
	query ($name: String) {
		animes(search: $name, limit: 15, kind: "!special") {
			id
			name
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

interface IAnime {
	id: string;
	name: string;
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
	animes: IAnime[];
}

export const useSearchAnime = () => {
	const [searchAnimesQuery, setSearchAnimesQuery] = useState("");
	const {
		refetch: refetchSearchAnimes,
		isLoading: searchAnimesIsLoading,
		data: searchAnimes,
		error: searchAnimesError,
	} = useQuery<IAnime[]>({
		queryKey: ["searchAnime"],
		enabled: false,
		queryFn: async () => {
			const { animes } = await graphql<IResponse>(GET_SEARCH_ANIME, { name: searchAnimesQuery });
			return animes;
		},
	});

	return {
		refetchSearchAnimes,
		searchAnimesIsLoading,
		searchAnimes,
		searchAnimesError,
		setSearchAnimesQuery,
	};
};
