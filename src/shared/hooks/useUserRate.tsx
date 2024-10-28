import { useMutation, useQuery } from "@tanstack/react-query";
import {
	IUserRateAdd,
	IUserRate,
	IUserRates,
	IUserRateUpdate,
	IUserRateDelete,
} from "@/shared/services/userRate/userRate.interface.ts";
import { userRateApi } from "@/shared/services/userRate/userRate.api.ts";

export const useUserRate = (userRateId?: number) => {
	// const queryClient = useQueryClient();
	const {
		isLoading: isUserRatesLoading,
		data: userRates,
		error: userRatesError,
	} = useQuery<IUserRates>({
		queryKey: ["userRates"],
		queryFn: () => userRateApi.getUserRates(),
	});

	const { mutate: addUserRate } = useMutation<IUserRate, unknown, IUserRateAdd>({
		mutationKey: ["addUserRate", userRateId],
		mutationFn: (variables) => userRateApi.addUserRate(variables),
	});

	const { mutate: updateUserRate } = useMutation<IUserRate, unknown, IUserRateUpdate>({
		mutationKey: ["updateUserRate", userRateId],
		mutationFn: (variables) => userRateApi.updateUserRate(variables),
	});

	const { mutate: deleteUserRate } = useMutation<IUserRate, unknown, IUserRateDelete>({
		mutationKey: ["deleteToUserRate", userRateId],
		mutationFn: (variables) => userRateApi.deleteUserRate(variables),
	});

	return {
		isUserRatesLoading,
		userRates,
		userRatesError,
		addUserRate,
		updateUserRate,
		deleteUserRate,
	};

	// const addToUserRate = useMutation<IResponse, unknown, IAddToUserRate>({
	// 	mutationKey: ["addToUserRate"],
	// 	mutationFn: async ({ animeId, status }) => {
	// 		const response = await api.post("v2/user_rates", {
	// 			user_rate: {
	// 				target_type: "Anime",
	// 				target_id: animeId,
	// 				user_id: localStorage.getItem("user_id"),
	// 				status: status,
	// 			},
	// 		});
	// 		const { data } = response;
	// 		console.log(data);
	// 		return data;
	// 	},
	// 	onSuccess: (_, { animeId }) => {
	// 		queryClient.invalidateQueries({ queryKey: ["userRates"] });
	// 		queryClient.invalidateQueries({ queryKey: ["animeById", animeId] });
	// 	},
	// });
};
