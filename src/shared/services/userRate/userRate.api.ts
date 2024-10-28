import { api } from "@/shared/services/api.ts";
import { graphql } from "@/shared/services/graphql.ts";
import { GET_USER_RATES } from "@/shared/services/userRate/userRate.graphql.ts";
import {
	IUserRateAdd,
	IUserRate,
	IUserRatesQuery,
	IUserRateUpdate,
	IUserRateDelete,
} from "@/shared/services/userRate/userRate.interface.ts";

export const userRateApi = {
	getUserRates: async () => {
		const userRates = await graphql<IUserRatesQuery>(GET_USER_RATES);
		return userRates.userRates;
	},
	addUserRate: async ({ animeId, status = "planned" }: IUserRateAdd) => {
		const response = await api.post<IUserRate>("v2/user_rates", {
			user_rate: {
				target_type: "Anime",
				target_id: animeId,
				user_id: localStorage.getItem("user_id"),
				status: status,
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
