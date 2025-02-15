import { api } from "@/shared/services/api.ts";
import { IUserRate } from "@pages/user/_api/userRate/getUserRates/getUserRates.types.ts";
import { IUserRateStatus } from "@pages/user/_api/userRate/userRate.types.ts";
import { useMutation } from "@tanstack/react-query";

interface IUpdateUserRate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateStatus;
}

interface IUseUpdateUserRate {
	userRateId: number;
	episodes?: number;
	status?: IUserRateStatus;
}

export const updateUserRate = ({ userRateId, episodes, status }: IUpdateUserRate) => {
	return api.patch<IUserRate>(`v2/user_rates/${userRateId}`, {
		episodes,
		status,
	});
};

export const useUpdateUserRate = ({ userRateId, episodes, status }: IUseUpdateUserRate) => {
	return useMutation({
		mutationKey: ["updateUserRate", userRateId],
		mutationFn: async () => {
			const response = await updateUserRate({ userRateId, episodes, status });
			return response.data;
		},
	});
};
