import { api } from "@/shared/services/api.ts";
import { graphql } from "@/shared/services/graphql.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";
import { useQuery } from "@tanstack/react-query";

const GET_USER_RATES = `
	{
		userRates(
			page: 1
			limit: 30
			targetType: Anime
			order: { field: updated_at, order: desc }
		) {
			id
			anime {
				id
				name
				poster {
					main2xUrl
				}
			}
			episodes
			status
			createdAt
		}
	}
`;

export interface IUserRate {
	id: string;
	anime: {
		id: string;
		name: string;
		poster: {
			main2xUrl: string;
		};
	};
	episodes: number;
	status: string;
	createdAt: string;
}

interface IResponse {
	userRates: IUserRate[];
}

export const useFetchUserRates = () => {
	const {
		isLoading,
		data,
		error,
		refetch: refetchUserRates,
	} = useQuery<IResponse>({
		queryKey: ["userRates"],
		queryFn: () => graphql<IResponse>(GET_USER_RATES),
	});

	const addToUserRate = async (
		animeId: string,
		status: IUserRateAnimeStatus,
	) => {
		const response = await api.post("v2/user_rates", {
			user_rate: {
				target_type: "Anime",
				target_id: animeId,
				user_id: localStorage.getItem("user_id"),
				status: status,
			},
		});
		const { data } = response;
		console.log(data);
	};

	console.log(data);
	if (!data?.userRates)
		return { data, isLoading: isLoading, error: error, refetchUserRates };
	return {
		userRates: data.userRates,
		addToUserRate,
		isLoading: isLoading,
		error: error,
		refetchUserRates,
	};
};
