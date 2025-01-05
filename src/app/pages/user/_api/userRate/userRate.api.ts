import { api } from "@/shared/services/api.ts";
import { graphql } from "@/shared/services/graphql.ts";

import { GET_USER_RATES } from "./userRate.graphql.ts";
import {
	IUserRate,
	IUserRateAdd,
	IUserRateDelete,
	IUserRatesResponse,
	IUserRateStatus,
	IUserRateUpdate,
} from "./userRate.interface.ts";

interface IGetUserRates {
	userId?: number;
	page?: number;
	limit?: number;
	status?: IUserRateStatus;
}

export const userRateApi = {
	getUserRates: ({ userId, page = 1, limit = 30, status = "watching" }: IGetUserRates) => {
		return graphql<IUserRatesResponse>(GET_USER_RATES, {
			page,
			limit,
			status,
			userId,
		});
	},
	addUserRate: ({ userId, animeId, episodes = "1", status = "planned" }: IUserRateAdd) => {
		return api.post<IUserRate>("v2/user_rates", {
			user_rate: {
				target_type: "Anime",
				target_id: animeId,
				user_id: userId,
				status: status,
				episodes: episodes,
			},
		});
	},
	updateUserRate: ({ userRateId, episodes, status }: IUserRateUpdate) => {
		return api.patch<IUserRate>(`v2/user_rates/${userRateId}`, {
			episodes,
			status,
		});
	},

	deleteUserRate: ({ userRateId }: IUserRateDelete) => {
		return api.delete<IUserRate>(`v2/user_rates/${userRateId}`);
	},
};
