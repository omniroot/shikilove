import { api } from "@/shared/services/api.ts";
import { graphql } from "@/shared/services/graphql.ts";
import { GET_USER_RATES } from "@/shared/services/userRate/userRate.graphql.ts";
import {
	IUserRateAdd,
	IUserRate,
	IUserRatesResponse,
	IUserRateUpdate,
	IUserRateDelete,
} from "@/shared/services/userRate/userRate.interface.ts";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

interface IGetUserRates {
	page?: number;
	limit?: number;
	status?: IUserRateAnimeStatus;
}

export const userRateApi = {
	getUserRates: async ({ page = 1, limit = 30, status = "watching" }: IGetUserRates) => {
		const userRates = await graphql<IUserRatesResponse>(GET_USER_RATES, {
			page,
			limit,
			status,
		});
		userRates.userRates = userRates.userRates.map((rate) => ({
			...rate,
			_type: "IUserRate",
		}));
		return userRates.userRates;
	},
	addUserRate: async ({ animeId, episodes = "1", status = "planned" }: IUserRateAdd) => {
		const response = await api.post<IUserRate>("v2/user_rates", {
			user_rate: {
				target_type: "Anime",
				target_id: animeId,
				user_id: localStorage.getItem("user_id"),
				status: status,
				episodes: episodes,
			},
		});
		const { data } = response;
		return data;
	},
	updateUserRate: async ({ userRateId, episodes, status }: IUserRateUpdate) => {
		const response = await api.patch<IUserRate>(`v2/user_rates/${userRateId}`, {
			episodes,
			status,
		});
		const { data } = response;
		return data;
	},

	deleteUserRate: async ({ userRateId }: IUserRateDelete) => {
		const response = await api.delete<IUserRate>(`v2/user_rates/${userRateId}`);
		const { data } = response;
		return data;
	},
};
