import { api } from "@/shared/services/api.ts";
import { IUserRate } from "@pages/user/_api/userRate/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types.ts";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface IAddUserRate {
	userId: number;
	animeId?: number;
	episodes?: string;
	status?: IUserRateStatus;
	config?: AxiosRequestConfig;
}

interface IUseAddUserRate {
	userId?: number;
	animeId?: number;
	episodes?: string;
	status?: IUserRateStatus;
	config?: UseMutationOptions<IUserRate>;
}

export const addUserRate = ({
	userId,
	animeId,
	episodes = "1",
	status = "planned",
	config,
}: IAddUserRate) => {
	return api.post<IUserRate>("v2/user_rates", {
		user_rate: {
			target_type: "Anime",
			target_id: animeId,
			user_id: userId,
			status: status,
			episodes: episodes,
		},
		config,
	});
};

export const useAddUserRate = ({
	userId,
	animeId,
	episodes,
	status = "watching",
	config,
}: IUseAddUserRate = {}) => {
	if (!userId) {
		userId = Number(localStorage.getItem("user_id"));
	}
	return useMutation<IUserRate>({
		mutationKey: ["addUserRate", userId],
		mutationFn: async () => {
			const response = await addUserRate({
				userId,
				animeId,
				episodes,
				status,
			});
			return response.data;
		},
		...config,
	});
};
