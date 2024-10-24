import { api } from "@/shared/services/api.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";
import { gql, useQuery } from "@apollo/client";

const GET_USER_RATES = gql`
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
	const { loading, data, error } = useQuery<IResponse>(GET_USER_RATES);

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
	if (!data?.userRates) return { data, loading: loading, error: error };
	return {
		userRates: data.userRates,
		addToUserRate,
		loading: loading,
		error: error,
	};
};
