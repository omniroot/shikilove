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
} from "./userRate.types.ts";

interface IGetUserRates {
	userId?: number;
	page?: number;
	limit?: number;
	status?: IUserRateStatus;
}

export const userRateApi = {
	deleteUserRate: ({ userRateId }: IUserRateDelete) => {
		return api.delete<IUserRate>(`v2/user_rates/${userRateId}`);
	},
};
