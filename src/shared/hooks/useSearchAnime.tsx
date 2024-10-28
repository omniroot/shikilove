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

interface IResponse {
	animes: {
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
	}[];
}

export const useSearchAnime = () => {
	const [name, setName] = useState("naruto");
	const { isLoading, data, error } = useQuery<IResponse>({
		queryKey: ["searchAnime", name],
		queryFn: () => graphql<IResponse>(GET_SEARCH_ANIME, { name }),
	});

	if (isLoading) {
		return { isLoading, error: error };
	}
	if (error) {
		return { isLoading, error: error };
	}

	if (!data) return { isLoading, error: error };
	const searchAnime = (name = "naruto") => {
		setName(name);
	};

	return { searchAnime, isLoading, error: error, animes: data.animes };
};
